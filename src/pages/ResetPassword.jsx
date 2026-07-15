import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FiEye, FiEyeOff } from "react-icons/fi";
import login from "../assets/login.png";
import lock from "../assets/lock.png";

export default function ResetPassword() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.email || !data.password || !data.confirmPassword) {
      toast.error("Please fill all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(data.email)) {
      toast.error("Enter a valid email");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordRegex.test(data.password)) {
      toast.error(
        "Password must contain 8 characters, uppercase, lowercase, number & special character"
      );
      return;
    }

    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      toast.success("Password Reset Successfully");
      navigate("/login");
    }, 1000);
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-green-600"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#22A33C]">

      {/* Left */}
      <div className="hidden w-1/2 items-center justify-center lg:flex">
        <img src={login} alt="" className="w-[78%]" />
      </div>

      {/* Right */}
      <div className="flex w-full items-center justify-center lg:w-1/2">

        <form
          onSubmit={handleSubmit}
          className="w-[500px] rounded-2xl bg-white px-10 py-8 shadow-xl"
        >

          <div className="mb-6 flex justify-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-100">
              <img src={lock} alt="" className="w-16" />
            </div>
          </div>

          <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">
            Reset Your Password
          </h2>

          <label className="mb-2 block text-sm text-gray-500">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="cooper@example.com"
            value={data.email}
            onChange={handleChange}
            className="mb-4 w-full rounded-xl border px-4 py-2.5 outline-none focus:border-green-600"
          />

          <label className="mb-2 block text-sm text-gray-500">
            Password
          </label>

          <div className="mb-4 flex items-center rounded-xl border px-4">

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="••••••••"
              value={data.password}
              onChange={handleChange}
              className="w-full py-2.5 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FiEyeOff className="text-gray-500" />
              ) : (
                <FiEye className="text-gray-500" />
              )}
            </button>

          </div>

          <label className="mb-2 block text-sm text-gray-500">
            Confirm Password
          </label>

          <div className="mb-6 flex items-center rounded-xl border px-4">

            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="••••••••"
              value={data.confirmPassword}
              onChange={handleChange}
              className="w-full py-2.5 outline-none"
            />

            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
            >
              {showConfirm ? (
                <FiEyeOff className="text-gray-500" />
              ) : (
                <FiEye className="text-gray-500" />
              )}
            </button>

          </div>

          <button
            type="submit"
            className="mb-6 w-full rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
          >
            Reset Password
          </button>

          <p className="text-center text-sm text-gray-500">
            Go back to{" "}
            <Link
              to="/login"
              className="font-semibold text-green-600"
            >
              Login
            </Link>
          </p>

        </form>

      </div>

    </div>
  );
}