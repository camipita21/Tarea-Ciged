import React from "react";
import { Dropdown } from "./dropdown";

export const Nav = () => {
  return (
    <div className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <button className="text-white hover:text-warning animate-in fade-in zoom-in transition duration-300">
            Inicio
            {/* <span className="animate-ping inline-flex rounded-full bg-sky-400 opacity-75">
              *
            </span> */}
          </button>
        </li>

        <Dropdown />

        <li>
          <button className="text-white hover:text-danger animate-in fade-in zoom-in transition duration-300">
            Acerca de Nosotros
          </button>
        </li>
        <li>
          <button className="text-white hover:text-success animate-in fade-in zoom-in transition duration-300">
            Contacto
          </button>
        </li>
      </ul>
    </div>
  );
};
