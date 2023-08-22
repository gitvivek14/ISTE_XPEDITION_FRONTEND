import React from 'react'
import Logo1 from '../../../assets/images/timeline/Logo1.svg'
import Logo2 from '../../../assets/images/timeline/Logo2.svg'
import Logo3 from '../../../assets/images/timeline/Logo3.svg'
import Logo4 from '../../../assets/images/timeline/Logo4.svg'
import TimelineImage from '../../../assets/images/timeline/TimelineImage.png'
const timeline = [
    {
        Logo:Logo1,
        heading:"leadership",
        description:"Fully committed to the success company",
    },
    {
        Logo:Logo2,
        heading:"leadership",
        description:"Fully committed to the success company",
    },
    {
        Logo:Logo3,
        heading:"leadership",
        description:"Fully committed to the success company",
    },
    {
        Logo:Logo4,
        heading:"leadership",
        description:"Fully committed to the success company",
    }
]

const TimelineSection = () => {
  return (
    <div>
        <div className='flex flex-row gap-15 items-center'>
            <div className='flex flex-col w-[45%] gap-5 text-black'>
                {
                    timeline.map((e,i)=>{
                        return (
                            <div className='flex flex-row gap-6' key={i}>
                                <div className='w-[50px] h-[50px] bg-white flex items-center'>
                                    <img src={e.Logo}></img>
                                </div>
                                <div className=''>
                                    <h2 className='font-semibold text-[18px]'>{e.heading}</h2>
                                    <p className='text-base'>{e.description}</p>
                                </div>

                            </div>
                        );
                            
                        
                    })
                }
            </div>
            <div className='relative shadow-blue-200'>
                <img src={TimelineImage} alt='timelineimage' className='shadow-black object-cover h-fit'></img>
                <div className='absolute bg-green-900  flex flex-row text-white uppercase p-10 left-[50%] translate-x-[-50%] translate-y-[-50%] gap-5'>
                    <div className='flex flex-row gap-5 items-center border-r border-green-300 p-4'>
                        <p className='text-3xl font-bold '>10</p>
                        <p className='text-sm  text-green-300 '>Years of Experience</p>
                    </div>
                <div className='flex gap-5 items-center px-7 w-full'>
                <p className='text-3xl font-bold '>250</p>
                        <p className='text-sm  text-green-300  leading-4'>Types of Courses</p>

                </div>
                </div>
            </div>
        </div>
    </div> 
  )
}

export default TimelineSection