import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';   

import '../../App.css'

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';


const NavDownBox = () => {

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  const navigate = useNavigate()

  const slides = [
    { src: "/images/navbar/navdownbox/icon.webp", label: "Icons" },
    { src: "/images/navbar/navdownbox/cabins.jpg", label: "Cabins" },
    { src: "/images/navbar/navdownbox/countryside.jpg", label: "Country Sides" },
    { src: "/images/navbar/navdownbox/omg.jpg", label: "Icons" },
    { src: "/images/navbar/navdownbox/nationalparks.jpg", label: "National Parks" },
    { src: "/images/navbar/navdownbox/farms.jpg", label: "Farms" },
    { src: "/images/navbar/navdownbox/amazingpools.jpg", label: "Amazing Pools" },
    { src: "/images/navbar/navdownbox/amazingviews.jpg", label: "Amazing Views" },
    { src: "/images/navbar/navdownbox/rooms.jpg", label: "Rooms" },
    { src: "/images/navbar/navdownbox/treehouses.jpg", label: "Tree Houses" },
    { src: "/images/navbar/navdownbox/luxe.jpg", label: "Luxe" },
    { src: "/images/navbar/navdownbox/beach.jpg", label: "Beach" },
    { src: "/images/navbar/navdownbox/historicalhomes.jpg", label: "Historical Homes" },
    { src: "/images/navbar/navdownbox/mansions.jpg", label: "Mansions" },
    { src: "/images/navbar/navdownbox/domes.jpg", label: "Domes" },
    { src: "/images/navbar/navdownbox/castles.jpg", label: "Castles" },
    { src: "/images/navbar/navdownbox/lakefront.jpg", label: "Lake Front" },
    { src: "/images/navbar/navdownbox/tinyhomes.jpg", label: "Tiny Houses" },
    { src: "/images/navbar/navdownbox/beachfront.jpg", label: "Beach Fronts" },
    { src: "/images/navbar/navdownbox/lakes.jpg", label: "Lakes" },
    { src: "/images/navbar/navdownbox/islands.jpg", label: "Islands" },
    { src: "/images/navbar/navdownbox/design.jpg", label: "Design" },
    { src: "/images/navbar/navdownbox/offthegrid.jpg", label: "Off-the-Grid" },
    { src: "/images/navbar/navdownbox/topoftheworld.jpg", label: "Top of the World" },
    { src: "/images/navbar/navdownbox/bedandbreakfasts.jpg", label: "Bed And Breakfasts" },
    { src: "/images/navbar/navdownbox/tropical.jpg", label: "Tropical" },
    { src: "/images/navbar/navdownbox/trending.jpg", label: "Trending" },
    { src: "/images/navbar/navdownbox/topcities.jpg", label: "Top Cities" },
    { src: "/images/navbar/navdownbox/camping.jpg", label: "Camping" },
    { src: "/images/navbar/navdownbox/desert.jpg", label: "Desert" },
    { src: "/images/navbar/navdownbox/caves.jpg", label: "Caves" },
    { src: "/images/navbar/navdownbox/golfing.jpg", label: "Golfing" },
    { src: "/images/navbar/navdownbox/a-frames.jpg", label: "A-Frames" },
    { src: "/images/navbar/navdownbox/arctic.jpg", label: "Arctics" },
    { src: "/images/navbar/navdownbox/containers.jpg", label: "Containers" },
    { src: "/images/navbar/navdownbox/earthhomes.jpg", label: "Earth Homes" },
    { src: "/images/navbar/navdownbox/boats.jpg", label: "Boats" },
    { src: "/images/navbar/navdownbox/creativespaces.jpg", label: "Creative Spaces" },
    { src: "/images/navbar/navdownbox/chefskitchens.jpg", label: "Chefs Kitchens" },
    { src: "/images/navbar/navdownbox/skiing.jpg", label: "Skiing" },
    { src: "/images/navbar/navdownbox/play.jpg", label: "Play" },
    { src: "/images/navbar/navdownbox/new.jpg", label: "New" },
    { src: "/images/navbar/navdownbox/surfing.jpg", label: "Surfing" },
    { src: "/images/navbar/navdownbox/houseboats.jpg", label: "Houseboats" },
    { src: "/images/navbar/navdownbox/minsus.jpg", label: "Minsus" },
    { src: "/images/navbar/navdownbox/skiinout.jpg", label: "Ski In/Out" },
    { src: "/images/navbar/navdownbox/yurts.jpg", label: "Yurts" }
  ];


  function getSlidesPerView() {
    const width = window.innerWidth;
    // if (width >= 768) return 14; // For larger screens
    // if (width >= 1000) return 16; // For larger screens
    if (width >= 700) return 15; // For larger screens
    if (width >= 640) return 13; // For larger screens
    if (width >= 500) return 13; // For larger screens
    if (width >= 400) return 11; // For larger screens
    if (width >= 375) return 10;   // For tablets
    if (width >= 320) return 8;   // For tablets
    // return 4;                     // For smaller screens
  }

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    
  });

  const handleData = async (e)=> {
    console.log(`category=${e}`)
    // navigate(`category=${e}`)
    navigate(`${e}`)
  }
  
    return (
        <div className='border-t-[1px]  border-b-[1px] py-2 relative'>

            <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={15}
        // pagination={{
        //   clickable: true,
        // }}
        cssMode={true}
        // navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div onClick={()=>handleData(slide.label)} className="group cursor-pointer -mt-3 max-sm:mt-0 max-sm:-mx-1">
          <img className='group p-6 max-lg:p-3 min-[768px]:scale-110  max-sm:p-1 max-md:p-2 max-xl:p-4 font-normal max-lg:text-base  ml-[2px]' src={slide.src} alt={slide.label} />
          <div className="text-xs font-semibold max-sm:text-[10px]  group-hover:border-t-2 hover:border-t-2" >{slide.label}</div>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
        </div>


    
    )
}

export default NavDownBox

//    Skeleton

{/* <div key={id} className="w-[290px] bg-white mb-4 rounded-lg shadow-md overflow-hidden mx-1"> */}
  {/* <div className="relative"> */}
    {/* Skeleton Loader for Image */}
    {/* <div className="w-full h-72 bg-gray-300 animate-pulse rounded-xl" /> */}
    {/* <div className="absolute bottom-0 left-0 w-full p-4"> */}
      {/* Skeleton Loader for Title */}
      {/* <div className="bg-gray-300 w-3/4 h-6 mb-2 animate-pulse rounded"></div> */}
    {/* </div> */}
  {/* </div> */}
  {/* <div className="px-4 py-2 text-start"> */}
    {/* Skeleton Loader for Description */}
    {/* <div className="bg-gray-300 w-full h-4 mb-2 animate-pulse rounded"></div> */}
    {/* Skeleton Loader for Price */}
    {/* <div className="bg-gray-300 w-1/2 h-4 animate-pulse rounded"></div> */}
  {/* </div> */}
{/* </div> */}
