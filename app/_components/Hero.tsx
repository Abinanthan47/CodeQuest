import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative w-full h-screen overflow-hidden'>
    
        <Image src="/hero-bg.gif" alt="Hero Image" width={100} height={100} className='absolute opacity-80 w-full h-full inset-0 object-fit scale-100' />
        <div className='flex items-center w-full flex-col absolute mt-28'>
          <h2 className='text-4xl  uppercase font-pixel text-[#1b2b57]'>Start your</h2>
          <Image src="/hero-text.png" alt='' width={400} height={100}/>
          <p className='mt-6  text-[#f2ff00] '>Join codeQuest to Unlock Gamified Learning Experience</p>

          <div className='mt-8'>
            <Link href="/sign-up">
            <Button variant={'pixel'} size={'lg'} className='font-pixel text-2xl'>Get Started</Button>
            </Link>
          </div>
</div>
    </div>
  )
}

export default Hero