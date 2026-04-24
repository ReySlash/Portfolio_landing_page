import { useState } from "react";
import logo from "../assets/logoMark.png";

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
  const NavLinks = ["Home", "Projects", "About", "Contact"];
  const [active, setActive] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (index: number) => {
    setActive(index);
    setIsMenuOpen(false);
  };

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
            {NavLinks.map((link, index) => (
              <li key={link}>
                <a
                  className={
                    active === index
                      ? "text-red-500"
                      : "text-white transition-colors duration-300 hover:text-red-500"
                  }
                  href={`#${link.toLowerCase()}`}
                  onClick={() => handleLinkClick(index)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
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
        onClick={() => setIsMenuOpen(false)}
      />

      <aside
        className={`fixed top-0 right-0 z-40 flex h-screen w-72 max-w-[82vw] flex-col bg-black/95 px-6 py-6 shadow-2xl backdrop-blur transition-transform duration-300 ease-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="mb-10 flex items-center justify-between">
          <img className="w-20" src={logo} alt="Logo" />
          <button
            type="button"
            className="flex items-center justify-center rounded-full bg-gray-900 p-3 text-white transition-colors duration-300 hover:cursor-pointer hover:bg-gray-700"
            aria-label="Close navigation menu"
            onClick={() => setIsMenuOpen(false)}
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="flex-1">
          <ul className="flex flex-col gap-6 text-lg uppercase">
            {NavLinks.map((link, index) => (
              <li key={link}>
                <a
                  className={
                    active === index
                      ? "block text-red-500"
                      : "block text-white transition-colors duration-300 hover:text-red-500"
                  }
                  href={`#${link.toLowerCase()}`}
                  onClick={() => handleLinkClick(index)}
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
