import { CallButton } from "./CallButton";
import { LogoMark } from "./Logo";
import { SeattleSkyline } from "./SeattleSkyline";
import { business } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-background"
    >
      {/* Seattle skyline at dusk — bold illustrated PNW backdrop, not a stock photo */}
      <SeattleSkyline className="pointer-events-none absolute inset-x-0 bottom-0 h-72 w-full sm:h-[26rem]" />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center px-4 pt-20 pb-96 text-center sm:px-6 sm:pt-28 sm:pb-[30rem]">
        <h1
          id="hero-heading"
          className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
        >
          <LogoMark decorative className="h-14 w-14 sm:h-16 sm:w-16" />
          <span className="font-display text-4xl font-bold text-foreground sm:text-5xl">
            MedLink Transport
          </span>
        </h1>

        <p className="mt-6 max-w-lg text-lg font-medium leading-relaxed text-foreground">
          {business.tagline}
        </p>

        <div className="mt-10">
          <CallButton />
        </div>

        <p className="mt-4 text-sm font-medium text-foreground">
          Contact details shown are placeholders for this preview — update
          before launch.
        </p>
      </div>
    </section>
  );
}
