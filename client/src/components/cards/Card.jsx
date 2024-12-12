import React from "react";

const Card = ({ title, description, pricePerNight, images }) => {

  console.log(images)
  const handle = ()=>{

  }
  return (
    <div onClick={()=>handle()} className="max-w-xs bg-white rounded-lg shadow-md overflow-hidden mx-1">
      <div className="relative">
        <img
          src={!images.length === 0 ? images :'https://img.freepik.com/free-photo/empire-state-building-seen-from-apartment_23-2150897639.jpg?t=st=1733895365~exp=1733898965~hmac=2dc6875f72e62732e7bacfeaa4b1633c774706e2688330427a64776684140f0a&w=360'}
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
