import React from "react";

const ServiceBox = ({ title, description }) => {
  return (
    <div className="service-box">
      <h6 className="text-pumpkin">{title}</h6>
      <p className="text-white text-justify">{description}</p>
    </div>
  );
};

export default ServiceBox;
