import React from 'react'

function Skills() {
  return (
    <div id="skills" className="p-4 min-h-screen flex flex-col justify-center scroll-mt-24">
      <h2 className='text-blue-400 text-5xl text-center m-8 font-raleway mb-20'>
        <span className='inline-block relative transition-all duration-300 hover:transition-all before:-translate-x-1/2 hover:before:w-full before:absolute before:left-1/2 before:bottom-[-2px] before:w-0 before:h-[2px] before:bg-blue-400 before:transition-all before:duration-500'>
          Skills & Technologies
        </span>
      </h2>
      
      <div className="flex flex-wrap items-center justify-center gap-6 p-4 px-10 max-w-4xl mx-auto">
        
        <button className="relative inline-flex h-14 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-all duration-300">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-900/90 px-6 py-1 text-lg font-medium text-white backdrop-blur-3xl transition-all">
                <img className='w-8 mr-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png" alt="HTML5 logo" />
                HTML5
            </span>
        </button>
        <button className="relative inline-flex h-14 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-all duration-300">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-900/90 px-6 py-1 text-lg font-medium text-white backdrop-blur-3xl transition-all">
                <img className='w-8 mr-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png" alt="CSS3 logo" />
                CSS3
            </span>
        </button>
        <button className="relative inline-flex h-14 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-all duration-300">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-900/90 px-6 py-1 text-lg font-medium text-white backdrop-blur-3xl transition-all">
                <img className='w-8 mr-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript logo" />
                JavaScript
            </span>
        </button>
        <button className="relative inline-flex h-14 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-all duration-300">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-900/90 px-6 py-1 text-lg font-medium text-white backdrop-blur-3xl transition-all">
                <img className='w-8 mr-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207" alt="React logo" />
                React
            </span>
        </button>
        <button className="relative inline-flex h-14 overflow-hidden rounded-2xl p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:scale-105 transition-all duration-300">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-900/90 px-6 py-1 text-lg font-medium text-white backdrop-blur-3xl transition-all">
                <img className='w-8 mr-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="Tailwind logo" />
                Tailwind
            </span>
        </button>
      </div>
    </div>
  )
}

export default Skills
