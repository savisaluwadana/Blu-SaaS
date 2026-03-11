import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blu SaaS — Enterprise Software, Reimagined",
  description:
    "Discover Blu's suite of enterprise SaaS solutions. HRIS, POS, Accounting, ERP, Inventory Management, CRM, and more — all built for the modern enterprise.",
  keywords: [
    "SaaS",
    "enterprise software",
    "HRIS",
    "POS",
    "accounting",
    "ERP",
    "inventory management",
    "CRM",
    "cloud software",
  ],
  openGraph: {
    title: "Blu SaaS — Enterprise Software, Reimagined",
    description:
      "Discover Blu's complete suite of cloud-native enterprise solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
