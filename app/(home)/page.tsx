import React from "react"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Skills from "./components/Skills"
import Projects from "./components/ui/Projects"
import { TracingBeam } from "./components/ui/tracing-beam"

export default function page() {
  return (
      <TracingBeam>
      <div className="min-h-[280vh] bg-black overflow-hidden">
      <div className="h-screen dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.05] relative">
      
        <div className="max-w-7xl mx-auto p-5 ">
          <Navbar/>
          <HeroSection/>
        </div>
        <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 xl:bottom-0 w-full">
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-5 mt-20">
        <Skills/>
        <Projects/>
        <Footer/>  
      </div>
    </div>
    </TracingBeam>
  
    
  )
};

