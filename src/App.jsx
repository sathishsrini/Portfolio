import React from "react"
import tailwindConfig from "../tailwind.config"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Technologies from "./components/Technologies"
import Projects from "./components/Projects"
import Courses from "./components/course"
import Contact from "./components/contact"
import StarryBackground from "./components/Stars"
import CustomCursor from "./components/CustomCursor"

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-[radial-gradient(125%_125%_at_50%_10%,#1a1a1a_40%,#63e_100%)]">
          <StarryBackground />
          < CustomCursor />
        </div>
      </div>

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
  )
}

export default App
