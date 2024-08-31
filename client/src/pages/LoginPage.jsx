import React, { useState } from "react";
import Input from "../components/Input";
import { motion } from "framer-motion";
import PasswordInput from "../components/PasswordInput";
import { Eye, EyeOff, Loader, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const { isLoading, error, login } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };
  return (
    <div className="w-full max-w-md bg-gray-800 bg-opacity-50 shadow-xl rounded-2xl backdrop-filter backdrop-blur-xl">
      <div className=" p-8">
        <h2 className=" text-3xl font-bold mb-6 text-center bg-gradient-to-l from-blue-400 to-cyan-600 text-transparent bg-clip-text">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Email Address"
            icon={Mail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <PasswordInput
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            icon={showPassword ? EyeOff : Eye}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            setShowPassword={setShowPassword}
            showPassword={showPassword}
          />
          <div className="flex items-center mb-6">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-400 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          {error && <p className="text-red-500 font-semibold mt-2">{error}</p>}
          <motion.button
            type="submit"
            disabled={isLoading}
            className="mt-5 w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white 
						font-bold rounded-lg shadow-lg hover:from-blue-600
						hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
						 focus:ring-offset-gray-900 transition duration-200"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? <Loader className=" animate-spin mx-auto" /> : "Login"}
          </motion.button>
        </form>
      </div>
      <div className="px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center">
        <p className="text-sm text-gray-400">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
