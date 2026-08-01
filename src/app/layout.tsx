import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MedLink Transport LLC | Non-Emergency Medical Transportation",
  description:
    "Safe, reliable non-emergency medical transportation for patients, seniors, and individuals with disabilities throughout King and Snohomish Counties, Washington. Wheelchair accessible. Medicaid accepted.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-full bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
