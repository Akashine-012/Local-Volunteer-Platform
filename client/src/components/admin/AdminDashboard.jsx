import { useEffect, useState } from "react";

const AdminDashboard = () => {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [description, setDescription] = useState("");
  const [volunteersNeeded, setVolunteersNeeded] = useState("");
  const [poster, setPoster] = useState(null);

  useEffect(() => {
    fetch("http://localhost:7000/api/events")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  const addEvent = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("date", date);
    formData.append("place", place);
    formData.append("description", description);
    formData.append("volunteersNeeded", volunteersNeeded);
    if (poster) formData.append("poster", poster); // Append the poster file

    await fetch("http://localhost:7000/api/events/create", {
      method: "POST",
      body: formData,
    });

    alert("Event added!");
    window.location.reload();
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>

      <h3 className="mt-4 font-semibold">Add Event</h3>
      <input className="border p-2 m-2" type="text" placeholder="Event Name" onChange={(e) => setName(e.target.value)} />
      <input className="border p-2 m-2" type="date" onChange={(e) => setDate(e.target.value)} />
      <input className="border p-2 m-2" type="text" placeholder="Place" onChange={(e) => setPlace(e.target.value)} />
      <textarea className="border p-2 m-2" placeholder="Description" onChange={(e) => setDescription(e.target.value)}></textarea>
      <input className="border p-2 m-2" type="number" placeholder="Volunteers Needed" onChange={(e) => setVolunteersNeeded(e.target.value)} />
      <input className="border p-2 m-2" type="file" accept="image/*" onChange={(e) => setPoster(e.target.files[0])} />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={addEvent}>Add Event</button>

      <h3 className="mt-4 font-semibold">All Events</h3>
      {events.map((event) => (
        <div key={event._id} className="border p-4 mt-2">
          <h4 className="font-bold">{event.name}</h4>
          <p>{event.description}</p>
          <p><strong>Date:</strong> {event.date}</p>
          <p><strong>Place:</strong> {event.place}</p>
          <p><strong>Volunteers Needed:</strong> {event.volunteersNeeded}</p>
          {event.poster && (
            <img className="mt-2" src={`http://localhost:7000/uploads/${event.poster}`} alt="Event Poster" width="200px" />
          )}
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
