import React, { useEffect, useState } from 'react'
import Spline from './Spline';

function Contact() {
  const [value,setValue] = useState('Send')
  const clicked = (e) => {
    e.preventDefault();
    setValue('Done!')
  }
  // useEffect(()=>{

  // },[value])
  return (
    <>
    <div id="contact" className='p-4'>
      <p className='text-blue-400 text-5xl text-center m-8 font-raleway mb-20 '>
        <p className='inline-block relative transition-all duration-300 hover:transition-all before:-translate-x-1/2 hover:before:w-full before:absolute before:left-1/2 before:bottom-[-2px] before:w-0 before:h-[2px] before:bg-blue-400 before:transition-all before:duration-500'>
          Contact
        </p>
      </p>

      {/* <form className='flex flex-col justify-center items-center gap-7'>

        <input type="email" placeholder='Enter your Email' className='text-white bg-[#101b3c] rounded-sm border-none p-2 outline-none w-[300px] sm:w-[500px] sm:h-[39px]' />

        <textarea placeholder='Message...' className='text-white bg-[#101b3c] rounded-sm border-none p-2 outline-none w-[300px] h-[100px] sm:w-[500px] sm:h-[150px]' />

        <button onClick={clicked} type='submit' className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">

          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {value}
          </span>

        </button>
      </form> */}

    <ul className='text-white flex justify-center gap-24'>
      <li className='flex items-center gap-2'>
        <a href="https://github.com/IRjSI" target="_blank" className="flex items-center gap-2">
          <img className='w-12 hover:animate-spin shadow-all-sides l rounded-[50%]' src="https://icon-library.com/images/github-svg-icon/github-svg-icon-0.jpg" alt="GitHub icon" />
          GitHub
        </a>
      </li>
      <li className='flex items-center gap-2'>
        <a href="https://x.com/_RjS_0" target="_blank" className="flex items-center gap-2">
          <img className='w-12 shadow-all-sides rounded-[50%] hover:animate-spin' src="https://freepnglogo.com/images/all_img/1691832581twitter-x-icon-png.png" alt="Twitter icon" />
          Twitter
        </a>
      </li>
    </ul>

    </div>
    </>
  )
}

export default Contact
