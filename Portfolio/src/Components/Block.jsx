import React from 'react'

function Block({name,className='',href='#'}) {
  return (
    <div className="group">
      <a href={`${href}`} target='_blank'>
        <div className={`w-full bg-[#2b3a58] bg-opacity-10 backdrop-blur-2xl border border-white/20 h-full min-h-[120px] rounded-lg hover:rounded-md transition-all duration-300 hover:bg-[#00000f] hover:border-blue-400/50 text-white p-4 shadow-lg shadow-[#42556b86] hover:shadow-blue-400/20 flex flex-col justify-center items-center gap-2 ${className} hover:scale-105 transition-all duration-300`}>
            <p className='text-xl font-medium group-hover:text-blue-400 transition-colors'>{name}</p>
        </div>
      </a>
    </div>
  )
}

export default Block
