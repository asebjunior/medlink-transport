import { CallButton } from "./CallButton";
import { business } from "@/lib/content";

export function Footer() {
  return (
    <footer id="contact" aria-labelledby="contact-heading" className="bg-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="text-center">
          <h2 id="contact-heading" className="text-3xl font-bold text-white sm:text-4xl">
            Schedule Your Ride Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Call our office to arrange safe, reliable transportation to your
            next medical appointment.
          </p>
          <div className="mt-8 flex justify-center">
            <CallButton />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-white/15 pt-10 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Contact
            </h3>
            <p className="mt-3 text-white">
              <a href={business.phoneHref} className="hover:underline">
                {business.phoneDisplay}
              </a>
            </p>
            <p className="mt-1 text-white">
              <a href={`mailto:${business.email}`} className="hover:underline">
                {business.email}
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Hours
            </h3>
            <p className="mt-3 text-white">{business.hours}</p>
            <p className="mt-1 text-white/80">{business.hoursNote}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white/60">
              Service Area
            </h3>
            <p className="mt-3 text-white/80">
              Proudly serving {business.counties}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-sm text-white/50 sm:text-left">
          <p>
            © {new Date().getFullYear()} {business.name}. Contact details and
            branding shown are placeholders for this preview.
          </p>
        </div>
      </div>
    </footer>
  );
}
