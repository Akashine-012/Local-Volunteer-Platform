import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-6">
      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-600">About Our Volunteer Platform</h1>
      <p className="text-gray-700 text-lg mt-4 text-center max-w-2xl">
        Our platform connects passionate volunteers with meaningful opportunities to contribute to their communities.
      </p>

      {/* Sections */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
        
        {/* Our Mission */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500">Our Mission</h2>
          <p className="text-gray-600 mt-2">
            We aim to bridge the gap between organizations and volunteers, making it easier for people to engage in community service.
          </p>
        </div>

        {/* How It Works */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500">How It Works</h2>
          <ul className="list-disc pl-5 mt-2 text-gray-600">
            <li>Organizations post volunteer opportunities.</li>
            <li>Volunteers browse and apply for events.</li>
            <li>Admins manage users and event approvals.</li>
          </ul>
        </div>

        {/* Why Volunteer? */}
        <div className="bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500">Why Volunteer?</h2>
          <p className="text-gray-600 mt-2">
            Volunteering helps build communities, develop skills, and make a difference in people's lives.
          </p>
        </div>

        {/* Get Involved */}
        <div className="bg-white shadow-md p-6 rounded-lg text-center">
          <h2 className="text-2xl font-semibold text-blue-500">Get Involved</h2>
          <p className="text-gray-600 mt-2">Join us today and start making an impact!</p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Join as Volunteer
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
