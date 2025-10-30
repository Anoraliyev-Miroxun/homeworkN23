export const CategoryCard=({title,img})=>{
    return (
        <div className="text-center">
            <img src={img} alt="image" />
            <h3 className=" font-semibold text-[18px] leading-[133%] ">{title}</h3>
        </div>
    )
}