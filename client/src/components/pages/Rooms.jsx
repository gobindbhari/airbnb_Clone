import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Rooms = () => {

  const { id } = useParams()

  const [load, setLoad] = useState(false)
  const [images, setImages] = useState([])
  const [fetchData, setFetchData] = useState({})
  const [address,setAddress] = useState({})
  const [propertyDetails,setPropertyDetails] = useState({})
  const [availableDates,setAvailableDates] = useState({})
  // console.log("ravaaaaaaa",fetchData.address.street)

  const getData = async () => {
    // debugger
    // console.log('-------------------------',id)
    const data = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/post/${id}`);
    // console.log("dtaaaa",data)
    setFetchData(data.data)
    setAddress(data.data.address)
    setPropertyDetails(data.data.propertyDetails)
    setAvailableDates(data.data.availableDates)
    console.log("ravaaaa",data.data)
   
  }
  useEffect(() => {
    getData()
    setLoad(true)
  },[])
  
  
// if(!load){
//   return<div>
//     loading....</div>}

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-6 mt-[20vw]">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">
          {fetchData.title}
        </h1>

        {/* Images Section */}
        <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            {images.map((e) => {
              return <div class="swiper-slide">
                <img src={'https://img.freepik.com/premium-photo/random-best-photo_865967-91215.jpg?w=740'} alt="" />
              </div>
            })}
          </div>
          <div class="swiper-pagination"></div>
        </div>

        {/* Description Section */}
        <div className="mt-6">
          <p className="text-lg text-gray-700 font-semibold">
            {`${address.street}, ${address.town},${address.district}, ${address.state},${address.pincode}, ${address.country}`}
          </p>
          <p className="text-sm text-gray-600">
            {`Bedroom ${propertyDetails.bedrooms},  Bedroom ${propertyDetails.bedrooms},Bedroom ${propertyDetails.bedrooms},Bedroom ${propertyDetails.bedrooms},`}
          </p>
          <a href="#" className="text-blue-600 underline mt-2 block">
            ★ 1 review
          </a>
        </div>

        {/* Host Highlights */}
        <div className="mt-6 space-y-4">
          <div className="flex items-center">
            <span className="mr-2 text-2xl">🔐</span>
            <p className="text-gray-700 font-medium">
              Self check-in
              <span className="block text-sm text-gray-500">
                Check yourself in with the lockbox.
              </span>
            </p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-2xl">☕</span>
            <p className="text-gray-700 font-medium">
              Wake up to breakfast and coffee
              <span className="block text-sm text-gray-500">
                Included essentials make mornings extra easy.
              </span>
            </p>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-2xl">⭐</span>
            <p className="text-gray-700 font-medium">
              Exceptional Host communication
              <span className="block text-sm text-gray-500">
                Guests gave Tarana a 5-star rating for communication.
              </span>
            </p>
          </div>
        </div>

        {/* Date Picker */}
        <div className="mt-8 border p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Add dates for prices</h2>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-gray-600 mb-1">CHECK-IN</label>
              <input
                type="date"
                className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-600 mb-1">CHECKOUT</label>
              <input
                type="date"
                className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-600 mb-1">Guests</label>
            <select className="w-full border rounded px-2 py-1">
              <option>1 guest</option>
              <option>2 guests</option>
              <option>3 guests</option>
              <option>4 guests</option>
            </select>
          </div>
        </div>

        {/* About Section */}
        <div className="mt-6">
          <p className="text-gray-700 leading-relaxed">
            Nirvana Homes uses a 19th-Century wooden house built using “Kath Kuni”
            Architecture, an indigenous construction technique. Providing a
            panoramic view of the Himalayas, amidst apple orchards, we're located
            80km from Shimla. <br />
            With 2 king-size beds & seating space, this room is ideal for groups
            who want to stay together in comfort and enjoy colorful décor and a
            peaceful stay.
          </p>
          <button className="text-blue-600 mt-2 underline">Show more</button>
        </div>
      </div>
    </>
  )
}

export default Rooms
