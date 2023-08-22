import React, { useEffect ,useState } from 'react'
import {set, useForm} from 'react-hook-form'
import {contactusEndpoint} from '../../../services/apis'
import apiconnector from '../../../services/apiconnector'
import {CountryCodes} from '../../../data/country'
const ContactusForm = () => {
    const [loading, setLoading] = useState(false)
    const{
        register,handleSubmit,
        reset,formState:{errors,isSubmitSuccessful}
    } = useForm()
const submitcontactform = async(data)=>{
    console.log(data)
    try{
        setLoading(true)
        // const response = await apiconnector("POST",contactusEndpoint.CONTACT_US_API,data);
        const response = {status:"Ok"}
        console.log(response)
        setLoading(false)
    }
        catch(e){
            setLoading(false)
            console.log(e,"error")
    }

}
    useEffect(()=>{
        if(isSubmitSuccessful){
            reset({
                email:"",
                firstname:"",
                lastname:"",
                message:"",
                phoneno:""
            })
        }
    },[isSubmitSuccessful,reset])
  return (
    <form onSubmit={handleSubmit(submitcontactform)}>
        <div className='flex gap-5 flex-col'>
            {/* firstname */}
            <div className='flex flex-row gap-3 w-full'>
            <div className='flex flex-col w-[50%]'> 
                <label htmlFor='firstname' ></label>
                    First Name
                    <input type='text' 
                    name='firstname' id='firstname' 
                    placeholder='Enter first name'
                    {...register("firstname",{required:true})} className='text-richblack-800 form-style mt-2'
                    >

                    </input>
                    {
                        errors.firstname && (
                            <span className='p-2 text-red-600 transition-all duration-200 animate-pulse'>
                                Please Enter your First Name
                            </span>
                        )
                    }
                
            </div>


            {/* last name */}
            <div className='flex flex-col w-[50%]'> 
                <label htmlFor='lastname' ></label>
                    Last Name
                    <input type='text' 
                    name='lastname' id='lastname' 
                    placeholder='Enter last name'
                    {...register("lastname")} className='form-style mt-2'
                    >

                    </input>
                   
                
            </div>
            </div>

            {/* email */}
            <div className='flex flex-col'>
                <label htmlFor='email'>Enter Email</label>
                <input type='email'
                name='email'
                id='email'
                placeholder='enter email' {...register("email",{required:true})} className='form-style mt-2'></input>
                 {
                        errors.email && (
                            <span className='p-2 text-red-600 transition-all duration-200 animate-pulse'>
                                Please Enter your Email
                            </span>
                        )
                    }
            </div>

            {/* phoneno */}
            <div className='flex flex-col w-fit flex-wrap'

            >
                <label htmlFor='phonenumber'>Phone Number</label>
                <div className='flex flex-row gap-5  justify-between'>
                    
                        {/* dropdown */}
                        <select name='dropdown' id='dropdown' 
                        {...register("countrycode",{required:true})} className='bg-richblack-700 text-richblack-100 flex items-center w-[15%] form-style mt-2' >
                            {
                                CountryCodes.map((el,idx)=>{
                                    return(
                                        <option key={idx} value={el.dial_code} className='bg-richblack-700'>
                                            {el.dial_code}-{el.name}
                                        </option>
                                    )
                                })

                            }
                        </select>


                        <input type='number'
                     name='phonenumber'
                    id='phonenumber' 
                     placeholder='12345 6789'
                     className=' w-[85%] form-style mt-2' 
                     {...register("phoneNo",
                     {required:{value:true , message:"Please Enter Phone Number"} ,  
                     maxLength:{value:10 , message:"Invalid Phone Number"} 
                     ,minLength:{value:8,message:"Invalid Phone Number"}
                    })}></input>
                    <br></br>
                   

                   
                </div>
                {errors.phoneNo && (
                        <div className='flex flex-col'>
                            <span className='p-2 text-red-600 transition-all duration-200 animate-pulse flex flex-wrap flex-col'>
                                Please enter a valid phone number
                            </span>
                        </div>
                    )}

                
              
              
            </div>

            {/* messgebox */}
            <div className='flex flex-col'>
                <label htmlfor="message">Message:</label>
                <textarea rows={7} cols={30} name='message' 
                id='message'placeholder='enter your message' 
                {...register("message",{required:true})} className='form-style mt-2'></textarea>
                {errors.message && (
                    <span className='p-2 text-red-600 transition-all duration-200 animate-pulse'>
                        Message is required!
                    </span>
                )}

            </div>


            <button type='submit' className='bg-yellow-400 rounded-md
             text-richblack-900 text-center text-[13px] px-6 py-3  font-bold '>
                Submit Form

            </button>
           
                
        </div>
    </form>
  )
}

export default ContactusForm