import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "./components/About";
import Gilman from "./components/Gilman";
import Timeline from "./components/Timeline";
import Landing from "./components/Landing";

const App: React.FC = () => {
  return (
    <>
      <Parallax pages={8}>
        <ParallaxLayer style={{ backgroundColor: "#F9F9F9" }}>
          <Landing />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          factor={5}
          style={{
            backgroundColor: "#F9F9F9",
          }}
        >
          <Timeline />
        </ParallaxLayer>

        <ParallaxLayer offset={6} style={{ backgroundColor: "#F9F9F9" }}>
          <About />
        </ParallaxLayer>

        <ParallaxLayer offset={7} style={{ backgroundColor: "#F9F9F9" }}>
          <Gilman />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default App;
