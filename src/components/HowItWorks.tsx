import { howItWorks } from "@/lib/content";

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-surface"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2
          id="how-it-works-heading"
          className="max-w-2xl text-3xl font-bold text-foreground sm:text-4xl"
        >
          How It Works
        </h2>

        <ol className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item) => (
            <li key={item.step} className="relative pl-16">
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white"
              >
                {item.step}
              </span>
              <h3 className="text-lg font-bold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-base text-muted">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
