import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form"
import { useSelector, useDispatch } from 'react-redux'


const Rooms = () => {

  const { id } = useParams()
  const navigate = useNavigate()
  const {register,handleSubmit,watch, reset ,formState: { errors },} = useForm()
  const VerifyUser = useSelector((state) => state.VerifyUser)

  const [userData, setUserData] = useState({})
  const [load, setLoad] = useState(false)
  const [images, setImages] = useState([])
  const [fetchData, setFetchData] = useState({})
  const [address,setAddress] = useState({})
  const [propertyDetails,setPropertyDetails] = useState({})
  const [availableDates,setAvailableDates] = useState({})
  const [hostedBy,setHostedBy] = useState({})
  const [numGuest,setNumGuest] = useState()
  // console.log("ravaaaaaaa",fetchData.address.street)

  const getData = async () => {
    // debugger
    // console.log('-------------------------',id)
    const data = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/post/${id}`);
    console.log("dtaaaaaaaaaaaaaaaaaa",data.data)
    setFetchData(data.data)
    setAddress(data.data.address)
    setPropertyDetails(data.data.propertyDetails)
    setAvailableDates(data.data.availableDates)
    setHostedBy(data.data.hostedBy)
    setNumGuest(data.data.propertyDetails.guests)
    console.log("ravaaaa",data.data)
    console.log('=======================================', data.data.hostedBy)
    setUserData({
      roomId: data.data._id,
      userId: id,
      email: data.data.hostedBy.email
    })
   
  }
  useEffect(() => {
    getData()
    setLoad(true)
  },[])

  // const onSubmit = (data) => {
  //   console.log(data)
  // }

  
  const onSubmit = async (data) => {
    try {
      // debugger
      if(!VerifyUser)  return toast.error('Please login your account')
      console.log('uuuuuuuuuuuuuuuuuu',data)
      const sdate = new Date(data.startDate)
      const edate = new Date(data.endDate)
      console.log((edate-sdate)/(1000 * 60 * 60 * 24))
      const numOfNights = (edate-sdate)/(1000 * 60 * 60 * 24)
      // console.log('date----------', new Date())
      // console.log('date.tostring----------', new Date().toString())
      // console.log('date.split----------', new Date().toString().split('T')[0])

      console.log('iiiiiiiiiiiiiiiiiii',fetchData)
      const price = fetchData.pricePerNight * numOfNights
      console.log('numOfNightsssssssssss', price)
      console.log('hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', {
        ...userData,
          formData : data,
           cost : price
      })
      const paydata = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/payment/createOrder`,{
        ...userData,
        formData : data,
         cost : price
      })
      console.log('-------------------',paydata.data)
      console.log('-------------------uuuuuuuuuuuuu',paydata.data.session.url)

      // navigate(paydata.data.session.url)
      window.location.href = paydata.data.session.url;
      reset({
        startDate: null,
        endDate: null,
        guests: null,
      })
      // paydata.status == 200 && toast('successfully payment send data')
    } catch (error) {
      console.log('eeeeeeeeeeeeeeeeeeeeeee',error)
    }
  }
  
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
        <div className="">
        <img src={'https://img.freepik.com/premium-photo/random-best-photo_865967-91215.jpg?w=740'} alt="" />
        </div>
        {/* <div class="swiper mySwiper">
          <div class="swiper-wrapper">
            {images.map((e) => {
              return <div class="swiper-slide">
                <img src={'https://img.freepik.com/premium-photo/random-best-photo_865967-91215.jpg?w=740'} alt="" />
              </div>
            })}
          </div>
          <div class="swiper-pagination"></div>
        </div> */}

        {/* Description Section */}
        <div className="mt-6">
          <p className="text-lg text-gray-700 font-semibold">
            {`${address.street}, ${address.town}, ${address.district}, ${address.state}, ${address.pincode}, ${address.country}`}
          </p>
          <p className="text-sm text-gray-600">
            {`Bedroom ${propertyDetails.bedrooms},  Bathrooms ${propertyDetails.bathrooms}, Beds ${propertyDetails.beds}, Guests ${propertyDetails.guests}, Kitchen ${propertyDetails.kitchen},`}
          </p>
          <div className="mt-2 block">
            {/* ★ 1 review */}
            <h4>Hosted By {hostedBy.email}</h4>
          </div>
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
                Guests gave Tarana div 5-star rating for communication.
              </span>
            </p>
          </div>
        </div>

        {/* Date Picker */}
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-8 border p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Add dates for prices</h2>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-gray-600 mb-1">CHECK-IN</label>
              <input
                type="date"
                {...register("startDate",{min : {
                  value:  new Date().toISOString().split('T')[0],
                  message: 'Please set today date or future date'
                }})} 
                className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className='text-red-500'>{errors.startDate?.message}</p>
            </div>
            <div>
              <label className="block text-gray-600 mb-1">CHECKOUT</label>
              <input
                type="date"
                {...register("endDate",{min: {
                  value: new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0],
                  message: 'Please set future date'
                }                
                })} 
                className="w-full border rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className='text-red-500'>{errors.endDate?.message}</p>
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-gray-600 mb-1">Guests</label>
            <input 
            type="number" 
            {...register("guests",{
              min: {
                value: 1,
                message: "Guests must be at least 1",
              },
              max: {
                value: numGuest,
                message: `Guests cannot exceed ${numGuest}`,
              },
            })} 
            className='border-stone-200 outline-none border-[1px] rounded-sm px-2 py-1 ' />
            <p className='text-red-500'>{errors.guests?.message}</p>
            {/* <select className="w-full border rounded px-2 py-1">
              <option>1 guest</option>
              <option>2 guests</option>
              <option>3 guests</option>
              <option>4 guests</option>
            </select> */}
          </div>
        <button 
        type='submit'
        // onClick={()=> handleBook()} 
        className="mt-2 rounded-md bg-blue-600 px-4 py-1 text-white">Book Now</button>
        </div>
        </form>

        {/* About Section */}
        <div className="mt-6">
          <p className="text-gray-700 leading-relaxed">
           {fetchData.description}
          </p>
          {/* <button onClick={()=> handleBook()} className="mt-2 rounded-md bg-blue-600 px-4 py-1 text-white">Book Now</button> */}
        </div>
      </div>
    </>
  )
}

export default Rooms
