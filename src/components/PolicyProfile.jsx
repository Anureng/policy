import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/contracts/contract'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import React,{useEffect, useState} from 'react'
import { useContractRead,useAccount ,usePrepareContractWrite, useContractWrite} from 'wagmi'
import PolicyFooter from './PolicyFooter'
import Link from 'next/link'


function PolicyProfile() {
    const [stringData, setStringData] = useState()
    const [claimData, setClaimData] = useState()
    const { address, isConnecting, isDisconnected } = useAccount()
    const { config, error } = usePrepareContractWrite({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'claim',
        args:[claimData]
      })
      const { write } = useContractWrite(config)
    const { data, isError, isLoading } = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'policies',
        args:[address,stringData]
      })
      console.log(data);
      const { data:countData } = useContractRead({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'getPolicyCount',
        args:[address]
      })
      console.log(countData);
      const arrayItems =['created','premeum','price','start','end','claimed'];
      const styling = {
        backgroundImage: `url('/policyH.jpg')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100"
    }
  return (

    <div  className='h-screen'>
        <div className='flex items-center justify-evenly p-4'>
                <div className='text-white font-semibold text-lg'>
                    <Link href="/">
            Policy
                    </Link>
        </div>
        <div>
            <ConnectButton/>
        </div>
        </div>
    <div className=' justify-around space-y-4 items-center h-3/5  flex'>
       <div className='flex-col flex justify-evenly  md:flex-row space-x-4'>
<div className='border text-xs md:text-lg border-black w-fit rounded-xl text-white p-2'>
  
        <input className=' border border-black text-white placeholder:text-white px-1 py-2 rounded-xl bg-transparent outline-none ' placeholder='Enter the Id' type="text " onChange={(e)=>setStringData(e.target.value)} />
{/* //OWNER ADDRESS */}
{data?.slice(0,1)?.map((el,id)=>{
    return(
        <div key={id}> {`Owner :- ${String(el)}`}</div>
    )
})}
{/* //PREMEUM */}
{data?.slice(1,2)?.map((el,id)=>{
    return(
        <div key={id}> {`PREMEUM :- ${ String(el)}`}</div>
        )
    })}
{/* //PAYOUT */}
{data?.slice(2,3)?.map((el,id)=>{
    return(
        <div key={id}> {`PAYOUT :- ${ String(el)}`}</div>
        )
    })}
{/* //START TIME */}
{data?.slice(3,4)?.map((el,id)=>{
    return(
        <div key={id}> {`START TIME :- ${ String(el)}`}</div>
        )
    })}
{/* //END TIME */}
{data?.slice(4,5)?.map((el,id)=>{
    return(
        <div key={id}> {` END TIME :- ${ String(el)}`}</div>
        )
    })}
{/* //CLAIMED */}
{data?.slice(5,6)?.map((el,id)=>{
    return(
        <div key={id}> {`CLAIMED :- ${ String(el)}`}</div>
        )
    })}
    </div>
    <div className='space-y-4'>
      <p>
         Your Policy Count :- {String(countData)}
        </p> 
        <p>
            <input type="text" className='border border-white px-1 py-2  rounded-xl bg-transparent placeholder:text-black' placeholder='Enter the Id' onChange={(e)=>setClaimData(e.target.value)}/>
        </p>
        <button disabled={!write} onClick={() => write?.()} className='border border-white px-1 py-2  rounded-xl'>claim</button>
    </div>
    </div>
    </div>
    <PolicyFooter/>
    </div>
  )
}

export default PolicyProfile