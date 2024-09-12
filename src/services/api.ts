import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

// Add a request interceptor
// Token is being sent in the header of the request
api.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("@token");

  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }

  return config;
});

// Save the token in the local storage
export const saveToken = (token: string) => {
  localStorage.setItem("@token", token);
};

// Remove the token from the local storage
export const removeToken = () => {
  localStorage.removeItem("@token");
};

// check token is expired
export const isTokenExpired = () => {
  const token = localStorage.getItem("@token");
  if (!token) {
    return true;
  }

  const [, payload] = token.split(".");
  const data = JSON.parse(atob(payload));
  const now = Date.now() / 1000;

  return data.exp < now;
};

// Login function
export const login = async (email: string, password: string) => {
  const response = await api.post("/login", { email, password });
  return response.data;
};

export default api;
