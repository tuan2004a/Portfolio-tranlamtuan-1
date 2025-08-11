"use client";
import React from "react";

const TimeLine = () => {
    return (
        <nav className="md:mt-10">
            <ul className="uk-nav !gap-3 md:!gap-5 uk-width-1-1 grid min-md:grid-cols-2 ">
            {/* min-[1024px]:max-[1155px]:!grid-cols-1 */}
                <li className="!text-white p-5 max-md:py-3 bg-black rounded-lg relative after:absolute after:w-0.5 after:h-[40%] after:bg-[#3452ff] after:top-1/2 after:left-0 after:translate-y-[-50%]">
                    <time className="text-[#3452ff] text-base lg:!text-lg" dateTime="08/2023 - 09/2023">8/2024 - 9/2024</time>
                    <h4 className="!text-white !m-0 !mt-2 md:!mt-3 !text-[22px] lg:!text-2xl !font-medium">Thực tập FE</h4>
                    <p className="!m-0 !mt-0.5 md:!mt-2 text-zinc-400">Công ty TNHH công nghệ Optech</p>
                </li>
                <li className="!text-white p-5 max-md:py-3 bg-black rounded-lg relative after:absolute after:w-0.5 after:h-[40%] after:bg-[#3452ff] after:top-1/2 after:left-0 after:translate-y-[-50%]">
                    <time className="text-[#3452ff] text-base lg:!text-lg" dateTime="2022 - 2025 ">2022 - 2025</time>
                    <h4 className="!text-white !m-0 !mt-2 md:!mt-3 !text-[22px] lg:!text-2xl !font-medium">Công nghệ thông tin</h4>
                    <p className="!m-0 !mt-0.5 md:!mt-2 text-zinc-400">
                        {/* CĐ FPT Polytechnic - Tp Hồ Chí Minh */}
                        CĐ FPT Polytechnic - Tp.HCM
                    </p>
                </li>
            </ul>
        </nav>
    );
};

export default TimeLine;
