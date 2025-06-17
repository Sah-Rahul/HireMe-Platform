import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaSignOutAlt, FaBars, FaTimes, FaBookmark } from "react-icons/fa";
import { toast } from "react-toastify";
import Categories from "../Categories/Categories";
import Newsletter from "../Newsletter/Newsletter";
const Home = () => {
  const [userdata, setUserData] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const logoutHandler = () => {
    localStorage.clear();
    setUserData(null);
    toast.success("Logout successful!");
  };

  return (
    <>
      <div>
        {/* Navbar */}
        <header>
          <nav className="px-4 md:px-10 lg:px-16 absolute top-0 left-0 w-full z-20 py-4 flex justify-between items-center text-white">
            <div className="text-2xl font-bold text-green-500">JobsHub</div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-6 text-sm md:text-base font-medium">
              <li className="hover:text-green-400 cursor-pointer">Home</li>
              <Link to={"/job"}>
                <li className="hover:text-green-400 cursor-pointer">Jobs</li>
              </Link>
              <li className="hover:text-green-400 cursor-pointer">Contact</li>
            </ul>

            {/* Hamburger for mobile */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            {/* Auth / Profile */}
            <div className="relative hidden md:flex gap-4">
              {userdata ? (
                <div
                  onClick={() => setToggle(!toggle)}
                  className="flex items-center justify-center overflow-hidden h-12 w-12 cursor-pointer bg-red-500 rounded-full"
                >
                  <img
                    className="h-full w-full object-cover"
                    src={userdata.profilePic}
                    alt="User"
                  />
                </div>
              ) : (
                <>
                  <Link to={"/login"}>
                    <button className="cursor-pointer px-6 py-2 rounded font-semibold bg-green-600 hover:bg-green-700">
                      Login
                    </button>
                  </Link>
                  <Link to={"/sign-up"}>
                    <button className="cursor-pointer px-6 py-2 rounded font-semibold bg-green-600 hover:bg-green-700">
                      Sign Up
                    </button>
                  </Link>
                </>
              )}

              {userdata && toggle && (
                <div className="absolute top-14 right-0 w-64 bg-green-600 shadow-xl rounded-xl p-4 text-black flex flex-col gap-3">
                  <button className="bg-gray-100 px-4 py-2 rounded-lg ">
                    Hi, {userdata.fullname || "User"}
                  </button>
                  <Link to={"/job-saved"}>
                    <button className="cursor-pointer w-full bg-gray-100 px-4 py-2 rounded-lg hover:bg-green-200 flex gap-2 items-center">
                      <FaBookmark className="text-green-600" />
                      Saved Jobs
                    </button>
                  </Link>
                  <Link to={"/applied-job"}>
                    <button className="cursor-pointer w-full bg-gray-100 px-4 py-2 rounded-lg hover:bg-green-200 flex gap-2 items-center">
                      <FaBookmark className="text-green-600" />
                      Applied Jobs
                    </button>
                  </Link>
                  <button
                    onClick={logoutHandler}
                    className="cursor-pointer bg-gray-100 px-4 py-2 rounded-lg hover:bg-green-200 flex gap-2 items-center"
                  >
                    <FaSignOutAlt className="text-green-600" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </nav>

          {/* Mobile Menu Dropdown */}
          {mobileMenu && (
            <div className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 text-white px-4 py-4 space-y-4 z-20">
              <Link to="/" className="block hover:text-green-400">
                Home
              </Link>
              <Link to="/job" className="block hover:text-green-400">
                Jobs
              </Link>
              <Link to="/contact" className="block hover:text-green-400">
                Contact
              </Link>

              {!userdata ? (
                <>
                  <Link to="/login" className="block hover:text-green-400">
                    Login
                  </Link>
                  <Link to="/sign-up" className="block hover:text-green-400">
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <p className="mt-2">Hi, {userdata.fullname || "User"}</p>
                  <button
                    onClick={logoutHandler}
                    className="text-left w-full bg-green-600 px-4 py-2 mt-2 rounded hover:bg-green-700"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>
          )}
        </header>

        {/* Hero Section */}
        <div
          className="px-4 sm:px-6 md:px-10 relative h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/hero.jpg')` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#00000062]"></div>

          {/* Content */}
          <div className="relative z-10 flex items-center h-full px-4 sm:px-6 text-white">
            <div className="max-w-2xl w-full space-y-6 mt-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                Search Between More Than{" "}
                <span className="text-green-600">50,000</span> Open Jobs.
              </h1>

               
              <div className="flex items-center gap-5">
                <div>
                  <span className="text-lg font-medium block mb-2">
                    Trending Job Keywords:
                  </span>
                </div>
                <span className="cursor-pointer bg-[#01a6407c] text-white px-3 py-1 rounded text-sm">
                  web designer
                </span>
                <span className="cursor-pointer bg-[#01a6407c] text-white px-3 py-1 rounded text-sm">
                  Full-stack
                </span>
                <span className="cursor-pointer bg-[#01a6407c] text-white px-3 py-1 rounded text-sm">
                 React Developer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Categories />
      <Newsletter />
    </>
  );
};

export default Home;
