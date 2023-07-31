interface User {
  accessToken: string;
  // Add other properties if present in the user object
}

export default function authHeader(): Record<string, string> {
  const userStr = localStorage.getItem("user");
  let user: User | null = null;
  if (userStr) user = JSON.parse(userStr);

  if (user && user.accessToken) {
    return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}
