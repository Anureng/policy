import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


function Header() {
    const styling = {
        backgroundImage: `url('/Header.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100"
    }
  return (
    <div style={styling} className='h-screen' >
        {/* Header Start */}
        <div className='flex items-center justify-evenly p-4'>
        <div className='text-white text-lg font-medium'>
            <Link href="/">
            Policy
            </Link>
        </div>
        <div>
            <ConnectButton/>
        </div>
        </div>
   {/* Header Complete */}

   {/* Main Content */}
   <div className="text-xl h-3/5 w-full flex items-center justify-center ">
    <div className="space-y-4">
        <div className=' text-xl lg:text-5xl'>
       Weather data can be shown in real time 
        </div>
<div>
       This Dapp  will help to the Farmer so that they can predict the climate. <br /> <br />
   In this dapp farmers can check or create&nbsp;
   <p className='text-green-200 '>
   <Typewriter
   words={['Policy', 'Weather']}
   loop={Infinity}
   cursor
   cursorStyle='|'
   typeSpeed={70}
   deleteSpeed={50}
   delaySpeed={1000}
   // onLoopDone={handleDone}
   // onType={handleType}
   />
   </p>
   </div>
<br />
    </div>
    
   </div>
   <div className=' flex items-center justify-center space-x-4 mb-10 text-xl'>
    <div className="hover:bg-green-400 bg-green-600 px-1 py-2 rounded-xl shadow-xl">
        <Link href="/weather">
        <button >Check Weather</button>
        </Link>
    </div>
    <div className="hover:bg-green-400 bg-green-600 px-1 py-2 rounded-xl shadow-xl">
       <Link href="/profile">
        <button>Policy</button>
       </Link>
    </div>
    </div>
    </div>
  )
}

export default Header