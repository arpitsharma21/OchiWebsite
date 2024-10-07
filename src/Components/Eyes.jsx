import React, { useEffect, useState } from 'react'

export default function Eyes() {

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        //to check mouse loc
        window.addEventListener("mousemove", (e) => {
            // console.log(e.clientX,e.clientY);
            // loc of x-axis in window
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            // check distance of mouseX from center
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
        })
    })

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-center bg-[url("poster.jpg")]'>
                <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>

                    <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-black '>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                                <div className='w-10 h-10 rounded-full bg-white'></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-black '>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                                <div className='w-10 h-10 rounded-full bg-white'></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
