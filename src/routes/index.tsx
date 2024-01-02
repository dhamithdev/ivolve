import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import DigitalSection from "~/components/digitalSection/DigitalSection";
import DiscoverySection from "~/components/discoverySection/DiscoverySection";
import ElevateSection from "~/components/elevateSection/ElevateSection";
import Footer from "~/components/footer/Footer";
import HeroSection from "~/components/heroSection/HeroSection";
import JourneySection from "~/components/journeySection/JourneySection";
import Navbar from "~/components/navbar/Navbar";
import SheduleCall from "~/components/sheduleCallSection/SheduleCall";
import Test from "~/components/test/Test";



import TheirWordsSection from "~/components/theirWordsSection/TheirWordsSection";
import TruestSection from "~/components/truestSection/TruestSection";
import YourIdeaSection from "~/components/yourIdeaSection/YourIdeaSection";

export default component$(() => {
  return (
    <main class="max-w-[1920px] mx-auto ">
      <Navbar/>
      <HeroSection/>
      <TruestSection/>
      <DiscoverySection/>
      <ElevateSection/>
      <DigitalSection/>
      <YourIdeaSection/>
      <JourneySection/> 
      <TheirWordsSection/>
      <SheduleCall/>
      <Footer/>
      {/* <Test/> */}
            
    </main>
  );
});

export const head: DocumentHead = {
  title: "ivolve Global",
  meta: [
    {
      name: "description",
      content: "From pixel to code, we craft visually intuitive digital experiences, elevating your brand with a compelling digital presence where creativity meets functionality.",
    },
    //open grpah
    {
      property: 'og:title',
      content: 'ivolve Global',
    },
    {
      property: 'og:description',
      content: 'From pixel to code, we craft visually intuitive digital experiences, elevating your brand with a compelling digital presence where creativity meets functionality.',
    },
    {
      property: 'og:image',
      content: 'https://i.ibb.co/b2qjNbz/Screenshot-2023-12-28-234754.png',
    },
    {
      property: 'og:url',
      content: 'https://ivolve.vercel.app/',
    },
  ],
};
