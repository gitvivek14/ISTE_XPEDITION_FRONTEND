import React, { useEffect, useState } from 'react'
import {NavbarLinks} from '../../data/NavbarLinks'
import { Link, matchPath } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import logo from '../../assets/images/download.png'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import ProfileDropdown from '../core/auth/ProfileDropdown'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {IoArrowDownCircleSharp} from 'react-icons/io5'

import {categories} from '../../services/apis'
import { apiconnector } from '../../services/apiconnector'

const NavBar = () => {


    const{token} = useSelector((state)=> state.auth)
    const {user} = useSelector((state)=>state.profile)
    const {totalItems} = useSelector((state)=>state.cart)
const location = useLocation();

const subLinks = [
    {
        title:"python",
        link:"/catalog/python"
    },{
        title:'webdev',
        link:"/catalog/webdevelopment"
    }
]
// const {subLinks , setSubLinks} = useState([]);

// const fetchSubLinks =  async()=>{
//     try{
//         const result = await apiconnector("GET",categories.CATEGORIES_API)
//         console.log("printing sublinks data"  , result )
//         // setSubLinks(result.data.data)
//     }catch(e){
//         console.log('error', e ,"can;t fetch")
//     }
// }
// useEffect(()=>{
//     fetchSubLinks()
   

// },[])

    const matchroute = (route)=>{
        return matchPath({path:route},location.pathname);

    }


  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-richblack-800 w-full flex-row '>
        <div className='w-11/12  flex flex-row items-center justify-between'>
            
            <Link to="/">
                <img src={logo} width={160} height={42} loading='lazy'></img>
            </Link>

           

            {/* navlinks */}
          
            <nav> 
                <ul className='flex gap-x-6 text-white flex-row items-center justify-center mx-auto'>
                    {
                        NavbarLinks.map((link,idx)=>{
                            return(
                                <li key={idx}>
                                    {
                                        link.title === "Catalog" ? (<div className='cursor-pointer flex items-center justify-center gap-1 group relative flex-row'>
                                            <p >{link.title}</p>
                                            <IoArrowDownCircleSharp className='text-lg'></IoArrowDownCircleSharp>

                                            <div className='invisible absolute left-[-90%]
                                            transalate-x-[-50%] translate-y-[80%]
                                             top-[-100%]
                                             flex flex-col items-start p-3 capitalize gap-3
                                             rounded-md bg-white text-black opacity-0 transition-all duration-200
                                              group-hover:visible group-hover:opacity-100 w-[300px]  lg-w-[300px] z-50'>

                                                <div className='absolute left-[35%] top-0 w-6 h-6 rotate-45
                                                 rounded translate-x-[80%] bg-white translate-y-[-40%] -z-10'></div>

                                                 {
                                                    subLinks.length >0 && (
                                                       subLinks.map((link,idx)=>{
                                                        return (
                                                            <Link to= {`${link.link}`} key={idx}>
                                                                <p className=''>
                                                              {link.title}
                                                                </p> 
                                                            </Link>
                                                        )

                                                       })
                                                    )
                                                 }

                                            </div>
                                        </div>) : (
                                            <Link to={link?.path}>
                                                <p className={`${matchroute(link?.path) ? "text-yellow-300" : "text-white"}`}>
                                                    {link.title}
                                                </p>
                                            </Link>

                                        )
                                    }
                                </li>
                            );
                        })

                    }

                </ul>
            </nav>
          
           

            {/* login/signup/dashboard */}
            <div className='flex flex-row  gap-x-4 items-center '>
                    {
                        user && user?.accountType!="Instructor" && (
                            <Link to='/dashboard/cart' className='relative'>
                                <AiOutlineShoppingCart></AiOutlineShoppingCart>
                                {
                                    totalItems>0 && (
                                        <span>{totalItems}</span>

                                    )
                                        
                                    
                                }
                            </Link>
                        )
                    }

                    {
                        token===null && (
                            <Link to='/login'>
                                <button className='border border-richblack-700
                                  px-[12px] py-[8px] rounded-md
                                   text-white bg-black'>Log In</button>
                            </Link>
                        )
                    }
                    {
                        token===null && (
                            <Link to='/signup'>
                                <button className='border border-richblack-700
                                  px-[12px] py-[8px] rounded-md text-white bg-black'>Sign Up</button>
                            </Link>
                        )
                    },
                    {
                        token!==null && <ProfileDropdown></ProfileDropdown>
                    }
            </div>

        </div>
    </div>
  )
}

export default NavBar