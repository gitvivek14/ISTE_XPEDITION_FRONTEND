import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import{AiFillEyeInvisible,AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import {resetPassword } from '../services/operations/authapi'

const UpdatePassword = () => {
    const dispatch  = useDispatch()
    const {loading}  = useSelector((state)=>state.auth)
    console.log(loading)
    const[showpass,setshowpass] = useState(false)
    const location = useLocation()
    const[showcpass,setshowcpass] = useState(false)
    const [form, setform] = useState({
        password:"",
        confirmpassword:""
    })
   

 
    const handlechange = (e)=>{
        setform((prev)=>(
            {
                ...prev , [e.target.name] : e.target.value,
            }
        )
        )
    }

    const {password,confirmpassword} =  form;
    

    const handlesubmit  = (e)=>{
        e.preventDefault()
        const token = location.pathname.split('/').at(-1);
        
       
        dispatch(resetPassword(password,confirmpassword,token))
    }
  return (
    <div className='text-white '>
        {
            loading ? (<div>loading</div>) : (
                <div>
                    <h1>Choose new Password</h1>
                    <p>Almost Done</p>
                    <form onSubmit={handlesubmit}>
                        <label>
                            <p>New Password<sup>*</sup></p>
                            <input type={showpass ?
                             "text" :
                              "password"}
                             name='password' value={password} 
                             onChange={handlechange} className='text-richblack-100 w-full p-6 bg-richblack-700'  >

                            </input>
                            <span onClick={()=> setshowpass((prev)=> !prev)}>
                                {
                                    showpass ? 
                                    <AiFillEye fontSize={24}></AiFillEye> 
                                    : 
                                    <AiFillEyeInvisible fontSize={24}></AiFillEyeInvisible>

                                }
                                
                            </span>
                        </label>

                        <label>
                            <p> Confirm New Password<sup>*</sup></p>
                            <input type={showcpass ?( "text") : ("password")} className='text-black w-full p-6'
                             name='confirmpassword' value={confirmpassword} 
                             onChange={handlechange} required placeholder='confirm-pass'>

                            </input>
                            <span onClick={()=> setshowcpass((prev)=> !prev)}>
                                {
                                     showcpass ? 
                                     (<AiFillEye fontSize={24}></AiFillEye>) 
                                     : 
                                     (<AiFillEyeInvisible fontSize={24}></AiFillEyeInvisible>)

                                }
                               
                            </span>
                        </label>

                        <button type='submit'>Reset Pasword</button>
                    </form>

                    <div>
                <Link to='/login'>
                    <p>Back to Login</p>
                </Link>
            </div>
                </div>
            )
        }
    </div>
  )
}

export default UpdatePassword