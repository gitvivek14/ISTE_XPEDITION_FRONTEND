import React from 'react'
import Highlighttext from '../Highlighttext'
import CTAbuttton, {} from '../HomePage/CTAbuttton'
import Know_your_progress from '../../../assets/images/Know_your_progress..png'
import Compare_with_others from '../../../assets/images/Compare_with_others.svg'
import Plan_your_lessons from '../../../assets/images/Plan_your_lessons.svg'
const LearningLanguage = () => {
  return (
    <div className='mt-[150px] mb-32'>
      <div className='flex flex-col gap-5 items-center'>
        <div className='text-4xl font-semibold text-center text-black'>
        Your swiss knife for 
        <Highlighttext text={"   learning any language"}></Highlighttext>
        </div>
        <div className='text-center
         text-black mx-auto text-base mt-3 w-[70%]'>
        Using spin making learning
         multiple languages easy.
          with 20+ languages realistic 
          voice-over, progress tracking, 
          custom schedule and more.
        </div>
        <div className='flex flex-row items-center justify-center mt-5'>
          <img src={Know_your_progress} className='object-contain -mr-32'></img>
          <img src={Compare_with_others} className='object-contain'></img>
          <img src={Plan_your_lessons} className='object-contain -ml-36 '></img>
        </div>

        <div className='w-fit mx-auto'>
          <CTAbuttton active={true} linkto={'/signup'}>Learn More</CTAbuttton>
        </div>
     
    

      </div>
    </div>
  )
}

export default LearningLanguage