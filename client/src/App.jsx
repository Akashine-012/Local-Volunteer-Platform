import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Login from "./components/login/Login";
import AdminDashboard from "./components/admin/AdminDashboard";
import Signup from "./components/signup/Signup";
import VolunteerDashboard from "./components/volunteer/VolunteerDashboard";
import EventDetails from "./components/volunteer/EventDetails";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/volunteer" element={<VolunteerDashboard />} />
                <Route path="/event/:eventId" element={<EventDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
