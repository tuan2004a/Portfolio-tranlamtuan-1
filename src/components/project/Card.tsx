import React from "react";
import { dataProject } from "@/data/project";
import { FaGithub } from "react-icons/fa";
// import {} from ""

const Card = () => {
	return (
		<div className="uk-height-1-1">
			{/* Giao diện desktop */}
			<div className="grid grid-cols-4 max-sm:grid-cols-2 max-[813px]:grid-cols-3 lg:max-[1350px]:grid-cols-3 gap-5">
				{/* <div className="max-sm:hidden grid grid-cols-4 gap-5 lg:max-[1060px]:gap-2 size-full"> */}
				{dataProject.map((items, index) => (
					<div key={index} className="h-[260px] w-[185px] relative">
						<div className="block size-full bg-black text-wrap relative rounded-lg overflow-hidden ">
							<div className="overflow-hidden  uk-width-1-1 h-[100px] rounded-lg flex items-center justify-center">
								<img src={items.image || undefined} alt="" className="size-full object-center object-contain " />
							</div>
							<div className="!text-white !text-xs mt-3 mb-1 ml-1.75 border border-white px-1.5 py-px rounded-full w-fit">React.Js</div>
							<h5 className="!my-0 !text-white !text-[17px] font-bold! line-clamp-2 !mx-2">{items.name}</h5>
							<div className="absolute bottom-2 flex gap-x-2 w-full px-2 z-50">
								<a href={items.linkGithub || undefined} target="_blank">
									<button className=" bg-[#3452ff] p-3.5 rounded-lg cursor-pointer">
										<FaGithub className="size-5.5 text-white" />
									</button>
								</a>
								<a href={items.LinkWeb || undefined} className="">
									<button disabled={!items.LinkWeb} className="disabled:bg-gray-500 disabled:cursor-no-drop cursor-pointer bg-[#3452ff] text-white py-3 px-8 font-semibold rounded-md">Button</button>
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Card;
