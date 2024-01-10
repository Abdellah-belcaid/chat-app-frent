import React, { useState, useEffect } from "react";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
// Import the action you want to dispatch (addMessage)
import { useDispatch } from "react-redux"; // Import useDispatch from react-redux

import { addMessage } from "../../actions/messageActions";

const ChatDetail = ({ chat, onClose }) => {
  const [messages, setMessages] = useState(chat.messages);

  const dispatch = useDispatch(); // Get dispatch function from Redux
  // Watch for changes in the 'chat' prop
  useEffect(() => {
    // Update messages when the chat changes
    setMessages(chat.messages);
  }, [chat]);

  const handleSend = (newMessage) => {
    const updatedMessages = [
      ...messages,
      {
        id: messages.length + 1,
        sender: chat.participants[0],
        text: newMessage,
        timestamp: new Date(),
        status: "sent",
      },
    ];

    // Dispatch the addMessage action with the new message
    dispatch(
      addMessage({
        id: messages.length + 1,
        sender: chat.participants[0],
        text: newMessage,
        timestamp: new Date(),
        status: "sent",
      })
    );

    setMessages(updatedMessages);
  };

  return (
    <div className="flex flex-col gap-1 w-full bg-white border-2 ">
      {/* Chat Header */}
      <ChatHeader participants={chat.participants} onClose={onClose} />

      {/* Messages */}
      <Messages messages={messages} />

      {/* Input area for sending messages */}
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatDetail;
