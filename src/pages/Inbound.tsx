import React, { useEffect, useState } from "react";
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
    description: "Dambulla is a famous cultural city in Sri Lanka, best known for the Golden Cave Temple, where you’ll find ancient Buddha statues and beautiful wall paintings inside peaceful rock caves. You can also visit the Golden Buddha Statue, explore the Buddhist Museum, or enjoy a calm walk in the Ironwood Forest For sports fans, the Dambulla International Cricket Stadium is nearby.",
  },
  {
    id: "sigiriya",
    name: "SIGIRIYA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img2.jpg",
    description: "Sigiriya is a UNESCO World Heritage Site and one of Sri Lanka's most iconic landmarks. It features an ancient rock fortress with stunning frescoes, a palace complex, and breathtaking views over the surrounding landscape.",
  },
  {
    id: "jaffna",
    name: "JAFFNA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img3.jpg",
    description: "Jaffna is a city in northern Sri Lanka known for its rich cultural heritage, historic temples, and unique blend of Tamil and Sinhalese traditions.",
  },
  {
    id: "anuradhapura",
    name: "ANURADHAPURA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img4.jpg",
    description: "Anuradhapura is an ancient city in Sri Lanka, known for its well-preserved ruins and historical significance. It was once the capital of the ancient kingdom of Anuradhapura and is home to many Buddhist temples and stupas.",
  },
  {
    id: "polonnaruwa",
    name: "POLONNARUWA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img5.jpg",
    description: "Polonnaruwa is a well-preserved ancient city with beautiful ruins, stone statues, and royal palaces. You can walk or bike through the old kingdom and explore its peaceful beauty and history.",
  },
  {
    id: "trincomalee",
    name: "TRINCOMALEE",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img6.jpg",
    description: "Trincomalee is a beach paradise with clear blue waters and white sand. It’s perfect for swimming, snorkeling, and whale watching. Visit Nilaveli Beach, Pigeon Island, and the famous Koneswaram Temple on the cliff.",
  },
  {
    id: "arugambe",
    name: "ARUGAMBE",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img7.jpg",
    description: "Arugambe is a popular beach destination known for its pristine beaches, excellent surfing conditions, and laid-back atmosphere.",
  },
  {
    id: "passikudah",
    name: "PASSIKUDAH",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img8.jpg",
    description: "Passikudah is known for its calm, shallow sea that’s perfect for swimming and relaxing. The beach is safe for families and ideal for water activities like jet skiing and paddle boarding.",
  },
  {
    id: "kalpitiya",
    name: "KALPITIYA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img9.jpg",
    description: "Kalpitiya is a peaceful seaside resort known for its pristine beaches, calm waters, and excellent opportunities for water sports.",
  },
  {
    id: "kandy",
    name: "KANDY",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img10.jpg",
    description: "Historic city with cultural heritage and beautiful landscapes.",
  },
  {
    id: "nuwara-eliya",
    name: "NUWARA ELIYA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img11.jpg",
    description: "Nuwara Eliya is known as “Little England” because of its cool climate, colonial buildings, and tea plantations. Visit Gregory Lake, walk through flower gardens, and enjoy a fresh cup of Ceylon tea.",
  },
  {
    id: "ella",
    name: "ELLA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img12.jpg",
    description: "Ella is a small mountain town with amazing views, waterfalls, and hiking trails. Popular spots include Ella Rock, Nine Arches Bridge, and Little Adam’s Peak. It’s perfect for relaxing and exploring nature.",
  },
  {
    id: "kitulgala",
    name: "KITULGALA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img13.jpg",
    description: "Kitulgala is a lush, green area known for adventure and nature. It’s the best place in Sri Lanka for white-water rafting, jungle trekking, and waterfall visits. A great spot for thrill-seekers and nature lovers.",
  },
  {
    id: "yala",
    name: "YALA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img14.jpg",
    description: "Yala is a wildlife sanctuary known for its rich biodiversity and the chance to see leopards, elephants, and other native animals in their natural habitat.",
  },
  {
    id: "mirissa",
    name: "MIRISSA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img15.jpg",
    description: "Mirissa is a coastal town known for its beautiful beaches, whale watching opportunities, and vibrant local culture.",
  },
  {
    id: "unawatuna",
    name: "UNAWATUNA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img16.jpg",
    description: "Unawatuna is a popular beach town known for its golden sand, clear waters, and relaxed atmosphere.",
  },
  {
    id: "hikkaduwa",
    name: "HIKKADUWA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img17.jpg",
    description: "Hikkaduwa is known for its beautiful coral reefs, clear waters, and excellent snorkeling and diving opportunities.",
  },
  {
    id: "bentota",
    name: "BENTOTA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img18.jpg",
    description: "Bentota is a coastal town known for its beautiful beaches, luxury resorts, and vibrant nightlife.",
  },
  {
    id: "colombo",
    name: "COLOMBO",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img19.jpg",
    description: "Colombo is the busy capital city of Sri Lanka. It has modern shopping malls, restaurants, museums, and cultural sites. Visit One Gall Face beach, Galle Face Green, Gangaramaya Temple, and explore both old and new in one place",
  },
  {
    id: "negombo",
    name: "NEGOMBO",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/destination-img20.jpg",
    description: "Negombo is a coastal town near the airport, known for its long beaches and fishing culture. It’s a great first or last stop for travelers, with seafood, boat tours, and a relaxed atmosphere.",
  },
];

export const Inbound = (): JSX.Element => {
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedDestination(null);
    };
    if (selectedDestination) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selectedDestination]);

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
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedDestination(destination);
                    }}
                    className="text-gray-500 hover:text-green-600 text-lg transition-colors inline-flex items-center cursor-pointer"
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

      {/* Modal: Destination Details */}
      {selectedDestination && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={() => setSelectedDestination(null)}
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full overflow-hidden shadow-lg"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedDestination.name}
          >
            <div className="md:flex">
              <div className="md:w-1/2 h-56 md:h-auto">
                <img
                  src={selectedDestination.image}
                  alt={selectedDestination.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-1/2">
                <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                  {selectedDestination.name}
                </h2>
                <p className="text-gray-600 text-lg mb-4">{selectedDestination.description}</p>
                {/* <div className="flex items-center space-x-3">
                  <Button onClick={() => setSelectedDestination(null)}>Close</Button>
                  <a
                    href={`#${selectedDestination.id}`}
                    className="text-green-600 hover:underline"
                  >
                    View full section
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}

      <FooterSection />
    </div>
  );
};
