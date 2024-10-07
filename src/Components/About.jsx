import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Neue_Montreal"] text-[3vw] leading-[3vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great peo­ple.</h1>
    
        <div className='w-full border-t-[1px] mt-20 pt-20 border-[#a1b562] flex gap-10'>
          <div className='w-1/2'>
            <h1 className='text-7xl'>Our Approach:</h1>
            <button className='px-10 mt-10 py-4 bg-zinc-900 rounded-full text-white flex gap-10 items-center'>
               Read More
              <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
          </div>
        
          <div className='w-1/2 h-[60vh] rounded-3xl bg-[#b0c859]'></div>
        </div>    
    </div>
  )
}

export default About