"use client"
import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image'
import React from 'react'

const assets = [
    {
        name:'Total XP',
        value:'75',
        icon:'/xp.png'
    },
     {
        name:'Rank',
        value:'Bronze',
        icon:'/badge.png'
    },
     {
        name:'Badges',
        value:'1',
        icon:'/trophy.png'
    },
     {
        name:'Streak',
        value:'2',
        icon:'/streak.png'
    },
]

function UserStats() {
const {user} = useUser();

  return (
    <div className='flex flex-col justify-between items-center w-full px-4 py-2 border-2 shadow-sm shadow-blue-500  bg-zinc-900 rounded-xl '>
        <div className='flex gap-4'>
            <Image src='/user_avatar.gif' alt='user' width={50} height={50}/>
          <div>
              <h1 className='font-pixel text-xl'>{user?.fullName}</h1>
            <h3 className='text-md'>Level 1</h3>
          </div>
        </div>
<div className='w-full flex items-center justify-center'>
        <div className=' grid grid-cols-2 gap-6 mt-4 '>
            {assets.map((asset,index)=>(
                <div key={index} className='flex items-center gap-4 mb-2'>
                    <Image src={asset.icon} alt={asset.name} width={40} height={40} />
                    <div>
                        <h2 className='font-pixel text-lg'>{asset.value}</h2>
                        <p className='text-sm'>{asset.name}</p>
                    </div>
                </div>
            ))}
        </div>
       
        </div>
    </div>
  )
}

export default UserStats