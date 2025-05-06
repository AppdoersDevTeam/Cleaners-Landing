import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AppdoersCTA from "@/components/AppdoersCTA";

const BookingPage = () => {
  const { toast } = useToast();
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: "",
    propertyType: "",
    date: null as Date | null,
    time: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleServiceSelect = (service: string) => {
    setFormData({
      ...formData,
      serviceType: service,
    });
    setFormStep(2);
  };

  const handlePropertySelect = (property: string) => {
    setFormData({
      ...formData,
      propertyType: property,
    });
    setFormStep(3);
  };

  const handleTimeSelect = (time: string) => {
    setFormData({
      ...formData,
      time,
    });
    setFormStep(4);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateSelect = (date: Date | undefined) => {
    setFormData({
      ...formData,
      date: date || null,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be where you send the data to a backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Booking Request Submitted",
      description: "We'll contact you shortly to confirm your booking.",
    });

    // Reset form
    setFormData({
      serviceType: "",
      propertyType: "",
      date: null,
      time: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    });
    setFormStep(1);
  };

  const timeSlots = [
    "Morning (8:00AM - 12:00PM)",
    "Afternoon (12:00PM - 4:00PM)",
    "Evening (4:00PM - 6:00PM)",
  ];

  // Go back one step
  const goBack = () => {
    if (formStep > 1) {
      setFormStep(formStep - 1);
    }
  };

  const services = [
    {
      id: "house",
      title: "House Cleaning",
      icon: (
        <svg className="h-8 w-8 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "office",
      title: "Office Cleaning",
      icon: (
        <svg className="h-8 w-8 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "deep",
      title: "Deep Cleaning",
      icon: (
        <svg className="h-8 w-8 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: "end-of-lease",
      title: "End of Lease",
      icon: (
        <svg className="h-8 w-8 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "commercial",
      title: "Commercial",
      icon: (
        <svg className="h-8 w-8 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  const properties = [
    {
      id: "apartment",
      title: "Apartment",
      icon: (
        <svg className="h-8 w-8 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "house",
      title: "House",
      icon: (
        <svg className="h-8 w-8 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "office",
      title: "Office",
      icon: (
        <svg className="h-8 w-8 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "commercial",
      title: "Commercial Space",
      icon: (
        <svg className="h-8 w-8 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        {/* Header Section */}
        <section className="bg-clean-light-blue py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-primary mb-6">Book a Cleaning Service</h1>
              <p className="paragraph mb-8">
                Fill out the form below to book a cleaning service or request a quote. 
                We'll get back to you shortly to confirm the details.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  {["Service", "Property", "Schedule", "Contact"].map((step, index) => (
                    <div key={index} className="text-center">
                      <div 
                        className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-1 ${
                          index + 1 === formStep ? "bg-clean-blue text-white" : 
                          index + 1 < formStep ? "bg-clean-green text-white" : 
                          "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {index + 1 < formStep ? (
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          index + 1
                        )}
                      </div>
                      <span className={`text-sm ${index + 1 <= formStep ? "text-gray-800" : "text-gray-400"}`}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="relative w-full bg-gray-200 h-2 rounded-full">
                  <div 
                    className="absolute top-0 left-0 h-2 bg-clean-blue rounded-full"
                    style={{ width: `${(formStep - 1) * 33.33}%` }}
                  ></div>
                </div>
              </div>

              {/* Step 1: Select Service */}
              {formStep === 1 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold mb-6">Select Service Type</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => handleServiceSelect(service.title)}
                        className={`p-4 rounded-lg border-2 hover:border-clean-blue flex flex-col items-center text-center transition-colors ${
                          formData.serviceType === service.title ? "border-clean-blue bg-clean-light-blue" : "border-gray-200"
                        }`}
                      >
                        {service.icon}
                        <span>{service.title}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Select Property Type */}
              {formStep === 2 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold mb-6">Select Property Type</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {properties.map((property) => (
                      <button
                        key={property.id}
                        onClick={() => handlePropertySelect(property.title)}
                        className={`p-4 rounded-lg border-2 hover:border-clean-blue flex flex-col items-center text-center transition-colors ${
                          formData.propertyType === property.title ? "border-clean-blue bg-clean-light-blue" : "border-gray-200"
                        }`}
                      >
                        {property.icon}
                        <span>{property.title}</span>
                      </button>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Button variant="outline" onClick={goBack}>Back</Button>
                  </div>
                </div>
              )}

              {/* Step 3: Select Date & Time */}
              {formStep === 3 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold mb-6">Select Date & Time</h2>
                  
                  <div className="mb-6">
                    <Label htmlFor="date" className="block mb-2">Select Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !formData.date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {formData.date ? format(formData.date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={formData.date || undefined}
                          onSelect={handleDateSelect}
                          initialFocus
                          disabled={(date) => 
                            date < new Date(new Date().setDate(new Date().getDate() - 1)) || 
                            date > new Date(new Date().setMonth(new Date().getMonth() + 2))
                          }
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  
                  <div className="mb-6">
                    <Label htmlFor="time" className="block mb-2">Select Time Slot</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => handleTimeSelect(slot)}
                          className={`p-3 rounded-lg border-2 hover:border-clean-blue text-center transition-colors ${
                            formData.time === slot ? "border-clean-blue bg-clean-light-blue" : "border-gray-200"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button variant="outline" onClick={goBack} className="mr-2">Back</Button>
                    <Button 
                      onClick={() => formData.date && formData.time ? setFormStep(4) : null}
                      disabled={!formData.date || !formData.time}
                      className="bg-clean-blue hover:bg-clean-blue/90"
                    >
                      Next
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 4: Contact Information */}
              {formStep === 4 && (
                <div className="animate-fade-in">
                  <h2 className="text-2xl font-bold mb-6">Your Contact Information</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <Label htmlFor="name" className="block mb-2">Full Name</Label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-input"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="block mb-2">Email Address</Label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-input"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="block mb-2">Phone Number</Label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="address" className="block mb-2">Address</Label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          placeholder="Service address"
                          value={formData.address}
                          onChange={handleChange}
                          className="form-input"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <Label htmlFor="message" className="block mb-2">Special Instructions (Optional)</Label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Any special instructions or requirements..."
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input min-h-[120px]"
                      ></textarea>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Booking Summary</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="grid grid-cols-2 gap-2">
                          <div className="text-gray-600">Service Type:</div>
                          <div>{formData.serviceType}</div>
                          
                          <div className="text-gray-600">Property Type:</div>
                          <div>{formData.propertyType}</div>
                          
                          <div className="text-gray-600">Date:</div>
                          <div>{formData.date ? format(formData.date, "PPP") : ""}</div>
                          
                          <div className="text-gray-600">Time:</div>
                          <div>{formData.time}</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button variant="outline" onClick={goBack} className="mr-2">Back</Button>
                      <Button 
                        type="submit" 
                        className="bg-clean-blue hover:bg-clean-blue/90"
                      >
                        Submit Booking
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <AppdoersCTA />
      <Footer />
    </>
  );
};

export default BookingPage;
