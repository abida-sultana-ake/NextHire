import React, { use, useState } from "react";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import registerLottie from "../../assets/assetLotties/Signup.json";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../Context/Authcontext";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

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

  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const country = form.country.value;
    console.log(name, country, email, password);

    //createUser
    createUser(email, password)
      .then((result) => {
        Swal.fire({
          icon: "success",
          title: "Registration Successful",
          text: `Welcome, ${result.user.email}`,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-center px-4 md:px-20 py-10 gap-10">
      <div className="bg-gray-800 rounded-lg shadow-lg p-6 sm:p-10 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-2">Create your Account</h2>
        <p className="mb-4 text-sm">
          Start your website in seconds. Already have an account?{" "}
          <NavLink to="/login" className="text-blue-400 underline">
            Login here
          </NavLink>
        </p>
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              name="email"
              placeholder="name@company.com"
              className="w-full sm:w-1/2 p-2 rounded bg-gray-700 text-white"
              required
            />
            <input
              type="text"
              name="name"
              placeholder="e.g. Zara Khan"
              className="w-full sm:w-1/2 p-2 rounded bg-gray-700 text-white"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <select
              name="country"
              className="w-full sm:w-1/2 p-2 rounded bg-gray-700 text-white"
              required
            >
              <option>Choose a country</option>
              <option>USA</option>
              <option>UK</option>
              <option>Canada</option>
              <option>Bangladesh</option>
              <option>Japan</option>
              <option>Korea</option>
              <option>Australia</option>
            </select>

            <div className="relative w-full sm:w-1/2">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                name="password"
                onChange={(e) => validatePassword(e.target.value)}
                placeholder="Password"
                className="w-full p-2 rounded bg-gray-700 text-white pr-10"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-2 text-gray-400"
              >
                {showPassword ? (
                  <AiFillEyeInvisible className="size-5 cursor-pointer" />
                ) : (
                  <AiFillEye className="size-5 cursor-pointer" />
                )}
              </button>
              {passwordError && (
                <p className="text-xs text-red-400 mt-1">{passwordError}</p>
              )}
            </div>
          </div>

          <div className="text-center text-gray-400">or</div>

          <button
            type="button"
            className="w-full cursor-pointer flex items-center justify-center p-2 bg-white text-black rounded"
          >
            <FcGoogle className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>

          <button
            type="button"
            className="w-full cursor-pointer flex items-center justify-center p-2 bg-white text-black rounded"
          >
            <FaApple className="w-5 h-5 mr-2" />
            Sign up with Apple
          </button>

          <div className="flex items-start space-x-2">
            <input type="checkbox" id="terms" required className="mt-1" />
            <label htmlFor="terms" className="text-sm">
              By signing up, you agree to Flowbite’s{" "}
              <NavLink to="/terms" className="text-blue-400 underline">
                Terms of Use
              </NavLink>{" "}
              and{" "}
              <NavLink to="/privacy" className="text-blue-400 underline">
                Privacy Policy
              </NavLink>
            </label>
          </div>

          <div className="flex items-start space-x-2">
            <input type="checkbox" id="marketing" className="mt-1" />
            <label htmlFor="marketing" className="text-sm">
              Email me about product updates and resources.
            </label>
          </div>

          <button
            type="submit"
            className="relative cursor-pointer inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-gray-800 rounded-lg group"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-500 rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700"></span>
            <span className="relative">Create an account</span>
          </button>
        </form>
      </div>

      <div className="hidden md:block max-w-xl">
        <Lottie animationData={registerLottie} loop={true} />
      </div>
    </div>
  );
};

export default Register;
