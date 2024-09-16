import ProductCart from '@/mobile-components/elements/e-home/product-cart';
import banner from '../../assets/img/home/banner.png';
import ButtonPrimary from '@/mobile-components/shared/button-primary';
import Sponsor from '@/mobile-components/common/sponsor';
// import Logo from '@/mobile-components/elements/e-logo';
// import { useNavigate } from '@tanstack/react-router';

export declare interface itemProductProps {
  nameOfClass: string;
  title: string;
  nameInstructor: string;
  timeStart: string;
  location: string;
}

const itemProduct = [
  {
    nameOfClass: 'Lớp học của CEOSG10',
    title: 'Buổi 20: Quản lý Trải nghiệm khách hàng xuất sắc',
    nameInstructor: 'Nguyễn Dương',
    timeStart: '20/10/2024',
    location: 'Trường cán bộ, 45 Đinh Tiên Hoàng',
  },
  {
    nameOfClass: 'Lớp học của CEOSG11',
    title: 'Buổi 20: Quản lý nhân sự hiệu quả',
    nameInstructor: 'Dương Ngọc Châu',
    timeStart: '20/11/2024',
    location: 'Trường cán bộ, 45 Đinh Tiên Hoàng',
  },
];
const HomePage = () => {
  return (
    <div className='bg-[#f2f0f0] h-full pb-12'>
      {/* Logo */}
      {/* <div className='pt-4 pl-4'>
        <Logo />
      </div> */}

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
        {itemProduct.map((item: itemProductProps) => {
          return (
            <ProductCart
              // onClick={() => navigate('/product-detail')}
              item={item}
            />
          );
        })}
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
        <Sponsor />
      </div>
    </div>
  );
};
export default HomePage;
