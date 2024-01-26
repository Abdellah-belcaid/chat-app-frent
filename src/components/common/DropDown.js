// Dropdown.js
import React from "react";

const Dropdown = ({ options, onSelect }) => {
  return (
    <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg overflow-hidden">
      {options.map((option) => (
        <div
          key={option}
          className="cursor-pointer p-2 hover:bg-gray-100"
          onClick={() => onSelect(option)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
