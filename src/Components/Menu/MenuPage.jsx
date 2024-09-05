import React from 'react'
import Menuleft from './Menuleft'
import Menuright from './Menuright'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function MenuPage(props) {
const menuRef = useRef(null)
  useGSAP(()=>{
    if(props.menuOpen){
      gsap.to(menuRef.current,{
        top: 0
      })
    }
  })
 
  return (
    <div ref={menuRef}  className='fixed top-full flex bg-gray-900 h-screen w-full  z-50'>
    <Menuleft />
    <Menuright/>
    </div>
  )
}

export default MenuPage