// components/filters/FilterSection.tsx
import React, { useState } from "react";
import Pill from "../common/Pill";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Luxury",
  "Pet Friendly",
  "Beachfront",
  "Mountain View",
  "Countryside",
];

const FilterSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("");

  return (
    <div className="overflow-x-auto py-4 px-6 bg-white shadow-sm flex space-x-4">
      {filters.map((filter) => (
        <Pill
          key={filter}
          label={filter}
          active={activeFilter === filter}
          onClick={() => setActiveFilter(filter)}
        />
      ))}
    </div>
  );
};

export default FilterSection;
