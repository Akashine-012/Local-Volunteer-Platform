import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetch(`http://localhost:7000/api/events/${eventId}`)
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, [eventId]);

  const registerForEvent = async () => {
    const response = await fetch(`http://localhost:7000/api/events/register/${eventId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });

    const data = await response.json();
    alert(data.message);
  };

  if (!event) return <p>Loading event details...</p>;

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">{event.name}</h2>
      <img  src={`http://localhost:7000/uploads/${event.poster}`} // Ensure this path is correct
                alt={event.name} className="w-full h-64 object-cover mt-4 rounded-md" />
      <p className="mt-2"><strong>Date:</strong> {event.date}</p>
      <p><strong>Place:</strong> {event.place}</p>
      <p><strong>Description:</strong> {event.description}</p>
      <p><strong>Volunteers Needed:</strong> {event.volunteersNeeded}</p>

      <button className="bg-green-500 text-white px-6 py-2 mt-4" onClick={registerForEvent}>
        Register for Event
      </button>
    </div>
  );
};

export default EventDetails;
