import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import HeaderTwo from "@/components/HeaderTwo";
import HomeHero from "@/components/Home/HomeHero";
import OurService from "@/components/Home/OurService";
import BestWork from "@/components/Home/BestWork";
import OurProcess from "@/components/Home/OurProcess";
import WhyUs from "@/components/Home/WhyUs";
import Testimonial from "@/components/Home/Testimonial";
import Technologies from "@/components/Home/Technologies";
import Brands from "@/components/Home/Brands";
import ContactForm from "@/components/Home/ContactForm";
import FAQ from "@/components/Home/FAQ";
import Meta from "@/utils/Meta";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Meta
        title={
          "Quality iOS & Android Games Development Company in Dubai , UAE & Lahore , Pakistan"
        }
        description={
          "Looking for a reliable game development company for iOS and Android platforms in Dubai, UAE or Lahore, Pakistan? Look no further than our top-quality game development services! We specialize in creating engaging and entertaining mobile games that will keep your audience hooked. Contact us today to learn more about our game development services and how we can help bring your vision to life"
        }
      />
      <>
        <HomeHero />
        <OurService />
        <BestWork />
        <OurProcess />
        <WhyUs />
        <Technologies />
        <Testimonial />
        <Brands />
        <ContactForm />
        <FAQ />
      </>
    </>
  );
}
