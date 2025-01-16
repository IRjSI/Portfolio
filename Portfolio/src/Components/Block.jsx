import React from 'react'

function Block({name,className='',href='#'}) {
  return (
    <div>
      <a href={`${href}`}>
        <div className={`w-full bg-[#2b3a58] bg-opacity-10 backdrop-blur-2xl border-1 border-white h-full min-h-[100px] rounded-md hover:rounded-sm transition-all hover:transition-all hover:bg-[#00000f] text-white p-2 shadow-[#42556b86] shadow-md flex justify-center items-center ${className}`}>
            <p className='text-xl'>{name}</p>
        </div>
      </a>
    </div>
  )
}

export default Block
