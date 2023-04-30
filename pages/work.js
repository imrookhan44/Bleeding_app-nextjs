import ContactForm from "@/components/Home/ContactForm";
import FAQ from "@/components/Home/FAQ";
import WorkCards from "@/components/Work/WorkCards";
import WorkHero from "@/components/Work/WorkHero";
import Meta from "@/utils/Meta";
import React from "react";

const work = () => {
  return (
    <>
      <Meta title={"Our Work - Bleeding Edge"} />
      <WorkHero />
      <WorkCards />
      <ContactForm />
      <FAQ />
    </>
  );
};

export default work;
