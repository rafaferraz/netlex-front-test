import axios from "axios";

const client = axios.create({
  baseURL: `http://localhost:3086`,
  timeout: 9000,
});

export default client;
