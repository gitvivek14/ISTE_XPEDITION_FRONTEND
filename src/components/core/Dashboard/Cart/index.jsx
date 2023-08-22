import { useSelector } from "react-redux"


export default function Cart(){
    const{total,totalItems} = useSelector((state)=>state.cart)
    return (
        <div>
            <h1>Your Cart</h1>
            <p>{totalItems} Courses in Cart</p>
            {total>0 ? (
                <div>
                    <RenderCartCourses></RenderCartCourses>
                    <RenderTotalAmount></RenderTotalAmount>
                </div>
            ):(
                <p>No courses added to cart yet.</p>
            )}
        </div>
    )
}