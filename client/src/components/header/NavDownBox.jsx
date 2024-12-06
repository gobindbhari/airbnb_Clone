import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../App.css'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';


const NavDownBox = () => {

  const slides = [
    { src: "public/images/navbar/navdownbox/icon.webp", label: "Icons" },
    { src: "images/navbar/navdownbox/cabins.jpg", label: "Cabins" },
    { src: "public/images/navbar/navdownbox/countryside.jpg", label: "Country Sides" },
    { src: "public/images/navbar/navdownbox/omg.jpg", label: "Icons" },
    { src: "public/images/navbar/navdownbox/nationalparks.jpg", label: "National Parks" },
    { src: "public/images/navbar/navdownbox/farms.jpg", label: "Farms" },
    { src: "public/images/navbar/navdownbox/amazingpools.jpg", label: "Amazing Pools" },
    { src: "public/images/navbar/navdownbox/amazingviews.jpg", label: "Amazing Views" },
    { src: "public/images/navbar/navdownbox/rooms.jpg", label: "Rooms" },
    { src: "public/images/navbar/navdownbox/treehouses.jpg", label: "Tree Houses" },
    { src: "public/images/navbar/navdownbox/luxe.jpg", label: "Luxe" },
    { src: "public/images/navbar/navdownbox/beach.jpg", label: "Beach" },
    { src: "public/images/navbar/navdownbox/historicalhomes.jpg", label: "Historical Homes" },
    { src: "public/images/navbar/navdownbox/mansions.jpg", label: "Mansions" },
    { src: "public/images/navbar/navdownbox/domes.jpg", label: "Domes" },
    { src: "public/images/navbar/navdownbox/castles.jpg", label: "Castles" },
    { src: "public/images/navbar/navdownbox/lakefront.jpg", label: "Lake Front" },
    { src: "public/images/navbar/navdownbox/tinyhomes.jpg", label: "Tiny Houses" },
    { src: "public/images/navbar/navdownbox/beachfront.jpg", label: "Beach Fronts" },
    { src: "public/images/navbar/navdownbox/lakes.jpg", label: "Lakes" },
    { src: "public/images/navbar/navdownbox/islands.jpg", label: "Islands" },
    { src: "public/images/navbar/navdownbox/design.jpg", label: "Design" },
    { src: "public/images/navbar/navdownbox/offthegrid.jpg", label: "Off-the-Grid" },
    { src: "public/images/navbar/navdownbox/topoftheworld.jpg", label: "Top of the World" },
    { src: "public/images/navbar/navdownbox/bedandbreakfasts.jpg", label: "Bed And Breakfasts" },
    { src: "public/images/navbar/navdownbox/tropical.jpg", label: "Tropical" },
    { src: "public/images/navbar/navdownbox/trending.jpg", label: "Trending" },
    { src: "public/images/navbar/navdownbox/topcities.jpg", label: "Top Cities" },
    { src: "public/images/navbar/navdownbox/camping.jpg", label: "Camping" },
    { src: "public/images/navbar/navdownbox/desert.jpg", label: "Desert" },
    { src: "public/images/navbar/navdownbox/caves.jpg", label: "Caves" },
    { src: "public/images/navbar/navdownbox/golfing.jpg", label: "Golfing" },
    { src: "public/images/navbar/navdownbox/a-frames.jpg", label: "A-Frames" },
    { src: "public/images/navbar/navdownbox/arctic.jpg", label: "Arctics" },
    { src: "public/images/navbar/navdownbox/containers.jpg", label: "Containers" },
    { src: "public/images/navbar/navdownbox/earthhomes.jpg", label: "Earth Homes" },
    { src: "public/images/navbar/navdownbox/boats.jpg", label: "Boats" },
    { src: "public/images/navbar/navdownbox/creativespaces.jpg", label: "Creative Spaces" },
    { src: "public/images/navbar/navdownbox/chefskitchens.jpg", label: "Chefs Kitchens" },
    { src: "public/images/navbar/navdownbox/skiing.jpg", label: "Skiing" },
    { src: "public/images/navbar/navdownbox/play.jpg", label: "Play" },
    { src: "public/images/navbar/navdownbox/new.jpg", label: "New" },
    { src: "public/images/navbar/navdownbox/surfing.jpg", label: "Surfing" },
    { src: "public/images/navbar/navdownbox/houseboats.jpg", label: "Houseboats" },
    { src: "public/images/navbar/navdownbox/minsus.jpg", label: "Minsus" },
    { src: "public/images/navbar/navdownbox/skiinout.jpg", label: "Ski In/Out" },
    { src: "public/images/navbar/navdownbox/yurts.jpg", label: "Yurts" }
  ];
  
    return (
        <div className='border-t-2 border-b-2 py-4 z-0'>

            <Swiper
        slidesPerView={15}
        spaceBetween={15}
        // pagination={{
        //   clickable: true,
        // }}
        // cssMode={true}
        // navigation={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="group cursor-pointer">
          <img className='group p-6 max-lg:p-3 max-xl:p-4 font-normal -m-3 ml-[2px]' src={slide.src} alt={slide.label} />
          <div className="text-xs font-semibold -m-3 group-hover:border-t-2 hover:border-t-2" >{slide.label}</div>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
        </div>
    )
}

export default NavDownBox
