import axios from "axios";

export const ROUTER_PATH = {
  LOGIN: "/login",
  REGISTRATION: "/registration",
  RESET: "/reset-password",
  ACTIVATION: "/activation",
  FORGOT: "/forgot-password",
  TODOS: "/todos",
  USERS: "/users",
};

export const authAPI = axios.create({
  baseURL: "http://localhost:8000/api/auth",
});
