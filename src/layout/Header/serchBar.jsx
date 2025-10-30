import rukunlar from '../../assets/Icons/rukunlar.svg';
import strelka from '../../assets/Icons/strelka.svg';

export const SearchBar = () => {
    return (
        <div className="flex h-12 grow items-center gap-1">
           <button className='flex cursor-pointer gap-[12px] items-center p-[14px] w-[151px] text-center  text-blue-600 border border-[#e1e1e1] rounded-l-[14px] w-[180px] h-[48px]'><img className='' src={rukunlar} alt="" /> Рукнлар <img src={strelka} alt="" /></button>
            <input  className='max-w-[739px] h-12 grow rounded-r-[14px] border border-[#e1e1e1] p-2' type="text" placeholder='Qdrish' />
        </div>

    )
}