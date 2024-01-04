import React from "react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

const ContactForm = () => {
  return (
    <form>
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
        <a
          className="contact-form-button contact-form-button-hover"
          href="#"
          target="_blank"
        >
          Enviar
        </a>
      </div>
    </form>
  );
};

export default ContactForm;
