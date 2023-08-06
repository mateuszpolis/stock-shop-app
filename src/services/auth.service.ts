import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://localhost:7010/api/Auth/";

interface UserData {
  data: any;
  accessToken: string;
  // Add other properties if present in the response data
}

class AuthService {
  async login(
    email: string,
    password: string,
    rememberUser: boolean
  ): Promise<UserData> {
    const response = await axios.post<UserData>(API_URL + "login", {
      email,
      password,
      rememberUser,
    });
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  async editUserDetails(
    firstName: string,
    lastName: string,
    email: string
  ): Promise<UserData> {
    try {
      const response = await axios.put<UserData>(
        API_URL + "edit",
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
        },
        {
          headers: authHeader(),
        }
      );

      localStorage.setItem("user", JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  logout(): void {
    localStorage.removeItem("user");
  }

  register(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<void> {
    return axios.post(API_URL + "register", {
      firstName,
      lastName,
      email,
      password,
    });
  }

  getCurrentUser(): UserData | null {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);

    return null;
  }
}

const authService = new AuthService();
export default authService;
