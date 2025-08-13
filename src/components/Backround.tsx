import React from 'react'

const Backround = () => {
    return (
        <div className='size-full relative'>
            <div className='bgAnimationLeft absolute top-0 left-0 bg-[#3452ff] h-full w-1/3' style={{clipPath: 'polygon(100% 0, 80% 50%, 100% 100%, 0 100%, 0 0)'}}></div>
            {/* <div className=' bg-[#191919] w-1/2' style={{clipPath: 'polygon(100% 0%, 75% 50%, 100% 100%, 10% 100%, 0% 50%, 10% 0%)'}}></div> */}
            <div className='bgAnimationRight absolute top-0 right-0 bg-black w-1/3 h-full' style={{clipPath: 'polygon(20% 0, 100% 0, 100% 50%, 100% 100%, 20% 100%, 0 50%)'}}></div>
        </div>
    )
}

export default Backround
