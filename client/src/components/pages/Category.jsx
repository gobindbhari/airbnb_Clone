import React, { useEffect, useState } from 'react'
import Card from '../cards/Card'
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';

const Category = () => {
  const [fetechData, setFetechData] = useState([])
  const [load, setLoad] = useState(false)


  const {category} = useParams()
  const location = useLocation()
  
  const categorydata = async (e) => {
   try {
    // debugger
    console.log('lllllllllllllllllllllllllllllll', e)
    const data = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/post/category/${e}`);
    console.log('data is recevied',data)
    setFetechData(data.data)
    setLoad(true)
   } catch (error) {
    console.log('eeeerrrrrrrrrrrr',error)
   }
  }

  useEffect(() => {
    // console.log('pathhhhhhhh', location.pathname)
    categorydata(category)
  },[location.pathname,category])

  if(!load){
    return <>
     <div className='mt-[21vw] [425px]:mt-[50vw] max-[425px]:mt-[45vw] max-[375px]:mt-[50vw] flex flex-wrap justify-evenly gap-2 '>
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

export default Category
