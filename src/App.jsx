import React, { useState } from 'react';

import Icons from './components/Icons';

const App = () => {
  const [email, setEmail] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const [isError, setIsError] = useState(false)

const handleChange =(e)=>{
  setEmail(e.target.value)
}

const handleClick = (e)=>{
  e.preventDefault()
  if(!validateEmail(email)){
    setErrorMessage("please provide a valid email address")
    setIsError(true)
  }
  else{
    setErrorMessage("")
    setIsError(false)
  }
}

const validateEmail = (email)=>{
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email)
}


  return (
    <div className='container'>
       
      <div className='text-center'>
      <h2 className='font-bold uppercase text-3xl my-8 '>Ping<span className='text-CustomBlue'>.</span> </h2>
        <p className='text-Gray text-5xl'> We are launching <span className='text-VeryDarkBlue font-bold'>soon!</span></p>
        <h4 className='my-4'>Subscribe and get notified</h4>
      </div>

       <div className='text-center'>
       <input type="email" placeholder='Your email address.. ' className={`border-2 rounded-full text-sm p-3 w-80 mx-2 my-5 outline-none ${isError? "border-red-600" : "border-gray-400"} `} onChange={handleChange} />

        <button className="rounded-full bg-blue-500 p-3 w-40
         text-white text-sm shadow-blue-500/40 shadow-lg sm:w-80 sm:mt-6"  onClick={handleClick} >Notify Me</button>
       </div>
       {isError && <div className={`${isError? " text-red-500 w-full text-center -ml-28 -mt-3 mb-10 text-sm sm:-mt-20 sm:ml-1":"" }`}>{errorMessage}</div>}
        <div className='flex justify-center items-center'>
        <img className="w-1/2 mt-4 sm:w-80 sm:mt-16" src="../images/illustration-dashboard.png"  alt="Dashboard Image" />
        </div>


      <Icons/>
        

    <footer className='my-5 flex flex-col justify-center items-center'>
         <p className='text-sm text-gray-300 '> &copy; Copyright Ping. All rights reserved.</p>
      <p className='sm:text-xs'>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Md.Muktadir Nayem</a>
      </p>
    </footer>

    </div>
  );
};

export default App;