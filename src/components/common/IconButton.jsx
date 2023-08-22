import React from 'react'

const IconButton = ({text,
    onClick,children,
    disabled,
    outline=false,
    customclasses,
    type,

}) => {
  return (
   <button disabled={disabled} onClick={onClick} type={type} className='bg-yellow-400 text-sm font-bold 
   p-4 flex items-center text-richblack-900 rounded-md justify-center hover:scale-125 transition-all duration-200 border-richblack-300 gap-x-1 '>
    {
        children ? (

            <>
             <span>
            {text}
            </span>
                {children}
            </>
        
       ) : (text)
    }
   </button>
  )
}

export default IconButton