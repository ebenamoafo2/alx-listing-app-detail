// components/common/Pill.tsx
import React from "react";

interface PillProps {
  label: string;
  active?: boolean; // optional to style selected state
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        px-4 py-2 rounded-full text-sm font-medium transition
        whitespace-nowrap
        ${active ? "bg-red-500 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}
      `}
    >
      {label}
    </button>
  );
};

export default Pill;
