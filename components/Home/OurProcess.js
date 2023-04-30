import React from "react";
import ProcessImage from "../../public/images/home/DevelopmentProcess.png";

const OurProcess = () => {
  return (
    <section className="container text-center mt-5">
      <h2 className="mb-4">
        Our <span className="border-3 border-primary border-bottom">Development Process</span>
      </h2>
      <img src={ProcessImage.src} className="img-fluid mt-5 pb-5" />
    </section>
  );
};

export default OurProcess;
