import { MotionConfig } from "motion/react";
import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Credenciales from "../components/certifaciones";
import Habilidades from "../components/Habilidades";
import Footer from "../components/Footer";
import "../App.css";

function Main() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Credenciales />
        <Habilidades />
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default Main;
