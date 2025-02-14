import MockDataProyect from "../Mocks/proyect.json";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Particles from "../components/Particles";

export default function ProyectPage() {
  const { id } = useParams();
  const numericId = id ? parseInt(id) : 0;
  const Data = MockDataProyect.filter((item) => item.id === numericId);
  const [data] = useState(Data[0]);
  useEffect(() => {}, [id]);
  return (
    <>
      <Particles />
      <motion.div
        exit={{ opacity: 0, background: "red" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="p-2 md:p-12 lg:p-20"
      >
        <h2 className="font-medium text-5xl">{data.name}</h2>
        <p>{data.moreDescription}</p>
      </motion.div>
    </>
  );
}
