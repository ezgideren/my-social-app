import React from 'react'
import Image from 'next/image'

const Comments = () => {
  return (
    <div className=''>
        {/* Write */}
        <div className='flex-1 flex items-center gap-4'>
            <Image src="https://images.pexels.com/photos/757133/pexels-photo-757133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' width={32} height={32} className='w-8 h-8 rounded-full' />
            <div className='flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
                <input type='text' placeholder='Write a comment...' className='bg-transparent outline-none flex-1'/>
                <Image src="/emoji.png" alt='' width={16} height={16} className='cursor-pointer'/> 
            </div>
        </div>
        {/* Comments */}
        <div className=''>
            {/* Comment */}
            <div className='flex gap-4 justify-between mt-6 '>
                {/* Avatar */}
                <Image src="https://images.pexels.com/photos/757133/pexels-photo-757133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' width={40} height={40} className='w-10 h-10 rounded-full' />
                
                {/* Description */}
                <div className='flex flex-col gap-2 flex-1'>
                    <span className='font-medium'>Ezgi Deren</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper venenatis orci quis mollis. Sed in accumsan lectus. Donec vel vulputate mi. Aenean posuere rhoncus rhoncus. Maecenas ut euismod dui, nec porttitor sem. Sed congue sapien in ligula mollis, non consectetur purus consectetur. Maecenas non augue dignissim, maximus nunc sed, lobortis nisl. Proin in dignissim velit. Sed molestie scelerisque ex rutrum imperdiet. Praesent non ante lectus. Curabitur varius facilisis enim, eu dignissim sem accumsan at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <div className='flex items-center gap-8 text-xs text-gray-500'>
                    <div className='flex items-center gap-4'>
                        <Image
                            src="/like.png"
                            alt=''
                            width={12}
                            height={12}
                            className='cursor-pointer w-4 h-4'
                        /> 
                        <span className='text-gray-300'>|</span>
                        <span className='text-gray-500'>123 Likes</span>
                    </div>
                    
                    <div className=''>Reply </div>
                </div>
                </div>
                {/* Icon */} 
                <Image src="/more.png" alt='' width={16} height={16} className='cursor-pointer w-4 h-4'></Image>
            </div>

        </div>
    </div>
  )
}

export default Comments