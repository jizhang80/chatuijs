import { useState, useEffect } from "react";
import ChatItem from "./ChatItem";

const ChatsList = () => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await fetch("http://127.0.0.1:3001/api/chats/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setChats(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, []);

  if (loading) return <p>Loading chats...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <p className="pt-8 p-2 text-gray-500">Chats</p>
      {chats.map((chat) => (
        <ChatItem key={chat._id} name={chat.title} />
      ))}
    </div>
  );
};

export default ChatsList;
