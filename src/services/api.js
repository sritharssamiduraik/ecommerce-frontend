import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-backend-production-222b.up.railway.app"
});

export default API;
