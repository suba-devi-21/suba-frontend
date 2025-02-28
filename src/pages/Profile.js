import { useState } from "react";
import Navbar from "../components/Navbar";

const Profile = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); 
  const [isListModalOpen, setIsListModalOpen] = useState(false); 
  const [modalType, setModalType] = useState(""); 
  
  const [user, setUser] = useState({
    username: "your_username",
    bio: "This is a sample bio.",
    profilePic: "https://picsum.photos/100?random=1",
    posts: [
      { id: 1, image: "https://picsum.photos/500?random=1", caption: "Sample post!", likes: 120 },
      { id: 2, image: "https://picsum.photos/500?random=2", caption: "Another post!", likes: 90 },
      { id: 3, image: "https://picsum.photos/500?random=3", caption: "Great day!", likes: 150 },
    ],
    followers: [
      { id: 1, name: "John Doe", profilePic: "https://picsum.photos/50?random=10" },
      { id: 2, name: "Emma Watson", profilePic: "https://picsum.photos/50?random=11" },
      { id: 3, name: "Michael Scott", profilePic: "https://picsum.photos/50?random=12" },
      { id: 4, name: "Olivia Brown", profilePic: "https://picsum.photos/50?random=13" },
      { id: 5, name: "Liam Johnson", profilePic: "https://picsum.photos/50?random=14" },
      { id: 6, name: "Sophia Miller", profilePic: "https://picsum.photos/50?random=15" },
      { id: 7, name: "James Wilson", profilePic: "https://picsum.photos/50?random=16" },
      { id: 8, name: "Ava Taylor", profilePic: "https://picsum.photos/50?random=17" },
      { id: 9, name: "William Anderson", profilePic: "https://picsum.photos/50?random=18" },
      { id: 10, name: "Isabella White", profilePic: "https://picsum.photos/50?random=19" },
      { id: 11, name: "Mason Thomas", profilePic: "https://picsum.photos/50?random=20" },
      { id: 12, name: "Mia Martinez", profilePic: "https://picsum.photos/50?random=21" },
      { id: 13, name: "Ethan Harris", profilePic: "https://picsum.photos/50?random=22" },
      { id: 14, name: "Amelia Clark", profilePic: "https://picsum.photos/50?random=23" },
      { id: 15, name: "Alexander Lewis", profilePic: "https://picsum.photos/50?random=24" },
      { id: 16, name: "Charlotte Young", profilePic: "https://picsum.photos/50?random=25" },
      { id: 17, name: "Daniel King", profilePic: "https://picsum.photos/50?random=26" },
      { id: 18, name: "Harper Hall", profilePic: "https://picsum.photos/50?random=27" },
      { id: 19, name: "Benjamin Allen", profilePic: "https://picsum.photos/50?random=28" },
      { id: 20, name: "Evelyn Scott", profilePic: "https://picsum.photos/50?random=29" },
      { id: 21, name: "Jacob Wright", profilePic: "https://picsum.photos/50?random=30" },
      { id: 22, name: "Scarlett Lopez", profilePic: "https://picsum.photos/50?random=31" },
      { id: 23, name: "Henry Green", profilePic: "https://picsum.photos/50?random=32" },
      { id: 24, name: "Lily Adams", profilePic: "https://picsum.photos/50?random=33" },
      { id: 25, name: "David Baker", profilePic: "https://picsum.photos/50?random=34" },
      { id: 26, name: "Zoey Campbell", profilePic: "https://picsum.photos/50?random=35" },
      { id: 27, name: "Matthew Carter", profilePic: "https://picsum.photos/50?random=36" },
      { id: 28, name: "Ella Mitchell", profilePic: "https://picsum.photos/50?random=37" },
      { id: 29, name: "Sebastian Perez", profilePic: "https://picsum.photos/50?random=38" },
      { id: 30, name: "Emily Turner", profilePic: "https://picsum.photos/50?random=39" },
      { id: 31, name: "Jack Parker", profilePic: "https://picsum.photos/50?random=40" },
      { id: 32, name: "Sofia Collins", profilePic: "https://picsum.photos/50?random=41" },
      { id: 33, name: "Aiden Edwards", profilePic: "https://picsum.photos/50?random=42" },
      { id: 34, name: "Madison Stewart", profilePic: "https://picsum.photos/50?random=43" },
      { id: 35, name: "Gabriel Sanchez", profilePic: "https://picsum.photos/50?random=44" },
      { id: 36, name: "Chloe Morris", profilePic: "https://picsum.photos/50?random=45" },
      { id: 37, name: "Lucas Rogers", profilePic: "https://picsum.photos/50?random=46" },
      { id: 38, name: "Abigail Reed", profilePic: "https://picsum.photos/50?random=47" },
      { id: 39, name: "Elijah Cook", profilePic: "https://picsum.photos/50?random=48" },
      { id: 40, name: "Grace Morgan", profilePic: "https://picsum.photos/50?random=49" },
      { id: 41, name: "Nathan Bell", profilePic: "https://picsum.photos/50?random=50" },
      { id: 42, name: "Victoria Bailey", profilePic: "https://picsum.photos/50?random=51" },
      { id: 43, name: "Samuel Cooper", profilePic: "https://picsum.photos/50?random=52" },
      { id: 44, name: "Addison Gomez", profilePic: "https://picsum.photos/50?random=53" },
      { id: 45, name: "Owen Peterson", profilePic: "https://picsum.photos/50?random=54" },
      { id: 46, name: "Nora Powell", profilePic: "https://picsum.photos/50?random=55" },
      { id: 47, name: "Dylan Barnes", profilePic: "https://picsum.photos/50?random=56" },
      { id: 48, name: "Hannah Murphy", profilePic: "https://picsum.photos/50?random=57" },
      { id: 49, name: "Caleb Ross", profilePic: "https://picsum.photos/50?random=58" },
      { id: 50, name: "Penelope Watson", profilePic: "https://picsum.photos/50?random=59" },
      { id: 51, name: "Ryan Russell", profilePic: "https://picsum.photos/50?random=60" },
      { id: 52, name: "Hazel Griffin", profilePic: "https://picsum.photos/50?random=61" },
      { id: 53, name: "Julian Bennett", profilePic: "https://picsum.photos/50?random=62" },
      { id: 54, name: "Savannah Reed", profilePic: "https://picsum.photos/50?random=63" },
      { id: 55, name: "Adam Howard", profilePic: "https://picsum.photos/50?random=64" },
    ],
    following: [
      { id: 1, name: "Noah Scott", profilePic: "https://picsum.photos/50?random=65" },
      { id: 2, name: "Luna Hall", profilePic: "https://picsum.photos/50?random=66" },
    ],
  });
  
  

  const [editData, setEditData] = useState({
    username: user.username,
    bio: user.bio,
    profilePic: user.profilePic,
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); 
      setEditData({ ...editData, profilePic: imageUrl });
    }
  };

  const handleSave = () => {
    setUser({ ...user, ...editData });
    setIsEditModalOpen(false); 
  };

  const [selectedPostIndex, setSelectedPostIndex] = useState(null);
  const openListModal = (type) => {
    setModalType(type);
    setIsListModalOpen(true);
  };
  const openPostModal = (index) => {
    setSelectedPostIndex(index);
  };

  const closePostModal = () => {
    setSelectedPostIndex(null);
  };

  const nextPost = () => {
    if (selectedPostIndex < user.posts.length - 1) {
      setSelectedPostIndex(selectedPostIndex + 1);
    }
  };

  const prevPost = () => {
    if (selectedPostIndex > 0) {
      setSelectedPostIndex(selectedPostIndex - 1);
    }
  };
  return (
   <>
    <Navbar />
    <div className="pb-16 md:pb-0 md:ml-64 p-4">
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex items-center space-x-6 mb-6">
        <img src={user.profilePic} alt={user.username} className="w-24 h-24 rounded-full" />
        <div>
          <h1 className="text-2xl font-bold">{user.username}</h1>
          <p className="text-gray-600">{user.bio}</p>
          <div className="flex space-x-4 mt-2">
            <p><span className="font-semibold">{user.posts.length}</span> posts</p>
            <p className="cursor-pointer text-blue-500" onClick={() => openListModal("followers")}>
              <span className="font-semibold">{user.followers.length}</span> followers
            </p>
            <p className="cursor-pointer text-blue-500" onClick={() => openListModal("following")}>
              <span className="font-semibold">{user.following.length}</span> following
            </p>
          </div>
          <button
            onClick={() => setIsEditModalOpen(true)}
            className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Edit Profile
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {user.posts.map((post, index) => (
          <img key={post.id} src={post.image} alt="Post" className="w-full h-40 object-cover rounded-lg cursor-pointer" onClick={() => openPostModal(index)} />
        ))}
      </div>

      {isEditModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

            <label className="block mb-2 text-sm font-medium">Username</label>
            <input
              type="text"
              value={editData.username}
              onChange={(e) => setEditData({ ...editData, username: e.target.value })}
              className="w-full p-2 border rounded"
            />

            <label className="block mt-4 mb-2 text-sm font-medium">Bio</label>
            <input
              type="text"
              value={editData.bio}
              onChange={(e) => setEditData({ ...editData, bio: e.target.value })}
              className="w-full p-2 border rounded"
            />

            <label className="block mt-4 mb-2 text-sm font-medium">Profile Picture</label>
            <input type="file" accept="image/*" onChange={handleFileChange} className="w-full p-2 border rounded" />
            
            <div className="mt-3 flex justify-center">
              <img src={editData.profilePic} alt="Preview" className="w-20 h-20 rounded-full border" />
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
     {selectedPostIndex !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button onClick={closePostModal} className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded">X</button>
            <img src={user.posts[selectedPostIndex].image} alt="Post" className="w-full h-60 object-cover rounded" />
            <p className="text-gray-700 mt-3">{user.posts[selectedPostIndex].caption}</p>
            <p className="text-sm text-gray-500">Likes: {user.posts[selectedPostIndex].likes}</p>
            <div className="mt-3">
              <h3 className="font-bold">Comments:</h3>
              <ul>
                {user.posts[selectedPostIndex].comments?.map((comment, i) => (
                  <li key={i} className="text-gray-600">{comment}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between mt-4">
              <button onClick={prevPost} disabled={selectedPostIndex === 0} className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50">Previous</button>
              <button onClick={nextPost} disabled={selectedPostIndex === user.posts.length - 1} className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:opacity-50">Next</button>
            </div>
          </div>
        </div>
      )}
      {isListModalOpen && modalType && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4">
              {modalType === "followers" ? "Followers" : "Following"}
            </h2>
            <div className="max-h-60 overflow-y-auto">
              {(modalType === "followers" ? user.followers : user.following).map((person) => (
                <div key={person.id} className="flex items-center space-x-4 p-2 border-b">
                  <img src={person.profilePic} alt={person.name} className="w-10 h-10 rounded-full" />
                  <p className="text-gray-700">{person.name}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setIsListModalOpen(false)}
              className="mt-4 px-4 py-2 bg-gray-400 text-white rounded-md w-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </div>
   </>
  );
};

export default Profile;
