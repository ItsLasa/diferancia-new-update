import { useParams, useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { PageHeader } from "../components/PageHeader";
import { FooterSection } from "../screens/ElementLight/sections/FooterSection";
import { Button } from "../components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
}

// All destinations combined for lookup
const allDestinations: Record<string, Destination> = {
  // Outbound destinations
  dubai: {
    id: "dubai",
    name: "DUBAI",
    image: "https://www.diferanciatours.com/assets/img/bg-img/out1.jpg",
    description: "Experience luxury and modernity in Dubai. Visit the iconic Burj Khalifa, explore the Palm Jumeirah, enjoy world-class shopping at the Dubai Mall, and relax on pristine beaches. Dubai offers a perfect blend of modern architecture, desert adventures, and coastal beauty.",
  },
  maldives: {
    id: "maldives",
    name: "MALDIVES",
    image: "https://www.diferanciatours.com/assets/img/bg-img/out2.jpg",
    description: "Paradise islands await in the Maldives. Discover crystal-clear waters, vibrant coral reefs, and luxury overwater bungalows. Perfect for snorkeling, diving, and relaxation with some of the most beautiful beaches in the world.",
  },
  thailand: {
    id: "thailand",
    name: "THAILAND",
    image: "https://www.diferanciatours.com/assets/img/bg-img/out3.jpg",
    description: "Discover ancient temples in Thailand. From the Grand Palace in Bangkok to the temples of Chiang Mai, experience rich Buddhist culture, delicious street food, and warm hospitality. Explore bustling markets and serene natural landscapes.",
  },
  india: {
    id: "india",
    name: "INDIA",
    image: "https://www.diferanciatours.com/assets/img/bg-img/out4.jpg",
    description: "Journey through heritage in India. Visit the magnificent Taj Mahal, explore the streets of Delhi, experience vibrant culture in Jaipur, and discover the spiritual essence of Varanasi. India offers incredible diversity in culture, cuisine, and landscapes.",
  },
  malaysia: {
    id: "malaysia",
    name: "MALAYSIA",
    image: "https://www.diferanciatours.com/assets/img/bg-img/out5.jpg",
    description: "Explore vibrant cities and natural beauty in Malaysia. Kuala Lumpur's Petronas Twin Towers, the island of Penang, Langkawi's beaches, and the rainforests of Borneo offer diverse experiences for every traveler.",
  },
  indonesia: {
    id: "indonesia",
    name: "INDONESIA",
    image: "https://www.diferanciatours.com/assets/img/bg-img/out6.jpg",
    description: "Island adventure awaits in Indonesia. From the temples of Bali to the volcanoes of Java, the beaches of Lombok to the jungles of Sumatra, Indonesia is a tropical paradise with incredible natural beauty and rich culture.",
  },
  singapore: {
    id: "singapore",
    name: "SINGAPORE",
    image: "https://www.diferanciatours.com/assets/img/bg-img/out7.jpg",
    description: "Modern city state Singapore is a perfect blend of cultures. Explore Gardens by the Bay, visit the iconic Marina Bay Sands, experience multicultural cuisine, and enjoy shopping in this efficient and beautiful island nation.",
  },
  // Inbound destinations
  dambulla: {
    id: "dambulla",
    name: "DAMBULLA",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img1.jpg",
    description: "Dambulla is a famous cultural city in Sri Lanka, best known for the Golden Cave Temple, where you'll find ancient Buddha statues and beautiful wall paintings inside peaceful rock caves. You can also visit the Golden Buddha Statue, explore the Buddhist Museum, or enjoy a calm walk in the Ironwood Forest. For sports fans, the Dambulla International Cricket Stadium is nearby.",
  },
  sigiriya: {
    id: "sigiriya",
    name: "SIGIRIYA",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img2.jpg",
    description: "Sigiriya is a UNESCO World Heritage Site and one of Sri Lanka's most iconic landmarks. It features an ancient rock fortress with stunning frescoes, a palace complex, and breathtaking views over the surrounding landscape.",
  },
  jaffna: {
    id: "jaffna",
    name: "JAFFNA",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img3.jpg",
    description: "Jaffna is a city in northern Sri Lanka known for its rich cultural heritage, historic temples, and unique blend of Tamil and Sinhalese traditions.",
  },
  anuradhapura: {
    id: "anuradhapura",
    name: "ANURADHAPURA",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img4.jpg",
    description: "Anuradhapura is an ancient city in Sri Lanka, known for its well-preserved ruins and historical significance. It was once the capital of the ancient kingdom of Anuradhapura and is home to many Buddhist temples and stupas.",
  },
  polonnaruwa: {
    id: "polonnaruwa",
    name: "POLONNARUWA",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img5.jpg",
    description: "Polonnaruwa is a well-preserved ancient city with beautiful ruins, stone statues, and royal palaces. You can walk or bike through the old kingdom and explore its peaceful beauty and history.",
  },
  trincomalee: {
    id: "trincomalee",
    name: "TRINCOMALEE",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img6.jpg",
    description: "Trincomalee is a beach paradise with clear blue waters and white sand. It's perfect for swimming, snorkeling, and whale watching. Visit Nilaveli Beach, Pigeon Island, and the famous Koneswaram Temple on the cliff.",
  },
  arugambe: {
    id: "arugambe",
    name: "ARUGAMBE",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img7.jpg",
    description: "Arugambe is a popular beach destination known for its pristine beaches, excellent surfing conditions, and laid-back atmosphere.",
  },
  passikudah: {
    id: "passikudah",
    name: "PASSIKUDAH",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img8.jpg",
    description: "Passikudah is known for its calm, shallow sea that's perfect for swimming and relaxing. The beach is safe for families and ideal for water activities like jet skiing and paddle boarding.",
  },
  kalpitiya: {
    id: "kalpitiya",
    name: "KALPITIYA",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img9.jpg",
    description: "Kalpitiya is a peaceful seaside resort known for its pristine beaches, calm waters, and excellent opportunities for water sports.",
  },
  kandy: {
    id: "kandy",
    name: "KANDY",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img10.jpg",
    description: "Historic city with cultural heritage and beautiful landscapes. Kandy is the second-largest city in Sri Lanka and home to the sacred Temple of the Tooth.",
  },
  nuwara_eliya: {
    id: "nuwara_eliya",
    name: "NUWARA ELIYA",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img11.jpg",
    description: "Nuwara Eliya is known as 'Little England' because of its cool climate, colonial buildings, and tea plantations. Visit Gregory Lake, walk through flower gardens, and enjoy a fresh cup of Ceylon tea.",
  },
  ella: {
    id: "ella",
    name: "ELLA",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img12.jpg",
    description: "Ella is a small mountain town with amazing views, waterfalls, and hiking trails. Popular spots include Ella Rock, Nine Arches Bridge, and Little Adam's Peak. It's perfect for relaxing and exploring nature.",
  },
  kitulgala: {
    id: "kitulgala",
    name: "KITULGALA",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img13.jpg",
    description: "Kitulgala is a lush, green area known for adventure and nature. It's the best place in Sri Lanka for white-water rafting, jungle trekking, and waterfall visits. A great spot for thrill-seekers and nature lovers.",
  },
  yala: {
    id: "yala",
    name: "YALA",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img14.jpg",
    description: "Yala is a wildlife sanctuary known for its rich biodiversity and the chance to see leopards, elephants, and other native animals in their natural habitat.",
  },
  mirissa: {
    id: "mirissa",
    name: "MIRISSA",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img15.jpg",
    description: "Mirissa is a coastal town known for its beautiful beaches, whale watching opportunities, and vibrant local culture.",
  },
  unawatuna: {
    id: "unawatuna",
    name: "UNAWATUNA",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img16.jpg",
    description: "Unawatuna is a popular beach town known for its golden sand, clear waters, and relaxed atmosphere.",
  },
  hikkaduwa: {
    id: "hikkaduwa",
    name: "HIKKADUWA",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img17.jpg",
    description: "Hikkaduwa is known for its beautiful coral reefs, clear waters, and excellent snorkeling and diving opportunities.",
  },
  bentota: {
    id: "bentota",
    name: "BENTOTA",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img18.jpg",
    description: "Bentota is a coastal town known for its beautiful beaches, luxury resorts, and vibrant nightlife.",
  },
  colombo: {
    id: "colombo",
    name: "COLOMBO",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img19.jpg",
    description: "Colombo is the busy capital city of Sri Lanka. It has modern shopping malls, restaurants, museums, and cultural sites. Visit One Gall Face beach, Galle Face Green, Gangaramaya Temple, and explore both old and new in one place.",
  },
  negombo: {
    id: "negombo",
    name: "NEGOMBO",
    image: "https://www.diferanciatours.com/assets/img/bg-img/destination-img20.jpg",
    description: "Negombo is a coastal town near the airport, known for its long beaches and fishing culture. It's a great first or last stop for travelers, with seafood, boat tours, and a relaxed atmosphere.",
  },
};

