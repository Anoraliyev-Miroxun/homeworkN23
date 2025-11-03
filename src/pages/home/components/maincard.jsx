import {Link} from 'react-router-dom';


export const MainCard = ({ title, img, janr,id }) => {
    return (
        <div >
            <Link className="hover:text-blue-400" to={`/kitob/${id}`}>
                <img src={img} alt="img" />
                <h3>{title}</h3>
                <p>{janr}</p>
            </Link>
        </div>
    )
}