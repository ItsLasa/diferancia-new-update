import { useState } from "react";
import { FooterSection } from "../screens/ElementLight/sections/FooterSection";
import { Button } from "../components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const ContactPage = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "123 Travel Street, Adventure City, AC 12345",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@diferanciatours.com",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM, Sun: Closed",
    },
  ];

  return (
    <div className="bg-white w-full pt-28 md:pt-32">
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#161920] mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-[#555555] mb-12 max-w-2xl">
            Have questions about our destinations or packages? We'd love to hear from you. Reach out to our team
            and we'll be happy to help plan your next adventure.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="p-6 bg-[#f9f9f9] rounded-xl hover:shadow-lg transition-shadow">
                  <Icon className="w-8 h-8 text-[#3cb371] mb-4" />
                  <h3 className="font-bold text-[#161920] mb-2">{info.title}</h3>
                  <p className="text-[#555555] text-sm">{info.details}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#161920] mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3cb371] transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#161920] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3cb371] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#161920] mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3cb371] transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#161920] mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3cb371] transition-colors"
                  >
                    <option value="">Select subject</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="booking">Booking Help</option>
                    <option value="custom">Custom Package</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#161920] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3cb371] transition-colors resize-none"
                  placeholder="Tell us about your travel dreams..."
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-[#3cb371] hover:bg-[#2ea05e] text-white font-bold rounded-full transition-colors"
              >
                Send Message
              </Button>
            </form>

            <div className="space-y-8">
              <div className="bg-[#f9f9f9] p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#161920] mb-4">Quick Response</h3>
                <p className="text-[#555555] mb-4">
                  We typically respond to inquiries within 24 hours. For urgent matters, please call us directly.
                </p>
                <div className="space-y-2">
                  <p className="text-[#555555]">
                    <span className="font-semibold">Headquarters:</span> Available 9AM-6PM EST
                  </p>
                  <p className="text-[#555555]">
                    <span className="font-semibold">Support Team:</span> Available 24/7 during your travels
                  </p>
                </div>
              </div>

              <div className="bg-[#f9f9f9] p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#161920] mb-4">Follow Us</h3>
                <p className="text-[#555555] mb-6">
                  Stay updated with our latest destinations and travel tips on social media.
                </p>
                <div className="flex gap-4">
                  {["Facebook", "Instagram", "Twitter", "LinkedIn"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="inline-block px-4 py-2 bg-[#3cb371] hover:bg-[#2ea05e] text-white rounded-lg font-semibold text-sm transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
