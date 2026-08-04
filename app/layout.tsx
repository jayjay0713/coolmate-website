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

  title: {
    default: "Coolmate Maintenance & Solutions Co.",
    template: "%s | Coolmate Maintenance & Solutions Co.",
  },

  description:
    "Professional HVAC services in the Philippines specializing in air conditioning installation, preventive maintenance, repair, troubleshooting, chemical cleaning, and VRF systems.",

  keywords: [
    "Coolmate",
    "Coolmate Maintenance",
    "Aircon Repair",
    "Aircon Installation",
    "Preventive Maintenance",
    "Chemical Cleaning",
    "VRF Maintenance",
    "VRF Repair",
    "HVAC",
    "Split Type Aircon",
    "Commercial Air Conditioning",
    "Industrial Air Conditioning",
    "Philippines",
    "Imus Cavite",
  ],

  authors: [
    {
      name: "Coolmate Maintenance & Solutions Co.",
    },
  ],

  creator: "Coolmate Maintenance & Solutions Co.",
  publisher: "Coolmate Maintenance & Solutions Co.",

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  openGraph: {
    title: "Coolmate Maintenance & Solutions Co.",
    description:
      "Professional HVAC solutions for residential, commercial, and industrial clients throughout the Philippines.",
    url: "https://coolmateco.com",
    siteName: "Coolmate Maintenance & Solutions Co.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coolmate Maintenance & Solutions Co.",
      },
    ],
    locale: "en_PH",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Coolmate Maintenance & Solutions Co.",
    description:
      "Professional HVAC solutions for residential, commercial, and industrial clients.",
    images: ["/images/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}