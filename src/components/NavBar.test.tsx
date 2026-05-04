import { fireEvent, render, screen } from "@testing-library/react";
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

  it("opens and closes the mobile menu", () => {
    renderNavBar();

    const openButton = screen.getByRole("button", {
      name: /open navigation menu/i,
    });

    fireEvent.click(openButton);

    expect(
      screen.getByRole("button", { name: /close navigation menu/i }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getAllByRole("link", { name: /^about$/i })[1]);

    expect(
      screen.getByRole("button", { name: /open navigation menu/i }),
    ).toBeInTheDocument();
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

    const [desktopContactLink, mobileContactLink] = screen.getAllByRole("link", {
      name: /^contact$/i,
    });

    expect(desktopContactLink).toHaveClass("text-red-500");
    expect(mobileContactLink).toHaveClass("text-red-500");
  });
});
