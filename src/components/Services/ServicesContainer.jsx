import React from "react";
import ServiceBox from "./ServiceBox";

import { motion } from "framer-motion";
import { services } from "../../data/services";
import { animations } from "../../data/animations";

const ServicesContainer = () => {
  return (
    <motion.div className="services-container" {...animations.leftToRight}>
      {services.map((service, index) => (
        <ServiceBox
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </motion.div>
  );
};

export default ServicesContainer;
