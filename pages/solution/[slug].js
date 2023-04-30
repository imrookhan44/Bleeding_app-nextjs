import BestWork from "@/components/Home/BestWork";
import Brands from "@/components/Home/Brands";
import ContactForm from "@/components/Home/ContactForm";
import FAQ from "@/components/Home/FAQ";
import Technologies from "@/components/Home/Technologies";
import Testimonial from "@/components/Home/Testimonial";
import SolutionAnim from "@/components/Solution/SolutionAnim";
import SolutionGames from "@/components/Solution/SolutionGames";
import SolutionHero from "@/components/Solution/SolutionHero";
import SolutionSteps from "@/components/Solution/SolutionSteps";
import SolutionWorking from "@/components/Solution/SolutionWorking";
import SolutionWhyUs from "@/components/Solution/WhyUs";
import Meta from "@/utils/Meta";
import faqs from "@/utils/faqs-solution";
import solutions from "@/utils/solutions";

import { useRouter } from "next/router";
import React from "react";

export default function SolutionItem({content}) {
  // const router = useRouter();
  // const { slug } = router.query;
  // const content = solutions[slug];
  return (
    <>
       <Meta title={`${content?.title} Development Company`}  description={content?.description}/>
      <SolutionHero content={content} />
      <SolutionAnim title={content?.title} />
      <SolutionSteps title={content?.title} />
      <SolutionGames />
      <Technologies />
      <SolutionWorking />
      <SolutionWhyUs />
      <Testimonial />
      <BestWork />
      <Brands />
      <ContactForm />
      <FAQ questions={faqs(content?.title)} />
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const { slug } = params;
  const content = solutions[slug];

  return {
    props: {
      content,
    },
  };
};

// export default SolutionItem;
