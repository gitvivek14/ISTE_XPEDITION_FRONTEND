import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IconButton from '../../common/IconButton';
import {RiEditBoxLine} from 'react-icons/ri'
const MyProfile = () => {
    const {user , loading:profileLoading} = useSelector((state)=>state.profile);
    const dispatch = useDispatch()
    const navigate  = useNavigate()

  return (
    <>
     <h1 className='text-3xl font-bold  text-richblack-25 p-4'>
            My Profile
        </h1>

{/* section-1 */}
        <div className='flex items-center justify-between rounded-md border-[1px] border-richblack-700 bg-richblack-800 p-8 px-12 w-full max-w-[1300px]'>
            <div className='flex items-center gap-x-4'>
               <img src={`${user?.image}`} alt='profile' className='aspect-square
               w-[78px] rounded-full object-cover'></img>
                <div className='space-y-1'>
                    <p className='text-lg font-semibold text-richblack-5'>{user?.firstname + " " + user?.lastname} </p>
                    <p className='text-sm text-richblack-300'> {user?.email}</p>
                </div>
            </div>

            <IconButton text="Edit" onClick={()=>{
                navigate("/dashboard/settings")
            }}>
                 <RiEditBoxLine></RiEditBoxLine>

            </IconButton>
           
        </div>

        {/* section-2 */}
        <div className='my-10 flex flex-col gap-y-10
        rounded-md border-[1px] border-richblack-700 bg-richblack-800
        p-8 px-12'>
            <div className='flex w-full items-center justify-between'>
                <p className=" text-lg font-semibold text-richblack-5">About</p>
                <IconButton text="Edit" onClick={()=>{
                    navigate("/dashboard/settings")
                }}>
                     <RiEditBoxLine></RiEditBoxLine>
                </IconButton>

            </div>
            <p className={`${user?.additionaldetails?.about ? "text-richblack-5":"text-richblack-300"} text-sm font-medium`}>{user?.additionaldetails?.about ?? "Additional Details"}</p>
        </div>


{/* section-3 */}
<div className='my-10 flex flex-col gap-y-10
        rounded-md border-[1px] border-richblack-700 bg-richblack-800
        p-8 px-12'>
            <div className="flex w-full items-center justify-between">
          <p className="text-lg font-semibold text-richblack-5">
            Personal Details
          </p>
          <IconButton
            text="Edit"
            onclick={() => {
              navigate("/dashboard/settings")
            }}
          >
            <RiEditBoxLine />
          </IconButton>
        </div>
    
        <div className="flex max-w-[500px] justify-between  h-fit ">
  
            <div className='flex flex-col gap-y-5'>
                <div>
                <p className="mb-2 text-sm text-richblack-300">First name</p>
        <p className='text-sm font-medium text-richblack-5'>{user?.firstname}</p>

                </div>

                <div  >
        <p className="mb-2 text-sm text-richblack-300">Email</p>
        <p className='text-sm font-medium text-richblack-5'>{user?.email}</p>
    </div>
    <div>
        <p className="mb-2 text-sm text-richblack-300">Gender</p>
        <p className='text-sm font-medium text-richblack-5'>{user?.additionaldetails?.gender}</p>
    </div>
       
    </div>
    <div className='flex flex-col gap-y-5'>
    <div>
        <p className="mb-2 text-sm text-richblack-300">last name</p>
        <p className='text-sm font-medium text-richblack-5'>{user?.lastname}</p>
    </div>
    <div>
        <p className="mb-2 text-sm text-richblack-300">Phone Number</p>
        <p className='text-sm font-medium text-richblack-5'>{user?.additionaldetails?.contactnumber ?? "ADD CONTACT NUMBER"}</p>
    </div>
    <div>
        <p className="mb-2 text-sm text-richblack-300">Date of Birth:</p>
        <p className='text-sm font-medium text-richblack-5'>{user?.additionaldetails?.dateofbirth ?? "ADD DOB"} </p>
    </div>


    </div>
    
        
    
</div>


        </div>
   
    </>
       
   
  )
}

export default MyProfile