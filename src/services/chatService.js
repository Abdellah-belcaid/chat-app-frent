import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1/chats"; // Update with your backend URL

const ChatService = {
  createNewChat: async (newChatData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/create`, newChatData);
      console.log("chat added :", response.data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  fetchChats: async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${userId}`);
      console.log("chats : ", response.data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },

  // Add other chat-related methods like updateChat, deleteChat, etc.
};

export default ChatService;
