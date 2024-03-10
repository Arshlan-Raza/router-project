import React from 'react'
import Template from '../components/Template';
import signImage from '../assets/signup.png'


const Signup = ({setIsLoggedIn}) => {
  
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={signImage}
      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup;   