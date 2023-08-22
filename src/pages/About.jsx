import React from 'react'
import HighlightText from '../components/core/Highlighttext'
import ab1 from '../assets/images/about/aboutus1.webp'
import ab2 from '../assets/images/about/aboutus2.webp'
import  ab3 from '../assets/images/about/aboutus3.webp'
import Quote from '../components/core/About/Quote'
import fst from '../assets/images/about/FoundingStory.png'
import Statscomponent from '../components/core/About/Statscomponent'
import Learninggrid from '../components/core/About/Learninggrid'
import Contactform from '../components/core/About/Contactform'

const About = () => {
  return (
    <div className='mt-[100px] text-white w-11/12 max-w-max mx-auto'>
        {/* section1 */}
        <section>
            <div>
                <header>
                Driving Innovation in Online Education for a 
                <br></br>
                <HighlightText text="Brighter Future"> </HighlightText>
                <p>Studynotion is at the 
                    forefront of driving innovation in online education.
                     We're passionate about creating a brighter 
                     future 
                     by offering cutting-edge courses, leveraging
                      emerging technologies,
                     and nurturing a vibrant learning community.</p>
               
                </header>

                <div className='flex gap-3 mx-auto'>
                    <img src={ab1}></img>
                    <img src={ab2}></img>
                    <img src={ab3}></img>
                </div>
            </div>
        </section>

        {/* section-2 */}
        <section>
        <div>
            <Quote></Quote>

        </div>


        </section>

        {/* section-3 */}
        <section >
            <div className='flex flex-col'>
                {/* fst wala div */}
                <div className='flex'>
                    {/* fsleft */}
                    <div>
                        <h1>Our Founding Story</h1>
                        <p>
                        Our e-learning platform was born out of a
                         shared vision and passion for transforming education. 
                         It all began with a group of educators, technologists, and 
                         lifelong learners who recognized the need for accessible, 
                         flexible, and high-quality learning
                         opportunities in a rapidly evolving digital world.
                        </p>

                        <p>
                        As experienced educators ourselves, we witnessed firsthand the 
                        limitations and challenges of traditional education systems. We 
                        believed that education should not be confined to the walls of a 
                        classroom or restricted by geographical boundaries. We envisioned a 
                        platform that could bridge these gaps and empower individuals from all 
                        walks of life to unlock their full potential.
                        </p>
                    </div>
                    {/* fsrightbox */}
                    <div>
                        <img src={fst}></img>
                    </div>
                </div>

                {/* vision and parent */}
                <div className='flex'>
                    {/* left box */}
                    <div>
                        <h1>
                            Our Vision
                        </h1>
                        <p>
                        With this vision in mind, we set out on a journey to create 
                        an e-learning platform that would revolutionize the way people learn.
                         Our team of dedicated experts worked tirelessly to develop a robust
                          and intuitive platform that combines cutting-edge technology with
                           engaging content, fostering a dynamic
                         and interactive learning experience.
                        </p>
                    </div>

{/* right bpox */}
                    <div>
                    <h1>
                            Our Mission
                        </h1>
                        <p>
                        Our mission goes beyond just delivering courses online.
                         We wanted to create a vibrant community of learners, where 
                         individuals can connect, collaborate, and learn from one another.
                          We believe that knowledge thrives in an environment of sharing and
                           dialogue, and we foster this spirit of collaboration through forums,
                         live sessions, and networking opportunities.
                        </p>

                </div>
            </div>
            </div>
        </section>

        {/* section-4 */}
       <Statscomponent></Statscomponent>

       {/* section-5 */}
       <section className='mx-auto flex items-center justify-between mb-[140px] flex-col gap-5'>
        <Learninggrid></Learninggrid>
        <Contactform></Contactform>
       </section>




       
    </div>
  )
}

export default About