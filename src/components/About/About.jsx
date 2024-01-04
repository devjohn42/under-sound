import React from "react";

import { motion } from "framer-motion";
import { animations } from "../../data/animations";

const About = () => {
  return (
    <section className="about-section" id="about">
      <motion.div className="about-content" {...animations.leftToRight}>
        <div className="flex gap-x-4">
          <h5 className="text-white">Sobre</h5>
          <h5 className="font-primary text-pumpkin">US</h5>
        </div>

        <p className="text-justify md:text-left text-white">
          Somos uma gravadora focada em ajudar artistas a trilharem o seu
          caminho no mundo da música. Oferecemos os melhores equipamentos e
          serviços a um custo bem abaixo do mercado.
        </p>
      </motion.div>
      <motion.div
        className="about-image"
        {...animations.rightToLeft}
      ></motion.div>
    </section>
  );
};

export default About;
