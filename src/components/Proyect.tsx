import SplitText from "./SplitText";
import TiltedCard from "./Card";
import { ItemProyect } from "../lib/response";
import { Ref } from "react";


interface ProyectProps {
    divProject: Ref<HTMLDivElement>
    data: ItemProyect[]
}


export default function Proyect({divProject, data}:ProyectProps) {
  return (
    <div
      className="p-12 w-full flex gap-6 flex-col "
      ref={divProject}
    >
      <div className="w-full grid place-content-center">
        <SplitText
          text="Mis proyectos"
          className="text-lg text-zinc-300 font-medium"
          textAlign="left"
          delay={20}
          animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
          animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
          threshold={0.2}
          rootMargin="-50px"
        />
      </div>
      <div className="grid grid-cols-5 gap-6">
        {data.map((item) => (
          <TiltedCard
            imageSrc={`/src/assets/${item.image}`}
            altText={`${item.name}`}
            captionText={`${item.description}`}
            rotateAmplitude={12}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text shiny-button backdrop-blur-2xl p-0.5 rounded-lg  ">
                {item.name}
              </p>
            }
          />
        ))}
      </div>
    </div>
  );
}
