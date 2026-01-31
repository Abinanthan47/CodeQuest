import Image from 'next/image'
import React from 'react'

const ExplorMoreOptions = [
    {
id: 1,
title: 'Quizz Pack',
desc: 'Practice what you learned with bite-sized code challenges',
icon: '/book.png'
},{
id: 2,
title: 'Video Courses',
desc: 'Learn with structured video lessons taught step-by-step', 
icon: '/start-up.png'
},
{
id: 3,
title: 'Community Project',
desc: 'Build real-world apps by collaborating with the community',
icon: '/calendar.png'
},
{
id: 4,
title : 'challenges',
desc: 'Test your skills with fun and engaging coding challenges',
icon: '/goal.png'
}
]


function ExploreMore() {
  return (
    <div  className='mt-4'>
        <h2 className="text-3xl  mb-2 font-pixel">Explore More</h2>
        <div className=' grid grid-cols-2 gap-4'>
            {ExplorMoreOptions.map((explore,index)=>(
                <div key={index} className="p-4 border flex gap-2 bg-neutral-900 shadow-sm shadow-blue-500 rounded-lg ">
                    <Image src={explore.icon} alt={explore.title} width={40} height={40} />
                    <div>
                        <h3 className="font-pixel text-xl">{explore.title}</h3>
                    <p className="text-sm ">{explore.desc}</p>
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default ExploreMore