import { Icon } from "@iconify/react";
import "./App.css";
import TiltedCard from "./components/Card";
import SplitText from "./components/SplitText";
import { useRef, useState } from "react";
import Footer from "./components/Footer";
import mock from "./Mocks/proyect.json";
import { ItemProyect } from "./lib/response";


function App() {
  const divProject = useRef<HTMLDivElement>(null);
  console.log(mock);
  const [data] = useState<ItemProyect[]>(mock);
  return (
    <>
      <div className="h-screen gap-6 w-full lg:p-7 grid grid-cols-1 md:grid-cols-2 relative">
        <button
          onClick={() => {
            if (divProject.current) {
              divProject.current?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="shiny-text shiny-button absolute top-[50%] right-[50%] transform translate-x-[-50%] translate-y-[-50%]"
        >
          <Icon icon="si:expand-more-duotone" width="24" height="24" />
        </button>
        <div className="flex justify-center w-full h-full flex-col gap-2.5 p-3 lg:p-12">
          <SplitText
            text="Hello, My name is Cesar"
            className="text-5xl text-right font-semibold  text-zinc-200"
            textAlign="left"
            delay={50}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            threshold={0.2}
            rootMargin="-50px"
          />
          <SplitText
            text="Doy vida a ideas con JavaScript, React y mucha pasión."
            className="text-lg text-zinc-300"
            textAlign="left"
            delay={100}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            
            threshold={0.2}
            rootMargin="-50px"
          />
          <div className="inline-flex gap-2.5">
            <button className="shiny-text shiny-button flex gap-1.5 items-center">
              Ver Proyectos{" "}
            </button>
            <button className="shiny-text shiny-button flex gap-1.5 items-center">
              <Icon icon="tabler:brand-github" width="20" height="20" /> Github{" "}
            </button>
          </div>
        </div>
        <div className="hidden md:flex"></div>
      </div>
      <div className="p-12 w-full flex gap-6 flex-col" ref={divProject}>
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
                containerHeight="300px"
                containerWidth="300px"
                imageHeight="300px"
                imageWidth="300px"
                rotateAmplitude={12}
                scaleOnHover={1.1}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text backdrop-blur-2xl ">{item.name}</p>
                }
              />
              
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
