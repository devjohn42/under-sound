import React from "react";

import ServicesContainer from "./ServicesContainer";
import ServiceBox from "./ServiceBox";

const Services = () => {
  return (
    <section className="bg-services bg-cover w-full p-[3.15rem_0rem] flex flex-col items-center gap-y-[50px]">
      <div className="flex gap-x-4 items-center">
        <h5 className="text-white">Serviços da </h5>
        <div className="flex gap-x-3">
          <h5 className="font-primary text-pumpkin">US</h5>
          <h5 className="font-primary text-white">Records</h5>
        </div>
      </div>
      <ServicesContainer>
        <ServiceBox
          title={"Criação Original"}
          description={
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          }
        />
        <ServiceBox
          title={"Edição de Som"}
          description={
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          }
        />
        <ServiceBox
          title={"Foley"}
          description={
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          }
        />
        <ServiceBox
          title={"Mixagem"}
          description={
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          }
        />
        <ServiceBox
          title={"Sound Design"}
          description={
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          }
        />
        <ServiceBox
          title={"Masterização"}
          description={
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          }
        />
      </ServicesContainer>
    </section>
  );
};

export default Services;
