import React from 'react'
import Highlighttext from '../Highlighttext';
import CTAbutton from '../../core/HomePage/CTAbuttton'
const LearningGridArray = [
    {
      order: -1,
      heading: "World-Class Learning for",
      highliteText: "Anyone, Anywhere",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
      BtnText: "Learn More",
      BtnLink: "/",
    },
    {
      order: 1,
      heading: "Curriculum Based on Industry Needs",
      description:
        "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
      order: 2,
      heading: "Our Learning Methods",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 3,
      heading: "Certification",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 4,
      heading: `Rating "Auto-grading"`,
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
      order: 5,
      heading: "Ready to Work",
      description:
        "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
  ];
const Learninggrid = () => {
  return (
    <div className='grid mx-auto lg:grid-cols-4 grid-col-1 mb-10 p-5 lg:w-fit'>
        {/* <!-- learning grid section --> */}
        {
            LearningGridArray.map((card,idx)=>{
                return(
                    <div key={idx} className={`${idx===0 && "lg:col-span-2 lg:h-[280px] p-5"}
                    ${
                        card.order%2===1? "bg-richblack-700" : "bg-richblack-800 lg:h-[250px] p-5"
                    }
                    ${card.order===3 && "lg:col-start-2 lg:h-[250px]"}
                    ${card.order<0 && "bg-transparent"}
                    `}>
                        {
                            card.order<0 ? (
                                <div className='lg-w-[90%] bg-transparent flex flex-col pb-5 gap-3'> 
                                    <div className='text-4xl font-semibold'>{card.heading}
                                    <Highlighttext text={card.highliteText}></Highlighttext>
                                    
                                    </div>
                                    <p className='font-semibold'>{card.description}</p>
                                    <div className='w-fit'> 
                                    <CTAbutton active={true} linkto={card.BtnLink} className='w-fit'>
                                        {card.BtnText}
                                    </CTAbutton>

                                    </div>
                                    
                                    
                                    

                                </div>
                                
                            ) : (
                                <div className='flex flex-col gap-8 p-7'>
                                    <h1 className='text-richblack-5 text-lg'>{card.heading}</h1>
                                    <p className='text-richblack-200 font-medium'>{card.description}</p>
                                </div>
                            )
                        }
                        
                    </div>
                )
            })

        }
    </div>
  )
}

export default Learninggrid