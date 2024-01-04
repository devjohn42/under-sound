import React from "react";

import ContactBox from "./ContactBox";
import ContactForm from "./ContactForm/ContactForm";

const Contact = () => {
  return (
    <section className="contact-section">
      <h5 className="text-white">Entre em Contato</h5>
      <div className="contact-container">
        <ContactBox />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
