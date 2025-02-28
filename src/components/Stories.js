import { useState, useEffect } from "react";

const Stories = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [timer, setTimer] = useState(3); 
    const stories = [
      {
        id: 1,
        username: "Sophia",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      },
      {
        id: 2,
        username: "Emma",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      },
      {
        id: 3,
        username: "Liam",
        image:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      },
      {
        id: 4,
        username: "Olivia",
        image:
          "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      },
      {
        id: 5,
        username: "Noah",
        image:
          "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      },
      {
        id: 6,
        username: "Ava",
        image:
          "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      },
      {
        id: 7,
        username: "Mason",
        image:
          "https://images.unsplash.com/photo-1485178575877-1a13bf489dfe?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      },
      {
        id: 8,
        username: "Isabella",
        image:
          "https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      },
      {
        id: 9,
        username: "Ethan",
        image:
          "https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      },
      {
        id: 10,
        username: "Mia",
        image:
          "https://images.unsplash.com/photo-1484688493527-670f98f9b195?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80",
      },
    ];

 useEffect(() => {
    if (selectedStory) {
      setTimer(3); 
      const countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      const closeTimer = setTimeout(() => {
        setSelectedStory(null);
      }, 3000);

      return () => {
        clearInterval(countdown);
        clearTimeout(closeTimer);
      };
    }
  }, [selectedStory]);

  return (
    <div>
      <div className="flex space-x-4 p-4 bg-white border border-gray-200 rounded-lg overflow-x-auto">
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setSelectedStory(story)}
          >
            <div className="w-16 h-16 rounded-full border-2 border-pink-500 p-1">
              <img
                src={story.image}
                alt={story.username}
                className="w-full h-full rounded-full"
              />
            </div>
            <p className="text-xs mt-1">{story.username}</p>
          </div>
        ))}
      </div>
      {selectedStory && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="bg-white p-4 rounded-lg shadow-lg relative w-72"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedStory(null)}
            >
              ✖
            </button>            
            <div className="absolute top-2 left-2 text-white bg-black px-2 py-1 rounded-full text-xs">
              {timer}s
            </div>

            <img
              src={selectedStory.image}
              alt={selectedStory.username}
              className="w-full h-64 object-cover rounded-lg"
            />
            <p className="text-center mt-2 text-lg font-semibold">
              {selectedStory.username}'s Story
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Stories;
