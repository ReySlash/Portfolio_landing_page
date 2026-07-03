import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Projects from "@/components/Projects";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://reyslash.com/#person",
      name: "Reynaldo Carmenate Arias",
      url: "https://reyslash.com",
      jobTitle: "Full-Stack Developer",
      sameAs: [
        "https://github.com/ReySlash",
        "https://www.linkedin.com/in/reynaldo-carmenate-arias-03b5102b5/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://reyslash.com/#website",
      url: "https://reyslash.com",
      name: "ReySlash Portfolio",
      description:
        "Portfolio of Reynaldo Carmenate Arias, a full-stack developer building modern web applications with practical UX and clean architecture.",
      publisher: {
        "@id": "https://reyslash.com/#person",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto flex flex-col gap-10 overflow-x-clip px-2 pt-16">
        <NavBar />
        <main className="flex flex-col gap-10">
          <Hero />
          <Projects />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
