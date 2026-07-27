// Placeholder business details — replace before launch.
export const business = {
  name: "MedLink Transport LLC",
  phoneDisplay: "(206) 555-0142",
  phoneHref: "tel:+12065550142",
  email: "info@medlinktransport.com",
  hours: "Monday – Sunday, 6:00 AM – 9:00 PM",
  hoursNote: "Transportation is available by scheduled appointment.",
  areas: [
    "Seattle",
    "Bellevue",
    "Kent",
    "Renton",
    "Auburn",
    "Federal Way",
    "Shoreline",
    "Lynnwood",
    "Edmonds",
    "Everett",
    "Mountlake Terrace",
    "Mukilteo",
    "Bothell",
    "Mill Creek",
  ],
  counties: "King and Snohomish Counties, Washington",
} as const;

export const nav = [
  { href: "#services", label: "Services" },
  { href: "#medicaid", label: "Medicaid" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#service-area", label: "Service Area" },
  { href: "#contact", label: "Contact" },
] as const;

export const services = [
  "Medical appointments",
  "Dialysis treatments",
  "Physical therapy",
  "Chemotherapy and radiation appointments",
  "Hospital discharge transportation",
  "Nursing homes",
  "Assisted living communities",
  "Adult family homes",
  "Rehabilitation centers",
  "Routine healthcare visits",
  "Wheelchair-accessible transportation",
] as const;

export const whyChooseUs = [
  "Licensed and insured",
  "CPR & First Aid certified drivers",
  "Professional and courteous staff",
  "Clean, comfortable, wheelchair-accessible vehicles",
  "Safe door-to-door assistance",
  "Reliable scheduling",
  "On-time pickups",
  "Compassionate customer service",
  "Serving King & Snohomish Counties",
  "Dedicated to treating every passenger with dignity and respect",
] as const;

export const howItWorks = [
  {
    step: "1",
    title: "Call our office",
    description: "Call our office to schedule your transportation.",
  },
  {
    step: "2",
    title: "Share your details",
    description:
      "Provide your pickup location, destination, appointment time, and any mobility needs.",
  },
  {
    step: "3",
    title: "We confirm your ride",
    description: "We'll confirm your ride and provide pickup details.",
  },
  {
    step: "4",
    title: "We get you there safely",
    description:
      "Our professional driver will arrive on time and safely transport you to your destination.",
  },
] as const;

export const whoWeServe = [
  "Seniors",
  "Individuals with disabilities",
  "Wheelchair users",
  "Medicaid clients",
  "Hospitals",
  "Medical clinics",
  "Dialysis centers",
  "Rehabilitation facilities",
  "Adult family homes",
  "Assisted living communities",
  "Caregivers and family members arranging transportation",
] as const;
