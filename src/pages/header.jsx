import logo from '../assets/icons/logo.svg';
import menyu from '../assets/icons/header-menyu.svg';
import strelka from '../assets/icons/strelka.svg';
import oy from '../assets/icons/oy.svg';
import krishLogo from '../assets/icons/krish-logo.svg';
export const Header = () => {
    return (
        <div className='border-b border-gray-600'>
            <div className="contianer b">
                <div className="b flex justify-between ml-4 my-5 gap-4">
                    <div className='flex items-center'>
                        <img className='w-[150px]' src={logo} alt="logo" />
                        <div className='hidden desktop:flex ml-5 text-[18px]'>
                            <a className='py-4 px-4.5' href="#">Categories</a>
                            <a className='flex py-4 px-4.5 gap-2' href="#">AboutUs <img src={strelka} alt="" /></a>
                            <a className='flex py-4 px-4.5 gap-2' href="#">HelpCenter <img src={strelka} alt="" /></a>
                        </div>


                    </div>
                    <button className='mr-5 desktop:hidden'><img src={menyu} alt="menyu-image" /></button>
                    <div className='hidden desktop:flex items-center'>
                        <a href="tel:+998900996603">+998 90 099 6603</a>
                        <button className='ml-6 mr-4'><img src={oy} alt="dark-white" /></button>
                        <button className='flex bg-green-600 text-[18px] font-normal rounded-[100px] gap-2 px-[30px] py-[18px] cursor-pointer'>Login <img src={krishLogo} alt="krishLogo" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}