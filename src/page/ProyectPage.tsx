import MockDataProyect from "../Mocks/proyect.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "../components/Particles";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function ProyectPage() {
  const { id } = useParams();
  const numericId = id ? parseInt(id) : 0;
  const Data = MockDataProyect.filter((item) => item.id === numericId);
  const [data] = useState(Data[0]);
  useEffect(() => {}, [id]);
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
        exit={{ opacity: 0, background: "red" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="p-2 md:p-12 lg:p-20"
      >
        <h2 className="font-semibold text-5xl">{data.name}</h2>
        <div className="grid grid-cols-2 gap-3.5  grid-co mt-10 ">
          <div className=" row-span-3 rounded-md p-4">
            <p className="font-medium">Descripcion</p>
            <p className="text-sm">{data.moreDescription}</p>
          </div>
          <div className="  rounded-md p-4">
            <p className="font-semibold">Tecnologias</p>
            <ul className="grid grid-cols-7  gap-2.5 ">
              {data.tecnologias.map((item) => (
                <li className="p-2  flex items-center justify-center rounded-[4px] ">
                  <Icon
                    icon={`devicon:${item.toLowerCase()}`}
                    width="50"
                    height="50"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className=" row-span-3 rounded-md p-4">
            <p>{data.slogan}</p>
          </div>
          <div className=" row-span-3 rounded-md p-4">sdfsdf</div>
        </div>
        <img src={`../../public/delfilms${data.imageResponsive[0]}`} alt="" />
      </motion.div>
    </>
  );
}
