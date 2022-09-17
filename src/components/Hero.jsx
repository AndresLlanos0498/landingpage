import React from "react";
import Wave from "react-wavify";

const Hero = () => {
  return (
    <section id="inicio">
    <div className="mainPage">
      <Wave
        fill="#5b46de"
        className="__waves"
        style={{ position: "relative", height: "240px" }}
        paused={false}
        options={{
          height: 100,
          amplitude: 20,
          speed: 0.55,
          points: 7,
        }}
      ></Wave>
      <h1 className="__tituloprincipal">Andres Llanos Developer</h1>
    </div>
    </section>
  );
};

export default Hero;
