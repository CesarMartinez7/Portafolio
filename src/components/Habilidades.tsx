import { Icon } from "@iconify/react/dist/iconify.js";
import SpotlightCard from "./SpothCard";
import ToolJson from "../Mocks/tools.json";
import {motion} from "motion/react"


export default function Habilidades() {
  return (
    <div className="h-svh w-full grid place-content-center relative">
     <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Technical </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-700">Skills</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

      {/* Gradientes a los lados */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none z-10"></div>

      <div className="relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-6 p-6 lg:grid-cols-9 lg:px-44 lg:py-12 gap-5  ">
          {ToolJson.map((tool, index) => (
            <SpotlightCard
              key={index}
              className="custom-spotlight-card flex flex-col  w-full h-full items-center gap-2 justify-center grayscale-10"
              //@ts-ignore
              spotlightColor={tool.color}
            >
              <a href={tool.link} target="_blank" rel="noopener noreferrer">
                <Icon
                  icon={`logos:${tool.name}`}
                  width="43"
                  height="43"
                  color="white"
                />
              </a>
              <p className="w-full flex justify-center text-balance font-semibold items-center text-sm ">
                {tool.name2}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
  );
}
