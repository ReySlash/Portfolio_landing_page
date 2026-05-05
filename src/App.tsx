import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="container px-2 mx-auto flex flex-col overflow-x-clip pt-16 gap-10">
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
