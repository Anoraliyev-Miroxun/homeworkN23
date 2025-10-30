export const HeroCard=({title,img})=>{
    return (
        <div className="text-center">   
            <img className="w-[172px] mb-4" src={img} alt="" />
            <h4>{title}</h4>
        </div>
    )
}