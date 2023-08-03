import axios from "axios";

const API_URL = "https://localhost:7010/api/Auth/";

interface UserData {
  data: any;
  accessToken: string;
  // Add other properties if present in the response data
}

class AuthService {
  async login(email: string, password: string, rememberUser: boolean): Promise<UserData> {
    const response = await axios.post<UserData>(API_URL + "login", {
      email,
      password,
      rememberUser
    });
    console.log(response);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
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
