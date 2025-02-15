import MockDataProyect from "../Mocks/proyect.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "../components/Particles";
import { Icon } from "@iconify/react/dist/iconify.js";
import SpotlightCard from "../components/SpothCard";
import SplitText from "../components/SplitText";


export default function ProyectPage() {
  const { id } = useParams();
  const numericId = id ? parseInt(id) : 0;
  const Data = MockDataProyect.filter((item) => item.id === numericId);
  const [data] = useState(Data[0]);
  useEffect(() => {
    document.title = data.name;
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
          <motion.a
            href={`${data.link}`}
            className="bg-zinc-900 py-2 text-center border border-zinc-800"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.9 }}
          >
            Visita la pagina
          </motion.a>
          <div className="flex flex-col gap-3">
            <div className="row-span-3 rounded-md">
              <p className="font-bold">Descripcion</p>
              <p className="font-extralight text-sm">{data.moreDescription}</p>
            </div>
            <div className="">
              <p className="font-semibold mb-2.5">Tecnologias</p>
              <ul className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-2.5 ">
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
          <div>
            <h3 className="mb-3">Capturas de pantalla</h3>
            <div className="relative mx-auto border-gray-800 dark:border-zinc-800 bg-zinc-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
              <div className="rounded-lg overflow-hidden h-[56px] md:h-[278px] w-full bg-white dark:bg-gray-800">
                <img
                  src={`${data.image}`}
                  className="dark:hidden h-[56px] md:h-[278px] w-full rounded-lg"
                  alt=""
                />
                <img
                  src={`/${data.image}`}
                  className="hidden dark:block h-[56px] md:h-[278px] w-full rounded-lg object-cover"
                  alt=""
                />
              </div>
            </div>
            <div className="relative mx-auto bg-zinc-900 dark:bg-zinc-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-zinc-800"></div>
            </div>

            
          </div>
        </div>
      </motion.div>
    </>
  );
}
