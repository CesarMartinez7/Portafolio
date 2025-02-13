import { Icon } from "@iconify/react";
import "./App.css";
import TiltedCard from "./components/Card";
import SplitText from "./components/Tipograpy";
import { useRef } from "react";

function App() {
  const divProject = useRef<HTMLDivElement>(null)
  return (
    <>
      <div className="h-screen gap-6 w-full p-7 grid grid-cols-2 relative">
        <button
          onClick={() => {
            if(divProject.current){
              divProject.current?.scrollIntoView({behavior:"smooth"})
            }
          }}
          className="shiny-text shiny-button absolute top-[50vh] right-[50vw] transform"
          style={{
            left: "861px",
            top: "862px",
          }}
        >
          <Icon icon="si:expand-more-duotone" width="24" height="24" />
        </button>
        <div className="flex justify-center w-full h-full flex-col gap-2.5 p-12">
          <SplitText
            text="Hello 👋"
            className="text-6xl font-medium "
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          <SplitText
            text="Transformo líneas de código en experiencias interactivas."
            className="text-lg font-light "
            delay={150}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          <div className="inline-flex gap-2.5">
            <button className="shiny-text shiny-button">sdfsdf</button>
            <button className="shiny-text shiny-button">sdfsdf</button>
          </div>
        </div>
        <div className="hidden md:flex">Hello world</div>
      </div>
      <div className="p-12 w-full flex gap-6 flex-col" ref={divProject}>
        <div className="w-full grid place-content-center">
          <SplitText
            text="Proyect"
            className="text-xl font-semibold text-center"
            delay={300}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>
        <div className="grid grid-cols-5 gap-6">
          {Array.from({ length: 8 }, (_, i) => (
            <TiltedCard
              imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar - GNX"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">Kendrick Lamar - GNX</p>
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
