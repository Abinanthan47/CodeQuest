import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function Invite() {
  return (
    <div className='mt-8 flex justify-center items-center border-2 p-5 bg-neutral-900 rounded-xl shadow-blue-500 shadow-xs  gap-4'>
        <div className='flex'>
            <Image src='/letter.gif' alt='invite banner' width={100} height={100} />
            <div className='ml-4 flex flex-col items-center justify-center gap-2'>
                <h1 className='text-3xl font-pixel'>Invite a Friend</h1>
                <p>Share the joy of coding with your friends! Learn together</p>

                <Button className="mt-2 font-pixel text-xl" variant={'pixel'}>Invite Friends 💌</Button>
            </div>
        </div>
    </div>
  )
}

export default Invite