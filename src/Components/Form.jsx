import React from 'react'
import { useState } from 'react'

const Form = () => {
  const [isRight, setisRight] = useState(false);

  const [message, setmessage] = useState("");
  const [fullname, setfullname] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setconfirmPass] = useState('')

  const formsubmit = (dets)=>{
    dets.preventDefault();

    if(fullname.length > 20){
      setmessage("user name cannot be greater than 20 characters");
      return;
    }

    if(pass !== confirmPass){
      setmessage("Password & confirm password must be same");
      return;
    }

    if(pass.length < 8){
      setmessage("Password must contains minimum 8 character");
      return;
    }

    if(!/[!@#$%&*_\-+=.'"]/.test(pass)){
      setmessage("Password must contains any special character");
      return;
    }

    setmessage('');
    setPass('');
    setEmail('');
    setconfirmPass('');
    setfullname('');
  }


  return (
    <div className='bg-blue-400 lg:h-screen w-full flex justify-center items-center relative'>

      <div className='left-0 w-84 h-84 rounded-full top-0 absolute bg-white blur-3xl'></div>

      <div className='bg-white w-180 h-110 rounded-3xl relative flex'>
        
        {/* SIGN UP FORM  */}

        {/* transition-all duration-700 */}

        <form onSubmit={formsubmit} className={`absolute flex flex-col w-1/2 left-0 h-full justify-start items-center gap-5 pt-8 transition-all duration-700  ${isRight ? "opacity-0 translate-x-10": "opacity-100 translate-x-0"}`}>
          <h1 className='text-2xl font-bold'>Create Account</h1>
          <input value={fullname} onChange={(dets)=>{setfullname(dets.target.value)}} className='border-2 rounded-xl px-5 py-1 border-blue-600 focus:ring-1' type="text" placeholder='username' />
          <input value={email} onChange={(dets)=>{setEmail(dets.target.value)}} className='border-2 rounded-xl px-5 py-1 border-blue-600 focus:ring-1' type="email" placeholder='email' />
          <input value={pass} onChange={(dets)=>{setPass(dets.target.value)}} className='border-2 rounded-xl px-5 py-1 border-blue-600 focus:ring-1' type="password" placeholder='password' />
          <input value={confirmPass} onChange={(dets)=>{setconfirmPass(dets.target.value)}} className='border-2 rounded-xl px-5 py-1 border-blue-600 focus:ring-1' type="password" placeholder='confirm password'/>
            <h2 className='text-red-500 font-bold text-sm'>{message}</h2>
          <button
           type='submit'
          className='bg-blue-600 font-bold py-2 px-6 rounded-3xl text-amber-50 active:scale-95'>submit</button>

        </form>

        {/* SIGN IN FORM  */}
        {/* transition-all duration-700 */}
        
        <form className={`absolute right-0 flex flex-col w-1/2 h-full justify-center items-center gap-7 pt-8 transition-all duration-700  ${isRight ? "opacity-100 translate-x-0": "opacity-0 translate-x-10"}`}>
            <h1 className='text-2xl font-bold'>Login</h1>
            <input className='border-2 rounded-xl px-5 py-1 border-blue-600 focus:ring-1' type="text" placeholder='username or email'/>
            <input className='border-2 rounded-xl px-5 py-1 border-blue-600 focus:ring-1' type="password" placeholder='password' />
            <button 
            onClick={(dets)=>{
              preventsubmit(dets);
            }}
            className='bg-blue-600 font-bold py-2 px-6 rounded-3xl text-amber-50'>Submit</button>
        </form>

        {/* Right-left panel  */}

        <div className={`absolute w-1/2 h-full flex justify-center text-amber-50 items-center bg-blue-700 z-10 rounded-2xl flex-col gap-5 transition-all duration-700 ease-in-out ${isRight ? "left-0":"left-1/2"}`}>
            <h1 className='text-2xl font-bold'>{isRight ? "Login your account" : "Create Account "}</h1>
              <button
                onClick={()=> setisRight(!isRight)}
                className='bg-white w-20 h-8 font-bold  rounded-3xl text-black'>
                {isRight ? "Sign in" :"Sing up"}
              </button>
        </div>
      </div>
    </div>
  )
}

export default Form
