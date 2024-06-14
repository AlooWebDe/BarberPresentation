import React from "react";
import TopHero from "../TopHero/TopHero";
import About from "../About/About";
import AboutHero from "../AboutHero/AboutHero";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Features from "../Features/Features";
import Pricing from "../Pricing/Pricing";
import PromoVideo from "../PromoVideo/PromoVideo";
import Gallery from "../Gallery/Gallery";
import NewsLetter from "../Newsletter/NewsLetter";

export default function Home() {
  return (
    <>
      <TopHero />
      <About />
      <AboutHero />
      <Services />
      <Testimonial />
      <Features />
      <Pricing />
      <PromoVideo />
      <Gallery />
      <NewsLetter />
    </>
  );
}
