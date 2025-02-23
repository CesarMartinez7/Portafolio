import { Icon } from "@iconify/react";
import "../App.css";
import SplitText from "../components/SplitText";
import { useRef, useState } from "react";
import { ExpandableCardDemo } from "../components/spotify";
import { motion } from "framer-motion";
import { FlipWords } from "../components/FlipWords";
import { cn } from "../components/utils";
// import { DotPattern } from "../components/dot-patter";
import Overview from "../components/overview";
import { AnimatedGridPattern } from "../components/grid-patter";



const TerminalData = () => {
  const [isType,setIsType] = useState<boolean>(false)

  if(isType){
    <div>Esta tipado</div>
  }

  return (
    <motion.div className="flex items-center p-4 justify-center">
      <Terminal>
        <TypingAnimation>~ more me.json</TypingAnimation>

        <AnimatedSpan delay={1500} className="text-blue-500">
          <span>{`{`}</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500">
          <span className="pl-2 ">
            {`"moreAboutMe":`} <span className="text-blue-500">{"{"}</span>
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500">
          <span className="pl-8">{`"name": "Cesar",`}</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500">
          <span className="pl-8">{`"yearsExperience" : "1-2",`}</span>
        </AnimatedSpan>

        <AnimatedSpan delay={2000} className="text-green-500">
          <span className="pl-4 text-blue-500">
            {`}`}
            <span className="text-green-500">{`,`}</span>
          </span>
        </AnimatedSpan>

        <AnimatedSpan delay={2500} className="text-green-500">
          <span className="pl-4">{`"age": "18",`}</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3000} className="text-green-500">
          <span className="pl-4">{`"role": "Developer",`}</span>
        </AnimatedSpan>

        <AnimatedSpan delay={3500} className="text-green-500">
          <span className="pl-4">{`"overview": "Disciplined, self-taught frontend developer",`}</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-green-500">
          <p className="pl-4">
            {`"skills":`} <span className="text-blue-500">{"["}</span>
            {""}
          </p>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-green-500">
          <span className="pl-8">{`"JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python", "SQL", "Git", "Tailwind", "Linux"`}</span>
        </AnimatedSpan>

        <AnimatedSpan delay={4000} className="text-green-500">
          <p className="pl-8 ">
            <span className="text-blue-500">{`]`}</span>,
          </p>
        </AnimatedSpan>

        <AnimatedSpan delay={4500} className="text-green-500">
          <span className="pl-4">{`"editor": "VS Code",`}</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5000} className="text-green-500">
          <span className="pl-4">{`"os": "Manjaro Linux"`}</span>
        </AnimatedSpan>

        <AnimatedSpan delay={5500} className="text-blue-500">
          <span>{`}`}</span>
        </AnimatedSpan>

        <TypingAnimation delay={6000} className="text-muted-foreground">
          JSON successfully loaded.
        </TypingAnimation>
      </Terminal>
    </motion.div>
  );
};

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "../components/terminal";
import { div } from "framer-motion/client";

function Main() {
  const divProject = useRef<HTMLDivElement>(null);

  const words = ["better", "cute", "beautiful", "modern"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative h-[screen] w-full items-center justify-center overflow-hidden ">
        {/* <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
        )}
      /> */}
        <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-32%] h-[200%] skew-y-12"
          )}
        />
        <div className="h-screen gap-6 md:p-12 w-full lg:p-12 grid relative">
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
                <FlipWords words={words} className="text-green-500 " /> <br />
              </div>
            </div>
            <div className="text-5xl text-left bg-clip-text font-light bg-gradient-to-t from-zinc-700 to-gray-100 text-transparent">
              Websites with React and JavaScript
            </div>

            <SplitText
              text="I bring ideas to life with JavaScript, React, Python and a lot of passion."
              className="text-md text-zinc-500"
              textAlign="left"
              delay={30}
              animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
              animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
              threshold={0.2}
              rootMargin="-50px"
            />
            <div className="inline-flex gap-2.5">
              <motion.button
                initial={{ opacity: 0, scale: 0.3 }}
                whileInView={{ opacity: 1 }}
                animate={{ opacity: 1, transition: { duration: 1 }, scale: 1 }}
                className="p-[3px] relative cursor-pointer"
                onClick={() =>
                  divProject.current?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-500 to-zinc-900 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px] text-sm  relative group transition  text-white hover:bg-transparent duration-200 font-semibold whitespace-nowrap">
                  Check out my projects
                </div>
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.1 }}
                className="px-8 py-2  bg-black text-white text-sm rounded-md font-semibold group-hover:bg-black/[0.8] shadow-lg inline-flex items-center gap-2 cursor-pointer "
                href="https://github.com/CesarMartinez7"
                target="_blank"
              >
                <Icon icon="tabler:brand-github" width="24" height="24" />
                Github
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                className="px-8 py-2 bg-black text-white text-sm rounded-md font-bold group-hover:bg-black/[0.8] shadow-lg inline-flex items-center gap-2 cursor-pointer  "
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
        className="grid grid-cols-1 gap-2  "
      >
        <Overview />
        <TerminalData />
      </motion.div>

      <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg bg-background p-3 lg:p-20">
        <motion.div
          ref={divProject}
          className="w-full flex flex-col items-center gap-2.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0 }}
        >
          <h3 className="text-center text-3xl font-bold my-2 from-green-400 bg-clip-text  bg-gradient-to-br  to-green-700 text-transparent">
            My Projects
          </h3>
          <p className="  bg-clip-text w-lg font-light text-balance text-center bg-gradient-to-t from-zinc-700 mb-4 to-gray-100 text-transparent ">
            In these projects I learned to face real challenges and transform
            problems into effective solutions.
          </p>
          <ExpandableCardDemo />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Main;
