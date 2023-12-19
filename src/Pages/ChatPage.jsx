import axios from "axios";
import { useEffect, useState } from "react";

import { BASE_URL_SERVER } from "../config";

const ChatPage = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    const { data } = await axios.get(`${BASE_URL_SERVER}/api/chat`);
    setChats(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div>
      {chats.map((chat) => (
        <div key={`${chat._id}`}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
