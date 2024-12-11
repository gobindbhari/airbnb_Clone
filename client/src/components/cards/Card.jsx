import React from "react";

const Card = ({ title, description, pricePerNight, images }) => {

  const handle = ()=>{

  }
  return (
    <div onClick={()=>handle()} className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden mx-1">
      <div className="relative">
        <img
          // src={images}
          src='https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/a766e0e9-1e6f-4b88-b8d5-ce12375c6de8.png?im_w=1440&im_q=highq'
          alt="Room"
          className="w-full h-80 object-cover rounded-xl hover:scale-110 duration-300 "
        />
        <div className="absolute bottom-0 left-0 w-full p-4 ">
          <div className="bg-transparent"><p className="text-white text-lg font-bold">{title}</p></div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-800 text-base font-medium line-clamp-2">{description}</p>
        <p className="text-gray-500 text-sm font-semibold">Price : {pricePerNight}</p>
      </div>
    </div>
  );
};

export default Card;
