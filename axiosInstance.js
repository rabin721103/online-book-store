import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL ?? "http://localhost:8080/api",
  // headers: {
  //   Authorization: localStorage.getItem("token") || "",
  // },
  withCredentials: true,
});

export default axiosInstance;
