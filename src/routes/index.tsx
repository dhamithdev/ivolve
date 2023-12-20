import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import DigitalSection from "~/components/digitalSection/DigitalSection";
import DiscoverySection from "~/components/discoverySection/DiscoverySection";
import ElevateSection from "~/components/elevateSection/ElevateSection";
import HeroSection from "~/components/heroSection/HeroSection";
import Navbar from "~/components/navbar/Navbar";
import TruestSection from "~/components/truestSection/TruestSection";

export default component$(() => {
  return (
    <div class="">
      <Navbar/>
      <HeroSection/>
      <TruestSection/>
      <DiscoverySection/>
      <ElevateSection/>
      <DigitalSection/>
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
