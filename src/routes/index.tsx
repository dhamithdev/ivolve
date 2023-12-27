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

import TheirWordsSection from "~/components/theirWordsSection/TheirWordsSection";
import TruestSection from "~/components/truestSection/TruestSection";
import YourIdeaSection from "~/components/yourIdeaSection/YourIdeaSection";

export default component$(() => {
  return (
    <main class="max-w-[1920px] mx-auto relative overflow-hidden">
      <Navbar/>
      <HeroSection/>
       <TruestSection/>
      <DiscoverySection/>
      <ElevateSection/>
      {/* <DigitalSection/>
      <YourIdeaSection/>
      <JourneySection/>  */}
      <TheirWordsSection/>
      {/* <SheduleCall/>
      <Footer/> */}

    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
