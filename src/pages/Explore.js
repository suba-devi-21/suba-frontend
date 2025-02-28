import Navbar from "../components/Navbar";

const Explore = () => {
    const posts = [
        { id: 1, type: "image", url: "https://picsum.photos/300/300?random=1" },
        { id: 2, type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
        { id: 3, type: "image", url: "https://picsum.photos/300/300?random=2" },
        { id: 4, type: "video", url: "https://cdn.pixabay.com/vimeo/780718083/forest-151665.mp4?width=1280&hash=6ecdfda8fc5638d563bf0c54a6e1742a1bf9b53b" },
        { id: 5, type: "image", url: "https://picsum.photos/300/300?random=3" },
        { id: 6, type: "video", url: "https://cdn.pixabay.com/vimeo/801073392/sea-160711.mp4?width=1280&hash=162fa6164069bd6ac999cc44cdde1b57047c8ae0" },
        { id: 7, type: "image", url: "https://picsum.photos/300/300?random=4" },
        { id: 8, type: "video", url: "https://www.w3schools.com/html/movie.mp4" },
        { id: 9, type: "image", url: "https://picsum.photos/300/300?random=5" },
        { id: 10, type: "video", url: "https://player.vimeo.com/external/502102221.sd.mp4?s=27023252d522e1f81b3a6811c9354e9efdf14d99&profile_id=165&oauth2_token_id=57447761" },
        { id: 11, type: "image", url: "https://picsum.photos/300/300?random=6" },
        { id: 12, type: "video", url: "https://cdn.pixabay.com/vimeo/847985407/sunset-174162.mp4?width=1280&hash=3120230a898ad5c0f4f3b0e3c12bf70f6eaa8120" },
        { id: 13, type: "image", url: "https://picsum.photos/300/300?random=7" },
        { id: 14, type: "video", url: "https://player.vimeo.com/external/479592495.sd.mp4?s=36ba325da37e9e99b06bb25de0b10d41f79c9a93&profile_id=165&oauth2_token_id=57447761" },
        { id: 15, type: "image", url: "https://picsum.photos/300/300?random=8" },
        { id: 16, type: "image", url: "https://picsum.photos/300/300?random=9" },
        { id: 17, type: "video", url: "https://player.vimeo.com/external/457383855.sd.mp4?s=a4f750c6ad2b3a8d94e0832c46bc760a7dc437ff&profile_id=165&oauth2_token_id=57447761" },
        { id: 18, type: "image", url: "https://picsum.photos/300/300?random=10" },
        { id: 19, type: "image", url: "https://picsum.photos/300/300?random=11" },
        { id: 20, type: "video", url: "https://cdn.pixabay.com/vimeo/847985407/sunset-174162.mp4?width=1280&hash=3120230a898ad5c0f4f3b0e3c12bf70f6eaa8120" },
    ];

    return (
        <>
        <Navbar />
        <div className="pb-16 md:pb-0 md:ml-64 p-4">
        <div className="max-w-4xl mx-auto p-4">
            <div className="grid grid-cols-3 gap-2">
                {posts.map((post) => (
                    post.type === "image" ? (
                        <img
                            key={post.id}
                            src={post.url}
                            alt="Post"
                            className="w-full h-40 object-cover rounded-lg"
                        />
                    ) : (
                        <video
                            key={post.id}
                            src={post.url}
                            autoPlay
                            loop
                            muted
                            className="w-full h-40 object-cover rounded-lg"
                        />
                    )
                ))}
            </div>
        </div>
        </div>
        </>
        
    );
};

export default Explore;
