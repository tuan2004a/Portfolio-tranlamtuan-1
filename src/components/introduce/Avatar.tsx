import React from 'react'

const Avatar = () => {
    return (
        <div className='block relative'>
            <div className='relative'>
                <div className='relative flex items-center justify-center w-fit'>
                    <span className=' z-20 block size-40 uk-border-circle absolute -translate-y-1 translate-x-1 bg-[#3452ff]'>
                    </span>
                    <span className='z-50 size-35 uk-flex uk-flex-center overflow-hidden uk-border-circle'>
                        <img className=' size-full object-cover object-top ' src="/image/avat2.jpg" alt="" />
                    </span>
                    <span className=' z-20 block size-37 uk-border-circle absolute translate-y-2 -translate-x-2 bg-[#d3a583]'>
                    </span>
                    <div className='rotate-[30deg] absolute translate-0 uk-flex uk-flex-center gap-4'>
                        <span className='block w-1 h-[250px] lines translate-y-5'></span>
                        <span className='block w-1 h-[250px] lines translate-y-0'></span>
                        <span className='block w-1 h-[250px] lines -translate-y-5'></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Avatar
