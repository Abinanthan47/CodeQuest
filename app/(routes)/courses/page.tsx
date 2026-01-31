import Image from 'next/image'
import React from 'react'
import CourseList from './_components/CourseList'

function CoursePage() {
  return (
    <div className=''>
      <div className='relative'>
        <Image src="/course-banner.gif" alt="Course banner" width={1000} height={300} className='w-full h-[300px] object-cover' />

        <div className='absolute top-0 h-full pt-24 px-10 md:px-32 bg-linear-to-r from-black/80 to-transparent'>
<h1 className='font-pixel text-6xl'>Explore  Courses</h1>
<p className='font-pixel text-xl md:text-3xl'>Start your Learning Journey with gemefied learning experience</p>
        </div>
      </div>
      <div className='pt-5 px-10 md:px-32'>
        <h2 className='text-3xl font-pixel flex inset-0 gap-2'>
          <Image src='/book.png' alt='book' width={30} height={30} className='h-8 w-8'/>
          All Courses</h2>
        <div>
          <CourseList/>
        </div>
      </div>
    </div>
  )
}

export default CoursePage