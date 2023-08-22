import React from 'react'
import { useSelector} from 'react-redux'
import CourseInformation from './CourseInformation'
import {FaCheck} from 'react-icons/fa'
import CourseBuilder from  '../../core/Dashboard/CourseBuilder/CourseBuilder';

const RenderSteps = () => {
    const step = useSelector((state)=>state.course)
    const steps=[
        {
            id:1,
            title:"Course Information"
        },
        {
            id: 2,
            title: "Course Builder",
          },
          {
            id: 3,
            title: "Publish",
          },
    ]
  return (
    <div className=' flex flex-col gap-y-2 '>
        <div className=' flex flex-row w-11/12 gap-x-32  justify-center items-center z-10'>
        {
           
            steps.map((item,idx)=>(
                <>
                <div key={idx}>
                <div className={`grid cursor-default aspect-square w-[40px]
                        place-items-center rounded-full border-[1px]
                    ${step === item.id ? 
                    "bg-yellow-500 border-yellow-50 text-yellow-50" : 
                    "border-richblack-700 bg-richblack-800 text-richblack-300 "}`}>
                        {
                            step>item.id ? (<FaCheck  className="font-bold text-yellow-50 "></FaCheck>) : (item.id)
                        }


                </div>

                </div>
               {/* Add Code for Dashes */}
             
                </>
            ))
        }
    </div>
    {/* adding titles */}
    <div className='border-dashed text-yellow-300 -z-20 border-yellow-400 w-1 h-1'></div>
    <div className=' flex flex-row w-11/12 gap-x-32 justify-center items-center text-xs'>
        {
            steps.map((item,idx)=>(
                <>
                <div className={` rounded-full 
                             text-richblack-5 
                        w-[10%] py-2  text-center hover:scale-105`} key={idx}>
                    <p className='text-lg'>{item.title}</p>
                </div>
                </>
            ))
        }
    </div>
{
    step===1 && <CourseInformation></CourseInformation>
}
{
    step===2 && <CourseBuilder></CourseBuilder>
}
{/* {
    step===3 && <PublishForm></PublishForm>
} */}

    </div>
    

  )
}

export default RenderSteps

