import { FooterSection } from "../screens/ElementLight/sections/FooterSection";

const destinations = [
  {
    id: "beach",
    title: "Tropical Beach Paradise",
    description: "Experience pristine white-sand beaches with crystal-clear waters",
    image: "https://images.pexels.com/photos/3935683/pexels-photo-3935683.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "mountain",
    title: "Mountain Adventures",
    description: "Discover breathtaking peaks and alpine landscapes",
    image: "https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "city",
    title: "Urban Exploration",
    description: "Immerse yourself in vibrant cities and cultural heritage",
    image: "https://images.pexels.com/photos/3625517/pexels-photo-3625517.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "jungle",
    title: "Jungle Exploration",
    description: "Venture into lush rainforests teeming with wildlife",
    image: "https://images.pexels.com/photos/1447263/pexels-photo-1447263.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "desert",
    title: "Desert Wonders",
    description: "Experience the majesty of vast desert landscapes",
    image: "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "island",
    title: "Island Hopping",
    description: "Explore multiple exotic islands in one unforgettable journey",
    image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

export const DestinationsPage = (): JSX.Element => {
  return (
    <div className="bg-white w-full pt-28 md:pt-32">
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#161920] mb-4">
            Explore Our Destinations
          </h1>
          <p className="text-lg text-[#555555] mb-12 max-w-2xl">
            Choose from our carefully curated selection of world-class destinations, each offering unique experiences
            and unforgettable memories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                id={destination.id}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-bold text-[#161920] mb-2">{destination.title}</h3>
                  <p className="text-[#555555] mb-4">{destination.description}</p>
                  <button className="text-[#3cb371] font-semibold hover:text-[#2ea05e] transition-colors flex items-center gap-2">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
