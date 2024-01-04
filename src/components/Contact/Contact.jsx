import React from "react";
import ContactBox from "./ContactBox";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="w-full p-[2.5rem_2rem] flex flex-col gap-y-4 items-center">
      <h5 className="text-white">Entre em Contato</h5>
      <div className="w-full lg:w-[80%] p-[1.25rem_2rem] flex flex-col lg:flex-row items-center lg:justify-between">
        <ContactBox />
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
