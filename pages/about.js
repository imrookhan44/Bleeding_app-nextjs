import AboutCards from "@/components/About/AboutCards";
import AboutHero from "@/components/About/AboutHero";
import AboutIndustries from "@/components/About/AboutIndustries";
import AboutSquad from "@/components/About/AboutSquad";
import AboutValues from "@/components/About/AboutValues";
import BestWork from "@/components/Home/BestWork";
import Brands from "@/components/Home/Brands";
import ContactForm from "@/components/Home/ContactForm";
import FAQ from "@/components/Home/FAQ";
import Technologies from "@/components/Home/Technologies";
import Testimonial from "@/components/Home/Testimonial";
import Meta from "@/utils/Meta";
import React from "react";

const about = () => {
  return (
    <>
      <Meta
        title={"About Us - Bleeding Edge"}
        description={
          "Discover who we are and what sets us apart at Bleeding Edge. Our innovative approach and cutting-edge solutions are sure to exceed your expectations. Learn more now."
        }
      />
      <AboutHero />
      <AboutCards />
      <AboutValues />
      <AboutSquad />
      <AboutIndustries />
      <Technologies />
      <Testimonial />
      <BestWork />
      <Brands />
      <ContactForm />
      <FAQ />
    </>
  );
};

export default about;
