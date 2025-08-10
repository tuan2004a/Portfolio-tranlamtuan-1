import React from "react";
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = () => {
    return (
        <div className="grid grid-cols-4 max-sm:grid-cols-2 max-md:grid-cols-3 lg:max-xl:grid-cols-3 gap-5">
            {/* 1 */}
            <div className="h-[260px] w-[185px] relative">
                <div className="block ClipPathCard size-full bg-red-500 text-wrap">
                    <button className="absolute bottom-1.5 left-2 bg-[#3452ff] p-3.5 rounded-lg">
                        <FontAwesomeIcon icon={faGithub} className='size-5.5 text-white' />
                    </button>
                </div>
                <button className="absolute bottom-0 right-0 bg-[#3452ff] text-white py-3 px-8 font-semibold rounded-md">
                    Button
                </button>
            </div>
            {/* 1 */}

            {/* 2 */}
            <div className="h-[260px] w-[185px] relative">
                <div className="block ClipPathCard size-full bg-red-500 text-wrap">
                    <button className="absolute bottom-1.5 left-2 bg-[#3452ff] p-3.5 rounded-lg">
                        <FontAwesomeIcon icon={faGithub} className='size-5.5 text-white' />
                    </button>
                </div>
                <button className="absolute bottom-0 right-0 bg-[#3452ff] text-white py-3 px-8 font-semibold rounded-md">
                    Button
                </button>
            </div>
            {/* 2 */}
            
            {/* 3 */}
            <div className="h-[260px] w-[185px] relative">
                <div className="block ClipPathCard size-full bg-red-500 text-wrap">
                    <button className="absolute bottom-1.5 left-2 bg-[#3452ff] p-3.5 rounded-lg">
                        <FontAwesomeIcon icon={faGithub} className='size-5.5 text-white' />
                    </button>
                </div>
                <button className="absolute bottom-0 right-0 bg-[#3452ff] text-white py-3 px-8 font-semibold rounded-md">
                    Button
                </button>
            </div>
            {/* 3 */}

            {/* 4 */}
            <div className="h-[260px] w-[185px] relative">
                <div className="block ClipPathCard size-full bg-red-500 text-wrap">
                    <button className="absolute bottom-1.5 left-2 bg-[#3452ff] p-3.5 rounded-lg">
                        <FontAwesomeIcon icon={faGithub} className='size-5.5 text-white' />
                    </button>
                </div>
                <button className="absolute bottom-0 right-0 bg-[#3452ff] text-white py-3 px-8 font-semibold rounded-md">
                    Button
                </button>
            </div>
            {/* 4 */}
        </div>
    );
};

export default Card;
