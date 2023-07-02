import { ConnectButton } from '@rainbow-me/rainbowkit'
import axios from 'axios'
import Link from 'next/link'
import React, { useState } from 'react'
import {AiOutlineArrowDown } from 'react-icons/ai';
import PolicyFooter from './PolicyFooter';


function WeatherPolicy() {
  const [icon, setIcon] = useState()
  const [humidity, setHumidity] = useState()
  const [temperature, setTemperature] = useState()
  const options = {
    method: 'GET',
    url: 'https://ai-weather-by-meteosource.p.rapidapi.com/current',
    params: {
      lat: '20.5937',
      lon: '78.9629',
      timezone: 'auto',
      language: 'en',
      units: 'auto'
    },
    headers: {
      'X-RapidAPI-Key': '20bd352e6cmsh3125d8d0defae0dp17d1c3jsne58ce6178fc7',
      'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
    }
  };
  const handleClick = async () => {
    try {
      const response = await axios.request(options);
      console.log(response.data);
      console.log(response.data.current.icon);
      setIcon(response.data.current.icon)
      setHumidity(response.data.current.humidity)
      setTemperature(response.data.current.temperature)
    } catch (error) {
      console.error(error);
    }
  }
  const styling = {
    backgroundImage: `url('/policyH.jpg')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100"
  }
  return (
    <div className='h-screen '>
      {/* Header Start */}
      <div className='flex items-center justify-evenly p-4'>
        <div className='text-white text-lg font-medium'>
          <Link href="/">
            Policy
          </Link>
        </div>
        <div>
          <ConnectButton />
        </div>
      </div>
      {/* Header End */}
<div className='flex flex-col  lg:flex-row  items-center justify-center lg-96 lg:h-[40rem] space-x-32'>
      <div className=' p-4 space-y-4  flex flex-col items-center justify-center '>
        <p className='text-lg'>
        Click the button to Get the Data
        </p>
  <p className='text-xl animate-bounce w-fit h-fit'>
    <AiOutlineArrowDown className='text-white' />
  </p>
  <button className='bg-green-300 rounded-xl px-1 py-2 ' onClick={(e)=>handleClick(e)}>click</button>
      </div>
      <div className='mt-10 flex flex-col items-center justify-center mr-96'>

<p className='text-xl'>This is the real time data of India</p>
      <div className='border border-black p-4 rounded-xl mt-4 shadow-2xl'>
     <p className='text-xl'>
      Weather Status
     </p>
     <p className='text-white'>
         {icon}
     </p>
         <p className='text-xl'>
         Weather Humidity
     </p>
     <p className='text-white'>
          {humidity}  
     </p>
          <p className='text-xl'>
          Weather temperature
     </p>
     <p className='text-white'>
           {temperature}
     </p>
    </div>
      </div>
</div>
    </div>
  )
}

export default WeatherPolicy