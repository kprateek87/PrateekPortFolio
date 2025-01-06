import React from "react";
import { FaChevronRight } from "react-icons/fa";

function ContactBtn() {
  return (
    <a href="#contact">
      <button className="px-3 py-1 cursor-pointer rounded-md bg-blue-500 text-white flex items-center gap-1 hover:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#33CCCC,0_0_15px_#33CCCC,0_0_30px_#33CCCC] hover:shadow-blue-500 hover:border-blue-400 transition-all ease-in">
        Contact
        <FaChevronRight />
      </button>
    </a>
  );
}

export default ContactBtn;
