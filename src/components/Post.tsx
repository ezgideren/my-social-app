import React from 'react'
import Image
 from 'next/image'
const Post = () => {
  return (
    <div className='flex flex-col gap-4'>
        {/* user */}
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
                <Image src="https://images.pexels.com/photos/28857430/pexels-photo-28857430/free-photo-of-stack-of-delicious-homemade-cookies-on-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={40} height={40} className="w-10 h-10 rounded-full"/>
                <span className='font-medium'>Derenimo</span>
            </div>
            <Image src="/more.png" alt='' width={16} height={16} />
        </div>
         {/* description */}
         <div className='flex flex-col gap-4'>
            <div className='w-full min-h-96 relative'>
            <Image src="https://images.pexels.com/photos/1450372/pexels-photo-1450372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' fill className='object-cover rounded-md' />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper venenatis orci quis mollis. Sed in accumsan lectus. Donec vel vulputate mi. Aenean posuere rhoncus rhoncus. Maecenas ut euismod dui, nec porttitor sem. Sed congue sapien in ligula mollis, non consectetur purus consectetur. Maecenas non augue dignissim, maximus nunc sed, lobortis nisl. Proin in dignissim velit. Sed molestie scelerisque ex rutrum imperdiet. Praesent non ante lectus. Curabitur varius facilisis enim, eu dignissim sem accumsan at. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
         </div>
          {/* interaction */}
        <div className='flex items-center justify-between text-sm mt-4'>
            <div className='flex gap-8'>
                <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                <Image src="/like.png" alt='' width={16} height={16} className='cursor-pointer' />
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>
                    123<span className='hidden md:inline'> Likes </span>
                </span>
                </div>
            <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                <Image src="/comment.png" alt='' width={16} height={16} className='cursor-pointer' />
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>
                    123<span className='hidden md:inline'> Comments </span>
                </span>
            </div>
            </div>
            <div className=''>
                <div className='flex items-center gap-4 bg-slate-50 p-2 rounded-xl'>
                <Image src="/share.png" alt='' width={16} height={16} className='cursor-pointer' />
                <span className='text-gray-300'>|</span>
                <span className='text-gray-500'>
                    123<span className='hidden md:inline'> Shares </span>
                </span>
                </div>
            </div>
        </div>
     </div>
  )
}

export default Post