export const DestinationDetailPage = (): JSX.Element => {
  const { destinationId } = useParams<{ destinationId: string }>();
  const navigate = useNavigate();

  const destination = destinationId ? allDestinations[destinationId] : null;

  if (!destination) {
    return (
      <div className="bg-white w-full min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Destination Not Found</h1>
            <p className="text-gray-600 mb-6">Sorry, we couldn't find the destination you're looking for.</p>
            <Button onClick={() => navigate("/")} className="bg-green-500 hover:bg-green-600">
              Back to Home
            </Button>
          </div>
        </div>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="bg-white w-full">
      <Navbar />
      <PageHeader
        title={destination.name}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: destination.name },
        ]}
        backgroundImage={destination.image}
      />

      {/* Destination Content */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Image */}
            <div className="flex flex-col gap-6">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-80 md:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-start">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {destination.name}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {destination.description}
              </p>
              
              <div className="flex flex-col gap-4">
                <Button
                  onClick={() => navigate(-1)}
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full w-fit"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Plan Your Visit</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Best Time to Visit</h3>
              <p className="text-gray-600">
                Contact us for the best travel dates and seasonal information for {destination.name}.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What to Pack</h3>
              <p className="text-gray-600">
                Our travel experts can help you prepare for your journey with personalized packing tips.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Get Help</h3>
              <p className="text-gray-600">
                Need assistance? Contact us at support@diferanciatours.com or call +94 77 225 0223.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to explore {destination.name}?</h3>
            <p className="text-lg text-gray-600 mb-6">Let us help you plan the perfect trip</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg">
              Contact Us Now
            </Button>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};
