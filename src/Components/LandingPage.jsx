import { motion } from 'framer-motion';
import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";

function LandingPage() {
  
  return (
    <div data-scroll data-scroll-speed="-.6" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-36 px-20'>
        {["We Create", "Eye Openings", "Presentations"].map((item, index) => {
          return <div className='masker'>
            <div className='w-fit flex items-center overflow-hidden'>
              {index === 1 && (
                <motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[.76,0,0.24,1],duration:2}} className='w-[8vw] h-[5.7vw] rounded-md relative top-[.5vw] '>
                  <img className='w-[8vw] h-[5.7vw]' src='https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg'>
                  </img>
                  </motion.div>
              )}
              <h1 className=' uppercase text-[8vw] h-full leading-[7vw] tracking-tighter font-bold'> {item}</h1>
            </div>
          </div>
        })}

        <div className='border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-3 px-20'>
          {["For public and private companies", "From the first page to IPO"].map((item, index) => {
            return <p className='text-md font-light tracking-tight leading-none'>{item}</p>
          })}

          <div className='start flex items-center gap-5 '>
            <div className='px-4 py-2 border-[1px] border-zinc-400 font-light text-md rounded-full'>Start The Project</div>
            <div className='w-10 h-10 border-[1px] border-zinc-400 rounded-full flex items-center justify-center'>
              <span className='rotate-[45deg]'><FaLongArrowAltUp /></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage