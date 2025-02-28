import React, { useState } from "react";

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([
    {
      id: 1,
      username: "alex_walker",
      image: "https://picsum.photos/40/40?random=1",
      followed: false,
    },
    {
      id: 2,
      username: "bella_dreams",
      image: "https://picsum.photos/40/40?random=2",
      followed: false,
    },
    {
      id: 3,
      username: "chris_fitlife",
      image: "https://picsum.photos/40/40?random=3",
      followed: false,
    },
    {
      id: 4,
      username: "daisy_loves_art",
      image: "https://picsum.photos/40/40?random=4",
      followed: false,
    },
    {
      id: 5,
      username: "ethan_the_coder",
      image: "https://picsum.photos/40/40?random=5",
      followed: false,
    },
    {
      id: 6,
      username: "fashion_fiona",
      image: "https://picsum.photos/40/40?random=6",
      followed: false,
    },
    {
      id: 7,
      username: "gamer_george",
      image: "https://picsum.photos/40/40?random=7",
      followed: false,
    },
    {
      id: 8,
      username: "hannah_travels",
      image: "https://picsum.photos/40/40?random=8",
      followed: false,
    },
    {
      id: 9,
      username: "isaac_music",
      image: "https://picsum.photos/40/40?random=9",
      followed: false,
    },
    {
      id: 10,
      username: "jessy_photography",
      image: "https://picsum.photos/40/40?random=10",
      followed: false,
    },
  ]);

  const handleFollow = (id) => {
    setSuggestions((prevSuggestions) =>
      prevSuggestions.map((suggestion) =>
        suggestion.id === id
          ? { ...suggestion, followed: !suggestion.followed }
          : suggestion
      )
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4">
      <h2 className="font-semibold text-gray-800 mb-4">Suggestions For You</h2>
      {suggestions.map((suggestion) => (
        <div key={suggestion.id} className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <img
              src={suggestion.image}
              alt={suggestion.username}
              className="w-8 h-8 rounded-full mr-3"
            />
            <span className="text-sm font-semibold">{suggestion.username}</span>
          </div>
          <button
            onClick={() => handleFollow(suggestion.id)}
            className={`text-sm font-semibold ${
              suggestion.followed ? "text-gray-500" : "text-blue-500"
            }`}
          >
            {suggestion.followed ? "Unfollow" : "Follow"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
