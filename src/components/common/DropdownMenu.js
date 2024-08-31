// DropdownMenu.js
import React, { forwardRef } from "react";

const DropdownMenu = forwardRef(({ options, onClick }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute top-[150%] right-0 w-48 bg-white rounded-md shadow-lg z-10 hidden"
    >
      <div className="py-1">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onClick(option)}
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 w-full text-left"
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
});

export default DropdownMenu;
