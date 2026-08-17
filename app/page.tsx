import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";
import Expertise from "@/components/Expertise";
import DownloadProfile from "@/components/DownloadProfile";
import FloatingMessenger from "@/components/FloatingMessenger";
import ServiceAreas from "@/components/ServiceAreas";


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