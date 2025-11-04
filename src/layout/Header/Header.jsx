import logo from '../../assets/logo.svg';
import bayroq from '../../assets/Icons/bayroq.svg';
import { SearchBar } from '../Header/serchBar';
import strelka from '../../assets/Icons/strelka.svg';
import { Link,useLocation } from 'react-router-dom';
import odam from '../../assets/Icons/odam.svg';


export const Header = () => {
    const location=useLocation();

    const tekshir=location=="/profil";
    return (
        <header className="py-[21px]">
            <div className='container flex justify-between gap-5 items-center '>
                <div className='flex flex gap-[46px] grow'>
                    <Link to={"/"}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <SearchBar />
                </div>

                <div className='flex gap-5 justify-between'>
                    <div>
                        <button className='flex cursor-pointer gap-[9px] bg-blue-200 rounded-[5px] p-[14px] w-[105px]'><img src={bayroq} alt="" /> UZ <img src={strelka} alt="" /></button>

                    </div>
                    <div>
                        {
                            tekshir ? (<button className='flex cursor-pointer gap-[12px] rounded-[5px] p-[14px] w-[151px] text-center bg-[#16469d] text-white'><img className='' src={odam} alt="" /> Krish</button>

                            ):(<Link to={"/profil"}><button className='flex cursor-pointer gap-[12px] rounded-[5px] p-[14px] w-[151px] text-center bg-[#16469d] text-white'><img className='' src={odam} alt="" /> Krish</button></Link>
                            )}
                    </div>
                </div>
            </div>
        </header>
    )
}