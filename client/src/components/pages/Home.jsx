import React, { useEffect, useState } from 'react'
import Card from '../cards/Card'
import axios from 'axios';

const Home = () => {
  const [fetechData, setFetechData] = useState([])

  useEffect(() => {
    const getdata = async () => {
      const data = await axios('http://localhost:5500/post/allpost')
      console.log('data is recevied',data)
      setFetechData(data.data)
    }
    getdata()
  }, [])
  return (
   <>
    <div className=' mt-[45vh] flex flex-wrap justify-evenly gap-1 '>
      {fetechData.map((e)=>{
        return <Card
           key={e.index}
           title={e.title}
           pricePerNight={e.pricePerNight}
           description={e.description}
          //  images={e.images}
        /> })}
    </div>
   </>
  )
}

export default Home
