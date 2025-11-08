import cafolat1 from '../assets/icons/cards-cafolat.svg';
import scors1 from '../assets/icons/cards-scors.svg';
import yoqilgi1 from '../assets/icons/card-yoqilgi.svg';
import joylar1 from '../assets/icons/card-joylar.svg';

export const Card = ({ img, nomi, tipi, scors, yoqilgi, joylar, cafolat, id }) => {
    return (
        <div className='bg-gray-400 rounded-2xl mb-2.5'>
            <div className='ml-6 pt-6 mb-5'>
                <h3 className='text-[20px] font-semibold mb-2 tablet:text-[24px]'>{nomi}</h3>
                <p className='text-[14px] text-[#555] font-medium tablet:text-[16px]'>{tipi}</p>
            </div>
            <img src={img} alt="rasm" />
            <div className='grid grid-cols-2 mt-2.5 ml-5 gap-y-6 pb-6 pr-4'>
                <p className='flex gap-2.5 text-[16px] font-medium'><img src={joylar1} alt="rasm" /> {joylar} Seats</p>
                <p className='flex gap-2.5 text-[16px] font-medium'><img src={cafolat1} alt="rasm" /> {cafolat} Years</p>
                <p className='flex gap-2.5 text-[16px] font-medium'><img src={scors1} alt="rasm" /> {scors} </p>
                <p className='flex gap-2.5 text-[16px] font-medium'><img src={yoqilgi1} alt="rasm" /> {yoqilgi} </p>
            </div>
        </div>
    )
}