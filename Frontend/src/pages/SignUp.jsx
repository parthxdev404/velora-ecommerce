import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (formData.username.length < 3) {
      newErrors.username = "Username is too Short";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Invalid Email";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Invalid Password";
    }

    setError(newErrors);

    if (Object.keys(newErrors).length > 0) return;
    localStorage.setItem("isLoggedIn", "true");

    navigate("/");
  };

  return (
    <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-4 min-h-screen overflow-hidden">
      <div className="w-full lg:w-auto px-6 sm:px-10 flex justify-center">
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="flex flex-col gap-2 justify-center w-full"
        >
          <h1 className="text-3xl sm:text-4xl relative lg:-top-15 mb-4 lg:mb-0">
            Welcome To Your Own Store -
          </h1>

          <label className="text-lg px-2">Username</label>
          <input
            name="username"
            required
            className="outline-none text-lg sm:text-2xl p-2 w-full sm:w-[80vh]"
            type="text"
            onChange={handleChange}
            value={formData.username}
            placeholder="Enter Your Full Name"
          />

          {error.username && (
            <p className="text-red-500 px-2">{error.username}</p>
          )}

          <label className="text-lg px-2">Email Address</label>

          <input
            name="email"
            required
            className="outline-none text-lg sm:text-2xl p-2 w-full sm:w-[80vh]"
            type="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="Enter Your Email"
          />

          {error.email && <p className="text-red-500 px-2">{error.email}</p>}

          <label className="text-lg px-2">Password</label>

          <input
            name="password"
            required
            className="outline-none text-lg sm:text-2xl p-2 w-full sm:w-[80vh]"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
          />

          {error.password && (
            <p className="text-red-500 px-2">{error.password}</p>
          )}

          <button className="bg-black cursor-pointer hover:bg-gray-950 text-white p-2 w-full sm:w-[80vh] text-center text-xl mt-2">
            Create Account
          </button>

          <p className="text-lg sm:text-xl">
            Already have an account?{" "}
            <Link className="underline" to="/login">
              Login Now
            </Link>
          </p>
        </form>
      </div>

      <img
        className="hidden lg:block h-screen w-[45%] object-cover"
        src="https://plus.unsplash.com/premium_photo-1669138512572-73dd57cc7cb6?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="signupimage"
      />
    </div>
  );
};

export default SignUp;
