import { useEffect, useRef, useState } from "react";
import logo from "../assets/logoMark.png";

const navLinks = ["home", "projects", "about", "contact"];

function focusWithoutScroll(element: HTMLElement | null) {
  if (!element) {
    return;
  }

  try {
    element.focus({ preventScroll: true });
  } catch {
    element.focus();
  }
}

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
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    let observer: IntersectionObserver | null = null;
    let visibleSections = new Map<string, IntersectionObserverEntry>();

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
    };

    createObserver();
    window.addEventListener("resize", createObserver);

    return () => {
      observer?.disconnect();
      window.removeEventListener("resize", createObserver);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
    window.requestAnimationFrame(() => {
      focusWithoutScroll(menuButtonRef.current);
    });
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  useEffect(() => {
    if (isMenuOpen) {
      window.requestAnimationFrame(() => {
        focusWithoutScroll(closeButtonRef.current);
      });
    }
  }, [isMenuOpen]);

  return (
    <>
      <header
        id="navbar"
        className="fixed inset-x-0 top-0 z-50 w-full border-b border-white/5 bg-black/90 px-4 py-1 sm:px-6 lg:px-10"
      >
        <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between">
          <a href="#home" className="inline shrink-0">
            <img className="w-8" src={logo} alt="Logo" />
          </a>
          <nav className="absolute left-1/2 hidden -translate-x-1/2 md:block">
            <ul className="flex flex-row items-center gap-6 uppercase lg:gap-12">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    className={
                      activeSection === link
                        ? "text-red-500"
                        : "text-white transition-colors duration-300 hover:text-red-500"
                    }
                    href={`#${link}`}
                    onClick={handleLinkClick}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {isMenuOpen ? (
            <div className="h-12 w-12 md:hidden" aria-hidden="true" />
          ) : (
            <button
              ref={menuButtonRef}
              type="button"
              className="flex max-w-20 items-center justify-center rounded-full bg-gray-900 p-3 text-white transition-colors duration-300 hover:cursor-pointer hover:bg-gray-700 md:hidden"
              aria-label="Open navigation menu"
              aria-expanded={false}
              onClick={() => setIsMenuOpen(true)}
            >
              <MenuIcon />
            </button>
          )}
        </div>
      </header>

      <div
        className={`fixed inset-0 z-60 overflow-hidden md:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div
          className={`absolute inset-0 bg-black/45 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />

        <aside
          className={`absolute top-0 right-0 flex h-dvh w-72 max-w-[82vw] transform-gpu flex-col bg-black px-6 py-6 shadow-2xl transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          aria-hidden={!isMenuOpen}
          inert={!isMenuOpen}
        >
          <div className="mb-10 flex items-center justify-between">
            <img className="w-20" src={logo} alt="Logo" />
            <button
              ref={closeButtonRef}
              type="button"
              className="flex items-center justify-center rounded-full bg-gray-900 p-3 text-white transition-colors duration-300 hover:cursor-pointer hover:bg-gray-700"
              aria-label="Close navigation menu"
              onClick={closeMenu}
            >
              <CloseIcon />
            </button>
          </div>

          <nav className="flex-1">
            <ul className="flex flex-col gap-6 text-lg uppercase">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    className={
                      activeSection === link
                        ? "block text-red-500"
                        : "block text-white transition-colors duration-300 hover:text-red-500"
                    }
                    href={`#${link}`}
                    onClick={handleLinkClick}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}

export default NavBar;
