import React, { useEffect } from "react";
import brand1 from "../../public/images/brands/Brand (1).svg";
import brand2 from "../../public/images/brands/Brand (2).svg";
import brand3 from "../../public/images/brands/Brand (3).svg";
import brand4 from "../../public/images/brands/Brand (4).svg";
import brand5 from "../../public/images/brands/Brand (5).svg";
import brand6 from "../../public/images/brands/Brand (6).svg";
import brand7 from "../../public/images/brands/Brand (7).svg";
import flickityInit from "@/utils/flickityInit";

const Brands = () => {
  const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];
  useEffect(() => {
    flickityInit("brand-carousel");
  });

  return (
    <section className="py-5 my-5 container text-center">
      <h2 className="mb-4">
        <span className="border-3 border-primary border-bottom">Brands</span> we
        work for
      </h2>
      <p className="fs-5">
        We have the pleasure and privilege of working with a wide variety of
        technology ventures, brands, and enterprises. The clientele of our
        gaming studio includes entrepreneurs, startups, small and mid-sized
        enterprises, and Fortune 500 companies.
      </p>
      <div id="brand-carousel">
        {brands.map((brand, index) => (
          <div className="carousel-cell  p-2" key={index}>
            <img src={brand.src} className="p-3" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;
