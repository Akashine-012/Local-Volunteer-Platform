import { Link } from "react-router-dom";
import logo from "../../../public/logo.svg"; // Correct relative path

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-50 to-blue-100 text-center px-6">
            {/* Hero Section with Logo */}
            <div className="flex items-center gap-3">
                <img src={logo} alt="Volunteer Logo" className="w-12 h-12" /> {/* Logo Image */}
                <h2 className="text-5xl font-extrabold text-blue-700">Volunteer Hub</h2>
            </div>

            <p className="text-gray-700 mt-4 text-lg max-w-2xl">
                Connect with organizations, explore meaningful events, and make a difference in your community!
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex gap-6">
                <Link to="/volunteer" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-blue-700 transition">
                    Browse Events
                </Link>
            </div>
        </div>
    );
};

export default Home;
