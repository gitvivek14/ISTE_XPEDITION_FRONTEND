import React, { useEffect } from 'react'
import { useState } from 'react'
import OTPInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { sendOtp, signUp } from '../services/operations/authapi';

const VerifyEmail = () => {
    const {loading ,signupData} = useSelector((state)=>state.auth);
    const [otp, setotp] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
useEffect(()=>{
    if(!signupData){
        navigate('/signup')
    }
},[])
    const submitform = (e)=>{
        e.preventDefault()
        const {accountType,
            firstName,
            lastName,
            email,
            password,
            confirmPassword
            } = signupData
        dispatch(signUp(accountType,firstName,lastName,email,password,confirmPassword,otp,navigate));
    }
  return (
    <div className='text-white'>
        {
            loading ? (<div>Loading</div>):(
                <div>
                    <h1>Verify Email</h1>
                    <p>A Verification code has been sent</p>
                    <form onSubmit={submitform}>
                        <OTPInput 
                        
                        value={otp} 
                        onChange={setotp}
                        numInputs={6}
                        renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} className='w-full bg-richblack-700'/>}
                        
                        >

                        </OTPInput>

                        <button type='submit'>Verify-Email</button>

                    </form>


                    <div>
                    <Link to='/login'>
                    <p>Back to Login</p>
                </Link>
                    </div>


                    <button 
                    onClick={()=>dispatch(sendOtp(signupData.email,navigate))}>
                        Resend it
                        </button>
                </div>
            )

        }
    </div>
  )
}

export default VerifyEmail