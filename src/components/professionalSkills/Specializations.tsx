import { FaLaptopCode, FaPencilRuler } from "react-icons/fa";

const Specializations = () => {
    return (
        <div className="uk-width-1-1 grid grid-cols-1 md:grid-cols-2 lg:max-xl:grid-cols-1 gap-3.5 lg:gap-5 ">
            {/* 1 */}
            <div className='border border-[#393939] uk-overflow-hidden rounded-2xl'>
                <div className="uk-width-1-1 py-2.5  xl:py-4 pl-3 xl:pl-4 bg-black uk-flex items-center">
                    <span className="size-9 xl:size-11 uk-border-circle uk-flex uk-flex-center border border-[#3452ff]">
                        <FaLaptopCode className='size-4.5 xl:size-6 text-white'/>
                    </span>
                    <h5 className='!text-xl xl:!text-[26px] !text-white !font-semibold !m-0 !ml-3'>Lập trình web</h5>
                </div>
                <div className='!m-0 p-3 xl:p-4'>
                    <p className='!m-0 max-sm:line-clamp-2'>
                        {/* Sử dụng React.js (Frontend), Node.js & MongoDB (Backend), kết hợp Tailwind CSS để xây dựng giao diện hiện đại và responsive */}
                        Xây dựng ứng dụng với React.js, Node.js & MongoDB, sử dụng Tailwind CSS cho giao diện hiện đại, responsive
                    </p>
                </div>
            </div>
            {/* 1 */}

            {/* 2 */}
            <div className='border border-[#393939] uk-overflow-hidden rounded-2xl'>
                <div className="uk-width-1-1 py-2.5 xl:py-4 pl-3 xl:pl-4 bg-black uk-flex items-center">
                    <span className="size-9 xl:size-11 uk-border-circle uk-flex uk-flex-center border border-[#3452ff]">
                        <FaPencilRuler className='size-4.5 xl:size-5.5 text-white'/>
                    </span>
                    <h5 className='!text-xl xl:!text-[26px] !text-white !font-semibold !m-0 !ml-3'>Thiết kế Web</h5>
                </div>
                <div className='!m-0 p-3 xl:p-4'>
                    <p className='!m-0 max-sm:line-clamp-2'>Tham gia thiết kế website cơ bản trên Figma</p>
                </div>
            </div>
            {/* 2 */}
        </div>
    );
};

export default Specializations;
