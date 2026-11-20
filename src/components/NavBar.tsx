"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "cn";
import logo from "../assets/logoMark.png";
import { Button } from "./ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

const navLinks = ["home", "projects", "about", "contact"];

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    let observer: IntersectionObserver | null = null;
    let visibleSections = new Map<string, IntersectionObserverEntry>();
    const lastSectionId = navLinks.at(-1);

    const setSectionFromViewport = () => {
      if (!lastSectionId) {
        return;
      }

      const viewportBottom = window.innerHeight + window.scrollY;
      const documentBottom = document.documentElement.scrollHeight;

      if (viewportBottom >= documentBottom - 4) {
        setActiveSection((currentSection) =>
          currentSection === lastSectionId ? currentSection : lastSectionId,
        );
      }
    };

    const createObserver = () => {
      const navbarHeight =
        document.getElementById("navbar")?.getBoundingClientRect().height ?? 0;

      observer?.disconnect();
      visibleSections = new Map<string, IntersectionObserverEntry>();

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const sectionId = (entry.target as HTMLElement).id;

            if (entry.isIntersecting) {
              visibleSections.set(sectionId, entry);
              return;
            }

            visibleSections.delete(sectionId);
          });

          const nextSection = [...visibleSections.values()]
            .sort(
              (entryA, entryB) =>
                entryA.boundingClientRect.top - entryB.boundingClientRect.top,
            )
            .at(0)?.target.id;

          if (nextSection) {
            setActiveSection((currentSection) =>
              currentSection === nextSection ? currentSection : nextSection,
            );
          }
        },
        {
          rootMargin: `-${navbarHeight + 24}px 0px -55% 0px`,
          threshold: [0, 0.2, 0.5, 1],
        },
      );

      sections.forEach((section) => observer?.observe(section));
      setSectionFromViewport();
    };

    createObserver();
    window.addEventListener("resize", createObserver);
    window.addEventListener("scroll", setSectionFromViewport, {
      passive: true,
    });

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", createObserver);
      window.removeEventListener("scroll", setSectionFromViewport);
    };
  }, []);

  return (
    <>
      <header
        id="navbar"
        className="fixed inset-x-0 top-0 z-50 w-full border-b border-white/5 bg-black/90 px-4 py-1 sm:px-6 lg:px-10"
      >
        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between">
          <a href="#home" className="inline shrink-0">
            <Image className="w-8" src={logo} alt="Logo" priority />
          </a>
          <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block">
            <NavigationMenu className="max-w-none flex-none">
              <NavigationMenuList className="gap-4 lg:gap-8">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link}>
                  <NavigationMenuLink
                    active={activeSection === link}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "h-auto rounded-none border-b-2 border-transparent bg-transparent px-2 py-2 font-normal uppercase text-white hover:bg-transparent hover:text-red-500 focus:bg-transparent focus:text-red-500",
                      activeSection === link && "border-red-500 text-red-500",
                    )}
                    asChild
                  >
                    <a href={`#${link}`}>{link}</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <Drawer
            direction="right"
            open={isMenuOpen}
            onOpenChange={setIsMenuOpen}
          >
            <DrawerTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-gray-900 hover:bg-gray-700 md:hidden"
                aria-label="Open navigation menu"
              >
                <MenuIcon />
              </Button>
            </DrawerTrigger>
            <DrawerContent className="border-gray-800 bg-black text-white">
              <DrawerHeader className="flex-row items-center justify-between border-b border-gray-800">
                <Image className="w-20" src={logo} alt="Logo" priority />
                <DrawerTitle className="sr-only">Navigation menu</DrawerTitle>
                <DrawerClose asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-gray-900 hover:bg-gray-700"
                    aria-label="Close navigation menu"
                  >
                    <CloseIcon />
                  </Button>
                </DrawerClose>
              </DrawerHeader>

              <nav className="flex-1 px-6 py-8">
                <ul className="flex flex-col gap-6 text-lg uppercase">
                  {navLinks.map((link) => (
                    <li key={link}>
                      <a
                        className={
                          activeSection === link
                            ? "block text-red-500"
                            : "block transition-colors duration-300 hover:text-red-500"
                        }
                        href={`#${link}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <DrawerFooter className="border-t border-gray-800">
                <DrawerClose asChild>
                  <Button variant="outline" className="w-full">
                    Close menu
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </header>
    </>
  );
}

export default NavBar;
