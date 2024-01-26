import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { BiMessageSquareAdd } from "react-icons/bi";
import { IoImage } from "react-icons/io5";

const MessageInput = ({ onSend }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendClick = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    if (newMessage.trim() !== "") {
      onSend(newMessage);
      setNewMessage(""); // Clear input after sending
    }
  };

  return (
    <div className="h-16 border-t-2 w-full">
      <form onSubmit={handleSendClick}>
        <label htmlFor="chat" className="sr-only">
          Your message
        </label>
        <div className="flex items-center rounded-lg bg-gray-50 px-3 py-2 dark:bg-gray-700">
          <button
            type="button"
            className="inline-flex cursor-pointer justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <BiMessageSquareAdd size={24} />
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <IoImage size={24} />
          </button>
          <input
            type="text"
            id="chat"
            value={newMessage}
            onChange={handleInputChange}
            className="mx-4 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Your message..."
          />
          <button
            type="submit"
            className="inline-flex cursor-pointer justify-center rounded-full p-2 text-blue-600 hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600"
          >
            <AiOutlineSend size={24} />
          </button>
        </div>
      </form>
    </div>
  );
};

export default MessageInput;
