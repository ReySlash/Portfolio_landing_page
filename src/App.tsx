import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="overflow-x-clip pt-16 px-2 md:px-4 lg:px-20">
      <NavBar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
