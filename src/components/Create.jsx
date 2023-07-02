import Image from 'next/image'
import React,{useState} from 'react'
import PolicyFooter from './PolicyFooter'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '@/contracts/contract'
function Create() {
  const [premeum, setPremeum] = useState()
  const [payout, setPayout] = useState()
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  const { config , error } = usePrepareContractWrite({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: 'createPolicy',
    args:[premeum,payout,startDate,endDate],
    onSuccess(data) {
      console.log('Success', data)
    },
  })
  const { write } = useContractWrite(config)
  return (
    <div>
    <div className=' md:mt-32 flex flex-col lg:flex-row items-center justify-center h-3/6'>
        <div>
            <Image src="/create.png"  alt='Nothing' className='md:h-90 md:w-[32vw]' width={300} height={300}/>
        </div>
        <div className='flex flex-col space-x-2 border w-3/5 items-center justify-center h-3/5 rounded-xl p-4  border-black'>
<p className='text-xl underline-offset-4 underline'>Enter The Details</p>
          <div className='flex space-x-2 space-y-4 flex-wrap'>
    <div>
      <input onChange={(e)=>setPremeum(e.target.value)} className='bg-transparent mt-4 px-1 py-2 border  border-black rounded-xl' type="text" placeholder='Enter the premeum' />
    </div>
    <div>
      <input onChange={(e)=>setPayout(e.target.value)} className='bg-transparent px-1 py-2 border border-black rounded-xl' type="text" placeholder='Enter the payout' />
    </div>  <div>
    Start Date  <input onChange={(e)=>setStartDate(e.target.value)} className='bg-transparent px-1 py-2 border border-black rounded-xl' type="text" placeholder='Enter the start date' />
    </div>  <div>
    End Date  <input onChange={(e)=>setEndDate(e.target.value)} className='bg-transparent px-1 py-2 border border-black rounded-xl' type="text" placeholder='Enter the end date' />
    </div>  
          </div>
    <div className=' mt-4'>
            <button odisabled={!write} onClick={() => write?.()} className='bg-green-900 text-white rounded-xl px-1 py-2'>Click</button>
    </div>
        </div>
    </div>
        <PolicyFooter/>
    </div>
  )
}

export default Create