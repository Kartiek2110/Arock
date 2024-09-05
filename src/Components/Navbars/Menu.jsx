import React from 'react'

function Menu(props) {
  const menuBarOpens = () => {
    props.setmenuOpen(true)
  }
  return (
    <div onClick={menuBarOpens} className='font-[a4] uppercase opacity-80'>Menu</div>
  )
}

export default Menu