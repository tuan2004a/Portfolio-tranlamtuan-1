'use client';
import Avatar from "./Avatar"
import HeroSection from "./HeroSection"

const Index = () => {
    return (
        <div className="uk-flex justify-center items-center size-full lg:max-xl:flex-col gap-20 max-md:flex-col">
            <div className=" uk-margin-small-left">
                <Avatar/>
            </div>
            <div className="w-[350px]">
                <HeroSection/>
            </div>
        </div>
    )
}

export default Index
