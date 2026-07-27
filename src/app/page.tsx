import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Medicaid } from "@/components/Medicaid";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { HoursAndArea } from "@/components/HoursAndArea";
import { HowItWorks } from "@/components/HowItWorks";
import { WhoWeServe } from "@/components/WhoWeServe";
import { Commitment } from "@/components/Commitment";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-5 focus:py-3 focus:text-white"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Services />
        <Medicaid />
        <WhyChooseUs />
        <HoursAndArea />
        <HowItWorks />
        <WhoWeServe />
        <Commitment />
      </main>
      <Footer />
    </>
  );
}
