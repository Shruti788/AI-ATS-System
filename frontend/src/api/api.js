import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-ats-system.onrender.com/api",
});

export default API;