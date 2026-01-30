"use client"
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
    const{user} = useUser();
  return (
    <div className='flex gap-4 items-center'>
        <Image src='/bouncingbot.webp' alt={'bot'} width={120} height={50} />
        <h2 className='text-2xl font-pixel  p-2  border-2 shadow-sm shadow-blue-500 rounded-bl-none bg-zinc-900 rounded-xl '>Welcome back, <span className='text-yellow-500'> {user?.fullName} </span>! , Lets start learning</h2>
    </div>
  )
}

export default WelcomeBanner