import React from 'react'
import ContactusForm from '../Contact/ContactusForm'

const Contactform = () => {
  return (
    <div className='flex flex-col mx-auto items-center justify-center w-11/12'>
        <h1 className='text-4xl font-bold m-4'>Get in Touch</h1>
        <p className='text-richblack-200 p-2 mb-5'>
        We'd love to here for you, Please fill out this form.
        </p>
        <div>
            <ContactusForm></ContactusForm>
        </div>



    </div>
  )
}

export default Contactform