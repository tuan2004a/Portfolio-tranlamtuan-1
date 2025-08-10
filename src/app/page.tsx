import Introduce from "@/components/introduce/Index";
import Experience from "@/components/experience/Index";
import SideBar from "../components/layout/SideBar";
import ProfessionalSkills from "@/components/professionalSkills/Index";
import Project from "@/components/project/Index";

export default function Home() {
    return (
        <div className="h-[100vh] w-full p-3.5 md:p-5 lg:p-10 !gap-10 uk-flex ">
            <div className="uk-width-1-3 uk-height-1-1 hidden lg:block">
                <SideBar />
            </div>
            <main className="scrollPageHidden lg:w-2/3 h-[calc(100vh-40px)] lg:h-[calc(100vh-80px)] overflow-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth">
                <div className="bg-[#191919] p-3.5 md:p-5 lg:p-10 uk-width h-[calc(100vh-40px)] lg:h-[calc(100vh-80px)] snap-start rounded-xl">
                    <Introduce />
                </div>
                <div className="bg-[#191919] p-3.5 md:p-5 lg:p-10 uk-width h-[calc(100vh-80px)] snap-start mt-3.5 lg:mt-5 rounded-xl">
                    <Experience />
                </div>
                <div className="bg-[#191919] p-3.5 md:p-5 lg:p-10 uk-width h-[calc(100vh-80px)] snap-start mt-3.5 lg:mt-5 rounded-xl">
                    <ProfessionalSkills />
                </div>
                <div className="bg-[#191919] p-3.5 md:p-5 lg:p-10 uk-width h-[calc(100vh-80px)] snap-start mt-3.5 lg:mt-5 rounded-xl" >
                    <Project />
                </div>
            </main>
        </div>
    );
}
