import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import DigitalSection from "~/components/digitalSection/DigitalSection";
import DiscoverySection from "~/components/discoverySection/DiscoverySection";
import ElevateSection from "~/components/elevateSection/ElevateSection";
import HeroSection from "~/components/heroSection/HeroSection";
import JourneySection from "~/components/journeySection/JourneySection";
import Navbar from "~/components/navbar/Navbar";
import Test from "~/components/test/Test";
import TruestSection from "~/components/truestSection/TruestSection";
import YourIdeaSection from "~/components/yourIdeaSection/YourIdeaSection";

export default component$(() => {
  return (
    <div class="">
      <Navbar/>
      <HeroSection/>
      <TruestSection/>
      <DiscoverySection/>
      <ElevateSection/>
      <DigitalSection/>
      <YourIdeaSection/>
      <JourneySection/>
      {/* <Test/> */}
    </div>
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
