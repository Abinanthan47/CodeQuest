import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

function UpgradeToPro() {
  return (
    <div className='mt-6 flex flex-col items-center p-5 shadow-sm shadow-blue-500 rounded-xl bg-neutral-900  justify-center'>
       
            <Image src='/logo.png' alt='pro badge' width={70} height={70} className=''/>
            <h2 className='text-3xl font-pixel'>Upgrade to Pro</h2>

            <p className='text-xs font-gray-500 text-center'>Join Pro Membership to Unlock more</p>

            <Button className='mt-2 font-pixel text-xl' variant={'pixel'}>Upgrade</Button>
      
    </div>
  )
}

export default UpgradeToPro