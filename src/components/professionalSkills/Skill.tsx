import { information } from "@/data/Skill";

const Skill = () => {
    return (
        <div className="uk-flex uk-flex-wrap uk-flex-center gap-3">
            {information.map((item, index) => (
                <div className="size-20 xl:size-25 uk-flex uk-flex-center uk-flex-column items-center bg-black rounded-lg" key={index}>
                    <img className="size-10" src={`${item.image}`} alt="" />
                    <p className="!m-0">{item.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Skill