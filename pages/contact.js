import ContactOffice from "@/components/Contact/ContactOffice";
import ContactForm from "@/components/Home/ContactForm";
import FAQ from "@/components/Home/FAQ";
import Meta from "@/utils/Meta";
import React from "react";

const contact = () => {
  return (
    <>
      <Meta
        title={"Contact Us - Bleeding Edge"}
        description={
          "Get in touch with Bleeding Edge by using our easy-to-use contact form or find our contact details on this page. Our team is ready to answer any questions you have about our cutting-edge products and services. Contact us today and discover how we can help take your business to the bleeding edge of innovation."
        }
      />
      <ContactForm />
      <ContactOffice />
      <FAQ />
    </>
  );
};

export default contact;
