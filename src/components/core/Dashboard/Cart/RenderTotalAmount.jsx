import React from 'react'
import IconButton from '../../../common/IconButton'
const RenderTotalAmount = () => {
  const {total,cart}  = useSelector((state)=>state.cart)
  const handlebuycourse = ()=>{
    // route to payment gateway
    const courses = cart.map((course)=> course._id)
    console.log("payment",courses)

  }
  return (
    <div>
      <p>Total</p>
      <p>Rs {total}</p>

      <IconButton text={"Buy Now"} 
      onClick={handlebuycourse} customclasses={"w-full items-center p-4 justify-center"}></IconButton>

    </div>
  )
}

export default RenderTotalAmount