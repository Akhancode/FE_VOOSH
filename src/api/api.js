// api.js
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { BASEURLAZURE } from "../utils/helper";

const BASEURLAZURE = "http://localhost:9000"
const api = axios.create({
    
  // baseURL: "http://localhost:9000/api", // Replace with your API URL
  baseURL: `${BASEURLAZURE}/api`, // Replace with your API URL
});

api.interceptors.request.use(
  (config) => {
    // Retrieve token from localStorage
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response;

    // Check if the error is due to an invalid token
    if (status === 401 || status == 400) {
      localStorage.removeItem("accessToken");

      const navigate = useNavigate();
      navigate("/login", { replace: true });
    }

    return Promise.reject(error);
  }
);
export const getBoard = async () => {
  const response = await api.get("/column/board");
  return response.data; // Handle response as needed
};
export const getAllTasks = async () => {
  const response = await api.get("/tasks");
  return response.data; // Handle response as needed
};
export const patchColumns = async (data) => {
  const response = await api.patch("/column/edit",data);
  return response.data; // Handle response as needed
};
export const createTask = async (data) => {
  const response = await api.post(`/task`,data);
  return response.data; // Handle response as needed
};
export const editTask = async (id,data) => {
  const response = await api.put(`/task/${id}`,data);
  return response.data; // Handle response as needed
};
export const deleteTask = async (id) => {
  const response = await api.delete(`/task/${id}`);
  return response.data; // Handle response as needed
};


export default api;
