import React from 'react'
import BtnSubmit from '@/components/common/button/BtnSubmit';
import TimeLine from './TimeLine';

const Index = () => {
    return (
        <div className='size-full'>
            <h3 className='!font-semibold !text-white relative after:absolute after:w-18 after:h-[3px] after:bg-[#3452ff] after:-bottom-1 after:left-0'>Kinh nghiệm</h3>
            {/* <div>
                <BtnSubmit type="submit" className="uk-button uk-button-default !text-white">
                    2025
                </BtnSubmit>
            </div> */}
            <div>
                <TimeLine />
            </div>
        </div>
    )
}

export default Index
