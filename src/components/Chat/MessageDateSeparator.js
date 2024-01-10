// MessageDateSeparator.js
import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { isYesterday, formatDate } from "../utils/dateUtils";

const MessageDateSeparator = ({ date }) => {
  // Format the provided date or use today's date
  const formattedDate = formatDate(date);

  return (
    <motion.div
      className="flex items-center justify-center mt-4 mb-2"
      initial={{ opacity: 0, y: -10 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation state when rendered
      
    >
      <hr className="w-1/4 border-t border-gray-300" />
      <span className="mx-4 text-gray-500">
        {formattedDate === formatDate(new Date())
          ? "Today"
          : isYesterday(formattedDate)
          ? "Yesterday"
          : formattedDate}
      </span>
      <hr className="w-1/4 border-t border-gray-300" />
    </motion.div>
  );
};

export default MessageDateSeparator;
