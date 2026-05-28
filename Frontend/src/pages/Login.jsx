import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLogin = () => {
    if (email.trim() === "") {
      setError("Invalid Email");
      return;
    }
    setError("");

    if (password.length <= 8) {
      setPasswordError("Password must contains at least 8 characters");
      return;
    }
    setPasswordError("");
    localStorage.setItem("isLoggedIn", "true");

    navigate("/");
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between bg-white min-h-screen overflow-hidden">
      <div className="bg-white w-full lg:w-auto px-6 sm:px-10 flex justify-center items-center min-h-screen lg:min-h-0">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col items-start gap-2 w-full"
        >
          <h1 className="text-3xl sm:text-4xl relative lg:-top-15 mb-4 lg:mb-0">
            Step Into Velora -
          </h1>

          <label className="text-lg px-2">Email Address</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="outline-none text-lg sm:text-2xl p-2 w-full sm:w-[70vh]"
            type="email"
            placeholder="Enter Your Email"
          />

          {error && <p className="px-2 text-red-500">{error}</p>}

          <label className="text-lg px-2">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="outline-none text-lg sm:text-2xl p-2 w-full sm:w-[70vh]"
            type="password"
            placeholder="Enter Your Password"
          />

          {passwordError && (
            <p className="px-2 text-red-500">{passwordError}</p>
          )}

          <button
            onClick={handleLogin}
            className="bg-black cursor-pointer hover:bg-gray-950 text-white p-2 w-full text-center text-xl mt-2"
          >
            Login
          </button>

          <p className="text-center text-lg sm:text-xl px-2">
            New Here?{" "}
            <Link className="underline" to="/register">
              Create Account
            </Link>
          </p>
        </form>
      </div>

      <img
        className="hidden lg:block h-screen w-[45%] object-cover"
        src="https://plus.unsplash.com/premium_photo-1669138512601-e3f00b684edc?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="loginImage"
      />
    </div>
  );
};

export default Login;
