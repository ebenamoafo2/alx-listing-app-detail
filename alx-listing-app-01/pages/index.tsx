import React from "react";
import { HERO_BACKGROUND, PROPERTYLISTINGSAMPLE } from "@/constants";
import FilterSection from "../components/filters/FilterSection";
import PropertyCard from "../components/common/PropertyCard";

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[500px] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url(${HERO_BACKGROUND})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <FilterSection />

      {/* Listing Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Explore Properties</h2>

          {/* Grid of Property Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {PROPERTYLISTINGSAMPLE.map((property) => (
              <PropertyCard key={property.name} property={property} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
