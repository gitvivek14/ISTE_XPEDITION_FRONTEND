import React from 'react'
import signup from '../assets/images/Forms/signup.png'
import Template from '../components/core/auth/Template'

const SignUp = () => {
  return (
    <Template
    
      title="Join the millions learning to code with StudyNotion for free"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      Image={signup}
      formType="signup"
     
    
    />
  )
}

export default SignUp