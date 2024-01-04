import React from "react";
import ServiceBox from "./ServiceBox";

import { services } from "../../data/services";

const ServicesContainer = () => {
  return (
    <div className="services-container">
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
