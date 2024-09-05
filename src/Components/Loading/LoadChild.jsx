import { useGSAP } from '@gsap/react'
import gsap, { Power4 } from 'gsap'
import React, { useRef } from 'react'

function LoadChild() {
  
  useGSAP(()=>{
    const tl = gsap.timeline()
    .to(loadRef.current,{
      width: '100%',
     ease: Power4.easeInOut,
      duration: 3
    })
    .to(loadRef.current,{
      opacity: 0
    })
  })
  const loadRef = useRef(null)
  return (
    <div ref={loadRef} className='w-0 h-[4px] bg-white'></div>
  )
}

export default LoadChild