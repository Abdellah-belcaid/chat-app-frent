import React, { useEffect, useState } from "react";
import { HiOutlineChat } from "react-icons/hi";
import { FiPlus } from "react-icons/fi"; // Assuming you want to include a plus icon for creating a new chat

import ChatDetail from "../components/Chat/ChatDetail";
import ChatsList from "../components/Chat/ChatsList";
import { user1 } from "../data/testData"; // Import the user1 data
import WebSocketService from "../services/WebSocketService";
const Chats = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [detailVisible, setDetailVisible] = useState(false);

  // const webSocketService = WebSocketService();

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setDetailVisible(true);
  };

  const handleDetailClose = () => {
    setDetailVisible(false);
  };

  // useEffect(() => {
  //   // Connect to WebSocket when the component mounts
  //   const cleanupWebSocket = webSocketService.connectWebSocket();

  //   // Fetch all chats for testing
  //   webSocketService.onMessageReceived();

  //   return () => {
  //     // Disconnect WebSocket when the component unmounts
  //     // cleanupWebSocket();
  //   };
  // }, [webSocketService]);

  return (
    <div className="flex h-full w-full">
      {/* Pass the chats array of user1 to ChatsList */}
      <ChatsList chats={user1.chats} onSelect={handleChatSelect} />

      {/* ChatDetail */}
      {detailVisible ? (
        <ChatDetail chat={selectedChat} onClose={handleDetailClose} />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center border-2 p-4 text-center bg-gradient-to-r from-blue-100 to-purple-200">
          <HiOutlineChat className="text-5xl mb-4 animate-bounce" />
          <p className="mb-2 text-lg font-semibold">Start a Conversation!</p>
          <p className="mb-4">Select a chat on the left or create a new one.</p>
          <button className="relative flex border-2 items-center bg-white text-blue-500 rounded-full px-4 py-2 transition duration-300 hover:bg-blue-500 hover:text-white focus:outline-none">
            <FiPlus className="mr-2" />
            New Chat
            <span className="absolute inset-0 bg-gradient-to-r from-blue-300 to-purple-400 opacity-0 rounded-full animate-pulse" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Chats;
