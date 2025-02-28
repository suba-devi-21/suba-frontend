const Message = ({ message, isCurrentUser }) => {
    return (
      <div className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
        <div
          className={`max-w-xs p-3 rounded-lg ${
            isCurrentUser ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          <p>{message.text}</p>
          <span className="text-xs text-gray-500">{message.time}</span>
        </div>
      </div>
    );
  };
  
  export default Message;