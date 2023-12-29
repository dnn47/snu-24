import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "./components/About";
import Gilman from "./components/Gilman";
import Timeline from "./components/Timeline";
import Landing from "./components/Landing";

// https://coolors.co/222222-ffffff-1c5d99-c8d4df

const App: React.FC = () => {
  return (
    <>
      <Parallax pages={7}>
        <ParallaxLayer style={{ backgroundColor: "#FFFFFF" }}>
          <Landing />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          factor={4}
          style={{
            backgroundColor: "#FFFFFF",
          }}
        >
          <Timeline />
        </ParallaxLayer>

        <ParallaxLayer offset={5} style={{ backgroundColor: "#FFFFFF" }}>
          <About />
        </ParallaxLayer>

        <ParallaxLayer offset={6} style={{ backgroundColor: "#FFFFFF" }}>
          <Gilman />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default App;
