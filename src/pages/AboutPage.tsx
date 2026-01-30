import { FooterSection } from "../screens/ElementLight/sections/FooterSection";
import { PageHeader } from "../components/PageHeader";
import { Navbar } from "../components/Navbar";

export const AboutPage = (): JSX.Element => {
  return (
    <div className="bg-white w-full">
      <Navbar />
      <PageHeader
        title="About Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About Us" },
        ]}
        backgroundImage="https://www.diferanciatours.com/assets/img/bg-img/97.jpg"
      />
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl  [font-family:'Manrope',Helvetica] lg:text-4xl font-bold text-[#3cb371]  mb-8">

            Experience the Essence of Sri Lanka Like Never Before
          </h1>

          <div className="space-y-8 [font-family:'Manrope',Helvetica]">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-[#555555] leading-relaxed">
                At Diferencia Tours, we don’t just offer trips we craft unforgettable journeys that capture the heart and soul of Sri Lanka. From the ancient wonders of our cultural capitals to the golden sands of our tranquil beaches and the misty trails of lush rainforests, every moment with us is designed to inspire. Let our expert guides take you beyond the ordinary, revealing hidden gems and authentic experiences that connect you to the true spirit of the island. Whether you seek adventure, relaxation, culture, or romance Diferencia Tours transforms your travel dreams into meaningful memories.
              </p>
              <p className="mt-4 text-lg text-[#555555] leading-relaxed">“Your journey begins here”</p>

              <h2 className="text-3xl font-bold text-[#3cb371]  mt-10 mb-4">Key values (trust, safety, authenticity, personalized service)</h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                1. Trust: We build long-term relationships with honesty and transparency.
              </p>
              <p className="text-lg text-[#555555] leading-relaxed">
                2. Safety: Your well-being is our top priority during every journey.
              </p>
              <p className="text-lg text-[#555555] leading-relaxed">
                3. Authenticity: We provide real and meaningful experiences that reflect true local life.
              </p>
              <p className="text-lg text-[#555555] leading-relaxed">
                4. Personalized Service: Every tour is crafted to match your interests, needs, and comfort.
              </p>

              <h2 className="text-3xl font-bold text-[#3cb371]  mt-10 mb-4">Brief story behind the brand</h2>
              <ul className="text-lg text-[#555555] leading-relaxed space-y-3">
                <li className="flex gap-3">

                  <span>The journey of Diferencia Tours began in 2005, when our founder first started offering vehicle hire services for tourists exploring Sri Lanka. Though he paused the service for a few years to focus on other professional work, his passion for tourism never faded. In 2024, this passion turned into a renewed commitment with the official launch of Diferencia Tours — a brand dedicated to creating unforgettable travel experiences. With years of experience and a deep love for Sri Lanka, Diferencia Tours is built on trust, dedication, and a true desire to connect people with the beauty of the island.</span>
                </li>

              </ul>


              <div className="grid md:grid-cols-2  gap-8 mt-10">
                <div>
                  <h3 className="text-3xl font-bold text-[#3cb371]  mb-2">Our Mission</h3>
                  <p className="text-[#555555]">
                    “To offer unique, personalized, and meaningful travel experiences while supporting local communities and promoting responsible tourism.”
                  </p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#3cb371]  mb-2">Our Vision</h3>
                  <p className="text-[#555555]">
                    “To be Sri Lanka’s most trusted travel partner, connecting people with the true beauty of the island.”
                  </p>
                </div>




              </div>
            </div>
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
