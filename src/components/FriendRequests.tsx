import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FriendRequests = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
      {/* Title */}
      <div className='flex justify-between items-center font-md'>
        <span className='text-gray-500'>Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">See all</Link>
      </div>
      {/* User */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image src="https://images.pexels.com/photos/757133/pexels-photo-757133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={40} height={40} className='w-10 h-10 rounded-full object-cover' />
          <span className='font-semibold'>Ezgi Deren</span>
        </div>
        <div className='flex gap-3 justify-end'>
          <Image src="/accept.png" alt="" width={20} height={20} className='cursor-pointer' />
          <Image src="/reject.png" alt="" width={20} height={20} className='cursor-pointer' />
        </div>
      </div>
      {/* User */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image src="https://images.pexels.com/photos/757133/pexels-photo-757133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={40} height={40} className='w-10 h-10 rounded-full object-cover' />
          <span className='font-semibold'>Ezgi Deren</span>
        </div>
        <div className='flex gap-3 justify-end'>
          <Image src="/accept.png" alt="" width={20} height={20} className='cursor-pointer' />
          <Image src="/reject.png" alt="" width={20} height={20} className='cursor-pointer' />
        </div>
      </div>
      {/* User */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Image src="https://images.pexels.com/photos/757133/pexels-photo-757133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={40} height={40} className='w-10 h-10 rounded-full object-cover' />
          <span className='font-semibold'>Ezgi Deren</span>
        </div>
        <div className='flex gap-3 justify-end'>
          <Image src="/accept.png" alt="" width={20} height={20} className='cursor-pointer' />
          <Image src="/reject.png" alt="" width={20} height={20} className='cursor-pointer' />
        </div>
      </div>

    </div>
  )
}

export default FriendRequests 