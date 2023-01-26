import React from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Portfolio } from "./components/Portfolio";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { About } from "./components/About";

export default function App() {
  return(
    <main>
      <NavBar />
      <Banner />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  )
}