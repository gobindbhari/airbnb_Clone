import React, { useEffect, useState } from 'react'
import Card from '../cards/Card'
import axios from 'axios';

const Home = () => {
  const [fetechData, setFetechData] = useState([])

  useEffect(() => {
    const getdata = async () => {
      const data = await axios(`${import.meta.env.VITE_BACKEND_URL}/post/allpost`)
      console.log('data is recevied',data)
      setFetechData(data.data)
    }
    getdata()
  }, [])
  return (
   <>
    <div className='mt-[20vw] [425px]:mt-[50vw] max-[425px]:mt-[45vw] max-[375px]:mt-[50vw] flex flex-wrap justify-evenly gap-1 '>
      {fetechData.map((e)=>{
        return <Card
           key={e.index}
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
