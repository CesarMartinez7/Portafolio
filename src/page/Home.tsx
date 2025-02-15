import { Icon } from "@iconify/react";
import "../App.css";
import SplitText from "../components/SplitText";
import { useRef, useState } from "react";
import mock from "../Mocks/proyect.json";
import { ItemProyect } from "../lib/response";
import Proyect from "../components/Proyect";
import Particles from "../components/Particles";
import Habilidades from "../components/Habilidades";
import BlurText from "../components/Blurtext";
import { motion } from "framer-motion";

function Main() {
  const divProject = useRef<HTMLDivElement>(null);
  const [data] = useState<ItemProyect[]>(mock);

  return (
    <motion.div
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1}}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6}}
    >
      <Particles
        particleColors={["#fffff2", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
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
          <BlurText
            text="Isn't this so cool?!"
            delay={150}
            animateBy="words"
            direction="top"
            className="text-xl shiny-text "
          />
          <SplitText
            text="Welcome"
            className="text-5xl font-semibold bg-gradient-to-t  "
            textAlign="left"
            delay={50}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 2, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="-50px"
          />
          <SplitText
            text="My name is Cesar"
            className="text-5xl text-right font-light  text-zinc-300"
            textAlign="left"
            delay={50}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="-50px"
          />

          <SplitText
            text="Doy vida a ideas con JavaScript, React y mucha pasión."
            className="text-lg text-zinc-400"
            textAlign="left"
            delay={50}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="-50px"
          />
          <div className="inline-flex gap-2.5">
            <button className="shiny-text shiny-button flex gap-1.5 items-center">
              Ver Proyectos{" "}
            </button>
            <motion.a
              whileTap={{ scale: 0.4 }}
              href={"https://github.com/CesarMartinez7"}
              className="shiny-text shiny-button flex gap-1.5 items-center"
              target="_blank"
            >
              <Icon icon="tabler:brand-github" width="20" height="20" /> Github{" "}
            </motion.a>
          </div>
        </div>
        <div className="hidden md:flex"></div>
      </div>
      <Proyect data={data} divProject={divProject} />
      <Habilidades></Habilidades>
    </motion.div>
  );
}

export default Main;
