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

const siteUrl = "https://www.coolmateco.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

title: "Coolmate Maintenance & Solutions Co. | Aircon Services Philippines",

  description:
    "Coolmate Maintenance & Solutions Co. provides professional air conditioning preventive maintenance, troubleshooting, repair, cleaning, sales, and installation services for residential, commercial, and industrial clients in Cavite, Metro Manila, Laguna, Batangas, and nearby areas.",

  authors: [
    {
      name: "Coolmate Maintenance & Solutions Co.",
    },
  ],

  creator: "Coolmate Maintenance & Solutions Co.",
  publisher: "Coolmate Maintenance & Solutions Co.",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title:
      "Coolmate Maintenance & Solutions Co. | Aircon Services Philippines",

    description:
      "Professional air conditioning preventive maintenance, troubleshooting, repair, cleaning, sales, and installation services across Cavite, Metro Manila, Laguna, Batangas, and nearby areas.",

    url: siteUrl,

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
      "Coolmate Maintenance & Solutions Co. | Aircon Services Philippines",

    description:
      "Professional air conditioning preventive maintenance, troubleshooting, repair, cleaning, sales, and installation services.",

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

    url: siteUrl,

    "@id": siteUrl,

    image: `${siteUrl}/images/logo/logo.png`,

    telephone: "+639959279906",

    email: "info@coolmateco.com",

    priceRange: "₱₱",

    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Block 9 Lot 28 Atis St., The Legian 1 Phase A, Carsadang Bago II",
      addressLocality: "Imus",
      addressRegion: "Cavite",
      postalCode: "4103",
      addressCountry: "PH",
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
    ],

    areaServed: [
      {
        "@type": "City",
        name: "Imus",
      },
      {
        "@type": "City",
        name: "Bacoor",
      },
      {
        "@type": "City",
        name: "Dasmariñas",
      },
      {
        "@type": "City",
        name: "General Trias",
      },
      {
        "@type": "City",
        name: "Silang",
      },
      {
        "@type": "City",
        name: "Trece Martires",
      },
      {
        "@type": "AdministrativeArea",
        name: "Cavite",
      },
      {
        "@type": "AdministrativeArea",
        name: "Metro Manila",
      },
      {
        "@type": "AdministrativeArea",
        name: "Laguna",
      },
      {
        "@type": "AdministrativeArea",
        name: "Batangas",
      },
    ],

    serviceType: [
      "Air Conditioning Preventive Maintenance",
      "Air Conditioning Troubleshooting",
      "Air Conditioning Repair",
      "Air Conditioning Cleaning",
      "Air Conditioning Sales",
      "Air Conditioning Installation",
      "VRF Services",
    ],

    sameAs: [
      "https://www.facebook.com/profile.php?id=61580222981185",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
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