import type { Metadata } from "next";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import Expertise from "@/components/Expertise";
import DownloadProfile from "@/components/DownloadProfile";
import FloatingMessenger from "@/components/FloatingMessenger";
import ServiceAreas from "@/components/ServiceAreas";

export const metadata: Metadata = {
  title:
    "Aircon Services Philippines | Installation, Cleaning, Repair & Maintenance | Coolmate",
  description:
    "Coolmate provides professional aircon installation, cleaning, repair, troubleshooting, and preventive maintenance services for residential, commercial, and industrial clients in the Philippines.",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Expertise />
      <WhyChooseUs />
      <ServiceAreas />
      <DownloadProfile />
      <Footer />

      <FloatingMessenger />
    </>
  );
}