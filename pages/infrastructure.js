import ContactForm from "@/components/Home/ContactForm";
import FAQ from "@/components/Home/FAQ";
import InfrastructureArchitecture from "@/components/Infrastructure/InfrastructureArchitecture";
import InfrastructureCards from "@/components/Infrastructure/InfrastructureCards";
import InfrastructureHero from "@/components/Infrastructure/InfrastructureHero";
import InfrastructureTabs from "@/components/Infrastructure/InfrastructureTabs";
import Meta from "@/utils/Meta";
import React from "react";

const infrastructure = () => {
  return (
    <>
      <Meta title={"Our Infrastructure - Bleeding Edge"} />
      <InfrastructureHero />
      <InfrastructureTabs />
      <InfrastructureArchitecture />
      <InfrastructureCards />
      <ContactForm />
      <FAQ />
    </>
  );
};

export default infrastructure;
