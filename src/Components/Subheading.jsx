import React from 'react'
import { GoPlay } from "react-icons/go";

function Subheading() {
  return (
    <div className='w-full p-2 flex items-center opacity-60 mt-[-60px]' >
      <div className='w-full flex items-center gap-2 leading-none'>
        <GoPlay/>
        <h2 className='uppercase text-[5px]'>PLay <br />The flim</h2>
      </div>
      <div className='leading-none flex items-center gap-2'>
        <h2 className='uppercase text-[5px]'>Creator <br />curator</h2>
        <h2 className='uppercase text-[5px]'>new <span className='ml-[2px]'>york</span> <br />los<span className='ml-[5px]'>Angeles</span></h2>
      </div> 

    </div>
  )
}

export default Subheading