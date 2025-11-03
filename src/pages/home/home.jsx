import { Banner } from '../home/components/banner.jsx';
import chaqmoq from '../../assets/Icons/chaqmoq.svg';
import { categoryData } from '../../data/categoryCard.js';
import { CategoryCard } from './components/category-cards.jsx';
import { MainCard } from '../home/components/maincard.jsx';
import { categoryDatas } from '../../data/mainCard.js';
import { Navbar } from '../../layout/Header/navbar.jsx';
export const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />

            <section>
                <div className='b container'>
                    <div className='b flex justify-between'>


                        <div className='flex gap items-center gap-5 mt-[82px] mb-[66px]'>
                            <div className=''>
                                <img className='w-100%' src={chaqmoq} alt="chaqmoq" />
                            </div>
                            <div className=''>
                                <h3 className='text-[15px] mb-[8px] font-bold text-[15px] leading-[120%] text-[#11142d]'>
                                    Тезкор етказиш
                                </h3>
                                <p className='text-[11px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                        </div>


                        <div className='flex gap items-center gap-5 mt-[82px] mb-[66px]'>
                            <div className=''>
                                <img className='w-100%' src={chaqmoq} alt="chaqmoq" />
                            </div>
                            <div className=''>
                                <h3 className='text-[15px] mb-[8px] font-bold text-[15px] leading-[120%] text-[#11142d]'>
                                    Тезкор етказиш
                                </h3>
                                <p className='text-[11px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                        </div>

                        <div className='flex gap items-center gap-5 mt-[82px] mb-[66px]'>
                            <div className=''>
                                <img className='w-100%' src={chaqmoq} alt="chaqmoq" />
                            </div>
                            <div className=''>
                                <h3 className='text-[15px] mb-[8px] font-bold text-[15px] leading-[120%] text-[#11142d]'>
                                    Тезкор етказиш
                                </h3>
                                <p className='text-[11px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                        </div>

                        <div className='flex gap items-center gap-5 mt-[82px] mb-[66px]'>
                            <div className=''>
                                <img className='w-100%' src={chaqmoq} alt="chaqmoq" />
                            </div>
                            <div className=''>
                                <h3 className='text-[15px] mb-[8px] font-bold text-[15px] leading-[120%] text-[#11142d]'>
                                    Тезкор етказиш
                                </h3>
                                <p className='text-[11px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                            </div>
                        </div>


                    </div>
                </div>
            </section >

            <section>
                <div className='container'>
                    <div>
                        <h2 className='mb-8 font-semibold text-[32px] leading-[125%]'>Рукнлар</h2>

                        <div className='flex justify-between gap-4'>
                            {
                                categoryData.map((item) => {
                                    return <CategoryCard key={item.id} title={item.title} img={item.img} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div>
                        <h2 className='font-semibold text-[32px] leading-[133%]'>Янги қўшилганлар</h2>

                        <div className="flex justify-between gap-6">

                            {
                                categoryDatas.map((item) => {
                                    return (
                                        <MainCard key={item.id} title={item.title} janr={item.janr} img={item.img} id={item.id} />
                                    )
                                })
                            }



                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='container'>
                    <div>
                        <h2 className='font-semibold text-[32px] leading-[133%]'>Аудио китоблар</h2>

                        <div className="flex justify-between gap-6">
                            {
                                categoryDatas.map((item) => {
                                    return (
                                        <MainCard key={item.id} title={item.title} janr={item.janr} img={item.img} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}