import { Icon } from "@iconify/react";
import "../App.css";
import SplitText from "../components/SplitText";
import { useRef } from "react";
import { ExpandableCardDemo } from "../components/spotify";
import { motion } from "framer-motion";
import { FlipWords } from "../components/FlipWords";
import { cn } from "../components/utils";
import { Terminal } from "../components/terminal";
import Overview from "../components/overview";
import { AnimatedGridPattern } from "../components/grid-patter";
import AnimatedList from "../components/certifaciones";
import Navbar from "../components/navbar";

function Main() {
  const divProject = useRef<HTMLDivElement>(null);

  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-red"
    >
      <Navbar />
      <div className="relative h-svh w-full items-center justify-center overflow-hidden">
        <AnimatedGridPattern
          numSquares={60}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={5}
          className={cn(
            "[mask-image:radial-gradient(240px_circle_at_center,green,transparent)]",
            "inset-x-0 inset-y-[-50%] h-[200%] skew-y-1"
          )}
        />
        <div className="h-dvh gap-6 md:p-12 w-full lg:p-12 grid relative">
          <motion.button
            title="Ir a overview"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 0.3, delay: 0.3 } }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1, rotate: 3 }}
            onClick={() => {
              if (divProject.current) {
                window.scrollTo({ top: 900, behavior: "smooth" });
              }
            }}
            className="shiny-text animate-pulse shiny-button rounded-md absolute top-[95%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
          >
            <Icon icon="si:expand-more-duotone" width="24" height="24" />
          </motion.button>
          <div className="flex  items-center justify-center w-full h-full flex-col gap-2.5 p-3 lg:p-12">
            <div>
              <div className="text-5xl mx-auto font-normal">
                Build
                <FlipWords words={words} /> <br />
              </div>
            </div>
            <div className="text-2xl lg:text-4xl md:leading-tight max-w-4xl mx-auto text-center tracking-tight font-medium bg-clip-text text-transparent bg-gradient-to-b from-zinc-600 via-white to-zinc-300 flex items-center gap-2 md:gap-8">
              Websites with React and JavaScript
            </div>

            <SplitText
              text="I bring ideas to life with JavaScript, React, Python and a lot of passion."
              className="text-md text-zinc-400 text-center"
              textAlign="left"
              delay={30}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              threshold={0.2}
              rootMargin="-50px"
            />
            <div className="inline-flex gap-2.5">
              <motion.a
                download={true}
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1 }}
                animate={{ opacity: 1, transition: { duration: 1 }, scale: 1 }}
                className="p-[3px] relative cursor-pointer"
                href="../../public/CesarMartinezCastroResume-2.pdf"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-500 to-zinc-900 rounded-lg" />
                <div className="px-1 md:px-6 py-2  bg-black rounded-[6px] text-sm  relative group transition  text-white hover:bg-transparent duration-200 font-semibold ">
                  Download CV
                </div>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                className="px-5 py-2  bg-black text-white text-sm rounded-md font-semibold group-hover:bg-black/[0.8] shadow-lg inline-flex items-center gap-2 cursor-pointer border-white/5 border"
                href="https://github.com/CesarMartinez7"
                target="_blank"
              >
                <Icon icon="tabler:brand-github" width="24" height="24" />
                Github
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.04 }}
                className="px-5 py-2 bg-black text-white text-sm rounded-md font-bold group-hover:bg-black/[0.8] shadow-lg inline-flex items-center gap-2 cursor-pointer  "
                href="https://www.linkedin.com/in/cesar-martinez-castro-383943332/"
                target="_blank"
              >
                <Icon icon="tabler:brand-linkedin" width="24" height="24" />
                Linkedin
              </motion.a>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ transition: { duration: 0.4 }, opacity: 1 }}
        exit={{ opacity: 0 }}
        className="grid grid-cols-1 gap-2 "
      >
        <Overview />
        <motion.div className="flex items-center p-4 justify-center">
          <Terminal />
        </motion.div>
      </motion.div>

      <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg bg-background p-3 lg:p-20">
        <motion.div
          ref={divProject}
          className="w-full flex flex-col items-center gap-2.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0 }}
        >
          <h3
            className="text-center text-3xl font-bold my-2 from-green-400 bg-clip-text  bg-gradient-to-br  to-green-800 text-transparent"
            style={{
              textShadow:
                "0px 0px 10px rgba(50, 205, 50, 0.8), 0px 0px 20px rgba(50, 205, 50, 0.5)",
            }}
          >
            My Projects
          </h3>
          <p className="bg-clip-text w-lg font-light text-balance text-center bg-gradient-to-t from-zinc-700 mb-4 to-gray-100 text-transparent ">
            In these projects I learned to face real challenges and transform
            problems into effective solutions.
          </p>
          <ExpandableCardDemo />
        </motion.div>
      </div>
      <div className="flex items-center h-svh justify-center flex-col ">
        <h3
          className="text-center text-3xl font-bold my-2 from-green-500 bg-clip-text bg-gradient-to-br  to-green-500 text-transparent"
          style={{
            textShadow:
              "0px 0px 10px rgba(50, 205, 50, 0.8), 0px 0px 20px rgba(50, 205, 50, 0.5)",
          }}
        >
          My Certification
        </h3>
        <p className="text-balance  text-center bg-clip-text font-light bg-gradient-to-t from-zinc-500 to-gray-100 text-transparent w-[800px] mb-4 ">
          I am always learning and improving my skills. These certifications are
          proof of my commitment to technology and digital security.
        </p>
        <AnimatedList />
      </div>
    </motion.div>
  );
}

export default Main;
