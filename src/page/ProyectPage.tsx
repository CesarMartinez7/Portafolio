import MockDataProyect from "../Mocks/proyect.json";
import { Link,  useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "../components/Particles";
import { Icon } from "@iconify/react/dist/iconify.js";
import SpotlightCard from "../components/SpothCard";
import Noise from "../components/noise";
import SplitText from "../components/SplitText";


export default function ProyectPage() {
  const { id } = useParams();
  const numericId = id ? parseInt(id) : 0;
  const Data = MockDataProyect.filter((item) => item.id === numericId);
  const [data] = useState(Data[0]);
  useEffect(() => {
    document.title = data.name
  }, [id]);
  return (
    <>
      <Particles
        particleColors={["#ffffff", "#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="p-2 md:p-12 lg:p-22 w-full flex flex-col items-center justify-center h-full min-h-[100vdh]"
      >
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={2}
          patternAlpha={15}
        />
        <div className="w-full lg:w-[50vw] flex flex-col gap-2.5 my-17 p-3.5">
          <SplitText
            text={`${data.name}`}
            className="text-5xl"
            textAlign="left"
            delay={80}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="-50px"
          />
          <p className="text-xs">{data.slogan}</p>
          <motion.a href={`${data.link}`} className="bg-zinc-900 py-2 text-center border border-zinc-800" whileHover={{scale: 1.04}} whileTap={{scale: 0.9}} >Visita la pagina</motion.a>
          <div className="flex flex-col gap-3">
            <div className="row-span-3 rounded-md">
              <p className="font-bold">Descripcion</p>
              <p className="font-extralight text-sm">{data.moreDescription}</p>
            </div>
            <div className="">
              <p className="font-semibold mb-2.5">Tecnologias</p>
              <ul className="grid grid-cols-10 gap-2.5 ">
                {data.tecnologias.map((item, index) => (
                  <SpotlightCard
                    key={index}
                    className="custom-spotlight-card flex justify-center"
                    //@ts-ignore
                    spotlightColor={"gray"}
                  >
                    <Icon
                      icon={`simple-icons:${item.toLowerCase()}`}
                      width="50"
                      height="50"
                    />
                  </SpotlightCard>
                ))}
              </ul>
            </div>
          </div>
          <img src={`../../public/${data.image}`} alt=""  loading="lazy"/>
        </div>
      </motion.div>
    </>
  );
}
