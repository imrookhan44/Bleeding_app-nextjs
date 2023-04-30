import CareerFewThings from "@/components/Career/CareerFewThings";
import CareerFindPositions from "@/components/Career/CareerFindPositions";
import CareerGlobal from "@/components/Career/CareerGlobal";
import CareerHero from "@/components/Career/CareerHero";
import CareerWhoWeAre from "@/components/Career/CareerWhoWeAre";
import CareerWhyUs from "@/components/Career/CareerWhyUs";
import ContactForm from "@/components/Home/ContactForm";
import FAQ from "@/components/Home/FAQ";
import Meta from "@/utils/Meta";
import React from "react";

const CareerPage = () => {
  return (
    <>
      <Meta
        title={"Career - Bleeding Edge"}
        description={
          "Discover the cutting edge of career development with our Bleeding Edge resources. Stay ahead of the curve and advance your career like never before."
        }
      />
      <CareerHero />
      <CareerFewThings />
      <CareerFindPositions />
      <CareerWhoWeAre />
      <CareerWhyUs />
      <CareerGlobal />
      <ContactForm />
      <FAQ />
    </>
  );
};

export default CareerPage;
