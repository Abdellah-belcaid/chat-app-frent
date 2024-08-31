import React from "react";
import { BiCheck, BiCheckDouble } from "react-icons/bi";

const statusIcons = {
  sent: { icon: BiCheck, color: "text-gray-500", text: "sent" },
  delivered: { icon: BiCheckDouble, color: "text-gray-500", text: "delivered" },
  read: { icon: BiCheckDouble, color: "text-green-600", text: "seen" },
};

const getStatusIcon = (status, statusPosition) => {
  const { icon: Icon, color, text } = statusIcons[status] || {};
  return (
    Icon && (
      <div
        className={`flex text-ms font-bold items-center mt-1 transition-colors duration-500  ${statusPosition} w-full  items-center mx-1 ${color}`}
      >
        <span className="mr-1 text-xs">{text}</span>
        <Icon />
      </div>
    )
  );
};

const MessageContent = ({ content, type, status, isCurrentUserSender }) => {
  const messageBubbleColor = isCurrentUserSender
    ? "bg-blue-100 text-blue-800 border-blue-200 rounded-tr-3xl"
    : "bg-gray-100 text-gray-700 border-gray-200 rounded-tl-3xl";
  const statusPosition = isCurrentUserSender ? "justify-end" : "hidden";
  const renderMediaContent = () => {
    switch (type) {
      case "text":
        return (
          <p className={`p-3 rounded-b-3xl border-2 ${messageBubbleColor}`}>
            {content}
          </p>
        );
      case "image":
        return (
          <img
            controls
            src={content}
            alt="img message"
            className="rounded-lg  "
          />
        );
      case "video":
        return (
          <video
            controls
            className="max-w-full rounded-lg"
            style={{ maxWidth: "100%" }}
          >
            <source src={content} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        );
      case "audio":
        return (
          <audio controls className="max-w-full">
            <source src={content} type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`flex flex-col mt-2 p-1 overflow-wrap break-words  `}>
      {renderMediaContent()}
      {getStatusIcon(status, statusPosition)}
    </div>
  );
};

export default MessageContent;
