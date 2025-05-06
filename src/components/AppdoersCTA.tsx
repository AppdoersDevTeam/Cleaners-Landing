import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const AppdoersCTA = () => {
  return (
    <section className="relative py-16 bg-gradient-to-r from-clean-light-blue to-clean-light-green">
      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-6">
            <div className="flex items-center justify-center gap-2">
              <img src="/favicon.png" alt="Appdoers Logo" className="h-8 w-auto" />
              <span className="text-gray-600 font-medium">This template was designed by Appdoers</span>
            </div>
            
            <h2 className="text-3xl font-bold text-gray-800">
              Want something like this for your business?
            </h2>
            
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transform your online presence with a custom website that converts visitors into customers. Our expert team will help you stand out in the digital landscape.
            </p>

            <Button asChild size="lg" className="bg-clean-blue hover:bg-clean-blue/90 text-white">
              <Link to="https://appdoers.co.nz/contact" target="_blank" rel="noopener noreferrer">
                Book a Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppdoersCTA; 