import Brands from "@/components/Home/Brands";
import ContactForm from "@/components/Home/ContactForm";
import FAQ from "@/components/Home/FAQ";
import ServiceAward from "@/components/Services/ServiceAward";
import ServiceHero from "@/components/Services/ServiceHero";
import ServiceLatestGames from "@/components/Services/ServiceLatestGames";
import ServiceTabs from "@/components/Services/ServiceTabs";
import ServiceWhyUs from "@/components/Services/ServiceWhyUs";
import Meta from "@/utils/Meta";
import React from "react";

const services = () => {
  return (
    <>
      <Meta
        title={"Services by Bleeding Edge"}
        description={
          "With Bleeding Edge Services, you'll gain access to the latest and most innovative solutions available. Our team of experts is dedicated to staying at the forefront of technology to help you achieve your goals."
        }
      />
      <ServiceHero />
      <ServiceAward />
      <ServiceTabs />
      <ServiceWhyUs />
      <ServiceLatestGames />
      <Brands />
      <ContactForm />
      <FAQ />
    </>
  );
};

export default services;
