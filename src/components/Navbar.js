import { FaHome, FaCompass, FaHeart, FaUser, FaEnvelope, FaInstagram } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <nav className="flex justify-around p-4">
          <NavLink to="/" className={`text-2xl ${location.pathname === "/" ? "text-[#f6339a]" : "text-gray-700"}`}>
            <FaHome />
          </NavLink>
          <NavLink to="/explore" className={`text-2xl ${location.pathname === "/explore" ? "text-[#f6339a]" : "text-gray-700"}`}>
            <FaCompass />
          </NavLink>
          <NavLink to="/notifications" className={`text-2xl ${location.pathname === "/notifications" ? "text-[#f6339a]" : "text-gray-700"}`}>
            <FaHeart />
          </NavLink>
          <NavLink to="/profile" className={`text-2xl ${location.pathname === "/profile" ? "text-[#f6339a]" : "text-gray-700"}`}>
            <FaUser />
          </NavLink>
          <NavLink to="/messages" className={`text-2xl ${location.pathname === "/messages" ? "text-[#f6339a]" : "text-gray-700"}`}>
            <FaEnvelope />
          </NavLink>
        </nav>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 p-4">
        {/* Instagram Logo & Name */}
        <div className="flex items-center space-x-2 mb-8">
          <FaInstagram className="text-3xl text-pink-500" />
          <h1 className="text-2xl font-bold">Instagram</h1>
        </div>

        <nav className="space-y-4">
          <NavLink to="/home" className={`flex items-center space-x-3 hover:text-gray-900 ${location.pathname === "/home" ? "text-[#f6339a]" : "text-gray-700"}`}>
            <FaHome className="text-2xl" />
            <span>Home</span>
          </NavLink>
          <NavLink to="/explore" className={`flex items-center space-x-3 hover:text-gray-900 ${location.pathname === "/explore" ? "text-[#f6339a]" : "text-gray-700"}`}>
            <FaCompass className="text-2xl" />
            <span>Explore</span>
          </NavLink>
          <NavLink to="/notifications" className={`flex items-center space-x-3 hover:text-gray-900 ${location.pathname === "/notifications" ? "text-[#f6339a]" : "text-gray-700"}`}>
            <FaHeart className="text-2xl" />
            <span>Notifications</span>
          </NavLink>
          <NavLink to="/profile" className={`flex items-center space-x-3 hover:text-gray-900 ${location.pathname === "/profile" ? "text-[#f6339a]" : "text-gray-700"}`}>
            <FaUser className="text-2xl" />
            <span>Profile</span>
          </NavLink>
          <NavLink to="/messages" className={`flex items-center space-x-3 hover:text-gray-900 ${location.pathname === "/messages" ? "text-[#f6339a]" : "text-gray-700"}`}>
            <FaEnvelope className="text-2xl" />
            <span>Messages</span>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
