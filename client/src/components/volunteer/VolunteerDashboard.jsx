import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const VolunteerDashboard = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:7000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error fetching events:", err));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Available Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event._id} className="border p-4 rounded-lg shadow-lg">
            {event.poster && (
              <img
                src={`http://localhost:7000/uploads/${event.poster}`} // Ensure this path is correct
                alt={event.name}
                className="w-full h-40 object-cover rounded-md"
              />
            )}
            <h4 className="font-bold mt-2">{event.name}</h4>
            <button
              className="bg-blue-500 text-white px-4 py-2 mt-2 w-full"
              onClick={() => navigate(`/event/${event._id}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerDashboard;
