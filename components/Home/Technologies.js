import React, { useEffect } from "react";
import tech1 from "../../public/images/tech/react-logo.svg";
import tech2 from "../../public/images/tech/vive-logo.svg";
import tech3 from "../../public/images/tech/ue-logo.svg";
import tech4 from "../../public/images/tech/unity-logo.svg";
import tech5 from "../../public/images/tech/oculus-logo.svg";
import tech6 from "../../public/images/tech/photon-logo.svg";
import tech7 from "../../public/images/tech/scala-logo.svg";
import flickityInit from "@/utils/flickityInit";

const Technologies = () => {
  const techs = [tech1, tech2, tech3, tech4, tech5, tech6, tech7];
  useEffect(() => {
    flickityInit("tech-carousel");
  });

  return (
    <section className="py-5 my-5 container text-center">
      <h2 className="mb-4">
        <span className="border-3 border-primary border-bottom">
          Technologies
        </span>{" "}
        We Use
      </h2>
      <div id="tech-carousel">
        {techs.map((tech, index) => (
          <div className="carousel-cell  p-2" key={index}>
            <img src={tech.src} className="p-3" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
