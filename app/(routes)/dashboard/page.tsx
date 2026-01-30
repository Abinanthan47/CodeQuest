import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import EnrolledCourses from './_components/EnrolledCourses'
import ExploreMore from './_components/ExploreMore'
import Invite from './_components/Invite'
import UserStats from './_components/UserStats'
import UpgradeToPro from './_components/UpgradeToPro'

function Dashboard() {
  return (
    <div className='p-10 md:px-20 lg:px-32 xl:px-48'>
        <div className='grid grid-cols-3 '>
            <div className='col-span-2'>
                <WelcomeBanner/>
                <EnrolledCourses/>
                <ExploreMore/>
                <Invite/>
            </div> 

            <div className='ml-10 pt-6'>
                <UserStats/>
                <UpgradeToPro/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard