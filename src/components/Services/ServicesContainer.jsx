import React from "react";

const ServicesContainer = ({ children }) => {
  return (
    <div className="w-[80%] flex flex-row flex-wrap items-start justify-center gap-[35px]">
      {children}
    </div>
  );
};

export default ServicesContainer;
