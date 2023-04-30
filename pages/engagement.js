import EngagementHero from "@/components/Engagement/EngagementHero";
import EngagementModels from "@/components/Engagement/EngagementModels";
import Brands from "@/components/Home/Brands";
import ContactForm from "@/components/Home/ContactForm";
import FAQ from "@/components/Home/FAQ";
import Testimonial from "@/components/Home/Testimonial";
import Meta from "@/utils/Meta";
import React from "react";

const engagement = () => {
  return (
    <>
      <Meta title={"Engagement Model - Bleeding Edge"} />
      <EngagementHero />
      <EngagementModels />
      <Testimonial />
      <Brands />
      <ContactForm />
      <FAQ />
    </>
  );
};

export default engagement;
