import { ProductCards } from './components/yangi-qoshilganlar';
import product from './data/product';
import product2 from './data/product2';

function App() {

  return (
    <>
      <section>
        <div className='container b'>
            <h2 className='text-[32px] font-semibold bg-red-500 mb-9'>Янги қўшилганлар</h2>
          <div className=''>
            <div className='flex justify-between rounded-[20px] gap-6'>
              {product.map((item) => {
                return <ProductCards key={item.id} img={item.img} title={item.title} />
              })}
            </div>
          </div>
        </div>
      </section>

       <section>
        <div className='container b'>
          <div className=''>
            <h2 className='text-[32px] font-semibold p-[33px] text-blue-500 mb-8'>Аудио китоблар</h2>
            <div className='flex justify-between rounded-[20px] gap-6'>
              {product2.map((item) => {
                return <ProductCards key={item.id} img={item.img} title={item.title} />
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
