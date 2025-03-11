import { Icon } from "@iconify/react/dist/iconify.js";
import SpotlightCard from "./SpothCard";
import ToolJson from "../Mocks/tools.json";
import { AnimatedGridPattern } from "./grid-patter";
import { cn } from "./utils";

export default function Habilidades() {
  return (
    <div className="h-svh w-full grid place-content-center relative">
      <AnimatedGridPattern
          numSquares={30}
          maxOpacity={1}
          duration={4}
          repeatDelay={10}
          className={cn(
            "[mask-image:linear-gradient(to_top_right,white,transparent,transparent)] "
          )}
        />
      <div className="flex flex-col justify-center">
        <h3  style={{
            textShadow:
              "0px 0px 10px rgba(50, 205, 50, 0.8), 0px 0px 20px rgba(50, 205, 50, 0.5)",
          }} className="text-center text-3xl font-bold my-2 from-green-400 bg-clip-text bg-gradient-to-br to-green-700 text-transparent">
          My skills
        </h3>
        
      </div>

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
                  width="50"
                  height="50"
                  color="white"
                />
              </a>
              <p className="w-full flex justify-center text-balance font-semibold items-center ">{tool.name2}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
  );
}
