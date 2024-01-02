import React from "react";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="flex gap-x-4">
          <h5 className="text-white">Sobre</h5>
          <h5 className="font-primary text-pumpkin">US</h5>
        </div>

        <p className="text-justify md:text-left text-white">
          Somos uma gravadora focada em ajudar artistas a trilharem o seu
          caminho no mundo da música. Oferecemos os melhores equipamentos e
          serviços a um custo bem abaixo do mercado.
        </p>
      </div>
      <div className="about-image"></div>
    </section>
  );
};

export default About;
