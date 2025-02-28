import Post from "../components/Post";
import Navbar from "../components/Navbar";
import Stories from "../components/Stories";
import Suggestions from "../components/Suggestions";

const Home = () => {
  const posts = [
    {
      id: 1,
      username: "alex_walker",
      image: "https://picsum.photos/500/500?random=1",
      caption: "Enjoying the beauty of nature! 🌿",
      likes: 120,
    },
    {
      id: 2,
      username: "bella_dreams",
      image: "https://picsum.photos/500/500?random=2",
      caption: "City lights are mesmerizing! 🌃",
      likes: 95,
    },
    {
      id: 3,
      username: "chris_fitlife",
      image: "https://picsum.photos/500/500?random=3",
      caption: "Chilling in the snow! ❄️",
      likes: 150,
    },
    {
      id: 4,
      username: "daisy_loves_art",
      image: "https://picsum.photos/500/500?random=4",
      caption: "Sunset by the beach! 🌅",
      likes: 200,
    },
    {
      id: 5,
      username: "ethan_the_coder",
      image: "https://picsum.photos/500/500?random=5",
      caption: "Lost in the misty forest! 🌲",
      likes: 80,
    },
    {
      id: 6,
      username: "fashion_fiona",
      image: "https://picsum.photos/500/500?random=6",
      caption: "Exploring the desert! 🏜️",
      likes: 110,
    },
    {
      id: 7,
      username: "gamer_george",
      image: "https://picsum.photos/500/500?random=7",
      caption: "Wildlife is amazing! 🐘",
      likes: 170,
    },
    {
      id: 8,
      username: "hannah_travels",
      image: "https://picsum.photos/500/500?random=8",
      caption: "Spring is in the air! 🌸",
      likes: 90,
    },
    {
      id: 9,
      username: "isaac_music",
      image: "https://picsum.photos/500/500?random=9",
      caption: "Morning coffee vibes! ☕",
      likes: 130,
    },
    {
      id: 10,
      username: "jessy_photography",
      image: "https://picsum.photos/500/500?random=10",
      caption: "Getting lost in a good book! 📚",
      likes: 60,
    },
];

  return (
    <div>
      <Navbar />
      <div className="pb-16 md:pb-0 md:ml-64 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Stories />
              <div className="mt-6">
                {posts.map((post) => (
                  <Post key={post.id} {...post} />
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <Suggestions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;