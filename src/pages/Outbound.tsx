import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const destinations: Destination[] = [
  {
    id: "dubai",
    name: "DUBAI",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/out1.jpg",
    description: "Experience luxury and modernity",
  },
  {
    id: "maldives",
    name: "MALDIVES",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/out2.jpg",
    description: "Paradise islands await",
  },
  {
    id: "thailand",
    name: "THAILAND",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/out3.jpg",
    description: "Discover ancient temples",
  },
  {
    id: "india",
    name: "INDIA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/out4.jpg",
    description: "Journey through heritage",
  },
  {
    id: "malaysia",
    name: "MALAYSIA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/out5.jpg",
    description: "Explore vibrant cities",
  },
  {
    id: "indonesia",
    name: "INDONESIA",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/out6.jpg",
    description: "Island adventure awaits",
  },
  {
    id: "singapore",
    name: "SINGAPORE",
    image:
      "https://www.diferanciatours.com/assets/img/bg-img/out7.jpg",
    description: "Modern city state",
  },
];

export const Outbound = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full">
      <Navbar />
      <PageHeader
        title="Outbound"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Outbound" },
        ]}
        backgroundImage="https://www.diferanciatours.com/assets/img/bg-img/outbg.jpg"
      />

      {/* Destinations Section */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          {/* <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Explore Our Destinations
            </h2>
            <p className="text-lg text-gray-600">
              Discover amazing experiences across the world
            </p>
          </div> */}

          {/* Destinations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden h-48 bg-gray-200">
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
                      navigate(`/destination/${destination.id}`);
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

      <FooterSection />
    </div>
  );
};
