import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <Link to="/create">
        <button className="shadow-lg rounded-2xl bg-blue-400 text-white py-4 px-10">
          Craete your QR code
        </button>
      </Link>
    </div>
  );
};
