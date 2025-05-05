
import { useState } from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      content: "Ashburton Cleaners have been cleaning my home for over a year now. They are reliable, thorough, and always go the extra mile. I would highly recommend their services to anyone looking for quality house cleaning.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      name: "Mark Williams",
      role: "Business Owner",
      content: "We've been using Ashburton Cleaners for our office space for the past six months. Their team is professional, efficient, and our office has never looked better. Great service at a competitive price.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 3,
      name: "Emily Chen",
      role: "Apartment Resident",
      content: "I used Ashburton Cleaners for my end of lease cleaning. They did an exceptional job, and I got my full bond back. The team was friendly, punctual, and extremely thorough. Highly recommend!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-clean-light-blue">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-secondary mb-4">What Our Clients Say</h2>
          <p className="paragraph">
            Don't just take our word for it. Here's what some of our satisfied clients have to say about our cleaning services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Desktop Testimonials */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover mr-3" 
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </blockquote>
              </div>
            ))}
          </div>

          {/* Mobile Testimonial Carousel */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 p-1">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-center mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="h-12 w-12 rounded-full object-cover mr-3" 
                        />
                        <div>
                          <h4 className="font-semibold">{testimonial.name}</h4>
                          <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                      <blockquote>
                        <p className="text-gray-600 italic">"{testimonial.content}"</p>
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            <div className="flex justify-center mt-6 gap-3">
              <button 
                onClick={prevTestimonial}
                className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
                aria-label="Previous testimonial"
              >
                <svg className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <div className="flex items-center gap-1">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === activeIndex ? 'w-6 bg-clean-blue' : 'w-2 bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial}
                className="p-2 bg-white rounded-full shadow hover:bg-gray-100"
                aria-label="Next testimonial"
              >
                <svg className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
