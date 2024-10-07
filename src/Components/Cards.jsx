import React from 'react'

export default function className() {
    return (
        <div className='w-full h-screen bg-zinc-100 flex gap-5 items-center px-32'>
            <div className='cardcontainer w-1/2 h-[50vh]'>
                <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2022</button>
                </div>
            </div>
            <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
                <div className='card relative rounded-xl w-full h-full bg-[#0b2b26] flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2022</button>
                </div>

                <div className='card relative rounded-xl w-full h-full bg-[#101d1b] flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"></img>
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy;2022</button>
                </div>

            </div>
        </div>
    )
}
