import React from 'react';
import Contact from './Contact';

const Index = () => {
    return (
        <div>
            <h3 className='!m-0 !mb-5 xl:!mb-10  !block !font-semibold !text-white relative after:absolute after:w-18 after:h-[3px] after:bg-[#3452ff] after:-bottom-1 after:left-0'>
                Liên hệ
            </h3>

            <div>
                <Contact />
            </div>
        </div>
    )
}

export default Index
