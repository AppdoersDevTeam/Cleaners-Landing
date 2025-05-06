import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import Footer from '@/components/layout/Footer';
import AppdoersCTA from '@/components/AppdoersCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <AppdoersCTA />
      <Footer />
    </>
  );
};

export default Home; 