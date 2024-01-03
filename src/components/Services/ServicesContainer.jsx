import React from "react";
import { services } from "../../data/services";
import ServiceBox from "./ServiceBox";

const ServicesContainer = ({ children }) => {
  return (
    <div className="w-[90%] md:w-full lg:w-[90%] p-[0rem_1rem] flex flex-row flex-wrap items-start justify-center gap-[20px]">
      {services.map((service, index) => (
        <ServiceBox
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default ServicesContainer;
