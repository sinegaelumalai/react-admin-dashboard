import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import toast from "react-hot-toast";
import login from "../assets/login.png";

export default function Register() {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [registerData, setRegisterData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setRegisterData({
            ...registerData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (!registerData.name.trim()) {
            toast.error("Full Name is required.");
            return;
        }

        if (!registerData.email.trim()) {
            toast.error("Email is required.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(registerData.email)) {
            toast.error("Please enter a valid email.");
            return;
        }

        if (!registerData.password) {
            toast.error("Password is required.");
            return;
        }

        if (registerData.password.length < 8) {
            toast.error("Password must be at least 8 characters.");
            return;
        }

        if (registerData.confirmPassword !== registerData.password) {
            toast.error("Passwords do not match.");
            return;
        }

        if (!registerData.terms) {
            toast.error("Please accept Terms & Conditions.");
            return;
        }

        setLoading(true);

        toast.success("Account Created Successfully!");

        setTimeout(() => {
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
                <img
                    src={login}
                    alt=""
                    className="w-[60%]"
                />
            </div>

            {/* Right */}
            <div className="flex w-full items-center justify-center lg:w-1/2">

                <form
                    onSubmit={handleRegister}
                    className="w-[500px] rounded-2xl bg-white px-10 py-6 shadow-xl"
                >

                    <h2 className="mb-5 text-center text-2xl font-bold text-gray-700">
                        Create Account
                    </h2>

                    {/* Google */}
                    <button
                        type="button"
                        className="mb-3 flex w-full items-center justify-center gap-3 rounded-xl border py-2.5"
                    >
                        <FcGoogle size={20} />
                        Sign Up with Google
                    </button>

                    <div className="mb-4 flex items-center">
                        <div className="h-px flex-1 bg-gray-200"></div>

                        <span className="mx-3 text-[10px] text-gray-400">
                            OR SIGN UP WITH EMAIL
                        </span>

                        <div className="h-px flex-1 bg-gray-200"></div>
                    </div>

                    {/* Full Name */}
                    <label className="mb-1 block text-sm text-gray-500">
                        Full Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        placeholder="Regina Cooper"
                        value={registerData.name}
                        onChange={handleChange}
                        className="mb-3 w-full rounded-xl border px-4 py-2 outline-none focus:border-green-500"
                    />

                    {/* Email */}
                    <label className="mb-1 block text-sm text-gray-500">
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        placeholder="cooper@example.com"
                        value={registerData.email}
                        onChange={handleChange}
                        className="mb-3 w-full rounded-xl border px-4 py-2 outline-none focus:border-green-500"
                    />

                    {/* Password */}
                    <label className="mb-1 block text-sm text-gray-500">
                        Password
                    </label>

                    <div className="mb-3 flex items-center rounded-xl border px-4">

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="••••••••"
                            value={registerData.password}
                            onChange={handleChange}
                            className="w-full py-2 outline-none"
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

                    {/* Confirm Password */}
                    <label className="mb-1 block text-sm text-gray-500">
                        Confirm Password
                    </label>

                    <div className="mb-4 flex items-center rounded-xl border px-4">

                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            placeholder="••••••••"
                            value={registerData.confirmPassword}
                            onChange={handleChange}
                            className="w-full py-2 outline-none"
                        />

                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? (
                                <FiEyeOff className="text-gray-500" />
                            ) : (
                                <FiEye className="text-gray-500" />
                            )}
                        </button>

                    </div>

                    {/* Terms */}
                    <label className="mb-5 flex items-center gap-2 text-sm text-gray-600">

                        <input
                            type="checkbox"
                            name="terms"
                            checked={registerData.terms}
                            onChange={handleChange}
                            className="accent-green-600"
                        />

                        I accept
                        <span className="font-medium text-green-600">
                            Terms and Conditions
                        </span>

                    </label>

                    <button
                        type="submit"
                        className="mb-5 w-full rounded-xl bg-green-600 py-2.5 font-semibold text-white hover:bg-green-700"
                    >
                        Create Account
                    </button>

                    <p className="text-center text-sm text-gray-500">
                        Already have an account?{" "}
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