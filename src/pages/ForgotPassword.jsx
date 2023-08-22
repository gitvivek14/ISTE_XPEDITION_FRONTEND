import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getresetpasswordtoken } from '../services/operations/authapi';

const ForgotPassword = () => {
    const[emailsent,setemailsent] = useState(false)
const[email,setemail] = useState('');

    const {loading} = useSelector((state)=> state.auth)
    const dispatch = useDispatch()


    const handleonsubmit = (e)=>{
        e.preventDefault();
        dispatch(getresetpasswordtoken(email,setemailsent))

    }
  return (
    <div className='text-white flex justify-center items-center'>
        {loading ? 
        (<div>Loading</div>) 
        :
         (<div>
            <h1>
                {!emailsent ? "Reset your Password" : "Check your Email"}
            </h1>

            <p>
            {!emailsent ? 
            "Have no fear. We'll email you instructions to reset your password\
             If you dont have access to your email we can try account recovery" 
             :
              `We have sent Email to ${email}`}
            </p>

            <form onSubmit={handleonsubmit}>
                {
                    !emailsent && (
                        <label>
                            <p>Email Address</p>
                            <input 
                            type='email' 
                            required 
                            name='email'
                             value={email} 
                             onChange={(e)=> setemail(e.target.value) }
                            placeholder='Enter your Email'>

                            </input>
                        </label>
                    )
                }

                <button type='submit'>
                    {
                        !emailsent ? "Reset Password" : "Resend Email"
                    }
                </button>
            </form>
            <div>
                <Link to='/login'>
                    <p>Back to Login</p>
                </Link>
            </div>



         </div>)}
    </div>
  )
}

export default ForgotPassword  