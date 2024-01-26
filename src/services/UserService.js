// UserService.js

import axios from "axios";

const BASE_URL = "http://localhost:8088/api/v1/users"; // Update with your backend URL

const UserService = {
  registerUser: async (user) => {
    try {
      // Make a POST request to the backend to register the user
      const response = await axios.post(`${BASE_URL}/register`, user);

      // Return the registered user from the response
      return response.data;
    } catch (error) {
      // Handle errors, you can log them or perform other actions
      console.error("Error registering user:", error);
      throw error; // Rethrow the error for the calling code to handle
    }
  },
  getAllUsers: async () => {
    try {
      // Make a GET request to retrieve all users from the backend
      const response = await axios.get(`${BASE_URL}/all`);

      // Return the list of users from the response
      return response.data;
    } catch (error) {
      // Handle errors, you can log them or perform other actions
      console.error("Error fetching all users:", error);
      throw error; // Rethrow the error for the calling code to handle
    }
  },
};

export default UserService;
