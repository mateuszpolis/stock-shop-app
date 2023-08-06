export default function authHeader(): Record<string, string> {
  const user = localStorage.getItem("user");

  if (user) {
    const userData = JSON.parse(user);
    if (userData) {
      return { Authorization: `Bearer ${userData}` };
    }
  }

  return {};
}
