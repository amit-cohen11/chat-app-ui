let BASE_URL_SERVER = "";
if (process.env.NODE_ENV === "production") {
  BASE_URL_SERVER = "https://chat-app-server-0e9s.onrender.com";
} else {
  BASE_URL_SERVER = "http://localhost:5000";
}

export { BASE_URL_SERVER };
