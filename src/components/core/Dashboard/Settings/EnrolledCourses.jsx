import ProgressBar from '@ramonak/react-progress-bar';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const EnrolledCourses = () => {

    const {token} = useSelector((state)=>state.auth);
    const [Courses, setCourses] = useState(null)


    const EnrolledCourses = async ()=>{
        try{

            const  response = await getUserEnrolledCourses(token);
            setCourses(response);
        }catch(e){


        }
    }

    useEffect(()=>{
        EnrolledCourses();
    },[])
  return (
    <div>
        {
            !Courses?(<div>Loading......</div>):
             !Courses.length ? (<p>"Not enrolled in any courses</p>)
             :
            (
                <div>
                    <div>
                    <p>Course Name</p>
                    <p>Durations</p>
                    <p>Progress</p>

                    </div>

                    {
                    Courses?.map(( course,index)=>(
                        <div>
                             <div>
                        <img src={course.thumbnail}></img>
                        <div>
                            <p>{course.coursename}</p>
                            <p>{course.coursedescription}</p>
                        </div>


                        </div>

                        <div>
                            {course?.totalduration}
                        </div>

                        <div>
                            <p>Progress : {course.progressPercentage || 0}</p>
                            <ProgressBar completed={course.progressPercentage || 0}
                            height='8px' isLabelVisible={false}></ProgressBar>
                        </div>


                            
                        </div>
                       

                       
                    ))
                }
                   
                </div>
               
            )
        }
    </div>
  )
}

export default EnrolledCourses