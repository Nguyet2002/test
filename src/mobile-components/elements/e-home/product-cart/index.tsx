import defaultImg from '@/assets/img/home/defaultImg.png';

export declare interface itemProductProps {
  nameOfClass: string;
  title: string;
  nameInstructor: string;
  timeStart: string;
  location: string;
}
export declare interface ProductCartProps {
  item?: itemProductProps;
  onClick?: () => void;
}
export default function ProductCart(props: ProductCartProps): JSX.Element {
  const { item, onClick } = props;
  console.log(item);
  

  return (
    <div onClick={onClick}>
      <span className='font-medium block my-2'>{item?.nameOfClass}</span>
      <div className='bg-white rounded-2xl'>
        <img
          className="w-full object-cover object-center rounded-t-2xl"
          src={defaultImg}
          alt="default image"
        />
        <span className='font-semibold text-xl block px-2 pt-2'>{item?.title}</span>
        <div className='px-2 pb-2 text-[#848484]'> 
          <div>
            <span>Giảng viên: </span>
            <span>{item?.nameInstructor}</span>
          </div>
          <div>
            <span>Thời gian: </span>
            <span>{item?.timeStart}</span>
          </div>
          <div>
            <span>Địa điểm: </span>
            <span>{item?.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
