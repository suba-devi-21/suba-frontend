import Navbar from "./Navbar";

const Notification = () => {
    const notifications = [
        { id: 1, type: "like", user: "john_doe", post: "https://picsum.photos/50/50?random=1", time: "2m ago" },
        { id: 2, type: "comment", user: "emma_watson", post: "https://picsum.photos/50/50?random=2", time: "5m ago" },
        { id: 3, type: "follow", user: "michael23", time: "10m ago" },
        { id: 4, type: "like", user: "sarah_lee", post: "https://picsum.photos/50/50?random=3", time: "15m ago" },
        { id: 5, type: "comment", user: "david_kim", post: "https://picsum.photos/50/50?random=4", time: "30m ago" },
        { id: 6, type: "follow", user: "lucy_smith", time: "1h ago" },
        { id: 7, type: "like", user: "peter_parker", post: "https://picsum.photos/50/50?random=5", time: "2h ago" },
        { id: 8, type: "comment", user: "mary_jane", post: "https://picsum.photos/50/50?random=6", time: "3h ago" },
        { id: 9, type: "follow", user: "bruce_wayne", time: "4h ago" },
        { id: 10, type: "like", user: "tony_stark", post: "https://picsum.photos/50/50?random=7", time: "5h ago" },
        { id: 11, type: "comment", user: "natasha_romanoff", post: "https://picsum.photos/50/50?random=8", time: "6h ago" },
        { id: 12, type: "follow", user: "steve_rogers", time: "7h ago" },
        { id: 13, type: "like", user: "clark_kent", post: "https://picsum.photos/50/50?random=9", time: "8h ago" },
        { id: 14, type: "comment", user: "diana_prince", post: "https://picsum.photos/50/50?random=10", time: "9h ago" },
        { id: 15, type: "follow", user: "arthur_curry", time: "10h ago" },
        { id: 16, type: "like", user: "barry_allen", post: "https://picsum.photos/50/50?random=11", time: "12h ago" },
        { id: 17, type: "comment", user: "hal_jordan", post: "https://picsum.photos/50/50?random=12", time: "14h ago" },
        { id: 18, type: "follow", user: "wade_wilson", time: "16h ago" },
        { id: 19, type: "like", user: "logan_wolverine", post: "https://picsum.photos/50/50?random=13", time: "18h ago" },
        { id: 20, type: "comment", user: "charles_xavier", post: "https://picsum.photos/50/50?random=14", time: "20h ago" },
        { id: 21, type: "follow", user: "erik_magnus", time: "1d ago" },
        { id: 22, type: "like", user: "jean_grey", post: "https://picsum.photos/50/50?random=15", time: "1d ago" },
        { id: 23, type: "comment", user: "scott_summers", post: "https://picsum.photos/50/50?random=16", time: "2d ago" },
        { id: 24, type: "follow", user: "ororo_munroe", time: "2d ago" },
        { id: 25, type: "like", user: "kurt_wagner", post: "https://picsum.photos/50/50?random=17", time: "2d ago" },
    ];

    return (
        <>
        <Navbar />
        <div className="pb-16 md:pb-0 md:ml-64 p-4">
        <div className="max-w-md mx-auto p-4">
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <div className="space-y-4">
                {notifications.map((notification) => (
                    <div key={notification.id} className="flex items-center bg-gray-100 p-3 rounded-lg shadow">
                        <div className="flex-1">
                            <p className="text-sm">
                                <span className="font-semibold">{notification.user}</span>{" "}
                                {notification.type === "like" && "liked your post."}
                                {notification.type === "comment" && "commented on your post."}
                                {notification.type === "follow" && "started following you."}
                            </p>
                            <p className="text-xs text-gray-500">{notification.time}</p>
                        </div>
                        {notification.post && (
                            <img
                                src={notification.post}
                                alt="Post"
                                className="w-10 h-10 object-cover rounded-lg"
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
        </div>
           
        </>
    );
};

export default Notification;
