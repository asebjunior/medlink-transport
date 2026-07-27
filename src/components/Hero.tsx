import { CallButton } from "./CallButton";
import { VanIllustration } from "./VanIllustration";
import { business } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-white"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.2fr_1fr] lg:gap-10 lg:py-28">
        <div>
          <h1
            id="hero-heading"
            className="text-balance max-w-2xl text-[clamp(2.25rem,4.4vw,3.25rem)] font-bold leading-[1.1] text-foreground"
          >
            Getting You to Your Healthcare Appointments—Safely and On Time
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            MedLink Transport LLC provides dependable, compassionate,
            professional non-emergency medical transportation to individuals
            who need safe, reliable rides to medical appointments. We serve
            patients, seniors, individuals with disabilities, healthcare
            providers, and Medicaid clients throughout King and Snohomish
            Counties.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <CallButton />
            <a
              href={`mailto:${business.email}`}
              className="text-lg font-semibold text-primary underline decoration-2 underline-offset-4 hover:text-primary-dark"
            >
              {business.email}
            </a>
          </div>
          <p className="mt-3 text-sm text-muted">
            Contact details shown are placeholders for this preview — update
            before launch.
          </p>
        </div>

        <div className="rounded-2xl bg-surface p-6 sm:p-10">
          <VanIllustration className="mx-auto h-auto w-full max-w-md" />
          <p className="mt-4 text-center text-sm text-muted">
            Illustration placeholder — replace with real fleet photography.
          </p>
        </div>
      </div>
    </section>
  );
}
