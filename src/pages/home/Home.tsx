import ProductCart from '@/mobile-components/elements/e-home/product-cart';
import banner from '../../assets/img/home/banner.png';
import ButtonPrimary from '@/mobile-components/shared/button-primary';

const HomePage = () => {
  return (
    <div className='bg-[#f2f0f0] h-full pb-96'>
      {/* Banner */}
      <div className='m-4'>
        <img
          className="w-full object-cover object-center"
          src={banner}
          alt="nature image"
        />
      </div>
      {/* Product-cart */}
      <div className='mx-4'>
        <ProductCart
          nameOfClass='Lớp học của CEOSG10'
        />
      </div>
      <div className='mx-4'>
        <ProductCart
          nameOfClass='Lớp học của CEOSG10'
        />
      </div>
      {/* Button Liên hệ */}
      <div className='text-end m-4'>
        <ButtonPrimary
          children='Liên hệ ban quản trị'
          className='px-6 py-3 bg-[#2C2C2C] rounded-lg'
        />
      </div>
      {/* Nhà tài trợ */}
      <div className='mx-2 text-2xl font-medium text-[#545353]'>
        <span>Nhà tài trợ</span>
      </div>
    </div>
  );
};
export default HomePage;
