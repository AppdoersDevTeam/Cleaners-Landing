import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AppdoersCTA from "@/components/AppdoersCTA";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would be where you send the data to a backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 text-clean-blue" />,
      title: "Phone",
      details: "(03) 123 4567",
      action: {
        text: "Call us",
        url: "tel:+61312345678",
      },
    },
    {
      icon: <Mail className="h-5 w-5 text-clean-blue" />,
      title: "Email",
      details: "info@appdoerscleaners.com",
      action: {
        text: "Send email",
        url: "mailto:info@appdoerscleaners.com",
      },
    },
    {
      icon: <MapPin className="h-5 w-5 text-clean-blue" />,
      title: "Office",
      details: "123 Main Street, New Zealand, VIC 3147",
      action: {
        text: "Get directions",
        url: "https://maps.google.com/?q=New Zealand+VIC+3147",
      },
    },
    {
      icon: <Clock className="h-5 w-5 text-clean-blue" />,
      title: "Hours",
      details: "Mon-Fri: 8am - 6pm, Sat: 9am - 2pm",
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
              <h1 className="heading-primary mb-6">Contact Us</h1>
              <p className="paragraph mb-8">
                Have questions about our services? Need a quote? Or just want to say hello? 
                Get in touch with our friendly team!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <Label htmlFor="name" className="block mb-2">Name</Label>
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email" className="block mb-2">Email</Label>
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
                        <Label htmlFor="phone" className="block mb-2">Phone</Label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="block mb-2">Subject</Label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Quote Request">Quote Request</option>
                        <option value="Booking Question">Booking Question</option>
                        <option value="Feedback">Feedback</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="block mb-2">Message</Label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-input"
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <Button 
                        type="submit" 
                        className="bg-clean-blue hover:bg-clean-blue/90 w-full md:w-auto"
                      >
                        Send Message
                      </Button>
                    </div>
                  </div>
                </form>
              </div>

              {/* Contact Info and Map */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 gap-6 mb-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex">
                      <div className="mt-1 mr-3">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg">{info.title}</h3>
                        <p className="text-gray-600 mb-1">{info.details}</p>
                        {info.action && (
                          <a 
                            href={info.action.url} 
                            className="text-clean-blue hover:text-clean-blue/80 text-sm"
                            target={info.action.url.startsWith("http") ? "_blank" : undefined}
                            rel={info.action.url.startsWith("http") ? "noreferrer" : undefined}
                          >
                            {info.action.text} →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="rounded-lg overflow-hidden shadow-md h-[300px]">
                  <iframe
                    title="Appdoers Cleaners Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12614.423376326225!2d145.082482!3d-37.8594953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66a73ebede88d%3A0x5045675218cce50!2sAshburton%20VIC%203147%2C%20Australia!5e0!3m2!1sen!2sus!4v1712232644127!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "How do I book a cleaning service?",
                    answer: "You can book a cleaning service by using our online booking form, calling us directly, or sending us an email. We'll get back to you promptly to confirm your booking.",
                  },
                  {
                    question: "What areas do you service?",
                    answer: "We provide cleaning services in New Zealand and surrounding suburbs within a 15km radius, including Auckland, Christchurch, Wellington, and Dunedin.",
                  },
                  {
                    question: "Do I need to provide cleaning supplies?",
                    answer: "No, we bring all necessary cleaning supplies and equipment. We use eco-friendly products that are safe for your family and pets.",
                  },
                  {
                    question: "Are you insured?",
                    answer: "Yes, we are fully insured for your peace of mind. Our cleaners are covered by liability insurance and workers' compensation.",
                  },
                  {
                    question: "How much does your cleaning service cost?",
                    answer: "Our pricing depends on the type of service, size of the property, and specific requirements. Contact us for a free quote tailored to your needs.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <AppdoersCTA />
      <Footer />
    </>
  );
};

export default ContactPage;
