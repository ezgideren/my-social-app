import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const UserInfoCard = ({userId}: {userId:string}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
      {/* Title */}
      <div className='flex justify-between items-center font-md'>
        <span className='text-gray-500'>User Information</span>
        <Link href="/" className="text-blue-500 text-xs">See all</Link>
      </div>
      {/* Bottom */}
      <div className='flex flex-col gap-4 text-gray-500'>
        <div className='flex items-center gap-2'>
            <span className='text-xl text-black'>Ezgi Deren</span>
            <span className="text-sm">@ezgideren</span>
        </div>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tincidunt, sapien vel feugiat convallis, nulla erat placerat mauris, non porta lorem diam ac nunc.
        </p>
        <div className='flex items-center gap-2'>
            <Image src="/map.png" alt="" width={16} height={16} />
            <span>Living in <b>Netherlands</b></span>
        </div>
        <div className='flex items-center gap-2'>
            <Image src="/school.png" alt="" width={16} height={16} />
            <span>Went to <b>Bogazici University</b></span>
        </div>
        <div className='flex items-center gap-2'>
            <Image src="/work.png" alt="" width={16} height={16} />
            <span>Works at <b>Voja.Travel</b></span>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex gap-1 items-center'>
                <Image src="/link.png" alt="" width={16} height={16} />
                <Link href="/" className='text-blue-500 font-medium text-xs'>ezgideren.com</Link>
            </div>
            <div className='flex gap-1 items-center'>
                <Image src="/date.png" alt="" width={16} height={16} />
                <span className='text-xs'>Joined November 2024</span>
            </div>
        </div> 
        <button className='bg-blue-500 text-white text-sm rounded-md'>Follow</button>
        <span className='text-red-400 self-end text-xs cursor-pointer'>Block User</span>
      </div>
    </div>
  )
}

export default UserInfoCard