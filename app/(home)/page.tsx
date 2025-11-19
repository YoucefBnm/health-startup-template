import { About } from "@/components/sections/about";
import { CTA } from "@/components/sections/cta";
import { Features } from "@/components/sections/features";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Plans } from "@/components/sections/plans";
import { Testimonials } from "@/components/sections/testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Features />
      <Plans />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
