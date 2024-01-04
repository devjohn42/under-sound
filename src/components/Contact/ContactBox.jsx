import React from "react";

import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

const ContactBox = () => {
  return (
    <div className="contact-box-container">
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
        <FaWhatsapp className="contact-box-call-icon" />
        <FaInstagram className="contact-box-call-icon" />
      </div>
    </div>
  );
};

export default ContactBox;
