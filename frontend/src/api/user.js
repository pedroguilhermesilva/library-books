import api from "../services/api";

export const createUser = (payload) => api.post("/users", payload);
export const loginUser = (payload) => api.post("/sessions", payload);
