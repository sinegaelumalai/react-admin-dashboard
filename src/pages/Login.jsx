import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import login from "../assets/login.png";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setLoginData({
      ...loginData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

const handleLogin = (e) => {
  e.preventDefault();

  if (!loginData.email.trim()) {
    toast.error("Please enter your email.");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(loginData.email)) {
    toast.error("Please enter a valid email address.");
    return;
  }

  if (!loginData.password) {
    toast.error("Please enter your password.");
    return;
  }

  if (loginData.password.length < 8) {
    toast.error("Password must be at least 8 characters.");
    return;
  }

  setLoading(true);

  toast.success("Login successful!");

  setTimeout(() => {
    navigate("/dashboard", { replace: true });
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
        <img
          src={login}
          alt=""
          className="w-[60%]"
        />
      </div>

      {/* Right */}
      <div className="flex w-full items-center justify-center lg:w-1/2">

        <form
          onSubmit={handleLogin}
         className="w-[500px] rounded-2xl bg-white px-10 py-8 shadow-xl"
        >

          <h2 className="mb-6 text-center text-2xl font-bold text-gray-700">
            Login To Your Account
          </h2>

          {/* Google */}
          <button
            type="button"
            className="mb-4 flex w-full items-center justify-center gap-3 rounded-xl border py-3"
          >
            <FcGoogle size={22} />
            Login with Google
          </button>

          <div className="mb-5 flex items-center">
            <div className="h-px flex-1 bg-gray-200"></div>

            <span className="mx-3 text-xs text-gray-400">
              OR LOGIN WITH EMAIL
            </span>

            <div className="h-px flex-1 bg-gray-200"></div>
          </div>

          {/* Email */}
<label className="mb-2 block text-sm text-gray-500">
  Email
</label>

<input
  type="email"
  name="email"
  placeholder="cooper@example.com"
  value={loginData.email}
  onChange={handleChange}
className="mb-4 w-full rounded-xl border px-4 py-2.5 outline-none focus:border-green-500"
/>

{/* Password */}
<label className="mb-2 block text-sm text-gray-500">
  Password
</label>

<div className="mb-5 flex items-center rounded-xl border px-4">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="••••••••"
    value={loginData.password}
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

{/* Remember */}
<div className="mb-6 flex items-center justify-between">

  <label className="flex items-center gap-2 text-sm text-gray-600">
    <input
      type="checkbox"
      name="remember"
      checked={loginData.remember}
      onChange={handleChange}
      className="accent-green-600"
    />
    Remember Me
  </label>

  <Link
    to="/forgot-password"
    className="text-sm font-medium text-green-600"
  >
    Forgot Password?
  </Link>

</div>

<button
  type="submit"
  className="mb-6 w-full rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
>
  Log In
</button>

<p className="text-center text-sm text-gray-500">
  Don't have an account?{" "}
  <Link
    to="/register"
    className="font-semibold text-green-600"
  >
    Sign Up
  </Link>
</p>

</form>

</div>

</div>
);
}