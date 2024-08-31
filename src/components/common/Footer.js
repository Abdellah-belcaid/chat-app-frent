import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="h-[8%] bg-white p-4 border-t-2  justify-center">
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024. All Rights Reserved.
        </span>
        <div className="flex space-x-6 sm:mt-0 sm:justify-center">
          <a
            href="https://facebook.com"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/abdellah-belcaid"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
