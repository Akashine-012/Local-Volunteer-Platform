import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Volunteer Platform</h1>
            <ul className="flex gap-6">
                <li>
                    <Link to="/" className="hover:underline">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="hover:underline">About</Link>
                </li>
                <li>
                    <Link to="/login" className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-200">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
