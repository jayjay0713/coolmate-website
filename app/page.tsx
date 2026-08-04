import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import Expertise from "@/components/Expertise";
import TrustedBy from "@/components/TrustedBy";
import DownloadProfile from "@/components/DownloadProfile";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Expertise />
      <Services />
      <WhyChooseUs />
      <FeaturedProjects />
      <TrustedBy />
      <DownloadProfile />   
      <Footer />
    </>
  );
}