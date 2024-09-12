import ProductCart from '@/mobile-components/elements/e-home/product-cart';
import banner from '../../assets/img/home/banner.png';
import ButtonPrimary from '@/mobile-components/shared/button-primary';
import Sponsor from '@/mobile-components/common/sponsor';
import Logo from '@/mobile-components/elements/e-logo';
// import { useNavigate } from '@tanstack/react-router';

const HomePage = () => {
  // const navigate = useNavigate();
  return (
    <div className='bg-[#f2f0f0] h-full pb-12'>
      {/* Logo */}
      <div className='w-36 pt-4 pl-4'>
        <Logo />
      </div>

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
          // onClick={() => navigate('/product-detail')}
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
        <Sponsor />
      </div>
    </div>
  );
};
export default HomePage;
