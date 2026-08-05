import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coolmateco.com"),

  title:
    "Coolmate Maintenance & Solutions Co. | Air Conditioning Installation, Repair & VRF Services",

  description:
    "Coolmate Maintenance & Solutions Co. provides professional air conditioning installation, repair, preventive maintenance, chemical cleaning, troubleshooting, and VRF services for residential, commercial, and industrial clients in Cavite, Metro Manila, Laguna, Batangas, and nearby areas.",

  keywords: [
    "Air Conditioning",
    "Aircon Installation",
    "Aircon Repair",
    "Preventive Maintenance",
    "Chemical Cleaning",
    "VRF Services",
    "HVAC",
    "Mitsubishi Electric VRF",
    "Commercial Air Conditioning",
    "Residential Air Conditioning",
    "Industrial HVAC",
    "Air Conditioning Cavite",
    "Air Conditioning Imus",
    "Air Conditioning Metro Manila",
    "Coolmate Maintenance and Solutions Co.",
  ],

  authors: [
    {
      name: "Coolmate Maintenance & Solutions Co.",
    },
  ],

  creator: "Coolmate Maintenance & Solutions Co.",

  publisher: "Coolmate Maintenance & Solutions Co.",

  alternates: {
    canonical: "https://coolmateco.com",
  },

  openGraph: {
    title:
      "Coolmate Maintenance & Solutions Co. | Air Conditioning Installation, Repair & VRF Services",

    description:
      "Professional HVAC solutions including installation, repair, preventive maintenance, chemical cleaning, troubleshooting, and VRF services.",

    url: "https://coolmateco.com",

    siteName: "Coolmate Maintenance & Solutions Co.",

    locale: "en_PH",

    type: "website",

    images: [
      {
        url: "/images/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Coolmate Maintenance & Solutions Co.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Coolmate Maintenance & Solutions Co. | Air Conditioning Installation, Repair & VRF Services",

    description:
      "Professional HVAC services in Cavite, Metro Manila, Laguna, and nearby areas.",

    images: ["/images/logo/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: "Coolmate Maintenance & Solutions Co.",
    image: "https://coolmateco.com/images/logo/logo.png",
    "@id": "https://coolmateco.com",
    url: "https://coolmateco.com",
    telephone: "+639959279906",
    email: "info@coolmateco.com",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Block 9 Lot 28 Atis St., The Legian 1 Phase A, Carsadang Bago II",
      addressLocality: "Imus",
      addressRegion: "Cavite",
      postalCode: "4103",
      addressCountry: "PH",
    },

    openingHours: "Mo-Sa 08:00-17:00",

    priceRange: "₱₱",

    areaServed: [
      "Imus",
      "Bacoor",
      "Dasmariñas",
      "General Trias",
      "Silang",
      "Trece Martires",
      "Cavite",
      "Metro Manila",
      "Laguna",
      "Batangas",
    ],

    sameAs: [
      "https://www.facebook.com/profile.php?id=61580222981185",
    ],

    serviceType: [
      "Air Conditioning Installation",
      "Air Conditioning Repair",
      "Preventive Maintenance",
      "Chemical Cleaning",
      "VRF Services",
      "Air Conditioning Troubleshooting",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {children}
      </body>
    </html>
  );
}