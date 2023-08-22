import React from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import Highlighttext from '../components/core/Highlighttext'
import CTAbuttton from '../components/core/HomePage/CTAbuttton'
import Banner from '../assets/banner.mp4'
import ExploreMore from '../components/core/HomePage/ExploreMore'
import LearningLanguage from '../components/core/HomePage/LearningLanguage'
import Instructor from '../components/core/HomePage/Instructor'
import TimelineSection from '../components/core/HomePage/TimelineSection'
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
const Home = () => {
  return (
    <div>
    <div className='relative flex mx-auto w-11/12 text-white items-center flex-col justify-between max-w-max'>
        {/* Section-1 */}
        
            <Link to={"/signup"}>
                <div className=' group mt-16 p-1 rounded-full mx-auto font-bold transition-all duration-200 hover:scale-95'>
                    <div className='group-hover:bg-red-600 flex flex-row items-center gap-2 rounded-full px-10 py-[5px]'>
                        <p>Become an Instructor</p>
                        <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
                    </div>
                </div>
            </Link>
        <div className='text-4xl font-semibold text-center mt-7'>
            Empower your future with 
            <Highlighttext text={"Coding Skills"}></Highlighttext>
        </div>
        <div className='w-[70%] text-center font-bold text-lg mt-4 '>
        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
        </div>
        <div className='flex flex-ro  gap-7 mt-8'>
            <CTAbuttton active={true} linkto={'/signup'}> Learn More </CTAbuttton>
            <CTAbuttton active={false} linkto={'/login'}>Book A Demo</CTAbuttton>
        </div>
        <div className='shadow-blue-200 ,mx-3 my-12 max-w-[70%]'>
            <video muted loop autoPlay>
          <source src={Banner}></source>
            </video>
        </div>
        {/* code-section-1 */}
        <div>
            <CodeBlocks position={"lg:flex-row"} heading={<div className='text-4xl font-semibold'>
                Unlock your
                <Highlighttext text={ "coding potential"}></Highlighttext>
                our online courses.
            </div>} 
            subheading={
                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            } ctabtn1={{
                text:"Try it Yourself",
                linkto:"/signup",
                active:true,
            }
        }
        ctabtn2={{
            text:"Learn More",
            linkto:"/login",
            active:false,
        }}
        codeblock={`<!DOCTYPE html>
            <html lang="en
            <head
            <title>This is myPage</title
            </head
            <body
            <h1><a href="/">Header</a></h1
            <nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>
            </nav
            </body`}
        codecolor={"text-yellow"}
            ></CodeBlocks>
        </div>
        {/* code-section-2 */}
        <div>
            <CodeBlocks position={"lg:flex-row-reverse"} heading={<div className='text-4xl font-semibold'>
                Unlock your
                <Highlighttext text={ "coding potential"}></Highlighttext>
                our online courses.
            </div>} 
            subheading={
                "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            } ctabtn1={{
                text:"Try it Yourself",
                linkto:"/signup",
                active:true,
            }
        }
        ctabtn2={{
            text:"Learn More",
            linkto:"/login",
            active:false,
        }}
        codeblock={`<!DOCTYPE html>
            <html lang="en
            <head
            <title>This is myPage</title
            </head
            <body
            <h1><a href="/">Header</a></h1
            <nav> <a href="/one">One</a> <a href="/two">Two</a> <a href="/three">Three</a>
            </nav
            </body`}
        codecolor={"text-yellow"} bggradient={<div className='codeblock1 absolute'></div>}
            ></CodeBlocks>
        </div>
       
        
        
      

    </div>
    <ExploreMore></ExploreMore>
     {/* Section-2 */}
    <div className='bg-gray-100 w-full text-white relative'>
    <div className='homepage-bg h-[310px] w-full '>
        <div className='w-11/12 max-w-max flex flex-col items-center justify-between mx-auto'>
            <div className='h-[200px]'></div>
            <div className='flex flex-row gap-7 text-white mx-auto'>
                <CTAbuttton active={true} linkto={'/signup'}>
                    <div className='flex items-center gap-2'>
                    Explore Full Catalog
                    <BsFillArrowRightCircleFill></BsFillArrowRightCircleFill>
                    </div>
                </CTAbuttton>
                <CTAbuttton active={false} linkto={'/signup'}>
                    <div>
                        Learn More
                    </div>
                </CTAbuttton>
            </div>
        </div>
    </div>

    <div className='mx-auto w-11/12 max-w-max flex flex-col items-center justify-between'>
        <div className='flex flex-row gap-5 mb-10 mt-[95px] '>
            <div className='text-4xl font-semibold w-[45%]  text-black'>
            Get the skills you need for a 
            <Highlighttext text={" job that is in demand."}></Highlighttext>
            </div>

            <div className='flex flex-col w-[40%] items-start gap-8'>
            <div className='text-[16px] text-black'>
            The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
            </div>
            <CTAbuttton active={true} linkto={'/signup'}>Learn More</CTAbuttton>

        </div>

        </div>
        
        <TimelineSection></TimelineSection>
         <LearningLanguage></LearningLanguage>
      
    </div>

</div>

  {/* Section-3 */}

  <div className='w-11/12 mx-auto max-w-max flex flex-col items-center justify-between  bg-[#000814] text-white'>
    <Instructor></Instructor>
    <h2 className='text-center text-4xl font-semibold mt-10'>
    Reviews from other learners
    </h2>
    


  </div>
        {/* Section-4 */}
</div>
  )
}

export default Home