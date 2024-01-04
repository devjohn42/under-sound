import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-nav">
        <a href="" className="text-white footer-link-hover">Início</a>
        <a href="" className="text-white footer-link-hover">Sobre</a>
        <a href="" className="text-white footer-link-hover">Serviço</a>
        <a href="" className="text-white footer-link-hover">Contato</a>
      </div>
      <div className="flex gap-x-2 items-center">
        <h5 className="font-primary text-pumpkin">US</h5>
        <h5 className="font-primary text-white">Records</h5>
      </div>
      <div className="flex flex-col items-center md:flex-row gap-x-1">
        <p className="text-white">Copyright © 2024 Under Sound Records,</p>
        <p className="text-white">Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
