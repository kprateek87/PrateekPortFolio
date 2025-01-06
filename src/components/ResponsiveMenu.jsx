import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Menu from "./Menu";

const ResponsiveMenu = ({ showMenu, setShowMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-gray-950 px-8 pb-6 pt-16 text-black md:hidden rounded-r-xl shadow-md transition-all`}
    >
      <div>
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} className="text-white" />
          <div>
            <h1 className="text-white">Hello User</h1>
            <h1 className="text-sm text-slate-500">Premium User</h1>
          </div>
        </div>
        <nav className="mt-12">
          <Menu setShowMenu={setShowMenu} />
        </nav>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
