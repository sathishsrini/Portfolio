import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-black-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Combined Backgrounds */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Courses />
        <Contact />
      </div>
    </div>
  );
};

export default App;
