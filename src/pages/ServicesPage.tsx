import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const ServicesPage = () => {
  const services = [
    {
      id: "house-cleaning",
      title: "House Cleaning",
      description: "Our regular house cleaning service includes dusting, vacuuming, mopping, bathroom cleaning, kitchen cleaning, and tidying up. We use eco-friendly products that are safe for your family and pets.",
      features: [
        "All rooms dusted, vacuumed, and mopped",
        "Bathrooms thoroughly cleaned and sanitized",
        "Kitchen cleaned including appliance exteriors",
        "Beds made and linens changed upon request",
        "General tidying and organization"
      ],
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "office-cleaning",
      title: "Office Cleaning",
      description: "Keep your business premises clean and professional with our office cleaning service. We clean after hours to ensure minimal disruption to your business operations.",
      features: [
        "Reception and common areas cleaned",
        "Workstations dusted and sanitized",
        "Meeting rooms prepared for the next day",
        "Kitchen and break areas thoroughly cleaned",
        "Washrooms cleaned and restocked"
      ],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "deep-cleaning",
      title: "Deep Cleaning",
      description: "Our deep cleaning service is perfect for those times when your home needs extra attention. We focus on the areas that don't get cleaned regularly, removing built-up dirt and grime.",
      features: [
        "Inside cabinets and drawers cleaned",
        "Baseboards and crown molding dusted",
        "Window tracks and door frames cleaned",
        "Light fixtures and ceiling fans dusted",
        "Appliances deep cleaned inside and out"
      ],
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1774&q=80",
    },
    {
      id: "end-of-lease",
      title: "End of Lease Cleaning",
      description: "Moving out? Our end of lease cleaning service is designed to help you get your bond back. We follow real estate and property manager checklists to ensure nothing is missed.",
      features: [
        "Deep cleaning of all rooms and surfaces",
        "Oven and range hood degreased and cleaned",
        "Window cleaning inside and out",
        "Carpet steam cleaning available",
        "Garage and outdoor areas swept and cleaned"
      ],
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: "commercial-cleaning",
      title: "Commercial Cleaning",
      description: "Our commercial cleaning services are tailored to businesses of all sizes. We provide cleaning solutions for retail spaces, offices, medical facilities, and more.",
      features: [
        "Customized cleaning plans for your business",
        "Flexible scheduling options",
        "Trained and insured cleaning professionals",
        "Quality control inspections",
        "Green cleaning options available"
      ],
      image: "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1769&q=80",
    },
  ];

  // Handle anchor link scrolling
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <main>
        {/* Header Section */}
        <section className="bg-clean-light-blue py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-primary mb-6">Our Cleaning Services</h1>
              <p className="paragraph mb-8">
                We offer a wide range of professional cleaning services tailored to meet your specific needs, whether it's for your home or business.
              </p>
              <Button asChild size="lg" className="bg-clean-blue hover:bg-clean-blue/90">
                <Link to="/booking">Book a Service</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16">
          <div className="container-custom">
            <div className="space-y-24">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`flex flex-col ${index % 2 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 scroll-mt-24`}
                >
                  {/* Image */}
                  <div className="md:w-1/2">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-lg shadow-lg object-cover w-full h-[300px] md:h-[400px]"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-gray-700 mb-6">{service.description}</p>
                    <h3 className="font-semibold mb-3">What's included:</h3>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <svg className="h-5 w-5 text-clean-green mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="bg-clean-blue hover:bg-clean-blue/90 self-start">
                      <Link to="/booking">Book This Service</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-clean-blue text-white py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Not Sure What You Need?</h2>
              <p className="text-lg mb-8">
                Contact us for a personalized cleaning plan or request a quote tailored to your specific cleaning needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild variant="secondary" size="lg" className="bg-white text-clean-blue hover:bg-gray-100">
                  <Link to="/booking">Request a Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-clean-blue hover:bg-blue-700 hover:text-white">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
