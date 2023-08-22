import React from 'react'
import frame from '../../../assets/images/Forms/frame.png'
import Signf from '../auth/Signf'
import Loginf from '../auth/Loginf'
import {FcGoogle} from 'react-icons/fc'

import { UseSelector } from 'react-redux/es/hooks/useSelector'

const Template = ({title , desc1 , desc2,formType, Image}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-20 gap-y-0 justify-between'>
       <div className='w-11/12 max-w-[450px] mx-0'>
         <h1 className='text-richblack-100 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
         <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
            <span className='text-richblack-100 '>{desc1}</span>
            <br></br>
            <span className='text-blue-100 italic'>{desc2}</span>
         </p>
         {formType === "signup" ?
         (<Signf></Signf>)
         :
         (<Loginf></Loginf>)}



          <div className='flex flex-col w-full items-center gap-y-4'>
            <div className='h-[1px] bg-richblack-700 w-full'></div>
            <p className='text-richblack-100'>OR</p>
            <div className='h-[1px] bg-richblack-700 w-full'></div>
          </div>

          <button
          className='text-richblack-100 flex w-full
          items-center justify-center 
          rounded-[4px] font-md
           border-richblack-100 
           px-[12px] py-[8px] 
           gap-x-2 mt-6'>
            <FcGoogle className='text-3xl'></FcGoogle>
            
            Sign up With Google</button>

       </div>





       <div className='relative w-11/12 max-w-[450px]'>
            <img src={frame}
            alt='pattern'
            loading='lazy'
            width={558}
            height={584}></img>

<img src={Image}
            alt='pattern'
            loading='lazy'
            width={558}
            height={490}
            className='absolute -top-4 right-4'
            
            ></img>


          </div>

    </div>
  )
}

export default Template