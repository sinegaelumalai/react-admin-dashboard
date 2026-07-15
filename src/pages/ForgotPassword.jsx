import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../assets/login.png";
import lock from "../assets/lock.png";
import toast from "react-hot-toast";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) return toast.error("Email is required");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
      return toast.error("Enter a valid email");

    setLoading(true);

    setTimeout(() => {
      toast.success("Recovery link sent");
      navigate("/reset-password");
    }, 1000);
  };

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center bg-white">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-gray-200 border-t-green-600"></div>
      </div>
    );

  return (
    <div className="flex min-h-screen bg-[#22A33C]">
      <div className="hidden w-1/2 items-center justify-center lg:flex">
        <img src={login} alt="" className="w-[78%]" />
      </div>

      <div className="flex w-full items-center justify-center lg:w-1/2">
        <form onSubmit={handleSubmit} className="w-[470px] rounded-2xl bg-white px-10 py-8 shadow-xl">
          <div className="mb-8 flex justify-center">
            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-gray-100">
              <img src={lock} alt="" className="w-20" />
            </div>
          </div>

          <h2 className="mb-8 text-center text-3xl font-bold text-gray-700">
            Recover Your Password
          </h2>

          <label className="mb-2 block text-sm text-gray-500">Email</label>

          <input
            type="email"
            placeholder="cooper@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-6 w-full rounded-xl border px-4 py-3 outline-none focus:border-green-600"
          />

          <button
            type="submit"
            className="mb-8 w-full rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
          >
            Recover Password
          </button>

          <p className="text-center text-sm text-gray-500">
            Go back to{" "}
            <Link to="/login" className="font-semibold text-green-600">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}