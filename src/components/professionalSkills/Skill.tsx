import { information } from "@/data/Skill";

const Skill = () => {
    return (
        <div className=" gap-1.5 md:gap-3 overflow-hidden">
            {/* Giao diện desktop */}

            <div className="max-md:!hidden uk-flex uk-flex-wrap uk-flex-center gap-1.5 md:gap-3">
                {information.map((item, index) => (
                    <div className="size-20 min-[690px]:size-25 uk-flex uk-flex-center uk-flex-column items-center bg-black rounded-lg gap-2" key={index}>
                        <img className="size-8 min-[690px]:size-11" src={`${item.image}`} alt="" />
                        <p className="!m-0 max-md:text-[13px]">{item.name}</p>
                    </div>
                ))}
            </div>

            {/* Giao diện mobile */}
            <div uk-slider="autoplay: true" className="md:!hidden">
                <div className="uk-slider-container">
                    <ul className="uk-slider-items uk-child-width-auto gap-3">
                        {information.map((item, index) => (
                            <li className="!size-25 uk-flex uk-flex-center uk-flex-column items-center bg-black rounded-lg gap-2" key={index}>
                                <img className="size-9 min-[690px]:size-11" src={`${item.image}`} alt="" />
                                <p className="!m-0 max-md:text-[13px]">{item.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skill