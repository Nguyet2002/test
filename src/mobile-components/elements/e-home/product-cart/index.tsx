import defaultImg from '@/assets/img/home/defaultImg.png';





export declare interface ProductCartProps {
  nameOfClass?: string;
  title?: string;
}
export default function ProductCart(props: ProductCartProps): JSX.Element {
  const { nameOfClass } = props;

  return (
    <div>
      <span className='font-medium block my-2'>{nameOfClass}</span>
      <div className='bg-white rounded-2xl'>
        <img
          className="w-full object-cover object-center rounded-t-2xl"
          src={defaultImg}
          alt="default image"
        />
        <span className='font-semibold text-xl block px-2 pt-2'>Buổi 20: Quản lý Trải nghiệm khách hàng xuất sắc</span>
        <div className='px-2 pb-2 text-[#848484]'> 
          <div>
            <span>Giảng viên: </span>
            <span>Nguyễn Dương</span>
          </div>
          <div>
            <span>Thời gian: </span>
            <span>20/10/2024</span>
          </div>
          <div>
            <span>Địa điểm: </span>
            <span>Trường cán bộ, 45 Đinh Tiên Hoàng</span>
          </div>
        </div>
      </div>
    </div>
  );
}
