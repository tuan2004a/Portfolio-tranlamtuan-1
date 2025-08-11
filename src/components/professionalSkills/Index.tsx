import Skill from "./Skill";
import Specializations from "./Specializations";

const Index = () => {
    return (
        <div>
            <h3 className='!m-0 !mb-5 xl:!mb-10  !block !font-semibold !text-white relative after:absolute after:w-18 after:h-[3px] after:bg-[#3452ff] after:-bottom-1 after:left-0'>
                Chuyên môn
            </h3>
            <div className="">
                <Specializations  />
            </div>
            <h3 className='max-xl:!my-5 xl:!mb-10 !block !font-semibold !text-white relative after:absolute after:w-18 after:h-[3px] after:bg-[#3452ff] after:-bottom-1 after:left-0'>
                Kỹ năng
            </h3>
            <div className="uk-flex uk-flex-center uk-width-1-1">
                <Skill />
            </div>
        </div>
    );
};

export default Index;
