// src/api.js
import axios from "axios";

// Set the base URL for your API
const baseURL = "https://your-api-url.com"; // Replace with your API URL

// Create an instance of Axios with the base URL
const api = axios.create({
  baseURL,
});

// Export the Axios instance
export default api;