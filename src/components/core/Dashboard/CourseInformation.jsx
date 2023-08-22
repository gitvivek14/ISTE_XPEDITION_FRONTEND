import React , {useState} from 'react'
import { useEffect } from 'react';
import { get, useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import {HiCurrencyRupee} from 'react-icons/hi'
import RequireField from './Settings/RequireField';
import IconButton from '../../common/IconButton'
import { COURSE_STATUS } from "../../../utils/constants"

import { toast } from 'react-hot-toast';
import {categories} from '../../../services/apis'
import {setStep,setCourse} from '../../../slices/courseSlice'
import ChipInput from './ChipInput'

import {fetchCourseCategories,addCourseDetails,editCourseDetails} from '../../../services/operations/courseDetailsAPI'
import Upload from './Settings/Upload';



const CourseInformation = () => {


    const{register,handleSubmit,
        setValue,getValues,
        formState:{errors}} = useForm();
    const dispatch = useDispatch()
    const token = useSelector((state)=>state.auth);
    const {course,editCourse} = useSelector((state)=>state.course)
    const [loading, setLoading] = useState(false)
    const [coursecategory, setCoursecategory] = useState([])

    useEffect(()=>{
        const getcategory= async ()=>{
            setLoading(true)
            const category = await fetchCourseCategories();
            if(category.length>0){
                setCoursecategory(category)
            }
            setLoading(false)
        }
        getcategory();
        if(editCourse){
            setValue("courseTitle",course.coursename)
        }
    },[])


    const onsubmit = async (data)=>{
        // handles next button
        if(editCourse){
            if(isformupdated()){
                const currentValues = getValues()
                const formData = new FormData();
                formData.append("courseId", course._id)
                if (currentValues.courseTitle !== course.courseName) {
                  formData.append("courseName", data.courseTitle)
                }
                if (currentValues.courseShortDesc !== course.courseDescription) {
                  formData.append("courseDescription", data.courseShortDesc)
                }
                if (currentValues.coursePrice !== course.price) {
                  formData.append("price", data.coursePrice)
                }
                if (currentValues.courseTags.toString() !== course.tag.toString()) {
                  formData.append("tag", JSON.stringify(data.courseTags))
                }
                if (currentValues.courseBenefits !== course.whatYouWillLearn) {
                  formData.append("whatYouWillLearn", data.courseBenefits)
                }
                if (currentValues.courseCategory._id !== course.category._id) {
                  formData.append("category", data.courseCategory)
                }
                if (
                  currentValues.courseRequirements.toString() !==
                  course.instructions.toString()
                ) {
                  formData.append(
                    "instructions",
                    JSON.stringify(data.courseRequirements)
                  )
                }
                if (currentValues.courseImage !== course.thumbnail) {
                  formData.append("thumbnailImage", data.courseImage)
                }
                console.log("Edit Form data: ", formData)
                setLoading(true)
                const result = await editCourseDetails(formdata,token);
                setLoading(false);
                if(result){
                    setStep(2);
                    dispatch(setCourse(result))
                }
            }else{
                toast.error("NO CHANGES");
            }return;

            }


            const formdata = new FormData();
            formdata.append("coursename",data.courseTitle);
            setLoading(true);
            const result = await addCourseDetails(formdata,token);
            if(result){
                setStep(2);
                dispatch(setCourse(result))
            }
            setLoading(false)
            console.log("FORM DETAILS",result  );

           

    }

    const isformupdated = ()=>{
        const currentValues = getValues()
        if (
            currentValues.courseTitle !== course.courseName ||
            currentValues.courseShortDesc !== course.courseDescription ||
            currentValues.coursePrice !== course.price ||
            currentValues.courseTags.toString() !== course.tag.toString() ||
            currentValues.courseBenefits !== course.whatYouWillLearn ||
            currentValues.courseCategory._id !== course.category._id ||
            currentValues.courseRequirements.toString() !==
              course.instructions.toString() ||
            currentValues.courseImage !== course.thumbnail
          ){
        return true
       }else{
        return false
       }
    }


  return (
    <form onSubmit={handleSubmit(onsubmit)} className=' relative 
     flex pb-10 flex-col gap-y-4 bg-richblack-800 p-4 text-sm 
     rounded-md w-[100%] mx-auto'>

        <div className=' flex flex-col w-11/12 mx-auto gap-y-2  '>
            <label htmlFor='courseTitle'>Course Title</label>


            <input id='courseTitle' 
            placeholder='Enter Course Title'
            {...register("courseTitle",{required:true})} 
            className=' bg-richblack-700 text-base w-[100%]
            px-4 py-2 rounded-md  text-richblack-200'></input>
            { 
            errors.courseTitle && 
             (<span> Course Title is Required </span>)}
        </div>

        <div className=' flex flex-col w-11/12 mx-auto gap-y-2'>
            <label htmlFor='courseShortDesc'>Course Short Description</label>
            <textarea id='courseShortDesc' 
            placeholder='Enter Description' 
             {...register("courseShortDesc",{required:true})}
             className=' bg-richblack-700 text-base  w-[100%]
            px-4 py-2 rounded-md text-richblack-200 '></textarea>
             {errors.courseShortDesc&&(<span >Description field cannot be empty!</span>) }
        </div>

        <div className=' flex flex-col w-11/12 mx-auto gap-y-2'>
            <label  htmlFor='coursePrice'>Course Price</label>
            <input id='coursePrice' 
            placeholder='Enter Course Price'
            type='number'
            {...register("coursePrice",{required:true , valueAsNumber:true,})} className='w-full'></input>
            <HiCurrencyRupee className=' bg-richblack-700 text-base text-richblack-200  w-[100%]
            px-4 py-2 rounded-md appearance-none '></HiCurrencyRupee>

            { 
            errors.coursePrice &&  (<span> Course Price is Required </span>)}
        </div>

        <div className=' flex flex-col w-11/12 mx-auto gap-y-2'>
            <label htmlFor='courseCategory'>Course Category</label>
            {/* dropdown for category selection */}
            <select 
            id='courseCategory'
             defaultValue="" 
            {...register("courseCategory",{required:true})}>
                <option disabled  value="">Select a course category...</option>
                {
                    !loading && coursecategory.map((item,idx)=>(
                        <option key={idx} 
                        value={item?._id}>{item?.name}</option>
                    ))
                }
            </select>
            {
                errors.courseCategory && (
                    <span>Course Cat is Required</span>
                )
            }
        </div>

        {/* tags components */}
        <div className=' flex flex-col w-11/12 mx-auto gap-y-2'>
          {/* tags */}
          <ChipInput
          label="Tags"
          name="tag"
          placeholder="Enter Tags and press Enter"
          register={register}
          errors={errors}
          setValue={setValue}
          />
        </div>


         {/* Uploadpicture */}
         <div className=' flex flex-col w-11/12 mx-auto gap-y-2'>
          {/* course thumbnail custom */}
          <Upload
        name="courseImage"
        label="Course Thumbnail"
        register={register}
        setValue={setValue}
        errors={errors}
        editData={editCourse ? course?.thumbnail : null}
      />
        </div>

         {/* Benefits */}
         <div className='className= flex flex-col w-11/12 mx-auto gap-y-2'>
            <label htmlFor='courseBenefits'>Benefits of Course</label>
            <textarea id='courseBenefits' 
            placeholder='Enter benefits of course' 
             {...register("whatwillYouLearn",
             {required:true})}
             className='min-h-[130px] w-full'></textarea>
             {errors.courseBenefits&&
             (<span >Description field cannot be empty!

             </span>) }
        </div>

        <RequireField 
        name="courseRequirements" 
        label="Requirments"
        register={register} errors={errors}
        setValue={setValue} 
        getValues={getValues}></RequireField>

        <div>
            {
                editCourse && (
                    <button
                     onClick={()=>dispatch(setStep(2))}  className=' w-fit px-2
                     text-richblack-900 rounded-md
                      absolute right-5 bottom-3
                      bg-yellow-50 hover:scale-105 
                      hover:bg-yellow-25 transition-all duration-200'>
                        Continue Without Saving</button>
                )
            }

            <IconButton 
            text={!editCourse ? "Next" : "SaveChanges"} 
            ></IconButton>
        </div>



    </form>
  )
}

export default CourseInformation