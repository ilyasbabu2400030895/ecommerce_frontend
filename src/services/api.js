import axios from "axios";

const API = axios.create({
  baseURL: "ecommercebackend-production-1936.up.railway.app/api"
});

export default API;
