import React, { useState } from "react";
import Message from "../components/Message";

const MessagePage = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey, how are you?",
      time: "10:00 AM",
      sender: "user1",
    },
    {
      id: 2,
      text: "I'm good, thanks! How about you?",
      time: "10:05 AM",
      sender: "currentUser",
    },
    {
      id: 3,
      text: "Doing great! Let's catch up soon.",
      time: "10:10 AM",
      sender: "user1",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const message = {
      id: messages.length + 1,
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      sender: "currentUser",
    };

    setMessages([...messages, message]);
    setNewMessage("");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Messages</h1>

      {/* Message List */}
      <div className="space-y-4 mb-6">
        {messages.map((message) => (
          <Message
            key={message.id}
            message={message}
            isCurrentUser={message.sender === "currentUser"}
          />
        ))}
      </div>

      {/* Message Input */}
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default MessagePage;