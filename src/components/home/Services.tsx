
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "House Cleaning",
      description: "Regular or one-time cleaning services for your home, keeping it spotless and fresh.",
      icon: (
        <svg className="h-12 w-12 text-clean-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      link: "/services#house-cleaning",
    },
    {
      id: 2,
      title: "Office Cleaning",
      description: "Professional cleaning for your business premises to maintain a productive environment.",
      icon: (
        <svg className="h-12 w-12 text-clean-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      link: "/services#office-cleaning",
    },
    {
      id: 3,
      title: "Deep Cleaning",
      description: "Thorough cleaning of hard-to-reach areas and stubborn stains for a completely refreshed space.",
      icon: (
        <svg className="h-12 w-12 text-clean-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      link: "/services#deep-cleaning",
    },
    {
      id: 4,
      title: "End of Lease Cleaning",
      description: "Get your full bond back with our comprehensive end of lease cleaning service.",
      icon: (
        <svg className="h-12 w-12 text-clean-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      link: "/services#end-of-lease",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-secondary mb-4">Our Cleaning Services</h2>
          <p className="paragraph">
            We offer a wide range of professional cleaning services tailored to meet your specific needs, whether it's for your home or business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div key={service.id} className="service-card group">
              <div className="text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="inline-flex items-center text-clean-blue hover:text-clean-blue/80 transition-colors"
                >
                  Learn more 
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="btn-primary px-8"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
