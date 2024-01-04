import React from "react";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section className="home-section" id="home">
      <div className="home-description">
        <TypeAnimation
          sequence={["Under Sound Records", 3500]}
          speed={200}
          className="h1"
          wrapper="h1"
          cursor={false}
          repeat={0}
        />
        <h5 className="text-white w-[70%]">
          Transforme os seus sonhos na melhor melodia
        </h5>
      </div>
    </section>
  );
};

export default Home;
