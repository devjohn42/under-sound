import React from "react";

import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

const ContactBox = () => {
  return (
    <div className="bg-black/50 w-[450px] p-[1.25rem_1rem] flex flex-col gap-y-[15px] items-center rounded-[8px]">
      <div className="flex items-center justify-center gap-x-[20px]">
        <BsCalendar2CheckFill className="text-pumpkin text-[2.25rem]" />
        <h6 className="text-white">Não perca tempo!!</h6>
      </div>
      <p className="w-[300px] text-white text-center">
        Nos chame no <span className="text-pumpkin uppercase">Whatsapp</span> ou{" "}
        <span className="text-pumpkin uppercase">Instagram</span> para poder
        fechar um serviço que fará uma mega diferença na sua carreira ou até
        mesmo para possíveis parcerias!!
      </p>
      <div className="flex gap-x-[15px]">
        <FaWhatsapp className="text-[1.9rem] text-white contact-social-icon-hover" />
        <FaInstagram className="text-[1.9rem] text-white contact-social-icon-hover" />
      </div>
    </div>
  );
};

export default ContactBox;
