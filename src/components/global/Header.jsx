import React, { useState } from "react";

import { FaInstagram, FaSpotify, FaYoutube } from "react-icons/fa6";
import { LuCassetteTape } from "react-icons/lu";
import { MdClose } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // const changeNav = () => {
  //   if (window.innerWidth < 768) {
  //     setNavOpen(!navOpen);
  //   }
  // };

  return (
    <header>
      <div className="header-container">
        <div className="flex items-baseline gap-x-[5px] mb-0">
          <h5 className="font-primary text-pumpkin">US</h5>
          <h6 className="font-primary text-white">Records</h6>
        </div>

        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="display md:hidden"
        >
          {menuOpen ? (
            <MdClose className="text-pumpkin header-menu-icon" />
          ) : (
            <LuCassetteTape className="text-white header-menu-icon" />
          )}
        </div>

        <nav
          className={`${
            menuOpen
              ? "flex flex-col md:flex-row justify-center m-[2rem_0rem] md:m-0"
              : "hidden md:flex"
          }`}
        >
          <a href="#" className="text-white nav-link-hover">
            <a href="/">Início</a>
          </a>
          <a href="#" className="text-white nav-link-hover">
            Sobre
          </a>
          <a href="#" className="text-white nav-link-hover">
            Serviços
          </a>
          <a href="#" className="text-white nav-link-hover">
            Contato
          </a>
        </nav>
        <div
          className={`header-social-container ${
            menuOpen ? "flex flex-row justify-center" : "hidden md:flex"
          }`}
        >
          <FaYoutube className="header-social-icon header-social-icon-hover" />
          <FaSpotify className="header-social-icon header-social-icon-hover" />
          <FaInstagram className="header-social-icon header-social-icon-hover" />
        </div>
      </div>
    </header>
  );
};

export default Header;
