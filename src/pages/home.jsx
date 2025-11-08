import heroBg from '../assets/hero-bg.png';
import heroBg2 from '../assets/hero-bg2.png';
import slyde from '../assets/icons/hero-slyde.svg';
import otkazChap from '../assets/hero-ochap.svg';
import otkazOng from '../assets/hero-oong.svg';
import { malumot } from '../data/main-data.js';
import lupa from '../assets/icons/hero-lupa.svg';
import { Card } from '../components/cards.jsx';


export const Home = () => {
    return (
        <>
            <section>
                <div className="b contianer">
                    <div className='text-center min-w-[358px] min-h-[300px] rounded-[20px] bg-no-repeat bg-center bg-contain relative tablet:min-w-[728px] min-h-[500px]' style={{ background: `url(${heroBg}),url(${heroBg2})`, backgroundPosition: 'left center, right center' }}>
                        <div className='b mt-5 pt-10 tablet:mt-15'>

                            <h2 className='text-white  text-[24px] font-semibold mb-1.5 tablet:text-[32px] mb-[10px] desktop:text-[36px]'>Compact cars</h2>
                            <p className='text-[12px] font-normal text-white tablet:text-[16px]'>Rent cars as you are comfortable and where <br /> you are comfortable.</p>

                        </div>

                        <button className='b absolute tablet: left-10 bottom-[54px] '><img src={slyde} alt="" /></button>

                        <div className='hidden tablet:flex gap-3 absolute bottom-10 right-8'>
                            <button className='b '><img src={otkazChap} alt="" /></button>
                            <button className='b '><img src={otkazOng} alt="" /></button>
                        </div>

                        <div className='b min-w-[350px] bg-white rounded-[100px] py-5 flex items-center absolute left-1/2 -translate-x-1/2 -translate-y-1/2] -bottom-[33px] tablet:w-[600px]'>
                            <input className='b grow ml-5 mr-20 text-center outline-none ' placeholder='Find the car of your dreams' type="text" name="" id="" />
                            <button className='b cursor-pointer rounded-full absolute -right-5 top-1/2 -translate-x-1/2 -translate-y-1/2'><img className='' src={lupa} alt="" /></button>
                        </div>

                    </div>
                </div>
            </section>


            <section>
                <div className='contianer'>
                    <div className='mt-[62px] text-center items-center min-w-[321px] mx-[19px] desktop:mt-[133px]'>

                        <h2 className='text-[24px] font-semibold mb-1.5 tablet:text-[32px] desktop:text-[36px]'>Choose the car of your dreams</h2>
                        <p className='text-[12px] font-normal tablet:text-[16px] leading-[150%]'>We provide our customers with the most incredible <br /> driving emotions. <br /> That is why there are only world-class cars in our fleet</p>

                        <div className='flex  gap-3.5 mx-[15px] mt-7.5 justify-center desktop:mt-10'>
                            <button className='text-black border border-gray-500 rounded-[100px] text-[14px] font-normal py-[14px] px-[20px] tablet:px-[40px] py-[19px] text-[16px] font-medium hover:bg-green-600 hover:text-white'>Compact </button>
                            <button className='text-black border border-gray-500 rounded-[100px] text-[14px] font-normal py-[14px] px-[20px] tablet:px-[40px] py-[19px] text-[16px] font-medium hover:bg-green-600 hover:text-white'>Sports cars </button>
                            <button className='text-black border border-gray-500 rounded-[100px] text-[14px] font-normal py-[14px] px-[20px] tablet:px-[40px] py-[19px] text-[16px] font-medium hover:bg-green-600 hover:text-white'>Vans </button>
                        </div>

                    </div>
                </div>
            </section>

            <section>
                <div className='contianer mt-4 mb-[160px]'>
                    <div className='justify-center'>
                        <div className='grid grid-cols-1 gap-5 tablet:grid-cols-2 desktop:grid-cols-3'>
                            {
                                malumot.splice(0, 6).map((i) => {
                                    return <Card key={i.id} img={i.img} nomi={i.nomi} id={i.id} tipi={i.tipi} scors={i.scors} yoqilgi={i.yoqilgi} joylar={i.joylar} cafolat={i.cafolat} />
                                })
                            }
                        </div>

                        <div className='text-center'>
                            <button className='rounded-[100px] px-7.5 py-4.5 border border-gray-500 text-[18px] font-normal cursor-pointer mt-7.5 hover:bg-green-600  '>View all cars</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}