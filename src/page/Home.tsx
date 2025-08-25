import { Icon } from "@iconify/react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "./utils";
import SplitText from "../components/SplitText";
import { ExpandableCardDemo } from "../components/spotify";
import { FlipWords } from "../components/FlipWords";
import { Terminal } from "../components/terminal";
import Overview from "../components/overview";
import AnimatedList from "../components/certifaciones";
import Navbar from "../components/navbar";
import Habilidades from "../components/Habilidades";
import "../App.css"


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
      href: "https://www.linkedin.com/in/cesar-martinez-castro-383943332/",
    },
    {
      title: "CV",
      icon: "tabler:file-text",
      href: "./CesarMartinezCastroResume.pdf",
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
      {/* Enhanced background with gradient mesh */}
      <div className="fixed inset-0 z-0 overflow-hidden">
      <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)`,
    }}
  />
        

        <div className="min-h-screen w-full relative bg-black">
    {/* Emerald Depths Background with Top Glow */}
    <div
      className="absolute inset-0 z-0"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(16, 185, 129, 0.25), transparent 70%), #000000",
      }}
    />
  
    {/* Your Content/Components */}
    {/* <Icon icon="logos:react" width="40.85px" height="40px" className="absolute " style={{ top: '10%', left: '5%' }} />
  <Icon icon="logos:react" width="40.85px" height="40px" className="absolute -z-0" style={{ bottom: '20%', right: '15%' }} />
  <Icon icon="logos:react" width="40.85px" height="40px" className="absolute -z-0" style={{ top: '50%', left: '45%' }} />
  <Icon icon="logos:react" width="40.85px" height="40px" className="absolute -z-0" style={{ top: '30%', right: '25%' }} />
  <Icon icon="logos:react" width="40.85px" height="40px" className="absolute -z-0" style={{ bottom: '5%', left: '30%' }} />
  <Icon icon="logos:react" width="40.85px" height="40px" className="absolute -z-0" style={{ top: '70%', left: '75%' }} />
  <Icon icon="logos:react" width="40.85px" height="40px" className="absolute -z-0" style={{ bottom: '40%', right: '60%' }} /> */}
  </div>
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(16, 185, 129, 0.1)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* <Navbar /> */}

      <>
  
</>
      {/* Floating dock for social links */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2  hidden md:block z-40">
        
        .
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 z-40">
        <div className="max-w-6xl mx-auto text-center z-10">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="mb-6 relative z-50"
          >
            <span className="text-emerald-400 font-mono text-sm md:text-base border border-emerald-400/20 rounded-full px-4 py-1.5">
              Frontend Developer
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 relative z-50"
          >
            <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">I create </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
            
              <FlipWords words={words} duration={2500} enableGlow={true} letterAnimation="flip" />
            </span>
            <br />
            <span className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">digital experiences</span>
          </motion.h1>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-2xl mx-auto mb-10"
          >
            <SplitText
              text="I specialize in transforming ideas into performant web applications using modern technologies like React, TypeScript, and Node.js."
              className="text-sm md:text-xl  text-gray-400 leading-relaxed"
              textAlign="center"
              delay={20}
              animationFrom={{ opacity: 0, transform: "translate3d(0,30px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              threshold={0.2}
              rootMargin="-50px"
            />
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(16, 185, 129, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-medium rounded-lg flex items-center gap-2"
            >
              <Icon icon="tabler:rocket" width="20" height="20" />
              View My Work
            </motion.a>
            
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="./CesarMartinezCastroResume.pdf"
              download={true}
              className="px-8 py-3 bg-zinc-950 border border-gray-800 text-white font-medium rounded-lg flex items-center gap-2"
            >
              <Icon icon="tabler:download" width="20" height="20" />
              Download CV
            </motion.a>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-gray-400 text-sm mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
      {/* <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            style={{ opacity, scale }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">About </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">Me</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get to know my journey, skills, and what drives me as a developer
            </p>
          </motion.div>
        </div>
      </section> */}

      {/* Terminal Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b ">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">My Developer </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">Environment</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A glimpse into my development setup and workflow
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <Terminal />
          </motion.div>
        </div>
      </section>

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
              <span className="text-white">Featured </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">Projects</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent works that showcase my skills and creativity
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

      {/* Certifications Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-slate-950 to-black">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">My </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">Certifications</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Continuous learning and professional development are key to my growth as a developer
            </p>
          </motion.div>
          
          <AnimatedList />
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Technical </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The technologies and tools I use to bring ideas to life
            </p>
          </motion.div>
          
          <Habilidades />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-6">
              Interested in working together or have a project in mind? Feel free to reach out!
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com/CesarMartinez7"
                target="_blank"
                className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800"
              >
                <Icon icon="tabler:brand-github" width="24" height="24" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://www.linkedin.com/in/cesar-martinez-castro-383943332/"
                target="_blank"
                className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800"
              >
                <Icon icon="tabler:brand-linkedin" width="24" height="24" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:cesarmartinezcastro7@gmail.com"
                className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center border border-gray-800"
              >
                <Icon icon="tabler:mail" width="24" height="24" />
              </motion.a>
            </div>
          </motion.div>
          
          <div className="text-gray-500 text-sm">
            <p>© {new Date().getFullYear()} Cesar Martinez. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}

export default Main;