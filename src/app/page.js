import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import UniqueFeature from "@/components/UniqueFeature";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <UniqueFeature />
      <Services />
      <Packages />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />

    </main>
  );
}
