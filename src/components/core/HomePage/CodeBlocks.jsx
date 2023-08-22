
import React from 'react'
import CTAbuttton from './CTAbuttton'
import Highlighttext from '../Highlighttext'
import { BsFillArrowRightCircleFill, BsLock } from 'react-icons/bs'
import { TypeAnimation } from 'react-type-animation'

const CodeBlocks = ({ position, heading, subheading, ctabtn1, ctabtn2, bggradient, codeblock, codecolor}) => {
    return (
        <div className={`flex ${position} my-20 justify-between gap-10`}>
            {/* {srction1} */}
            <div className='flex flex-col w-[50%] gap-4'>
                {heading}
                <div className='font-bold text-[#838894]'>
                    {subheading}
                </div>
                <div className='flex  gap-7 mt-7'>
                    <CTAbuttton active={ctabtn1.active} linkto={ctabtn1.linkto}><div className='flex gap-2 items-center'>{ctabtn1.text}<BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></div></CTAbuttton>
                    <CTAbuttton active={ctabtn2.active} linkto={ctabtn2.linkto}><div className='flex gap-2 items-center'>{ctabtn2.text}<BsFillArrowRightCircleFill></BsFillArrowRightCircleFill></div></CTAbuttton>


                </div>
            </div>
            {/* section-2 */}
            <div className=' h-fit flex flex-row text-[15px] w-[100%] lg:w-[500px] relative code-border py-4 '>
                {bggradient}

            {/* bg-gradient */}
            <div className='flex text-center flex-col w-[10%] text-[#6E727F] font-bold'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
             
                </div> 

                <div className={`w-[90%] flex flex-col gap-2 font-semibold pr-2 font-mono ${codecolor} text-yellow-400`}>
                    <TypeAnimation sequence={[codeblock,50000,""]} repeat={Infinity} style={{
                        whiteSpace:"pre-line",
                        display:"block",
                    }} omitDeletionAnimation={true} ></TypeAnimation>
                </div>
        </div>

        </div>
    )
}

export default CodeBlocks
