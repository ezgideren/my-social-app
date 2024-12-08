import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import MobileMenu from './MobileMenu'
import { ClerkLoading, ClerkLoaded, SignedIn, SignedOut } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className='h-24 flex items-center justify-between'>
        <div className='lg:block w-[20%]'>
            <Link href="/" className='font-bold text-xl text-orange-400'>Socialize</Link>
        </div>
        <div className='hidden md:flex w-[50%] items-center justify-between'>
            <div className='flex gap-6 text-gray-700'>
                <Link href="/" className='flex items-center gap-2'>
                    <Image src="/home.png" alt='Homepage' width={24} height={24} className='w-4 h-4' />
                    <span>Homepage</span>
                </Link>
                <Link href="/" className='flex items-center gap-2'>
                    <Image src="/friends.png" alt='Friends' width={24} height={24} className='w-4 h-4' />
                    <span>Friends</span>
                </Link>
                <Link href="/" className='flex items-center gap-2'>
                    <Image src="/stories.png" alt='Stories' width={24} height={24} className='w-4 h-4' />
                    <span>Stories</span>
                </Link>
            </div>
            <div className='hidden xl:flex p-2  bg-purple-100 items-center rounded-xl'>
                <input type='text' placeholder='search...' className= 'bg-transparent outline-none'/>
                <Image src='/search.png' alt='' width={24} height={24} />
            </div>
        </div>
        <div className='w-[30%] flex items-center gap-6 xl:gap-8 justify-end'>
            <ClerkLoading>
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-gray-500 border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white" />
            </ClerkLoading>
            <ClerkLoaded>
                <SignedIn>
                    <div className='cursor-pointer'>
                        <Image src="/people.png" alt='' width={24} height={24}/>
                    </div>
                    <div className='cursor-pointer'>
                        <Image src="/messages.png" alt='' width={24} height={24}/>
                    </div>
                    <div className='cursor-pointer'>
                        <Image src="/notifications.png" alt='' width={24} height={24}/>
                    </div>
                </SignedIn>
                <SignedOut>
                <div className='flex items-center gap-2 text-sm'>
                        <Image src="/login.png" alt='' width={24} height={24}/>
                        <Link href="/sign-in">Login/Register</Link>
                    </div>
                </SignedOut>
            </ClerkLoaded>
            <MobileMenu/>
        </div>
    </div>
  )
}

export default Navbar