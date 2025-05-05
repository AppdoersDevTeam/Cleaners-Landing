
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-clean-blue text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a Cleaner Space?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Book our professional cleaning services today and experience the difference. 
            We provide personalized cleaning solutions for homes and businesses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-clean-blue hover:bg-gray-100">
              <Link to="/booking">Book Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-clean-blue hover:bg-blue-700 hover:text-white">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
