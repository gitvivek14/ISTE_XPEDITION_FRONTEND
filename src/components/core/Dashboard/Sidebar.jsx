import React, { useState } from 'react'

import {sidebarLinks} from '../../../data/dashboard-links'

import {logout} from '../../../services/operations/authapi'
import { useDispatch, useSelector } from 'react-redux'
import SidebarLink from './SidebarLink'
import {IoIosLogOut, IoSettings} from 'react-icons/io'
import { VscSettings } from 'react-icons/vsc'

import { useNavigate } from 'react-router-dom'
import ConfirmationModal from '../../common/ConfirmationModal'

const Sidebar = () => {
    // const [user, setuser] = useState(null)
    const dispatch = useDispatch()
    const navigate  = useNavigate()

    const [confirmationModal, setConfirmationModal] = useState(null);

    const {user , loading:profileLoading} = useSelector((state)=>state.profile);
    const {loading:authLoading} = useSelector((state)=>state.auth);
    if(profileLoading||authLoading){
        return (
            <div className='mt-10'>
                Loading
            </div>
        )
    }
  return (
    <div>
        <div className='flex min-w-[220px] flex-col border-r-[1px]
         border-richblack-700 h-[calc(100vh-3.5rem)]
          bg-richblack-800 text-richblack-5
         py-10  fixed'>
            <div className='flex flex-col'>
            {
                sidebarLinks.map((link,idx)=>{
                    if(link?.type && user?.accounttype != link.type) return null;
                    return(
                        <SidebarLink link={link} key={link.id} iconname={link.icon}></SidebarLink>
                    )
                })
            }

            </div>

            <div className='mx-auto mt-6 mb-6 h-[1px] 
            w-10/12 bg-richblack-700'></div>

            <div className='flex flex-col'>
               
                <SidebarLink link={{name:"Settings",
                path:"dashboard/settings"}} 
                iconname={"VscSettings"}></SidebarLink>

                
                

                <div>
                <button onClick={()=>setConfirmationModal({
                     text1:"Are You Sure?",
                     text2:"You will be LogOut",
                     btn1text:"LogOut",
                     btn2text:"Cancel",
                     btn2Handler:()=> setConfirmationModal(null),
                     btn1Handler:()=> dispatch(logout(navigate))
                })
                   
                } className='text-sm font-medium text-richblack-300 px-8 py-2 '>
                     <div className='flex flex-row items-center gap-x-2 text-white'>
                <IoIosLogOut className='text-lg'></IoIosLogOut>
                <span>Log Out</span>


            </div>
                </button>

                </div>

                

               

            </div>


          

            


         </div>



   {
    confirmationModal && <ConfirmationModal modalData={confirmationModal}></ConfirmationModal>
   } 
    </div>
  )
}

export default Sidebar