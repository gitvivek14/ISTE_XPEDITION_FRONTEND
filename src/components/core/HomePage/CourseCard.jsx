import React from 'react'
import {RiTeamFill} from 'react-icons/ri'
import {FaNetworkWired} from 'react-icons/fa'

const CourseCard = ({data,setcurrentcard,currentcard}) => {
  return (
    <div>
        <div className={`flex flex-col gap-10 py-5 px-3 cursor-pointer transition-all duration-200 w-[80%] ${currentcard===data.heading ? "bg-white text-black box-border shadow-[12px_12px_0_0] border-black shadow-yellow-400" : "bg-gray-900 text-gray-600"}`} 
        onClick={()=> setcurrentcard(data.heading)}>
            <h1 className='font-bold'>{data.heading}</h1>
            <p>{data.description}</p>

            <hr className='3px border-dashed border-black'></hr>

            <div className='flex justify-between items-center'>
                <div className='flex flex-row gap-2 items-center'>
                    <RiTeamFill></RiTeamFill>
                    {data.level}
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <FaNetworkWired></FaNetworkWired>
                    {data.lessionNumber}
                </div>

            </div>


        </div>
    </div>
  )
}

export default CourseCard