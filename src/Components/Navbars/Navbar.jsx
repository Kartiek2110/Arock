import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

function Navbar() {
  return (
    <div className='max-h-screen-2xl opacity-80 mx-auto h-[5vh] uppercase  flex items-center justify-between p-3 text-xs '>
        <Logo/>
        <Menu/>
    </div>
  )
}

export default Navbar