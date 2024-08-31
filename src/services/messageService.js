import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1/messages"; // Update with your backend URL

const MessageService = {
  getMessagesByChatId: async (chatId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${chatId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch messages by chat ID");
    }
  },

  sendMessage: async (newMessage) => {
    try {
      console.log("this is send messge method : ", newMessage);
      const response = await axios.post(API_BASE_URL, newMessage);
      return response.data;
    } catch (error) {
      throw new Error("Failed to add message");
    }
  },
  fetchUserMessages: async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/user/${userId}`);
      return response.data;
    } catch (error) {
      console.error(
        "An error occurred while fetching user messages:",
        error.message
      );
      throw new Error("An error occurred while fetching user messages");
    }
  },
};

export default MessageService;
