import React from "react";

import ServicesContainer from "./ServicesContainer";

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="flex gap-x-4">
        <h5 className="text-white">Serviços da </h5>
        <div className="flex gap-x-3">
          <h5 className="font-primary text-pumpkin">US</h5>
          <h5 className="font-primary text-white">Records</h5>
        </div>
      </div>
      <ServicesContainer />
    </section>
  );
};

export default Services;
