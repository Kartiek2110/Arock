import React, { useRef } from 'react'

import Centertext from '../Centertext'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Navbar from '../Navbars/Navbar'

function Home(props) {
const homeRef = useRef(null)
const pageRef = useRef(null)
    useGSAP(()=>{
        gsap.to(homeRef.current,{
            y: "-100%",
            delay: 2,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
        })
        gsap.from(pageRef.current,{
           opacity:0,
            duration: 1,
            ease: [0.22, 1, 0.36, 1]
        })
     })
  return (
   
        <div className='h-screen'>
            <div ref={homeRef} className='h-screen bg-[#111] w-full z-10 fixed'></div>
            <div ref={pageRef} className="w-full h-screen bg-cover bg-black text-white bg-center bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)]">
      <Navbar menu={props.menuOpen} setmenu={props.setmenuOpen}/>
        <Centertext />
    
    </div>
        </div>
  )
}

export default Home