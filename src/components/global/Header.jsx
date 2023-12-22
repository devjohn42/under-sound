import React from "react";

import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa6";
import { LuCassetteTape } from "react-icons/lu";

const Header = () => {
  return (
    <header>
      <div className="flex items-baseline gap-x-[5px]">
        <h5 className="font-primary text-pumpkin">US</h5>
        <h6 className="font-primary text-white">Records</h6>
      </div>
      <nav className="hidden flex-col md:flex md:flex-row md:gap-x-8">
        <a href="#" className="text-white">
          Início
        </a>
        <a href="#" className="text-white">
          Sobre
        </a>
        <a href="#" className="text-white">
          Serviços
        </a>
        <a href="#" className="text-white">
          Contato
        </a>
      </nav>
      <div className="hidden sm:flex">
        <FaYoutube className="text-white text-[1.125rem] sm:text-[1.625rem] md:text-[1.825rem] lg:text-[2.125rem]" />
        <FaSpotify className="text-white text-[1.125rem] sm:text-[1.625rem] md:text-[1.825rem] lg:text-[2.125rem]" />
        <FaInstagram className="text-white text-[1.125rem] sm:text-[1.625rem] md:text-[1.825rem] lg:text-[2.125rem]" />
      </div>
    </header>
  );
};

export default Header;
