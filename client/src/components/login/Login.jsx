import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await fetch("http://localhost:7000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      navigate(data.role === "admin" ? "/admin" : "/volunteer");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input className="border p-2 mb-2 w-64" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2 mb-2 w-64" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2 w-64 mb-2" onClick={handleLogin}>Login</button>

      <p className="text-gray-600">Don't have an account?</p>
      <button className="text-blue-500 underline mt-1" onClick={() => navigate("/signup")}>
        Sign Up Here
      </button>
    </div>
  );
};

export default Login;
