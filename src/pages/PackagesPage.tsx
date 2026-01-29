import { FooterSection } from "../screens/ElementLight/sections/FooterSection";
import { Button } from "../components/ui/button";

const packages = [
  {
    id: 1,
    name: "Weekend Escape",
    duration: "3 Days / 2 Nights",
    price: "$899",
    description: "Perfect for a quick getaway",
    features: ["Hotel accommodation", "Guided tours", "Meals included", "Airport transfers"],
    color: "border-blue-500",
  },
  {
    id: 2,
    name: "Classic Adventure",
    duration: "7 Days / 6 Nights",
    price: "$1,999",
    description: "Explore multiple destinations",
    features: [
      "Hotel accommodation",
      "Daily guided tours",
      "All meals included",
      "Airport transfers",
      "Travel insurance",
      "Activities & attractions",
    ],
    color: "border-[#3cb371]",
    popular: true,
  },
  {
    id: 3,
    name: "Grand Journey",
    duration: "14 Days / 13 Nights",
    price: "$3,999",
    description: "Ultimate immersive experience",
    features: [
      "Luxury hotel accommodation",
      "Personal guide",
      "All meals at premium restaurants",
      "Airport transfers",
      "Comprehensive travel insurance",
      "All activities & attractions",
      "Evening entertainment",
      "Spa & wellness included",
    ],
    color: "border-purple-500",
  },
];

export const PackagesPage = (): JSX.Element => {
  return (
    <div className="bg-white w-full pt-28 md:pt-32">
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#161920] mb-4">
            Our Travel Packages
          </h1>
          <p className="text-lg text-[#555555] mb-12 max-w-2xl">
            Choose a package that fits your style, budget, and travel dreams. All packages are customizable.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl border-2 ${pkg.color} p-8 relative transition-all duration-300 hover:shadow-2xl ${
                  pkg.popular ? "lg:scale-105 lg:shadow-2xl" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#3cb371] text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-bold text-[#161920] mb-2">{pkg.name}</h3>
                <p className="text-[#3cb371] font-semibold mb-4">{pkg.duration}</p>
                <p className="text-gray-600 mb-6">{pkg.description}</p>

                <div className="text-4xl font-bold text-[#161920] mb-6">
                  {pkg.price}
                  <span className="text-sm text-gray-600">/person</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#3cb371] font-bold mt-1">✓</span>
                      <span className="text-[#555555]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full h-12 bg-[#3cb371] hover:bg-[#2ea05e] text-white font-bold rounded-full transition-colors">
                  Book Now
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-[#f9f9f9] rounded-2xl">
            <h2 className="text-3xl font-bold text-[#161920] mb-4">Custom Packages Available</h2>
            <p className="text-[#555555] mb-6">
              Not finding what you're looking for? We offer fully customizable packages tailored to your specific
              interests, budget, and timeline. Contact our travel specialists to create your perfect journey.
            </p>
            <Button className="bg-[#3cb371] hover:bg-[#2ea05e] text-white font-bold px-8 py-3 rounded-full">
              Design Your Package
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
