import React from "react";
import { PropertyProps } from "@/interfaces";

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{property.name}</h3>
        <p className="text-gray-700 mb-2">${property.price} / night</p>
        <p className="text-yellow-500 font-medium">⭐ {property.rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
