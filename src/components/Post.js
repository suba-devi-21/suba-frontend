import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Post = ({ username, image, caption, likes: initialLikes }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1); 
    }
    setIsLiked(!isLiked); 
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg mb-6">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <img
            src={`https://picsum.photos/40/40?random=${username}`} 
            alt={username}
            className="w-10 h-10 rounded-full mr-3"
          />
          <span className="font-semibold">{username}</span>
        </div>
        <img src={image} alt="Post" className="w-full rounded-lg" />
        <div className="mt-4">
          <div className="flex items-center space-x-2">
            <button onClick={handleLike} className="focus:outline-none">
              {isLiked ? (
                <AiFillHeart className="text-red-500 text-2xl" /> 
              ) : (
                <AiOutlineHeart className="text-2xl" /> 
              )}
            </button>
            <p className="font-semibold">{likes} likes</p>
          </div>
          <p className="mt-2">
            <span className="font-semibold">{username}</span> {caption}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;