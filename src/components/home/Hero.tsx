import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const ImageWithWatermark = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  return (
    <div className="relative">
      <img src={src} alt={alt} className={className} />
      <div className="absolute bottom-2 right-2 pointer-events-none">
        <img 
          src="/logo.png" 
          alt="AppDoers Watermark" 
          className="w-20 opacity-70"
        />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-clean-light-blue to-clean-light-green">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="heading-primary">
              Professional Cleaning Services in New Zealand
            </h1>
            <p className="paragraph max-w-lg">
              We provide exceptional cleaning services for homes and businesses with trained professionals and eco-friendly products. Enjoy a spotless space without the hassle.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-clean-blue hover:bg-clean-blue/90 text-white px-8">
                <Link to="/booking">Book Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-clean-blue text-clean-blue hover:bg-clean-light-blue">
                <Link to="/services">Our Services</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-2 pt-2">
              <div className="flex items-center">
                <svg className="h-5 w-5 text-clean-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Trusted Professionals</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-clean-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Eco-Friendly Products</span>
              </div>
              <div className="flex items-center">
                <svg className="h-5 w-5 text-clean-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <ImageWithWatermark
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              alt="Clean home interior"
              className="rounded-lg shadow-lg object-cover h-[400px] w-full"
            />
          </div>
        </div>
      </div>
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" fill="white">
          <path d="M0,64L80,69.3C160,75,320,85,480,74.7C640,64,800,32,960,26.7C1120,21,1280,43,1360,53.3L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
