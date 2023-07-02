import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'

function Navbar() {
  return (
    <div className='flex items-center justify-evenly p-2  bg-green-600'>
        <div className='text-white font-semibold text-lg'>
          <Link href="/">
            Policy
          </Link>
        </div>
        <div>
            <ConnectButton/>
        </div>
    </div>
  )
}

export default Navbar