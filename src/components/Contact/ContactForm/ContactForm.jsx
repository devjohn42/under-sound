import React from "react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { DevLink } from "../../global/DevLink";

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
        <DevLink>
          <button className="contact-form-button contact-form-button-hover">
            Enviar
          </button>
        </DevLink>
      </div>
    </form>
  );
};

export default ContactForm;
