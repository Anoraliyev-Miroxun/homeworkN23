import {Link} from 'react-router-dom';


export const HeroCard = ({ title, img,id }) => {
    return (
        <div className="text-center">
            <Link className="hover:text-blue-400" to={`/kitob/${id}`}>
                <img className="w-[172px] mb-4" src={img} alt="" />
                <h4>{title}</h4>

            </Link>
        </div>
    )
}