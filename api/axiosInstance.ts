import axios from "axios";
import { baseUrl } from "./api_url";


let axiosInstance = axios.create({
  baseURL:baseUrl
});

export default axiosInstance