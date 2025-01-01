import React, { useEffect, useState } from 'react'

function Contact() {
  const [value,setValue] = useState('Send')
  const clicked = (e) => {
    e.preventDefault();
    setValue('Done!')
  }
  // useEffect(()=>{

  // },[value])
  return (
    <div id="contact" className='mt-10 sm:mt-10 lg:mt-10 p-4'>
      <p className='text-yellow-300 text-5xl text-center m-16 font-dancing'>Contact </p>
      <form className='flex flex-col justify-center items-center gap-7'>
        <input type="email" placeholder='Enter your Email' className='rounded-sm border-none p-1 outline-none w-[200px] sm:w-[300px] lg:w-[400px]' />
        <textarea placeholder='Message...' className='rounded-sm border-none p-1 outline-none w-[200px] sm:w-[300px] lg:w-[400px] h-[130px]' />
        <button onClick={clicked} type='submit' className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            {value}
          </span>
        </button>
      </form>
    </div>
  )
}

export default Contact
