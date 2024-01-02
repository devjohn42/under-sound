import React from "react";

const ServiceBox = ({ title, description }) => {
  return (
    <div className="bg-eerie/60 w-[350px] backdrop-blur-[5px] rounded-[8px] p-[1rem_1.25rem]">
      <h6 className="text-pumpkin">{title}</h6>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default ServiceBox;
