import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("volunteer");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const response = await fetch("http://localhost:7000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password, role }),
    });

    if (response.ok) {
      alert("Signup Successful. Please Login.");
      navigate("/login");
    } else {
      alert("Signup Failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <input className="border p-2 mb-2 w-64" type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input className="border p-2 mb-2 w-64" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className="border p-2 mb-2 w-64" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <select className="border p-2 mb-2 w-64" onChange={(e) => setRole(e.target.value)}>
        <option value="volunteer">Volunteer</option>
        <option value="admin">Admin</option>
      </select>
      <button className="bg-green-500 text-white px-4 py-2 w-64 mb-2" onClick={handleSignup}>Signup</button>

      <p className="text-gray-600">Already have an account?</p>
      <button className="text-blue-500 underline mt-1" onClick={() => navigate("/login")}>
        Login Here
      </button>
    </div>
  );
};

export default Signup;
