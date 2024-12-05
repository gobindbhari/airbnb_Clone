import React from "react";

const Card = ({ title, host, status, imageUrl }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden h-[60vh] mx-3">
      <div className="relative">
        <img
          // src={imageUrl}
          src='https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/a766e0e9-1e6f-4b88-b8d5-ce12375c6de8.png?im_w=1440&im_q=highq'
          alt="Room"
          className="w-full h-80 object-cover rounded-xl"
        />
        <div className="absolute bottom-0 left-0 w-full p-4">
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
