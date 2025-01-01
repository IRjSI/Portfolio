import React from 'react'

function Block({name}) {
  return (
    <div className='text-center'>
      <div className='w-full min-w-[100px] bg-blue-800 h-full min-h-[80px] rounded-md hover:bg-blue-700 text-white text-center p-2'>
          <p className='text-xl'>{name}</p>
      </div>
    </div>
  )
}

export default Block
