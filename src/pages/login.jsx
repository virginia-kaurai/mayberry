
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  
const handleSubmit = async (e) => {
  e.preventDefault();

 
  setIsLoading(true);
  setError("");

  try {
  

    const response = await fetch(
      "https://mayberry.onrender.com/accounts/login/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    );


    const data = await response.json();

   console.log("Django response:", data);
console.log("User role:", data.role);

    if (!response.ok) {
      setError(data.message || "Login failed");
      return;
    }

  

    if (data.role !== "admin") {
      setError("You are not authorized to access this page.");
      return;
    }

    navigate("/admin");
  } catch (error) {
    console.error("Login error:", error);
    setError("Could not connect to the server.");
  } finally {
    setIsLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-pink-400 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-pink-400">
            Welcome Back!
          </h1>

          <p className="text-gray-500 mt-2">
            Login to access your admin dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-pink-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-pink-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm text-center" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-pink-400 text-white py-3 rounded-lg font-semibold hover:bg-pink-500 transition duration-300 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          Admin Portal
        </p>
      </div>
    </div>
  );
}

export default Login;
