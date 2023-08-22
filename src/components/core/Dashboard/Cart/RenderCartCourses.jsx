import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ReactStars from 'react-stars'
import {LiaStarSolid} from 'react-icons/lia'
import {AiFillDelete} from 'react-icons/ai'

const RenderCartCourses = () => {
  const {cart}  = useSelector((state)=>state.cart)
  const dispatch = useDispatch()
  return (
    <div>
      {
        cart.map((course,key)=>(
          <div>
            <div>
              <img src={course.thumbnail}></img>
              <div>
              <p>{course?.coursename}</p>
              <p>{course?.category?.name}</p>
              <div>
              <span>4.8</span>
              <ReactStars count={5} size={20} 
              edit={false} color1="#ffd700"
               emptyIcon = {<LiaStarSolid></LiaStarSolid>} 
               fullIcon={<LiaStarSolid></LiaStarSolid>} >

              </ReactStars>

              <span>{course?.ratingAndReviews?.length }</span>
            </div>
            </div>
            </div>

            <div>
              <button onClick={()=> dispatch(removeFromCart(course._id))}>
                <AiFillDelete></AiFillDelete>
                <span>Remove</span>
              </button>

              <p>Rs. {course?.price}</p>
            </div>
         
           
          </div>
        ))
      }
    </div>
  )
}

export default RenderCartCourses