import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import HeroSection from "~/components/heroSection/HeroSection";
import Navbar from "~/components/navbar/Navbar";

export default component$(() => {
  return (
    <div class="">
      <Navbar/>
      <HeroSection/>
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
