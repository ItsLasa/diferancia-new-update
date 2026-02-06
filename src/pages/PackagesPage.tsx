import { useState } from "react";
import { FooterSection } from "../screens/ElementLight/sections/FooterSection";
import { Button } from "../components/ui/button";
import { Navbar } from "../components/Navbar";
import { PageHeader } from "../components/PageHeader";
import { X } from "lucide-react";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import p6 from "../assets/p6.jpg";
import p7 from "../assets/p7.jpg";
import p8 from "../assets/p8.jpg";
import p9 from "../assets/p9.jpg";
import p10 from "../assets/p10.jpg";
import p11 from "../assets/p11.jpg";
import p12 from "../assets/p12.jpg";
import p13 from "../assets/p13.jpg";
import p14 from "../assets/p14.jpg";
import p15 from "../assets/p15.jpg";
import p16 from "../assets/p16.jpg";
import p17 from "../assets/p17.jpg";
import p18 from "../assets/p18.jpg";

export const PackagesPage = (): JSX.Element => {
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  const packageData = [
    {
      title: "Honeymoon Packages",
      subtitle: "Celebrate Love in Paradise!",
      img: p1,
      description:
        "Escape to a dreamy getaway with our Honeymoon Special Offer! Enjoy 3 Nights & 4 Days of romance, luxury, and unforgettable memories. Starting from just $260 Candle Light Dinner | 4 & 5 Star Hotels | Honeymoon Hamper | Lunuganga Garden Tour",
      price: "$1,299",
      duration: "5 days",
    },
    {
      title: "Experience Sri Lanka",
      subtitle: "Book now and create memories that last a lifetime!",
      img: p2,
      description:
        "Embark on an unforgettable journey through the stunning landscapes of Sri Lanka! From breathtaking beaches to cultural wonders, we’ve got the perfect itinerary for your dream vacation. Enjoy an exclusive 30% OFF on your next adventure!",
      Telphone: "+94 76 289 3825 / +94 77 415 2525",
      Mail: "info@diferanciatours.com",
    },
    {
      title: "Escape to Thailand",
      subtitle: "Escape to Thailand with Diferancia Tours!",
      img: p3,
      description:
        "Let’s take a moment to relax and explore the vibrant streets, serene beaches, and rich culture of Thailand! Book your dream getaway now! Package Includes: Transport, Meals, Accommodation, Sightseeing, Guide",
      price: "$1,099",
      duration: "6 days",
    },
    {
      title: "Enchanting Malaysia",
      subtitle: "Enchanting Malaysia Awaits!",
      img: p4,
      description:
        "Experience the magic of Kuala Lumpur, Genting Highlands, Sunway Lagoon, and more with our 5 Days - 4 Nights dream package! 4-Star Hotel Stay, Meals, Daily Breakfast, Exciting City Tours & Attractions, Price: LKR 140,000 per person (Twin Sharing)",
      price: "$999",
      duration: "5 days",
    },

    {
      title: "Escape to Bali",
      subtitle: "A Paradise Awaits!",
      img: p5,
      description: "Discover Bali’s stunning beaches, lush jungles, and rich culture on your next adventure! Whether you seek relaxation or adventure, Diferancia Tours has the perfect getaway for you! Book your trip now!",
      price: "$999",
      duration: "7 days",
    },
    {
      title: "Explore Malaysia",
      subtitle: "Explore Malaysia with Diferencia Tours!",
      img: p6,
      description: "Discover the beauty of Malaysia—a land of modern cities, stunning landscapes, and rich cultural heritage! From the iconic Petronas Towers to the majestic Batu Caves, there’s something for every traveler! Top Attractions: Kuala Lumpur’s Skyline, Stunning Natural Landscapes, Historical & Cultural Landmarks",
      price: "Rs. 90,000",
      duration: "5 days",
    },
    {
      title: "Explore the Wonders of India!",
      subtitle: "Hassle-free visa process, Multiple entries for one year",
      img: p7,
      description: "Dreaming of visiting India? Now is your chance! Get your 1-Year Multiple Entry Visa for just LKR 28,000 and immerse yourself in India’s rich culture, heritage, and vibrant festivals! Visit India... Taj Mahal & Historical Landmarks, Spiritual & Cultural Experiences, Colorful Festivals & Traditions, Desert Adventures & Markets",
      price: "Contact for price",
      duration: "Customizable",
    },
    {
      title: "Discover the Best Charms of Malaysia!",
      subtitle: "Exclusive Offer: Rs. 90,000 Per Pax",
      img: p8,
      description: "Experience the vibrant cityscape, breathtaking highlands, and cultural wonders with our 5 Days & 4 Nights special package! Luxurious Accommodation, Tour Guide, Breakfast, Sightseeing, Transportation",
      price: "Rs. 90,000",
      duration: "5 days",
    }, {
      title: "Sri Lanka Nature & Adventure Package!",
      subtitle: "USD 483 / Mini 2 Pax",
      img: p9,
      description: "Looking for an adrenaline-filled escape? Dive into thrilling adventures and breathtaking nature with our 6 Days 5 Nights package! Zip-lining at Flying Ravana, White-water rafting, Water sports & more...!",
      price: "USD 483",
      duration: "5 days",
    }, {
      title: "Romantic Honeymoon in Sri Lanka",
      subtitle: "USD 690 per person",
      img: p10,
      description: "Escape to paradise with our 6 Days / 5 Nights honeymoon package! Indulge in luxury, explore breathtaking landscapes, and create unforgettable memories with your loved one. Package Includes: Transport, Meals, Stay, Sightseeing, Tour Guide",
      price: "USD 690",
      duration: "7 days",
    }, {
      title: "Explore Australia",
      subtitle: "Let's make your Australian getaway unforgettable!",
      img: p11,
      description: "From the iconic Sydney Opera House to breathtaking adventures, your dream trip awaits. Explore Australia like never before with 40% OFF!",
      price: "Contact for price",
      duration: "Customizable",
    }, {
      title: "An Amazing Journey to Thailand!",
      subtitle: "20% OFF on your dream adventure!",
      img: p12,
      description: "Escape to the exotic wonders of Thailand – where stunning beaches, mouthwatering cuisine, and rich cultural experiences await you!vYour perfect destination is just a click away",
      price: "Contact for price",
      duration: "Customizable",
    }, {
      title: "Travel to Singapore - The Lion City Awaits!",
      subtitle: "Experience the magic of Singapore with 40% OFF!",
      img: p13,
      description: "From stunning attractions like Marina Bay Sands and Gardens by the Bay to thrilling adventures at Universal Studios, let us plan your unforgettable vacation! 3-star hotel, Breakfast & Dinner, Transport included",
      price: "Contact for price",
      duration: "5 days",
    }, {
      title: "Discover the Charm of England!",
      subtitle: "Enjoy 35% OFF on your dream English getaway.",
      img: p14,
      description: "From the iconic Big Ben to the majestic Tower Bridge, experience the rich history and vibrant culture of England! Book Now and create memories that last a lifetime.",
      price: "Contact for price",
      duration: "7 days",
    },
    {
      title: "Discover the wonders of China",
      subtitle: "Exclusive 35% OFF!",
      img: p15,
      description: "Plan your dream trip now and immerse yourself in the rich culture, stunning landscapes, and timeless traditions of China. Book your spot today and make memories that last a lifetime!",
      price: "Contact for price",
      duration: "10 days",
    },
    {
      title: "Escape to the breathtaking Maldives",
      subtitle: "45% OFF on our expertly curated tours!",
      img: p16,
      description: "Don’t miss out on this once-in-a-lifetime getaway! Pack your bags and let’s create unforgettable memories Beautiful Beaches: Feel the powder- soft sand beneath your feet, 5 - Star Hotels: Indulge in luxurious stays with world - class amenities, Amazing Views: Experience nature at its finest, from turquoise waters to lush greenery",
  price: "Contact for price",
    duration: "6 days",
}, {
    title: "Experience the Magic of Japan!",
    subtitle: "Embark on an unforgettable journey to the Land of the Rising Sun!. A blend of tradition and modernity awaits you!",
    img: p17,
    description: "Book your adventure today and let Japan enchant you with its rich culture, scenic landscapes, and unforgettable moments. Discover Iconic Destinations: Mount Fuji’s breathtaking beauty, Vibrant Tokyo cityscapes, Serene cherry blossoms",
    price: "Contact for price",
    duration: "8 days",
  },
  {
    title: "Discover the Magic of Dubai!",
    subtitle: "Get ready for an unforgettable 5-day, 4-night escape where luxury meets adventure!",
    img: p18,
    description: "Let us take you on a journey where every moment is extraordinary! Book your Dubai adventure now and make memories that last a lifetime. Desert Safari Thrills: Feel the adrenaline rush as you cruise through golden dunes, Captivating Entertainment: Enjoy mesmerizing belly dancing and cultural performances, Camel Rides & Desert Wonders: Immerse yourself in the charm of the Arabian desert, Price: Starting at LKR 169,500 per person (Minimum 2 pax), Flight tickets not included",
    price: "Contact for price",
    duration: "5 days",
  },

  ];

return (
  <div className="bg-white w-full">
    <Navbar />
    <PageHeader
      title="Packages"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Packages" },
      ]}
      backgroundImage="https://www.diferanciatours.com/assets/img/bg-img/127.jpg"
    />

    <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {packageData.map((pkg, idx) => (
            <article
              key={idx}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col"
            >
              <div className="h-40 md:h-44 lg:h-48 w-full overflow-hidden">
                <img
                  src={pkg.img}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-[#161920] mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-sm text-[#777777] mb-4">
                    {pkg.subtitle}
                  </p>
                </div>

                <div>
                  <button
                    onClick={() => setSelectedPackage(pkg)}
                    className="text-base text-[#777777] hover:text-[#3cb371] transition-colors cursor-pointer"
                  >
                    Click to read more...
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    {/* Modal/Popup */}
    {selectedPackage && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-[#161920]">
              {selectedPackage.title}
            </h2>
            <button
              onClick={() => setSelectedPackage(null)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <img
              src={selectedPackage.img}
              alt={selectedPackage.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <p className="text-[#777777] text-lg mb-4">
              {selectedPackage.subtitle}
            </p>
            <p className="text-[#161920] text-base mb-6">
              {selectedPackage.description}
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="bg-gradient-to-r from-[#3cb371]/10 to-[#3cb371]/5 p-6 rounded-lg border border-[#3cb371]/20">
                <p className="text-sm font-semibold text-[#3cb371] mb-3 uppercase tracking-wide">Contact Information</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-[#777777] mb-1">Phone</p>
                    <p className="text-sm font-semibold text-[#161920]">+94 77 225 0223 / +94 77 226 0223</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#777777] mb-1">Email</p>
                    <a href="mailto:support@diferanciatours.com" className="text-sm font-semibold text-[#3cb371] hover:underline">support@diferanciatours.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="flex-1 px-6 py-3 bg-[#3cb371] text-white font-semibold rounded-lg hover:bg-[#35a063] transition-colors">
                <a href="/contact">Contact Us</a>
              </button>
              <button
                onClick={() => setSelectedPackage(null)}
                className="flex-1 px-6 py-3 bg-gray-200 text-[#161920] font-semibold rounded-lg hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )}

    <FooterSection />
  </div>
);
};
