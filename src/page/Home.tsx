import { Icon } from "@iconify/react";
import "../App.css";
import SplitText from "../components/SplitText";
import { useRef, useEffect } from "react";
import Habilidades from "../components/Habilidades";
import { ExpandableCardDemo } from "../components/spotify";
import { motion } from "framer-motion";
import { FlipWords } from "../components/FlipWords";
import { GridPattern } from "../components/utils/gridPatter";
import { cn } from "../components/utils";
import { DotPattern } from "../components/dot-patter";

function Main() {
  const divProject = useRef<HTMLDivElement>(null);

  const words = ["better", "cute", "beautiful", "modern"];

  useEffect(() => {
    document.title = "Welcome";
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      
    >
      <div className="relative flex h-[screen] w-full flex-col items-center justify-center overflow-hidden">
        <DotPattern
          width={20}
          height={20}
          cx={1}
          cy={1}
          cr={1}
          className={cn(
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] transform-gpu"
          )}
        />
        <div className="h-screen gap-6 md:p-12 w-full lg:p-12 grid grid-cols-1 md:grid-cols-2 relative">
          <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => {
              if (divProject.current) {
                divProject.current?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="shiny-text animate-pulse shiny-button absolute top-[95%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
          >
            <Icon icon="si:expand-more-duotone" width="24" height="24" />
          </motion.button>
          <div className="flex justify-center w-full h-full flex-col gap-2.5 p-3 lg:p-12">
            <div>
              <div className="text-5xl mx-auto font-normal">
                Build
                <FlipWords words={words} className="text-green-500 " /> <br />
              </div>
            </div>
            <div className="text-5xl text-left bg-clip-text font-light bg-gradient-to-t from-zinc-700 to-gray-100 text-transparent">
              Websites with React and JavaScript
            </div>

            <SplitText
              text="I bring ideas to life with JavaScript, React and a lot of passion."
              className="text-md text-zinc-600"
              textAlign="left"
              delay={50}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              threshold={0.2}
              rootMargin="-50px"
            />
            <div className="inline-flex gap-2.5">
              <button
                className="p-[3px] relative cursor-pointer"
                onClick={() => window.alert("Hello world")}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-500 to-zinc-900 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px] text-sm  relative group transition  text-white hover:bg-transparent duration-200 font-semibold">
                  See any my projects
                </div>
              </button>
              <a
                className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold group-hover:bg-black/[0.8] shadow-lg inline-flex items-center gap-2 cursor-pointer "
                href="https://github.com/CesarMartinez7"
                target="_blank"
              >
                <Icon icon="tabler:brand-github" width="24" height="24" />
                Github
              </a>
              <a
                className="px-8 py-2 bg-black text-white text-sm rounded-md font-bold group-hover:bg-black/[0.8] shadow-lg inline-flex items-center gap-2 cursor-pointer  "
                href="https://www.linkedin.com/in/cesar-martinez-castro-383943332/"
                target="_blank"
              >
                <Icon icon="tabler:brand-linkedin" width="24" height="24" />
                Linkedin
              </a>
            </div>
          </div>
          <div className="hidden md:flex"></div>
        </div>
      </div>

      <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg bg-background p-20">
        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_top_right,white,transparent,transparent)]  "
          )}
        />
        <div ref={divProject} className="w-full">
          <h3 className="text-center text-xl font-semibold ">
            Look at my projects
          </h3>
          <ExpandableCardDemo />
        </div>
      </div>

      <Habilidades />
    </motion.div>
  );
}

export default Main;
