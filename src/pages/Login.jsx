import React from 'react'
import login from '../assets/images/Forms/login.png'
import Template from '../components/core/auth/Template'

const Login = () => {
  return (
    <Template
    title="Welcome Back"
    desc1="Build skills for today, tomorrow, and beyond."
    desc2="Education to future-proof your career."
    Image={login}
    formType="login"
    
  />
  )
}

export default Login