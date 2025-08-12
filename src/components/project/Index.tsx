import React from 'react'
import Card from './Card'

const Index = () => {
    return (
        <div className='uk-flex uk-flex-center uk-flex-column uk-width-1-1 uk-height-1-1'>
            <h3 className='!m-0 !mb-5 xl:!mb-10 uk-width-1-1 !block !font-semibold !text-white relative after:absolute after:w-18 after:h-[3px] after:bg-[#3452ff] after:-bottom-1 after:left-0'>
                Dự án
            </h3>
            <div className=' uk-flex uk-flex-center uk-width-1-1 uk-height-1-1'>
                <div className=''>
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default Index
