import { useState } from "react";
import { FooterSection } from "../screens/ElementLight/sections/FooterSection";
import { Button } from "../components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { PageHeader } from "../components/PageHeader";

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
}

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



  const contactInfo: ContactInfo[] = [
    {
      icon: <MapPin className="w-6 h-6 text-green-500" />,
      title: "Location",
      value: "No. 15/1/C, New Digana Road, Kundasale, Kandy, Sri Lanka",
    },
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      title: "Phone",
      value: "+94 77 225 0223",
    },
    {
      icon: <Mail className="w-6 h-6 text-green-500" />,
      title: "Email",
      value: "support@diferanciatours.com",
    },

  ];

  return (
    <div className="bg-white w-full ">
      <Navbar />
      <PageHeader
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        backgroundImage="https://www.diferanciatours.com/assets/img/bg-img/97.jpg"
      />

      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-zinc-100 rounded-lg p-6 sm:p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-1 flex-shrink-0">{info.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">
                      {info.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm break-words">
                      {info.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full mt-6 md:mt-8 h-64 sm:h-80 md:h-96 lg:h-[500px] bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d506581.01090487954!2d80.678981!3d7.279002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae361652e1cfc55%3A0xe8bfbbcde7f3aea1!2sDiferancia%20Tours%20(Pvt)%20Ltd!5e0!3m2!1sen!2sus!4v1769700603433!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </section>

      {/* Contact Info Cards */}


      {/* Get In Touch Section */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get in touch for personalized assistance. We're here to help and provide solutions tailored to your requirements.
            </p>
          </div>

          {/* Form Container */}
          <div className="bg-gray-100 rounded-lg p-8 md:p-12  mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="First Name*"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name*"
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Phone and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone*"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject*"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Write your message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-[90%] ml-11 bg-green-500 hover:bg-green-600 text-white font-semibold py-7 rounded-full text-lg transition-colors"
              >
                Send Message <span className="ml-2">→</span>
              </Button>
            </form>
          </div>
        </div>
      </section>
      <section className="w-full relative py-8 md:py-12">
        <div className="flex flex-wrap w-full items-center justify-center gap-6 md:gap-10 lg:gap-14 px-4 sm:px-6 md:px-12">
          {[
            {
              src: "https://www.diferanciatours.com/assets/img/bg-img/company-logo1.png",
              alt: "Airbnb",
            },
            {
              src: "https://www.diferanciatours.com/assets/img/bg-img/company-logo2.png",
              alt: "Booking.com",
            },
            {
              src: "https://www.diferanciatours.com/assets/img/bg-img/company-logo3.png",
              alt: "Trip.com",
            },
            {
              src: "https://www.diferanciatours.com/assets/img/bg-img/company-logo4.png",
              alt: "Expedia",
            },
            {
              src: "https://www.diferanciatours.com/assets/img/bg-img/company-logo5.png",
              alt: "Tripadvisor",
            },
            {
              src: "https://www.diferanciatours.com/assets/img/bg-img/company-logo6.png",
              alt: "Agoda",
            },
          ].map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="w-24 sm:w-28 md:w-32 h-auto object-contain transition-transform duration-300 hover:scale-110 cursor-pointer"
            />
          ))}
        </div>
      </section>
      <FooterSection />
    </div>
  );
};
