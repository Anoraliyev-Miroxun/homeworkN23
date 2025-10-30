export const MainCard=({title,img,janr})=>{
    return (
        <div >
            <img src={img} alt="img" />
            <h3>{title}</h3>
            <p>{janr}</p>
        </div>
    )
}