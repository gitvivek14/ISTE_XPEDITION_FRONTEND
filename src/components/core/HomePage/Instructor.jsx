import React from 'react'
import Highlighttext from '../Highlighttext'
import Instructor1 from '../../../assets/images/Instructor.png'
import CTAbuttton from './CTAbuttton'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
const Instructor = () => {
  return (
    <div className='mt-16'>
      <div className='flex flex-row gap-20 items-center'>
        <div className='w-[50%]'>
          <img src={Instructor1}></img>
        </div>
        <div className='w-[50%] flex flex-col gap-10'>
          <div className='text-4xl font-semibold'>
          Become an 
        <Highlighttext text={"instructor"}></Highlighttext>
          </div>

          <p className='text-gray-500 text-[16px] w-[80%] '>
          Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
          </p>
          <div className='w-fit'>
          <CTAbuttton active={true} linkto={'/signup'}>
            
            <div className='flex flex-row gap-2 items-center w-fit '>
              Start teaching today
              <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
              
            </div>
          </CTAbuttton>
          </div>
         
        
        </div>

        <div>

        </div>

      </div>
    </div>
  )
}

export default Instructor