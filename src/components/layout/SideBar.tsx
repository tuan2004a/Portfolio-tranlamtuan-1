"use client";

import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SideBar = ({ scrollToId }: { scrollToId: (id: string) => void }) => {
	return (
		<nav className="bg-[#191919] p-3.5 md:p-5 lg:p-7 xl:p-10 rounded-xl h-full flex flex-col justify-center">
			<div className="w-full !mb-10 flex items-center justify-center">
				<div>
					<div className="relative">
						<div className="relative flex items-center justify-center w-fit">
							<span className=" z-20 block size-35 uk-border-circle absolute -translate-y-1 translate-x-1 bg-[#3452ff]"></span>
							<span className="z-50 size-33 uk-flex uk-flex-center overflow-hidden uk-border-circle">
								<img className=" size-full object-cover object-top " src="/image/avat2.jpg" alt="" />
							</span>
							<span className=" z-20 block size-33 uk-border-circle absolute translate-y-2 -translate-x-2 bg-[#d3a583]"></span>
							<div className="rotate-[40deg] absolute translate-0 uk-flex uk-flex-center gap-4">
								<span className="block w-1 h-[225px] lines translate-y-5"></span>
								<span className="block w-1 h-[225px] lines translate-y-0"></span>
								<span className="block w-1 h-[225px] lines -translate-y-5"></span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<ul className="uk-nav uk-navbar-left !gap-2 flex-col items-center *:!h-11 *:w-full *:rounded-lg *:bg-black">
				<li className="uk-text-default">
					<a href="#introduce" className="cursor-pointer size-full text-left !px-4 !text-white ">
						Home
					</a>
				</li>
				<li className="uk-text-defaul">
					<a href="#experience" className="cursor-pointer size-full text-left !px-4 !text-white ">
						Kinh nghiệm
					</a>
				</li>
				<li className="uk-text-defaul">
					<a href="#professionalSkills" className="cursor-pointer size-full text-left !px-4 !text-white ">
						Kỹ năng chuyên môn
					</a>
				</li>
				<li className="uk-text-defaul">
					<a href="#project" className="cursor-pointer size-full text-left !px-4 !text-white ">
						Dự án
					</a>
				</li>
				<li className="uk-text-defaul">
					<a href="#contact" className="cursor-pointer size-full text-left !px-4 !text-white ">
						Liên hệ
					</a>
				</li>
			</ul>
			<ul className="uk-nav uk-navbar-left !gap-2 !mt-10 *:bg-black *:hover:bg-[#3452ff] *:size-11 *:rounded-lg *:cursor-pointer">
				<li className="uk-text-default uk-flex uk-flex-center">
					<a className="block !px-4 !text-white font-bold text-2xl" href="https://drive.google.com/file/d/1tVZyWLZWcNFiVWINfPTeb5GI3MJ5yrJr/view?usp=sharing" target="_blank">
						CV
					</a>
				</li>
				<li className="uk-text-default uk-flex uk-flex-center">
					<a href="mailto:dev.lamtuan@gmail.com" target="_blank">
						<SiGmail className="size-5 !text-white" />
					</a>
				</li>
				<li className="uk-text-default uk-flex uk-flex-center">
					<a href="https://www.linkedin.com/in/lam-tuan-2072a4329/" target="_blank">
						<FaLinkedin className="size-5 !text-white" />
					</a>
				</li>
				<li className="uk-text-default uk-flex uk-flex-center">
					<a href="https://github.com/tuan2004a" target="_blank">
						<FaGithub className="size-5 !text-white" />
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default SideBar;
