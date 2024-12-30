import React, { useEffect, useState } from 'react'
import Card from '../cards/Card'
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';
import SkeletonCard from '../cards/SkeletonCard';

const Home = () => {
  const [fetechData, setFetechData] = useState([])
  const [load, setLoad] = useState(false)

  const {category} = useParams()
  const location = useLocation()
  
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
     <div className='mt-[21vw] [425px]:mt-[50vw] max-[425px]:mt-[45vw] max-[375px]:mt-[50vw] flex flex-wrap justify-evenly gap-2 '>
    <SkeletonCard/>
    <SkeletonCard/>
    <SkeletonCard/>
    <SkeletonCard/>
    <SkeletonCard/>
    <SkeletonCard/>
    </div>
    </>
  }
  return (
   <>
    <div className='mt-[21vw] [425px]:mt-[50vw] max-[425px]:mt-[45vw] max-[375px]:mt-[50vw] flex flex-wrap justify-evenly gap-2 '>
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
