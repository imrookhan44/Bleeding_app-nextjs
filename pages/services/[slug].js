import { useRouter } from "next/router";
import React from "react";
import services from "../../utils/services";
import ServiceHero from "@/components/Services/ServiceHero";
import ServiceWhyUs from "@/components/Services/ServiceWhyUs";
import ServiceLatestGames from "@/components/Services/ServiceLatestGames";
import Brands from "@/components/Home/Brands";
import ContactForm from "@/components/Home/ContactForm";
import FAQ from "@/components/Home/FAQ";
import faqs from "../../utils/faqs-service";
import ServiceDescription from "@/components/Services/ServiceDescription";
import Meta from "@/utils/Meta";

export default function ServicesItems ({content}){
  
    return (
      <>
        {/* <Meta title={content?.title + " Development Company"}  /> */}
        <Meta title={`${content?.title} Development Company`}  description={content?.description}/>
        <ServiceHero title={content?.title} />
        <ServiceDescription contents={content?.content} />
        <ServiceWhyUs title={content?.title} />
        <ServiceLatestGames />
        <Brands />
        <ContactForm />
        <FAQ questions={faqs(content?.title)} />
      </>
    );

};

// export default ServicesItems;

export const getServerSideProps = async({params})=>{
const {slug}= params;
const content = services[slug];

return {
  props:{
    content
  }
}

}
