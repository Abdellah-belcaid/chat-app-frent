import React from "react";
import { HiMail } from "react-icons/hi";
import { Tooltip } from "react-tooltip";

const Footer = () => {
  return (
    <footer className="bg-white p-2 border-t-2">
      <div className="container mx-auto flex items-center justify-center">
        {/* Contact Link with Tooltip */}
        <a
          href="mailto:contact@example.com"
          data-tooltip-id="contact-tooltip"
          data-tooltip-content="Contact Us"
          className="flex items-center"
          aria-label="Contact Us"
        >
          <HiMail className="mr-2 text-2xl" />
        </a>

        {/* Tooltips */}
        <Tooltip id="contact-tooltip" place="top" />
      </div>
    </footer>
  );
};

export default Footer;
