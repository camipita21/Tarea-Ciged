"use client";
import { useState } from "react";

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <li>
        <button
          className="text-white hover:text-primary animate-in fade-in zoom-in transition duration-300"
          onClick={toggleDropdown}
        >
          Servicios
        </button>
      </li>
      <div
        className={`absolute left-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        style={{ transition: "opacity 0.2s ease" }}
      >
        <ul
          className="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Opción 1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Opción 2
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              role="menuitem"
            >
              Opción 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
