'use client'
import axios from 'axios'
import { ChartNoAxesColumnIncreasing } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'


type Course={
    id: number,
    courseId: number,
    title: string,
    desc: string,
    level: string,
    bannerImage: string,
    tag: string
    }

function CourseList() {


    const[courseList,setCourseList] = useState<Course[]>([]);
    const[loading,setLoading] = useState(false);
useEffect(()=>{
GetAllCourses();
},[])

const GetAllCourses = async()=>{
    setLoading(true);
    const result = await axios.get('/api/course');
    console.log(result);
    setCourseList(result?.data);
    setLoading(false);
}


  return (
    <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-5 mt-3'>
        {courseList.map((course,index)=>(
            <div key={index} className='border-2 rounded-xl p-2 hover:shadow-md shadow-blue-500 cursor-pointer'>
                <Image src={(course.bannerImage).trimEnd()} alt='banner' width={400} height={400} className='w-full h-[200px] rounded-t-xl object-cover'/>
                <div className='mt-3 p-2'>
                    <h2 className='font-pixel text-2xl'>{course?.title}</h2>
                    <p className='text-gray-300 line-clamp-2'>{course?.desc}</p>

                    <h2 className='mt-4 items-center p-2 px-4 gap-2 bg-zinc-800 inset-0 flex inline-flex rounded-2xl '>
                        <ChartNoAxesColumnIncreasing className='h-4 w-4'/>
  {course.level}
                    </h2>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CourseList