"use client";

import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Element, Link } from 'react-scroll'    

const SideBar = ({scrollToId}:{scrollToId:(id:string)=>void}) => {

    return (
        <nav className="bg-[#191919] p-3.5 md:p-5 lg:p-7 xl:p-10 rounded-xl h-full flex flex-col justify-center">
            <div className="uk-width-1-1 h-25 bg-red-500 !mb-10">
            </div>
            <ul className="!hidden uk-nav uk-navbar-left !gap-2 flex-col items-center">
                <Link onClick={()=>scrollToId("introduce")} to="introduce" smooth={true} duration={500} className="uk-text-default flex items-center cursor-pointer w-full !h-11 text-left !px-4 !text-white bg-black rounded-lg" >Home</Link>
                <Link onClick={()=>scrollToId("experience")} to="experience" smooth={true} duration={500} className="uk-text-default flex items-center cursor-pointer w-full !h-11 text-left !px-4 !text-white bg-black rounded-lg" >Kinh nghiệm</Link>
                <Link onClick={()=>scrollToId("professionalSkills")} to="professionalSkills" smooth={true} duration={500} className="uk-text-default flex items-center cursor-pointer w-full !h-11 text-left !px-4 !text-white bg-black rounded-lg" >Kỹ năng chuyên môn</Link>
                <Link onClick={()=>scrollToId("project")} to="project" smooth={true} duration={500} className="uk-text-default flex items-center cursor-pointer w-full !h-11 text-left !px-4 !text-white bg-black rounded-lg" >Dự án</Link>
                <Link onClick={()=>scrollToId("contact")} to="contact" smooth={true} duration={500} className="uk-text-default flex items-center cursor-pointer w-full !h-11 text-left !px-4 !text-white bg-black rounded-lg" >Liên hệ</Link>
            </ul>
            <ul className="uk-nav uk-navbar-left !gap-2 flex-col items-center">
                <li className="uk-text-default !h-11 w-full bg-black rounded-lg">
                    <a href="#introduce" className="cursor-pointer size-full text-left !px-4 !text-white " >Home</a>
                </li>
                <li className="uk-text-default !h-11 w-full bg-black rounded-lg">
                    <a href="#experience" className="cursor-pointer size-full text-left !px-4 !text-white " >Kinh nghiệm</a>
                </li>
                <li className="uk-text-default !h-11 w-full bg-black rounded-lg">
                    <a href="#professionalSkills" className="cursor-pointer size-full text-left !px-4 !text-white " >Kỹ năng chuyên môn</a>
                </li>
                <li className="uk-text-default !h-11 w-full bg-black rounded-lg">
                    <a href="#project" className="cursor-pointer size-full text-left !px-4 !text-white " >Dự án</a>
                </li>
                <li className="uk-text-default !h-11 w-full bg-black rounded-lg">
                    <a href="#contact" className="cursor-pointer size-full text-left !px-4 !text-white " >Liên hệ</a>
                </li>
            </ul>
            <ul className="uk-nav uk-navbar-left !gap-2 !mt-10">
                <li className="size-11 uk-text-default bg-black rounded-lg uk-flex uk-flex-center cursor-pointer">
                    <a className="block !px-4 !text-white font-bold text-2xl" href="mailto:dev.lamtuan@gmail.com" target="_blank">
                        CV
                    </a>
                </li>
                <li className="size-11 uk-text-default bg-black rounded-lg uk-flex uk-flex-center cursor-pointer">
                    <a href="mailto:dev.lamtuan@gmail.com" target="_blank">
                        <SiGmail className="size-5 !text-white"/>
                    </a>
                </li>
                <li className="size-11 uk-text-default bg-black rounded-lg uk-flex uk-flex-center cursor-pointer">
                    <a href="https://www.linkedin.com/in/lam-tuan-2072a4329/" target="_blank">
                        <FaLinkedin className="size-5 !text-white"/>
                    </a>
                </li>
                <li className="size-11 uk-text-default bg-black rounded-lg uk-flex uk-flex-center cursor-pointer">
                    <a href="https://github.com/tuan2004a" target="_blank">
                        <FaGithub className="size-5 !text-white"/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default SideBar
