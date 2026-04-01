import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommercebackend-production-1936.up.railway.app"
});

export default API;
