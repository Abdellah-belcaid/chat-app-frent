import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1/auth"; // Update with your backend URL

const AuthService = {
  registerUser: async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/register`, userData);
      return response.data;
    } catch (error) {
      throw new Error("Failed to register user");
    }
  },
  loginUser: async (userData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, userData);
      return response.data;
    } catch (error) {
      throw new Error("Failed to login");
    }
  },
};

export default AuthService;
