import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";
import AppdoersCTA from "@/components/AppdoersCTA";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <AppdoersCTA />
      </main>
      <Footer />
    </>
  );
};

export default Index;
