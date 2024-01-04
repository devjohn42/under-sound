import React from "react";

import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { DevLink } from "../global/DevLink";

import { motion } from "framer-motion";
import { animations } from "../../data/animations";

const ContactBox = () => {
  return (
    <motion.div className="contact-box-container" {...animations.leftToRight}>
      <div className="flex items-center justify-center gap-x-[20px]">
        <BsCalendar2CheckFill className="text-pumpkin text-[2.25rem]" />
        <h6 className="text-white">Não perca tempo!!</h6>
      </div>
      <p className="contact-box-description">
        Nos chame no <span className="text-pumpkin uppercase">Whatsapp</span> ou{" "}
        <span className="text-pumpkin uppercase">Instagram</span> para poder
        fechar um serviço que fará uma mega diferença na sua carreira ou até
        mesmo para possíveis parcerias!!
      </p>
      <div className="flex gap-x-[15px]">
        <DevLink>
          <FaWhatsapp className="contact-box-call-icon" />
        </DevLink>
        <DevLink>
          <FaInstagram className="contact-box-call-icon" />
        </DevLink>
      </div>
    </motion.div>
  );
};

export default ContactBox;
