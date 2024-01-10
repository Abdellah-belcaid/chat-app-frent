// Messages.js
import React from "react";
import { FaRegCheckCircle, FaRegClock, FaRegTimesCircle } from "react-icons/fa";
import MessageDateSeparator from "./MessageDateSeparator";
import {
  formatTimestamp,
  shouldDisplayDateSeparator,
} from "../utils/dateUtils";

function Messages({ messages }) {
  // // Sort messages based on timestamp without modifying the original array
  const sortedMessages = messages.sort((a, b) => a.timestamp - b.timestamp);

  return (
    <div className="flex-1 overflow-scroll scrollbar-hide p-2 m-1">
      {sortedMessages.map((message, index) => (
        <div key={message.id} className="mt-4">
          {shouldDisplayDateSeparator(index, sortedMessages) ? (
            <MessageDateSeparator date={message.timestamp} />
          ) : null}

          <div
            className={`flex my-2 ${
              message.sender.id === 1 ? "justify-start" : "justify-end"
            } mb-2`}
          >
            {/* Message Bubble */}
            <div className="w-1/2">
              <div
                className={`flex items-center gap-2 ${
                  message.sender.id === 1 ? "justify-start" : "flex-row-reverse"
                }`}
              >
                {/* Sender's Avatar */}
                <img
                  className="h-8 w-8 rounded-full"
                  src={message.sender.avatar}
                  alt=""
                />

                {/* Sender's Information and Message Container */}
                <div className="flex flex-col max-w-full">
                  {/* Sender's Name and Timestamp */}
                  <p
                    className={`flex gap-1 items-center font-semibold text-sm text-gray-800 ${
                      message.sender.id === 1
                        ? "justify-start"
                        : "flex-row-reverse"
                    }`}
                  >
                    {message.sender.name}
                    <span className="text-gray-500 text-sm">
                      {formatTimestamp(message.timestamp)}
                    </span>
                  </p>

                  {/* Message Content */}
                  <div
                    contentEditable="true"
                    className={`mt-2 p-4 rounded-b-xl border-2 overflow-wrap break-words ${
                      message.sender.id === 1
                        ? "bg-blue-100 text-blue-800 border-blue-200 rounded-tr-xl"
                        : "bg-gray-100 text-gray-700 border-gray-200 rounded-tl-xl"
                    }`}
                  >
                    {message.text}

                    {/* Additional features */}
                    <div className="flex items-center mt-2">
                      {/* Message status indicators */}
                      {message.status === "sent" && (
                        <FaRegCheckCircle className="text-green-500 mr-1" />
                      )}
                      {message.status === "delivered" && (
                        <FaRegClock className="text-yellow-500 mr-1" />
                      )}
                      {message.status === "failed" && (
                        <FaRegTimesCircle className="text-red-500 mr-1" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Message Bubble */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Messages;
