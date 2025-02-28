import { useState } from "react";
import Message from "./Message";
import Navbar from "../components/Navbar"; 

const ChatApp = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState({});
  const [newMessage, setNewMessage] = useState("");

  const users = [
    { id: 1, name: "John Doe", profilePic: "https://picsum.photos/50?random=1" },
    { id: 2, name: "Emma Watson", profilePic: "https://picsum.photos/50?random=2" },
    { id: 3, name: "Michael Scott", profilePic: "https://picsum.photos/50?random=3" },
  ];

  const openChat = (user) => {
    setSelectedUser(user);
    if (!messages[user.id]) {
      setMessages((prev) => ({ ...prev, [user.id]: [] }));
    }
  };

  const sendMessage = () => {
    if (newMessage.trim() === "") return;

    const newMsg = { text: newMessage, time: new Date().toLocaleTimeString(), isCurrentUser: true };

    setMessages((prev) => ({
      ...prev,
      [selectedUser.id]: [...prev[selectedUser.id], newMsg],
    }));

    setNewMessage("");
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar /> 
      
      <div className="flex flex-1 w-full">
        <div
          className={`absolute md:relative w-full md:w-1/3 lg:w-1/4 bg-gray-100 border-r p-4 transition-transform duration-300 ${
            selectedUser ? "translate-x-[-100%] md:translate-x-0" : "translate-x-0"
          }`}
        >
          <h2 className="text-xl font-bold mb-4">Chats</h2>
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center p-3 cursor-pointer hover:bg-gray-200 rounded-lg"
              onClick={() => openChat(user)}
            >
              <img src={user.profilePic} alt={user.name} className="w-12 h-12 rounded-full mr-3" />
              <p className="text-lg">{user.name}</p>
            </div>
          ))}
        </div>

        <div className={`flex-1 flex flex-col ${selectedUser ? "block" : "hidden md:flex"}`}>
          {selectedUser ? (
            <>
              <div className="p-4 border-b flex items-center bg-white shadow-md">
                <button className="md:hidden text-xl mr-4" onClick={() => setSelectedUser(null)}>
                  🔙
                </button>
                <img src={selectedUser.profilePic} alt={selectedUser.name} className="w-10 h-10 rounded-full mr-3" />
                <h2 className="text-lg font-bold">{selectedUser.name}</h2>
              </div>

              <div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-2">
                {messages[selectedUser.id]?.map((msg, index) => (
                  <Message key={index} message={msg} isCurrentUser={msg.isCurrentUser} />
                ))}
              </div>

              <div className="p-4 border-t flex bg-white sticky bottom-0">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 p-3 border rounded-lg"
                />
                <button onClick={sendMessage} className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">
                  Send
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-500">
              Select a user to start chatting
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
