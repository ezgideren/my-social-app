import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { User } from '@prisma/client'

const UserMediaCard = ({user}: {user: User}) => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4'>
    {/* Title */}
    <div className='flex justify-between items-center font-md'>
      <span className='text-gray-500'>User Media</span>
      <Link href="/" className="text-blue-500 text-xs">See all</Link>
    </div>
    {/* Bottom */}
    <div className='flex gap-4 justify-between flex-wrap'>
        <div className='relative w-1/5 h-24'>
        <Image src="https://images.pexels.com/photos/29642313/pexels-photo-29642313/free-photo-of-cozy-dessert-with-chocolate-and-tea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='object-cover rounded-md' />
        </div>
        <div className='relative w-1/5 h-24'>
        <Image src="https://images.pexels.com/photos/29642313/pexels-photo-29642313/free-photo-of-cozy-dessert-with-chocolate-and-tea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='object-cover rounded-md' />
        </div>
        <div className='relative w-1/5 h-24'>
        <Image src="https://images.pexels.com/photos/29642313/pexels-photo-29642313/free-photo-of-cozy-dessert-with-chocolate-and-tea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='object-cover rounded-md' />
        </div>
        <div className='relative w-1/5 h-24'>
        <Image src="https://images.pexels.com/photos/29642313/pexels-photo-29642313/free-photo-of-cozy-dessert-with-chocolate-and-tea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='object-cover rounded-md' />
        </div>
        <div className='relative w-1/5 h-24'>
        <Image src="https://images.pexels.com/photos/29642313/pexels-photo-29642313/free-photo-of-cozy-dessert-with-chocolate-and-tea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='object-cover rounded-md' />
        </div>
        <div className='relative w-1/5 h-24'>
        <Image src="https://images.pexels.com/photos/29642313/pexels-photo-29642313/free-photo-of-cozy-dessert-with-chocolate-and-tea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='object-cover rounded-md' />
        </div>
        <div className='relative w-1/5 h-24'>
        <Image src="https://images.pexels.com/photos/29642313/pexels-photo-29642313/free-photo-of-cozy-dessert-with-chocolate-and-tea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='object-cover rounded-md' />
        </div>
        <div className='relative w-1/5 h-24'>
        <Image src="https://images.pexels.com/photos/29642313/pexels-photo-29642313/free-photo-of-cozy-dessert-with-chocolate-and-tea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt='' fill className='object-cover rounded-md' />
        </div>
    </div>
    
  </div>
  )
}

export default UserMediaCard