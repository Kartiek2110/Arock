import React from 'react'
import LoadChild from './LoadChild'

function LoadParent() {
  return (
    <div className='w-full h-[4px] bg-transparent z-50'>
        <LoadChild/>
    </div>
  )
}

export default LoadParent