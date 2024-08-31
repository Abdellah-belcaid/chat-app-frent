// UserService.js
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api/v1/users"; // Update with your backend URL

const UserService = {
  fetchAllUsers: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch users");
    }
  },
  getUserById: async (userId) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${userId}`);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch user by ID");
    }
  },
  updateUser: async (userId, userData) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/${userId}`, userData);
      return response.data;
    } catch (error) {
      throw new Error("Failed to update user");
    }
  },
  deleteUser: async (userId) => {
    try {
      await axios.delete(`${API_BASE_URL}/${userId}`);
    } catch (error) {
      throw new Error("Failed to delete user");
    }
  },
  uploadAvatar: async (id, avatar) => {
    try {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("avatar", avatar);

      const response = await axios.put(
        `${API_BASE_URL}/avatar/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to upload avatar");
    }
  },
};

export default UserService;
