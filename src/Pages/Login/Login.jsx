import React, { useState } from "react";
import Lottie from "lottie-react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import loginLottie from "../../assets/assetLotties/Login.json";
import { NavLink } from "react-router"; 


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loading, setLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const validatePassword = (value) => {
    setPassword(value);
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!strongPasswordRegex.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setLoading(true);
    logInUser(email, password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome, ${result.user.email}`,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const logInUser = (email, password) => {
  return new Promise((resolve, reject) => {
    if (email && password) {
      resolve({ user: { email } });
    } else {
      reject(new Error("Email and password are required"));
    }
  });
};

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="bg-gray-800 text-white rounded-xl shadow-lg flex w-full max-w-5xl overflow-hidden">
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-2">Welcome back</h2>
          <p className="text-sm text-gray-400 mb-6">
            Start your website in seconds. Don’t have an account?{" "}
            <NavLink to="/register" className="text-blue-400 hover:underline">
              Register.
            </NavLink>
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="name@company.com"
                className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="relative">
              <label className="block text-sm mb-1" htmlFor="password">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => validatePassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                aria-label="Toggle password visibility"
                className="absolute right-3 top-9 text-gray-400"
              >
                {showPassword ? (
                  <AiFillEyeInvisible className="size-5" />
                ) : (
                  <AiFillEye className="size-5" />
                )}
              </button>
              {passwordError && (
                <p className="text-xs text-red-400 mt-1">{passwordError}</p>
              )}
            </div>

            <div className="flex items-center justify-between text-sm  text-gray-400">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 cursor-pointer" />
                Remember me
              </label>
              <a href="#" className="text-blue-400 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={!!passwordError || loading}
              className={`w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition ${
                passwordError || loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Signing in..." : "Sign in to your account"}
            </button>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-600" />
              <span className="px-2 text-gray-400">or</span>
              <hr className="flex-grow border-gray-600" />
            </div>

            <button
              type="button"
              className="w-full flex items-center justify-center p-2 bg-white text-black rounded"
            >
              <FcGoogle className="w-5 h-5 mr-2" />
              Sign in with Google
            </button>

            <button
              type="button"
              className="w-full flex items-center justify-center p-2 bg-white text-black rounded"
            >
              <FaApple className="w-5 h-5 mr-2" />
              Sign in with Apple
            </button>
          </form>
        </div>

        <div className="hidden md:flex items-center justify-center w-1/2 bg-gray-700">
          <Lottie animationData={loginLottie} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Login;

