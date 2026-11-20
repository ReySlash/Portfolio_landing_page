import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import NavBar from "./NavBar";

function renderNavBar() {
  return render(
    <>
      <NavBar />
      <section id="home">Home</section>
      <section id="projects">Projects</section>
      <section id="about">About</section>
      <section id="contact">Contact</section>
    </>,
  );
}

describe("NavBar", () => {
  it("renders all navigation links", () => {
    renderNavBar();

    expect(screen.getAllByRole("link", { name: /home/i })[0]).toHaveAttribute(
      "href",
      "#home",
    );
    expect(
      screen.getAllByRole("link", { name: /projects/i })[0],
    ).toHaveAttribute("href", "#projects");
    expect(screen.getAllByRole("link", { name: /about/i })[0]).toHaveAttribute(
      "href",
      "#about",
    );
    expect(
      screen.getAllByRole("link", { name: /contact/i })[0],
    ).toHaveAttribute("href", "#contact");
  });

  it("opens and closes the mobile menu", async () => {
    renderNavBar();

    const openButton = screen.getByRole("button", {
      name: /open navigation menu/i,
    });

    fireEvent.click(openButton);

    expect(
      screen.getByRole("button", { name: /close navigation menu/i }),
    ).toBeInTheDocument();

    const aboutLinks = document.querySelectorAll<HTMLAnchorElement>(
      'a[href="#about"]',
    );
    const mobileAboutLink = aboutLinks[aboutLinks.length - 1];

    expect(mobileAboutLink).toBeInTheDocument();
    fireEvent.click(mobileAboutLink!);

    await waitFor(() => {
      expect(
        document.querySelector('button[aria-label="Open navigation menu"]'),
      ).toBeInTheDocument();
    });
  });

  it("highlights contact when scrolled to the bottom of the page", () => {
    renderNavBar();

    fireEvent.click(
      screen.getByRole("button", { name: /open navigation menu/i }),
    );

    Object.defineProperty(window, "innerHeight", {
      configurable: true,
      value: 800,
    });
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 1200,
    });
    Object.defineProperty(document.documentElement, "scrollHeight", {
      configurable: true,
      value: 2000,
    });

    fireEvent.scroll(window);

    const contactLinks = document.querySelectorAll<HTMLAnchorElement>(
      'a[href="#contact"]',
    );
    const [desktopContactLink, mobileContactLink] = contactLinks;

    expect(contactLinks).toHaveLength(2);
    expect(desktopContactLink).toHaveAttribute("data-active");
    expect(mobileContactLink).toHaveClass("text-red-500");
  });
});
