import React from "react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { DevLink } from "../../global/DevLink";

import { motion } from "framer-motion";
import { animations } from "../../../data/animations";

const ContactForm = () => {
  return (
    <motion.form {...animations.rightToLeft}>
      <div className="contact-form-inputs-container">
        <Input
          className="contact-form-input"
          type="text"
          placeholder="Nome..."
        />
        <Input
          className="contact-form-input"
          type="text"
          placeholder="E-mail..."
        />
      </div>
      <Textarea className="contact-form-textarea" placeholder="Mensagem" />
      <div className="w-full flex items-start">
        <DevLink>
          <a className="contact-form-button contact-form-button-hover">
            Enviar
          </a>
        </DevLink>
      </div>
    </motion.form>
  );
};

export default ContactForm;
