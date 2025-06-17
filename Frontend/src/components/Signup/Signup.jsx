import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaCamera } from "react-icons/fa";
import { toast } from "react-toastify";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [profilePic, setProfilePic] = useState(null);

  const [value, setValue] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value: inputValue } = e.target;
    setValue((prev) => ({ ...prev, [name]: inputValue }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = { ...value, profilePic };
    if (value.password.length < 8) {
    toast.error("Password must be at least 8 characters long");
    return;
  }
    localStorage.setItem("userInfo", JSON.stringify(userData));
    toast.success("Signup successful!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          Create Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Profile Picture Upload with Preview */}
          <div className="relative w-24 h-24 mx-auto mb-2">
            <img
              src={
                profilePic ||
                "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg"
              }
              alt="Profile"
              className="w-full h-full object-cover rounded-full border"
            />
            <label
              htmlFor="imageUpload"
              className="absolute bottom-0 right-0 bg-green-600 p-2 rounded-full text-white cursor-pointer"
            >
              <FaCamera />
              <input
                id="imageUpload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden bg-red-500"
              />
            </label>
          </div>

          <input
            onChange={handleChange}
            type="text"
            name="fullname"
            placeholder="Full Name"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Password field with toggle icon */}
          <div className="relative">
            <input
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 pr-10"
            />
            <div
              className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-500">
          Already have an account?{" "}
          <Link to={"/login"} className="text-green-600 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
