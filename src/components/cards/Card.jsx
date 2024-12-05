import React from "react";

const Card = ({ title, host, status, imageUrl }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={imageUrl}
          alt="Room"
          className="w-full h-64 object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black p-4">
          <div className="bg-transparent"><p className="text-white text-lg font-bold">{'Hello my friends'}</p></div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-700 text-sm">Hosted by {'host'}</p>
        <p className="text-gray-500 text-sm">{'status'}</p>
      </div>
    </div>
  );
};

export default Card;
