import axios, { AxiosResponse } from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:7010/api/test/";

interface BoardData {
  // Add properties as needed based on the response data for each board
}

class UserService {
  getPublicContent(): Promise<AxiosResponse<BoardData>> {
    return axios.get<BoardData>(API_URL + "all");
  }

  getUserBoard(): Promise<AxiosResponse<BoardData>> {
    return axios.get<BoardData>(API_URL + "user", { headers: authHeader() });
  }

  getModeratorBoard(): Promise<AxiosResponse<BoardData>> {
    return axios.get<BoardData>(API_URL + "mod", { headers: authHeader() });
  }

  getAdminBoard(): Promise<AxiosResponse<BoardData>> {
    return axios.get<BoardData>(API_URL + "admin", { headers: authHeader() });
  }
}

const service = new UserService();
export default service;
