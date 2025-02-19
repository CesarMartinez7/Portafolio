import { ItemProyect } from "../lib/response";
import { Ref } from "react";
import BlurText from "./Blurtext";
import { HoverEffect } from "./hovercard";

interface ProyectProps {
  divProject: Ref<HTMLDivElement>;
  data: ItemProyect[];
}

export default function Proyect({ divProject, data }: ProyectProps) {
  return (
    <div className="px-20 w-full flex  flex-col" ref={divProject}>
      <div className="w-full grid place-content-center">
        <BlurText
          text="Any my projects"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-2xl mb-3.5 font-semibold"
        />
      </div>
      <HoverEffect items={data} />
    </div>
  );
}
