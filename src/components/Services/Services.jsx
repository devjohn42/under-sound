import React from "react";

import ServicesContainer from "./ServicesContainer";
import ServiceBox from "./ServiceBox";

const Services = () => {
  return (
    <section className="bg-services bg-cover w-full p-[3.15rem_0rem] flex flex-col items-center gap-y-[50px]">
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
