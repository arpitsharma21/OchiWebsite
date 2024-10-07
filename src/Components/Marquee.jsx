import { motion } from 'framer-motion'
import React from 'react'

export default function Marquee() {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 flex whitespace-nowrap overflow-hidden gap-10'>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:7}} className='text-[15vw] leading-tight uppercase pt-[0.6vw] font-semibold mb-[2vw] tracking-tighter pr-20'>We are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:7}} className='text-[15vw] leading-tight uppercase pt-[0.6vw] font-semibold  mb-[2vw] tracking-tighter pr-20'>We are ochi</motion.h1>
        </div>
    </div>
  )
}
