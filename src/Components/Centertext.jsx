import React from 'react'
import Heroheading from './Heroheading'
import Subheading from './Subheading'

function Centertext() {
  return (
    <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
      <Heroheading/>
      <Subheading/>
    </div>
  )
}

export default Centertext