//@ts-nocheck
import { Icon } from "@iconify/react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "./utils";
import SplitText from "../components/SplitText";
import { ExpandableCardDemo } from "../components/spotify";
import Footer from "../components/Footer";

import { FlipWords } from "../components/FlipWords";
import { Terminal } from "../components/terminal";
import Overview from "../components/overview";
import AnimatedList from "../components/certifaciones";
import Navbar from "../components/navbar";
import Habilidades from "../components/Habilidades";
import "../App.css"
import Experience from "../components/Experience";


function Main() {
  const divProject = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  
  const words = ["innovative", "efficient", "scalable", "modern"];

  const dockItems = [
    {
      title: "GitHub",
      icon: "tabler:brand-github",
      href: "https://github.com/CesarMartinez7",
    },
    {
      title: "LinkedIn",
      icon: "tabler:brand-linkedin",
      href: "https://www.linkedin.com/in/cesar-luis-martinez-castro-383943332/",
    },
    {
      title: "CV",
      icon: "tabler:file-text",
      href: "./CesarMartinez_Navy.pdf",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      ref={containerRef}
      className="relative bg-black min-h-screen overflow-hidden"
    >
    

    
  <section className="relative min-h-screen flex items-center justify-center px-4 z-40 overflow-hidden">
 
      {/* Grid sutil de fondo */}
      <div
        className="absolute inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />
 
      {/* Glow emerald central difuso */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] z-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.05) 0%, transparent 65%)" }}
      />
 
      <div className="max-w-4xl mx-auto z-10 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
 
        {/* Left — texto */}
        <div className="flex flex-col gap-7 md:pt-8 text-center md:text-left">
 
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-zinc-500 uppercase tracking-[0.2em]"
          >
            Frontend Developer · Barranquilla, Colombia
          </motion.p>
 
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
              César Martínez
            </span>
          </motion.h1>
 
          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-md"
          >
            Building scalable web applications with{" "}
            <span className="text-emerald-400 font-medium">Angular</span>,{" "}
            <span className="text-emerald-400 font-medium">TypeScript</span> and{" "}
            <span className="text-emerald-400 font-medium">Node.js</span>.{" "}
            <span className="text-zinc-300">1+ year of professional experience</span> working on
            real production systems for the insurance industry.
          </motion.p>
 
          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-3 justify-center md:justify-start"
          >
            <motion.a
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(16,185,129,0.2)" }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl flex items-center gap-2 transition-colors text-sm"
            >
              <Icon icon="tabler:rocket" width="16" height="16" />
              View My Work
            </motion.a>
 
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="./CesarMartinez_Navy.pdf"
              download
              className="px-6 py-2.5 border border-zinc-700 hover:border-zinc-500 text-white font-medium rounded-xl flex items-center gap-2 transition-all text-sm"
            >
              <Icon icon="tabler:download" width="16" height="16" />
              Download CV
            </motion.a>
          </motion.div>
 
          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-1 justify-center md:justify-start"
          >
            {[
              { icon: "tabler:brand-github", href: "https://github.com/CesarMartinez7", label: "GitHub" },
              { icon: "tabler:brand-linkedin", href: "https://www.linkedin.com/in/cesar-luis-martinez-castro-383943332/", label: "LinkedIn" },
              { icon: "tabler:mail", href: "mailto:cesarmartinezcastro7@gmail.com", label: "Email" },
            ].map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                whileHover={{ y: -2 }}
                title={link.label}
                className="p-2 text-zinc-600 hover:text-zinc-300 rounded-lg transition-all"
              >
                <Icon icon={link.icon} width="18" height="18" />
              </motion.a>
            ))}
          </motion.div>
        </div>
 
        {/* Right — stats cards */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col gap-3 w-full md:w-64 shrink-0"
        >
          {[
            { label: "Current role", value: "Frontend Dev Jr.", sub: "Red5G S.A.S" },
            { label: "Client", value: "Seguros Mundial", sub: "Insurance platform" },
            { label: "Stack", value: "Angular · TS · Node", sub: "Production" },
            { label: "Experience", value: "1+ year", sub: "Mar 2025 – Present" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
              className="flex flex-col gap-0.5 px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 transition-all"
            >
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                {stat.label}
              </span>
              <span className="text-white text-sm font-medium">{stat.value}</span>
              <span className="text-zinc-500 text-xs">{stat.sub}</span>
            </motion.div>
          ))}
        </motion.div>
 
      </div>
 
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-zinc-700 text-[10px] font-mono tracking-widest uppercase">scroll</span>
        <div className="w-5 h-8 border border-zinc-800 rounded-full flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-2 bg-emerald-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>


      <Experience />

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="mb-16 text-center"
>
  <h2 className="text-3xl md:text-4xl font-bold mb-4">
    <span className="text-white">Selected </span>
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-500">
      Projects
    </span>
  </h2>
  <p className="text-gray-400 max-w-2xl mx-auto">
    Personal and open-source work built outside of my professional role.
  </p>
</motion.div>
          
          <motion.div
            ref={divProject}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <ExpandableCardDemo />
          </motion.div>
        </div>
      </section>

      
          <AnimatedList />
        

      {/* Skills Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">      
          <Habilidades />
        </div>
      </section>

      {/* Footer */}
    <Footer />
    </motion.div>
  );
}

export default Main;