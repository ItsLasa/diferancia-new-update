import { FooterSection } from "../screens/ElementLight/sections/FooterSection";

export const AboutPage = (): JSX.Element => {
  return (
    <div className="bg-white w-full pt-28 md:pt-32">
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#161920] mb-8">
            About Us
          </h1>

          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-[#555555] leading-relaxed">
                Welcome to Diferancia Tours, where we believe every journey should be extraordinary.
                Founded with a passion for authentic travel experiences, we've been crafting unforgettable
                adventures for over a decade.
              </p>

              <h2 className="text-3xl font-bold text-[#161920] mt-10 mb-4">Our Mission</h2>
              <p className="text-lg text-[#555555] leading-relaxed">
                Our mission is simple yet profound: to help travelers journey beyond the ordinary and
                discover the true essence of their destinations. We believe that travel is more than just
                visiting places—it's about connecting with people, cultures, and experiences that transform us.
              </p>

              <h2 className="text-3xl font-bold text-[#161920] mt-10 mb-4">Why Choose Us?</h2>
              <ul className="text-lg text-[#555555] leading-relaxed space-y-3">
                <li className="flex gap-3">
                  <span className="text-[#3cb371] font-bold">✓</span>
                  <span>Expert local guides with deep knowledge of each destination</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#3cb371] font-bold">✓</span>
                  <span>Customizable packages tailored to your preferences</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#3cb371] font-bold">✓</span>
                  <span>24/7 customer support during your journey</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#3cb371] font-bold">✓</span>
                  <span>Sustainable and responsible tourism practices</span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-[#161920] mt-10 mb-4">Our Values</h2>
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h3 className="text-xl font-bold text-[#161920] mb-2">Authenticity</h3>
                  <p className="text-[#555555]">
                    We prioritize genuine experiences over tourist traps, ensuring you connect with
                    the real soul of each destination.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#161920] mb-2">Sustainability</h3>
                  <p className="text-[#555555]">
                    We're committed to preserving the destinations we visit for future generations through
                    responsible tourism practices.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#161920] mb-2">Excellence</h3>
                  <p className="text-[#555555]">
                    From planning to execution, we maintain the highest standards in every aspect of your journey.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#161920] mb-2">Community</h3>
                  <p className="text-[#555555]">
                    We support local communities and ensure tourism benefits the people and places we visit.
                  </p>
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
