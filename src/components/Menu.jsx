import React from "react";
import { navData } from "../Data";
import { FaChevronRight } from "react-icons/fa";
import ContactBtn from "./ContactBtn";

function Menu({ setShowMenu }) {
  return (
    <ul className="flex flex-col md:flex-row gap-7 text-lg md:text-xl font-semibold text-white">
      {navData.map((item, index) => (
        <a href={item.path} key={index} onClick={() => setShowMenu(false)}>
          <li className="text-white cursor-pointer text-shadow transition-shadow duration-300">
            {item.title}
          </li>
        </a>
      ))}
      <ContactBtn />
    </ul>
  );
}

export default Menu;
