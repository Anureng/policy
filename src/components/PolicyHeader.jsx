import React from 'react'
import { MdCreateNewFolder } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';
import Link from 'next/link';

function PolicyHeader() {
  return (
    <div className='flex flex-col items-center justify-center space-y-10 lg:justify-around lg:flex-row h-3/5'>
        <div className=" flex flex-col h-32 p-6 space-y-10">
            <div className=" flex items-center text-xl space-x-2">
        <MdCreateNewFolder/>
        <Link href="/createPolicy">
            <p>
            Create Policy
            </p>
        </Link>
            </div>
            <div className=" flex items-center text-xl space-x-2">
                <CgProfile/>
                <Link href="/profile">
         <p>
         Profile
            </p>
                </Link>
            </div>
        </div>
        <div className="border border-black p-4 w-3/6 rounded-xl space-y-2">
            <p className='text-xl lg:text-5xl text-white'>
            Welcome to the policy section <br />
            </p>
            <p className='text-green-900 font-bold'>
            In policy section farmers can create policies . In any case farmers crops are destroyed they can claim their policies . <br />
            Its very helpfull to having the policies 
            </p>
        </div>
    </div>
  )
}

export default PolicyHeader