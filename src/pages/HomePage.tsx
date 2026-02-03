import { useEffect, useState } from "react";
import { ChevronRight, Mail, MessageCircle, Phone, ArrowLeft, ArrowRight, MessageCircleMore } from "lucide-react";
import { AboutUsSection } from "../screens/ElementLight/sections/AboutUsSection";
import { DestinationsOverviewSection } from "../screens/ElementLight/sections/DestinationsOverviewSection";
import { FoodExperienceSection } from "../screens/ElementLight/sections/FoodExperienceSection/FoodExperienceSection";
import { PopularActivitySection } from "../screens/ElementLight/sections/PopularActivitySection/PopularActivitySection";
import { FooterSection } from "../screens/ElementLight/sections/FooterSection";
import { VideoSection } from "../screens/ElementLight/sections/VideoSection";

const heroSlides = [
  {
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/slider_1.jpg",
  },
  {
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/slider_2.jpg",
  },
  {
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/slider_3.jpg",
  },
  {
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/slider_4.jpg",
  },
];

export const HomePage = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white w-full">
      <section className="relative w-full h-[420px] sm:h-[480px] md:h-[560px] lg:h-[640px] overflow-hidden">
        {/* background slider images */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#161920]/95" />
        </div>

        {/* hero content */}
        <div className="relative h-full px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 flex ml-6 items-center">
          {/* left social icons bar */}
          <div className="hidden md:flex flex-col items-center gap-3 absolute left-0 top-1/2 -translate-y-1/2">
            <div className="w-px h-16 bg-white/10 mb-2" />
            <a
            href="tel:+94772250223"
              title="Call us"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-black/40 border border-white/10 text-white hover:bg-[#3cb371] transition-colors"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="mailto:support@diferanciatours.com"
              title="Email us"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-black/40 border border-white/10 text-white hover:bg-[#3cb371] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://m.me/profile.php?id=100063546514111"
              title="Send message"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-black/40 border border-white/10 text-white hover:bg-[#3cb371] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/94772250223"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-black/40 border border-white/10 text-white hover:bg-[#3cb371] transition-colors"
            >
              <MessageCircleMore className="w-4 h-4" />
            </a>
            <div className="w-px h-16 bg-white/10 mt-2" />
          </div>

          <div className="w-full max-w-7xl mx-auto">
            <div className="flex flex-col items-start gap-6 md:gap-7 w-full max-w-3xl">
              <h1 className="w-full font-extrabold text-white text-3xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-[60px] leading-tight drop-shadow-lg">
                DIFERANCIA TOURS
              </h1>
              <p className="w-full font-semibold text-green-400 text-xl sm:text-2xl md:text-[26px] leading-tight drop-shadow-md">
                Journey beyond the Happy
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-3">
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#3cb371] text-white text-sm md:text-base font-semibold shadow-lg hover:bg-[#35a063] transition-colors"
                >
                  About Us
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#111827] text-sm md:text-base font-semibold shadow-lg hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* slider controls */}
        <div className="absolute right-4 sm:right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
          <button
            type="button"
            onClick={() =>
              setCurrentSlide(
                (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
              )
            }
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#111827] shadow-lg hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() =>
              setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
            }
            className="flex items-center justify-center w-10 h-10 rounded-full bg-white text-[#111827] shadow-lg hover:bg-gray-100 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      
    
          <AboutUsSection />
       

      
     
        
        
          <VideoSection />
        

      <div
        className="relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative">
          <DestinationsOverviewSection />
        </div>
      </div>

      <div
        className="relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url(https://plus.unsplash.com/premium_photo-1695297516698-fd7a320a55e5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative">
          <FoodExperienceSection />
        </div>
      </div>

      <div
        className="relative bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url(https://www.diferanciatours.com/assets/img/bg-img/body-bg-img2.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative">
          <PopularActivitySection />
        </div>
      </div>

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
