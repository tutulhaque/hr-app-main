import axios from "axios";

const BASE_URL = "https://json-server-api-production-20d9.up.railway.app";

const useAxios = () => {
  const get = (endpoint) => axios.get(`${BASE_URL}${endpoint}`);
  const post = (endpoint, data) => axios.post(`${BASE_URL}${endpoint}`, data);
  const patch = (endpoint, data) => axios.patch(`${BASE_URL}${endpoint}`, data);

  return { get, post, patch };
};

export default useAxios;
