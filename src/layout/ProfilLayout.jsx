import saqlanganxabar from '../assets/Icons/saqlanganxabar.svg';
import { Link, Outlet } from 'react-router-dom';
export const ProfilLayout = () => {
    return (
        <div className="container">
            <div className="mb-[25px] "><Link to={"/"}><button className="cursor-pointer border hover:text-[#3f51b5]"> Бош сахифа</button></Link> / <button className="cursor-pointer hover:text-[#3f51b5]">Kitoblar</button></div>

            <div className='flex'>
                <h2>Суғдиёна Икромова</h2>
                <p>+998 90 253 77 53</p>
                <p>ID: 0001  Баланс: 45 000 сўм</p>
            </div>
            <div className='flex gap-4'>
                <div className='gap-5'>
                    <div><Link to={"/profil"}><button className='flex cursor-pointer gap-[12px] rounded-[5px] p-[14px] w-[151px] text-center bg-[#16469d] text-white'><img className='' src={saqlanganxabar} alt="" /> Obuna bolish</button></Link></div>

                    <div><Link to={"/profil/hisob"}><button className='flex cursor-pointer gap-[12px] rounded-[5px] p-[14px] w-[151px] text-center bg-[#16469d] text-white'><img className='' src={saqlanganxabar} alt="" /> E Hisob</button></Link></div>

                    <div><Link to={"/profil/kitoblarim"}><button className='flex cursor-pointer gap-[12px] rounded-[5px] p-[14px] w-[151px] text-center bg-[#16469d] text-white'><img className='' src={saqlanganxabar} alt="" /> Kitoblarim</button></Link></div>

                    <div><Link to={"/profil/sozlamalar"}><button className='flex cursor-pointer gap-[12px] rounded-[5px] p-[14px] w-[151px] text-center bg-[#16469d] text-white'><img className='' src={saqlanganxabar} alt="" /> Saqlanganlar</button></Link></div>
                </div>
                <div className='border border-b-rose-700'>
                    <main>
                        <Outlet />
                    </main>
                </div>

            </div>
        </div>
    )
}