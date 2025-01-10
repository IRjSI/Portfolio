import React from 'react'

function Block({name,className=''}) {
  return (
    <div>
      <div className={`w-full bg-[#2b3a58] h-full min-h-[100px] rounded-md hover:bg-[#2b3c5f] text-white p-2 shadow-[#2e3853] shadow-2xl flex justify-center items-center ${className}`}>
          <p className='text-xl '>{name}</p>
      </div>
    </div>
  )
}

export default Block
