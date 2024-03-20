import React from "react";
import NavBar from "./sections/Navbar"
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Email from "./sections/Email";
export default function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Email />
    </main>
  );
}