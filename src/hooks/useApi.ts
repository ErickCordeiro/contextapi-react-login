import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.REACT_APP_API,
});

const token: string | null = localStorage.getItem("token")

export const useApi = () => ({
  validateToken: async (token: string) => {},
  signin: async (email: string, password: string) => {

    const response = await axios.post(
      "https://codeslayers.com.br/api/auth/login",
      {
        email,
        password,
      },
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    return response.data;
  },
  signout: async () => {
    const response = await axios.post('https://codeslayers.com.br/api/auth/logout', token);
    return response.data;
  },
});
