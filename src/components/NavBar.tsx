import { useEffect, useRef, useState } from "react";
import logo from "../assets/logoMark.png";

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
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link))
      .filter((section): section is HTMLElement => section !== null);

    const updateActiveSection = () => {
      const navbar = document.getElementById("navbar");
      const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;
      const focusLine = navbarHeight + 24;

      const nearPageBottom =
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;

      if (nearPageBottom) {
        setActiveSection(sections.at(-1)?.id ?? "contact");
        return;
      }

      let currentSection = sections[0]?.id ?? "home";

      sections.forEach((section) => {
        const { top } = section.getBoundingClientRect();

        if (top <= focusLine) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    const observer = new IntersectionObserver(
      () => {
        updateActiveSection();
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );
    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const closeMenu = () => {
    menuButtonRef.current?.focus();
    setIsMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeMenu();
  };

  useEffect(() => {
    if (isMenuOpen) {
      closeButtonRef.current?.focus();
    }
  }, [isMenuOpen]);

  return (
    <header
      id="navbar"
      className="sticky top-0 z-20 w-full px-4 py-1 sm:px-6 lg:px-10 bg-black/50 backdrop-blur-sm"
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

        <button
          ref={menuButtonRef}
          type="button"
          className="flex max-w-20 items-center justify-center rounded-full bg-gray-900 p-3 text-white transition-colors duration-300 hover:cursor-pointer hover:bg-gray-700 md:hidden"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-30 bg-black/45 transition-opacity duration-300 md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
        onClick={closeMenu}
      />

      <aside
        className={`fixed top-0 right-0 z-40 flex h-screen w-72 max-w-[82vw] flex-col bg-black/95 px-6 py-6 shadow-2xl backdrop-blur transition-transform duration-300 ease-out md:hidden ${
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
    </header>
  );
}

export default NavBar;
