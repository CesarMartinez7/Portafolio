import MockDataProyect from "../Mocks/proyect.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import SpotlightCard from "../components/SpothCard";
import SplitText from "../components/SplitText";
import { Safari } from "../components/Mockup";
import Noise from "../components/noise";

export default function ProyectPage() {
  const { id } = useParams();
  const numericId = id ? parseInt(id) : 0;
  const Data = MockDataProyect.filter((item) => item.id === numericId);
  const [data] = useState(Data[0]);

  useEffect(() => {
    document.title = data.name;
    window.scrollTo(0,0)
  }, [id]);

  return (
    
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="p-2 md:p-12 lg:p-22 w-full flex flex-col items-center justify-center h-full "
    >
      <div className="w-full lg:w-[50vw] flex flex-col gap-2.5 my-17 p-3.5">
        <SplitText
          text={`${data.name}`}
          className="text-5xl font-medium"
          textAlign="left"
          delay={40}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          threshold={0.2}
        />
        <p className="text-xs">{data.slogan}</p>
        <div className="gap-2.5 flex">
          <motion.a
            href={`${data.link}`}
            className="bg-gradient-to-t from-zinc-800 to-transparent py-1.5 px-2.5 shiny-button border border-zinc-600 rounded-md w-[50%] flex justify-center"
          >
            Visita la página
          </motion.a>
          <button className="bg-gradient-to-t from-zinc-800 to-transparent py-1.5 px-2.5 shiny-button border border-zinc-600 rounded-md w-[30%] flex justify-center items-center gap-1.5">
            Codigo 
          <Icon icon="tabler:brand-github" width="20" height="20" />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="row-span-3 rounded-md">
            <p className="font-medium my-2.5">Descripción</p>
            <p className="text-sm ">{data.moreDescription}</p>
          </div>
          <div>
            <p className="font-semibold mb-2.5">Tecnologías</p>
            <ul className="grid grid-cols-5 md:grid-cols-9 lg:grid-cols-10 gap-2.5">
              {data.tecnologias.map((item, index) => (
                <SpotlightCard
                  key={index}
                  className="custom-spotlight-card flex justify-center w-full"
                  //@ts-ignore
                  spotlightColor="gray"
                >
                  <Icon
                    icon={`simple-icons:${item.toLowerCase()}`}
                    width="50"
                    height="40"
                  />
                </SpotlightCard>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className="my-5 font-medium">Capturas de pantalla</h3>
          <div className="w-full">
            <Safari imageSrc={data.imageResponsive[2]} className="size-full" url={data.link} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
