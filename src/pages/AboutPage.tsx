import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AppdoersCTA from "@/components/AppdoersCTA";
import { Link } from "react-router-dom";
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

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & Manager",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      description: "With over 15 years of experience in the cleaning industry, Sarah founded Appdoers Cleaners with a mission to provide exceptional cleaning services with a personal touch.",
    },
    {
      name: "Michael Chen",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      description: "Michael ensures all cleaning operations run smoothly and efficiently. He's responsible for training, quality control, and client satisfaction.",
    },
    {
      name: "Emma Rodriguez",
      role: "Customer Service",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      description: "Emma is the friendly voice you'll hear when you call us. She handles bookings, client inquiries, and makes sure every customer's needs are met.",
    },
  ];

  const values = [
    {
      title: "Quality",
      description: "We take pride in our work and strive for excellence in every cleaning job. Our attention to detail ensures a spotless result every time.",
      icon: (
        <svg className="h-12 w-12 text-clean-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Reliability",
      description: "You can count on us to show up on time, every time. We're professional, dependable, and committed to delivering consistent service.",
      icon: (
        <svg className="h-12 w-12 text-clean-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Eco-Friendly",
      description: "We care about the environment and your health. That's why we use eco-friendly cleaning products that are safe for your family and pets.",
      icon: (
        <svg className="h-12 w-12 text-clean-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Integrity",
      description: "We're honest, transparent, and ethical in all our business practices. We treat your home or office with the utmost respect and care.",
      icon: (
        <svg className="h-12 w-12 text-clean-blue mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Header Section */}
        <section className="bg-clean-light-blue py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-primary mb-6">About Appdoers Cleaners</h1>
              <p className="paragraph mb-8">
                We're a local cleaning company dedicated to providing exceptional cleaning services to homes and businesses in New Zealand and surrounding areas.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <ImageWithWatermark
                  src="https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                  alt="Cleaning team"
                  className="rounded-lg shadow-lg object-cover h-[400px] w-full"
                />
              </div>
              <div className="space-y-6">
                <h2 className="heading-secondary">Our Story</h2>
                <p className="paragraph">
                  Appdoers Cleaners was founded in 2015 with a simple mission: to provide high-quality cleaning services that people can trust. What started as a small, family-owned business has grown into a trusted name in the local community.
                </p>
                <p className="paragraph">
                  Our founder, Sarah Johnson, had spent years working in the cleaning industry and saw an opportunity to create a cleaning service that truly cared about its clients and delivered exceptional results every time.
                </p>
                <p className="paragraph">
                  Today, we're proud to serve hundreds of homes and businesses in New Zealand and the surrounding areas, with a team of dedicated cleaning professionals who share our commitment to quality and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-clean-light-green">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-secondary mb-4">Our Values</h2>
              <p className="paragraph">
                At Appdoers Cleaners, we're guided by a set of core values that inform everything we do. These principles help us deliver consistent, high-quality service to all our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="service-card text-center">
                  <div className="flex justify-center">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="py-16">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-secondary mb-4">Meet Our Team</h2>
              <p className="paragraph">
                Our team members are the heart of our business. Each member is carefully selected for their skills, experience, and dedication to providing excellent service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-center mb-1">{member.name}</h3>
                  <p className="text-clean-blue text-center mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="heading-secondary mb-4">Our Certifications</h2>
              <p className="paragraph">
                We're committed to maintaining the highest industry standards. Our team is fully trained and certified in the latest cleaning techniques and safety protocols.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="h-20 w-20 mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-16 w-16 text-clean-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Certified Professional Cleaners</h3>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="h-20 w-20 mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-16 w-16 text-clean-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Eco-Friendly Certified</h3>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="h-20 w-20 mx-auto mb-4 flex items-center justify-center">
                  <svg className="h-16 w-16 text-clean-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Health & Safety Compliant</h3>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-clean-blue text-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Service?</h2>
              <p className="text-lg mb-8">
                Book a cleaning service today and see why New Zealand residents trust us with their homes and businesses.
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

        {/* Appdoers CTA */}
        <AppdoersCTA />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
