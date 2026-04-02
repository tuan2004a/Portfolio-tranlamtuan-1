"use client";

import Introduce from "../components/introduce/Index";
import Experience from "../components/Experience/Index";
import SideBar from "../components/layout/SideBar";
import ProfessionalSkills from "../components/professionalSkills/Index";
import Project from "../components/project/Index";
import Contact from "../components/contact/Index";
import { useSmoothScroll } from "../hook/useSmoothScroll";
import Backround from "../components/Backround";
import ButtonMenu from "../components/ButtonMenu";

export default function Home() {
	const scrollToId = useSmoothScroll();

	return (
		<div className="h-[100vh] w-full p-3.5 md:p-5 lg:p-7 xl:p-10 !gap-7 xl:!gap-10 flex max-lg:flex-col lg:overflow-hidden max-lg:overflow-y-scroll max-lg:overflow-x-hidden">
			<div className="sidebarAnimationLoad z-50 lg:w-1/3 uk-height-1-1">
				<SideBar scrollToId={scrollToId} />
			</div>
			<main className="MainAnimationLoad z-50 scrollPageHidden lg:w-2/3 lg:overflow-y-scroll lg:overflow-x-hidden">
				<section id="introduce" className="bg-[#191919] p-3.5 md:p-5 lg:p-7 xl:p-10 uk-width rounded-xl ">
					<Introduce />
				</section>
				<section id="experience" className="bg-[#191919] p-3.5 md:p-5 lg:p-7 xl:p-10 uk-width mt-3.5 lg:mt-5 rounded-xl">
					<Experience />
				</section>
				<section id="professionalSkills" className="bg-[#191919] p-3.5 md:p-5 lg:p-7 xl:p-10 uk-width mt-3.5 lg:mt-5 rounded-xl">
					<ProfessionalSkills />
				</section>
				<section id="project" className="bg-[#191919] p-3.5 md:p-5 lg:p-7 xl:p-10 uk-width mt-3.5 lg:mt-5 rounded-xl">
					<Project />
				</section>
				<section id="contact" className="bg-[#191919] p-3.5 md:p-5 lg:p-7 xl:p-10 uk-width mt-3.5 lg:mt-5 rounded-xl">
					<Contact />
				</section>
			</main>
			<div className="absolute inset-0 size-full z-10">
				<Backround />
			</div>
			<div className="fixed bottom-7 right-7 z-50 min-lg:hidden">
				<ButtonMenu />
			</div>
		</div>
	);
}
