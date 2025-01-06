import React, { useEffect, useState } from 'react'
import Card from '../cards/Card'
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import SkeletonCard from '../cards/SkeletonCard';

const Home = () => {
  const [fetechData, setFetechData] = useState([])
  const [load, setLoad] = useState(false)
  
  const getdata = async () => {
   try {
    // debugger
    // console.log('lllllllllllllllllllllllllllllll')
    const data = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/post/allpost`);
    // const data = await axios('http://localhost:5500/post/allpost')
    console.log('data is recevied',data)
    setFetechData(data.data)
    setLoad(true)
   } catch (error) {
    console.log('eeeerrrrrrrrrrrr',error)
   }
  }

  useEffect(() => {
    // debugger
    getdata()
  }, [])

  if(!load){
    return <>
     <div className='flex flex-wrap justify-evenly gap-2 '>
     {/* <div className='mt-[21vw] [425px]:mt-[50vw] max-[425px]:mt-[45vw] max-[375px]:mt-[50vw] flex flex-wrap justify-evenly gap-2 '> */}
    <SkeletonCard id={1}/>
    <SkeletonCard id={2}/>
    <SkeletonCard id={3}/>
    <SkeletonCard id={4}/>
    <SkeletonCard id={5}/>
    <SkeletonCard id={6}/>
    </div>
    </>
  }
  return (
   <>
    <div className='mt-3 flex flex-wrap justify-evenly gap-2 '>
    {/* <div className='mt-[21vw] [425px]:mt-[50vw] max-[425px]:mt-[45vw] max-[375px]:mt-[50vw] flex flex-wrap justify-evenly gap-2 '> */}
      {fetechData.map((e)=>{
        return <Card
           id={e._id}
           title={e.title}
           pricePerNight={e.pricePerNight}
           description={e.description}
           images={e.images}
        /> })}
    </div>
   </>
  )
}

export default Home
