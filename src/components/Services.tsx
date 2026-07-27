import { services } from "@/lib/content";

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="services-heading"
          className="max-w-2xl text-3xl font-bold text-foreground sm:text-4xl"
        >
          Our Services
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          We provide transportation for a wide range of medical and
          healthcare-related needs.
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li
              key={service}
              className="flex items-start gap-3 rounded-lg border border-border bg-white p-5"
            >
              <CheckIcon />
              <span className="text-base font-medium text-foreground">
                {service}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mt-0.5 h-5 w-5 shrink-0 text-primary"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
