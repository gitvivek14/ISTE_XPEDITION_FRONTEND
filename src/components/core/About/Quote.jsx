import React from 'react'
import Highlighttext from '../Highlighttext'

const Quote = () => {
  return (
    <div>
        We are passionate about revolutionizing the way we learn. Our innovative platform 
        <Highlighttext text=" combines technology,"></Highlighttext>
       <span className='text-orange-400'>
       expertise, 

       </span>
        
         and community to 
         <span className='text-orange-500'>
         create an unparalleled educational experience.

         </span>
         
    </div>
  )
}

export default Quote