import React from "react";

export const Nav = () => {
  return (
    <div className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <button className="text-white hover:text-blue-400 animate-in fade-in zoom-in transition duration-300">
            Inicio
            <span className="animate-ping inline-flex rounded-full bg-sky-400 opacity-75">
              *
            </span>
          </button>
        </li>
        <li>
          <button className="text-white hover:text-blue-400 animate-in fade-in zoom-in transition duration-300">
            Servicios
          </button>
        </li>
        <li>
          <button className="text-white hover:text-blue-400 animate-in fade-in zoom-in transition duration-300">
            Acerca de
          </button>
        </li>
        <li>
          <button className="text-white hover:text-blue-400 animate-in fade-in zoom-in transition duration-300">
            Contacto
          </button>
        </li>
      </ul>
    </div>
  );
};
