import axios from "axios";

const api = axios.create({
  baseURL: "https://www.omdbapi.com",
  params: {
    apiKey: "3295fc54",
  },
});

export { api };
