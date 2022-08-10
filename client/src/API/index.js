import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL,
});

export const insertTech = (payload) => api.post(`/tech`, payload);
export const getAllTechs = () => api.get(`/techs`);
export const getTechById = (id) => api.get(`/tech/${id}`);

const apis = {
  insertTech,
  getAllTechs,
  getTechById,
};

export default apis;
