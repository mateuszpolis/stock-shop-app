import axios from "axios";

const API_URL = "http://localhost:7010/api/auth/";

interface UserData {
  accessToken: string;
  // Add other properties if present in the response data
}

class AuthService {
  async login(username: string, password: string): Promise<UserData> {
    const response = await axios.post<UserData>(API_URL + "signin", {
      username,
      password,
    });
    if (response.data.accessToken) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  }

  logout(): void {
    localStorage.removeItem("user");
  }

  register(username: string, email: string, password: string): Promise<void> {
    return axios.post(API_URL + "signup", {
      username,
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
