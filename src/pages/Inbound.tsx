import { FooterSection } from "../screens/ElementLight/sections/FooterSection";
import { Button } from "../components/ui/button";
import { Navbar } from "../components/Navbar";
import { PageHeader } from "../components/PageHeader";

interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
}

const sriLankanDestinations: Destination[] = [
  {
    id: "dambulla",
    name: "DAMBULLA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img1.jpg",
    description: "Ancient rock temple",
  },
  {
    id: "gapiya",
    name: "GAPIYA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img2.jpg",
    description: "Nature's wonder",
  },
  {
    id: "japna",
    name: "JAPNA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img3.jpg",
    description: "Scenic views",
  },
  {
    id: "anuradhapura",
    name: "ANURADHAPURA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img4.jpg",
    description: "Ancient city",
  },
  {
    id: "polonnawa",
    name: "POLONNAWA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img5.jpg",
    description: "Tea plantations",
  },
  {
    id: "trincomalei",
    name: "TRINCOMALEI",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img6.jpg",
    description: "Coastal paradise",
  },
  {
    id: "arugambe",
    name: "ARUGAMBE",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img7.jpg",
    description: "Beach destination",
  },
  {
    id: "paguarett",
    name: "PAGUARETT",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img8.jpg",
    description: "Hidden gem",
  },
  {
    id: "kalutara",
    name: "KALUTARA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img9.jpg",
    description: "Seaside resort",
  },
  {
    id: "galle",
    name: "GALLE",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img10.jpg",
    description: "Historic fort",
  },
  {
    id: "nuwara-eliya",
    name: "NUWARA ELIYA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img11.jpg",
    description: "Hill country",
  },
  {
    id: "ella",
    name: "ELLA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img12.jpg",
    description: "Mountain views",
  },
  {
    id: "sigiriya",
    name: "SIGIRIYA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img13.jpg",
    description: "Rock fortress",
  },
  {
    id: "hala",
    name: "HALA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img14.jpg",
    description: "Hidden paradise",
  },
  {
    id: "mirissa",
    name: "MIRISSA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img15.jpg",
    description: "Whale watching",
  },
  {
    id: "unawatuna",
    name: "UNAWATUNA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img16.jpg",
    description: "Beach town",
  },
  {
    id: "hikkaduwa",
    name: "HIKKADUWA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img17.jpg",
    description: "Coral reefs",
  },
  {
    id: "battoa",
    name: "BATTOA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img18.jpg",
    description: "Coastal charm",
  },
  {
    id: "colombo",
    name: "COLOMBO",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img19.jpg",
    description: "Capital city",
  },
  {
    id: "negombo",
    name: "NEGOMBO",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img20.jpg",
    description: "Fishing village",
  },
];

export const Inbound = (): JSX.Element => {
  return (
    <div className="bg-white w-full">
      <Navbar />
      <PageHeader
        title="Inbound"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Inbound" },
        ]}
        backgroundImage="https://www.diferanciatours.com/assets/img/bg-img/slider_1.jpg"
      />

      {/* Sri Lankan Destinations Section */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
      

          {/* Destinations Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6">
            {sriLankanDestinations.map((destination) => (
              <div
                key={destination.id}
                className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-200 aspect-square">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {destination.name}
                  </h3>
                  <a
                    href={`#${destination.id}`}
                    className="text-gray-500 hover:text-green-600 text-lg transition-colors inline-flex items-center"
                  >
                    Click to read more...
                    <span className="ml-2">→</span>
                  </a>
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
