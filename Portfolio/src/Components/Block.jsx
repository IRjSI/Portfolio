import React from 'react'

function Block({name,className=''}) {
  return (
    <div>
      <div className={`w-full bg-blue-800 h-full min-h-[100px] rounded-md hover:bg-blue-700 text-white p-2 shadow-blue-900 shadow-2xl flex justify-center items-center ${className}`}>
          <p className='text-xl '>{name}</p>
      </div>
    </div>
  )
}

export default Block
