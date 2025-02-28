import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Notification from "./components/Notification";
import ChatApp from "./components/Chatapp";
import LoginPage from "./Login";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/messages" element={<ChatApp />} />
      </Routes>
    </Router>
  );
};

export default App;