import React from "react";
import { HiChat, HiLogin, HiUser } from "react-icons/hi"; // Import icons from react-icons
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import logo from "../../assets/images/logo-32x32.png";

const Header = () => {
  return (
    <header className="bg-white p-2 border-b-2 ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center animate-pulse">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2 " />
          <span className="text-lg font-semibold text-slate-800">Chat App</span>
        </Link>

        {/* Navigation Links with Tooltips */}
        <nav className="flex space-x-4 text-lg font-semibold">
          <Link
            to="/chats"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="chats"
            className="flex items-center"
          >
            <HiChat className="mr-2 text-2xl" />
          </Link>
          <Link
            to="/profile"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="profile"
            className="flex items-center"
          >
            <HiUser className="mr-2 text-2xl" />
          </Link>
          <Link
            to="/login"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="login"
            className="flex items-center"
          >
            <HiLogin className="mr-2 text-2xl" />
          </Link>
          {/* Add more links as needed */}
        </nav>

        {/* Tooltips */}
        <Tooltip id="my-tooltip" place="bottom" />
      </div>
    </header>
  );
};

export default Header;
