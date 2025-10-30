import heroImg from '../../../assets/Icons/hero-imgage.svg';
import ong from '../../../assets/Icons/chap-hero.svg';
import chap from '../../../assets/Icons/ong-hero.svg';
import bgHero from '../../../assets/Icons/bg-hero-button.svg';
import { categoryDatas } from '../../../data/mainCard.js';
import { HeroCard } from '../../home/components/banner-hero.jsx';
export const Banner = () => {
    return (
        <>
            <section className="pt-4 pb-14">
                <div className="container">
                    <div className="flex gap-6">
                        <div className="flex grow bg-[#eef4ff] relative rounded-4">
                            <div className=' b mb-0 absolute bottom-0 w-[270px]'>
                                <h2 className='text-[24px] font-bold ml-8'>Кўп ўқилаётганлар</h2>
                                <img className='b' src={heroImg} alt="heroImg" />
                            </div>

                            <div className='b flex gap-4 items-center justify-between absolute right-0 bottom-0 top-0'>

                                <button className="b relative w-8 h-8 rounded-full bg-[url('src/assets/Icons/bg-hero-button.svg')]"><img className=' b absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' src={ong} alt="" /></button>

                                <div className='flex justify-between gap-4'>
                                    {
                                        categoryDatas.slice(0, 3).map((item, i) => {
                                            return <HeroCard key={item.id} title={item.title} img={item.img} />
                                        })
                                    }
                                </div>

                                <button className="b relative w-8 h-8 rounded-full bg-[url('src/assets/Icons/bg-hero-button.svg')]"><img className=' b absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' src={chap} alt="" /></button>
                            </div>
                        </div>


                        <div className="w-[261px] h-[351px] bg-blue-400">
                            <h2>Китоб ўқишни ёқтирасизми?</h2>
                            <p>Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг</p>
                            <button className="bg-white cursor-pointer" >Обуна бўлиш</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}