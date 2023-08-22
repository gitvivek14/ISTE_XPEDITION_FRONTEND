import React, { useState } from 'react'
import {HomePageExplore} from '../../../data/HomePageExplore' 
import Highlighttext from '../Highlighttext';
import CourseCard from './CourseCard';

const tabname=[
    "Free",
    "New to Coding",
    "Most Popular",
    "Skill Paths",
    "Career Paths"

]
const ExploreMore = () => {
    // konsa Tab
    const[currentTab,setCurentTab] = useState(tabname[0]);
    // current card courses
    const [courses, setcourses] = useState(HomePageExplore[0].courses);

    
    
    
    const[currentcard,setcurrentcard] = useState(HomePageExplore[0].courses[0].heading)


    const setMycards = (value)=>{
        setCurentTab(value)
        
        const result = HomePageExplore.filter((course) =>course.tag===value)

        setcourses(result[0].courses)
        setcurrentcard(result[0].courses[0].heading);
    }
  return (
    <div className='relative'>
        <div className='text-4xl font-semibold text-center text-white '>
            Unlock the
            <Highlighttext text={"Power of Code"}></Highlighttext>
        </div>
        <p className='text-center text-white text-lg mt-3 mb-5 '>Learn to Build anything you can Imagine</p>

        <div className='flex flex-row rounded-full bg-yellow-400 mt-5 px-2 py-1 items-center justify-center mx-auto w-fit gap-4 '>
            {
                tabname.map((val,idx)=>{
                    return (
                        <div className={`text-[16px] flex flex-row items-center
                         rounded-full transition-all duration-200 hover:bg-blue-400 hover:text-blue-600 px-7 py-2
                         ${currentTab===val ? "bg-blue-900 text-white font-medium":" text-gray-600"
                        }` } key={idx} onClick={()=> setMycards(val)}>
                            {val}
                            </div>
                    )
                })
            }
        </div>
        <div className='lg:h-[150px]'>
        </div>

        <div className='flex flex-row absolute px-3 items-center gap-1 justify-between  top-8 mt-3 z-20 right-32 left-32 translate-y-[50%] mx-auto w-11/12 max-w-max'>
            {
                courses.map((e,idx)=>{
                    return (
                        <CourseCard key={idx} data={e} currentcard={currentcard} setcurrentcard={setcurrentcard}></CourseCard>
                    )
                })
            }
        </div>
    </div>


  )
}

export default ExploreMore