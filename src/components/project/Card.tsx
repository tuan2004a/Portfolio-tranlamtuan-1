import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dataProject } from "@/data/project";

const Card = () => {
    return (
        <div>
            {/* Giao diện desktop */}
            {/* <div className="max-sm:hidden grid grid-rows-2 grid-cols-4 max-sm:grid-cols-2 max-[813px]:grid-cols-3 lg:max-[1350px]:grid-cols-3 gap-5"> */}
            <div className="max-sm:hidden flex flex-wrap justify-center gap-5">
                {dataProject.map((items, index) => (
                    <div key={index} className="h-[260px] w-[185px] relative">
                        <div className="block ClipPathCard size-full bg-black text-wrap ">
                            <div className="relative uk-width-1-1 h-[205px] p-2">
                                <div className="overflow-hidden bg-green-500 uk-width-1-1 h-[130px] rounded-lg">
                                    <img src={items.image || undefined} alt="" className="size-full object-cover" />
                                </div>
                                <div className="!text-white !text-[13px] mt-3 mb-0.5 border border-white px-2 rounded-full w-fit">React.Js</div>
                                <h5 className="!m-0 !text-white !text-[17px] uk-text-bolder line-clamp-1">{items.name}</h5>
                            </div>
                            <button className="absolute bottom-1.5 left-2 bg-[#3452ff] p-3.5 rounded-lg">
                                <FontAwesomeIcon icon={faGithub} className="size-5.5 text-white" />
                            </button>
                        </div>
                        <button className="cursor-pointer absolute bottom-0 right-0 bg-[#3452ff] text-white py-3 px-8 font-semibold rounded-md">Button</button>
                    </div>
                ))}
            </div>

            {/* Giao diện mobile */}
            <div className="sm:hidden" uk-slider="center: true">
                <div className="uk-position-relative uk-visible-toggle" tabIndex={-1}>
                    <ul className="uk-slider-items uk-grid">
                        {dataProject.map((items, index) => (
                            <li key={index} className="uk-width-auto">
                                <div className="h-[260px] w-[185px] relative">
                                    <div className="block ClipPathCard size-full bg-black text-wrap ">
                                        <div className="relative uk-width-1-1 h-[205px] p-2">
                                            <div className="overflow-hidden bg-green-500 uk-width-1-1 h-[130px] rounded-lg">
                                                <img src={items.image || undefined} alt="" className="size-full object-cover" />
                                            </div>
                                            <div className="!text-white !text-[13px] mt-3 mb-0.5 border border-white px-2 rounded-full w-fit">React.Js</div>
                                            <h5 className="!m-0 !text-white !text-[17px] uk-text-bolder line-clamp-1">{items.name}</h5>
                                        </div>
                                        <button className="absolute bottom-1.5 left-2 bg-[#3452ff] p-3.5 rounded-lg">
                                            <FontAwesomeIcon icon={faGithub} className="size-5.5 text-white" />
                                        </button>
                                    </div>
                                    <button className="cursor-pointer absolute bottom-0 right-0 bg-[#3452ff] text-white py-3 px-8 font-semibold rounded-md">Button</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Card;
