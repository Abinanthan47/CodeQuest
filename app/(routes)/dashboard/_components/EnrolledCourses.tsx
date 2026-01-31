'use client'
import React,{ useState } from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { Button } from "@/components/ui/button";
import Link from "next/link";

function EnrolledCourses() {
    const[enrolledCourses,setEnrolledCourses]=useState([]);
  return (
    <div>
        {enrolledCourses?.length === 0?
        <div>
           <h2 className="text-3xl mt-2 font-pixel ">Your Enrolled Courses</h2>
           <div className="flex flex-col justify-center items-center border-2 p-5 bg-neutral-900 rounded-xl shadow-blue-500 shadow-xs  gap-4 mt-5">
              <DotLottieReact
      src="/questioncoin.json"
      loop
      autoplay
      className="w-30 h-20"
    />
    <h2 className="font-pixel text-2xl">You Dont have Enrolled in any courses</h2>
    <Link href="/courses">
    <Button className="font-pixel text-2xl" variant={'pixel'}>Explore Courses</Button>
    </Link>
           </div>
        </div> :
        <div>
            List of courses
        </div>
    
    }
    </div>
  )
}

export default EnrolledCourses