import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Courses from "./components/Courses";
import Contact from "./components/contact";

const App = () => {
  return (
    <div className="relative overflow-x-hidden text-white antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Global Background - Applies to All Components */}
      <div className="fixed inset-0 z-[-2] h-full w-full bg-[#191818] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      {/* Main Content - Ensures Consistent Styling */}
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
