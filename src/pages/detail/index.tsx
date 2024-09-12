import Logo from "@/mobile-components/elements/e-logo";
import defaultImg from '@/assets/img/home/defaultImg.png';
import ButtonPrimary from "@/mobile-components/shared/button-primary";

const ProductDetail = () => {
  return (
    <div className='h-full px-4'>
      <div className='w-36 py-4 pl-4'>
        <Logo />
      </div>
      <div>
        <img
          className="w-full object-cover object-center rounded-2xl"
          src={defaultImg}
          alt="default image"
        />
      </div>
      <div>
        <span className="text-lg font-medium mt-4 block">Buổi 20: Quản lý Trải nghiệm khách hàng xuất sắc</span>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 py-4">
            <img className="w-16 h-16 rounded-full" src={defaultImg} alt="" />
            <div className="flex flex-col">
              <span className="text-sm font-medium">Nguyễn Dương</span>
              <span className="text-xs text-[#838383] font-medium">Tiến sĩ marketing</span>
            </div>
          </div>
          <div>
            <ButtonPrimary
              children='Liên hệ ban quản trị'
              className='px-4 py-2 text-sm bg-[#2C2C2C] rounded-lg'
            />
          </div>
        </div>
        <div className="text-[#838383] text-sm">
          <span className="block">Giới thiệu</span>
          <span>Nhận thức là điều khách hàng nghĩ, cảm nhận và đánh giá về sản phẩm,
            con người, quy trình, hệ thống của doanh nghiệp sau khi tương tác. Còn
            tương tác là tất cả các tiếp xúc, những lần tiếp cận giữa khách hàng với
            doanh nghiệp qua các kênh như website, truyền thông, điểm bán…
          </span>
        </div>
      </div>
      <div className="border border-[#dedede] py-4 px-12 mt-4 rounded-2xl">
        <span className="block font-medium text-center">Thông tin buổi học:</span>
        <div className="font-medium text-sm">
          <div>
            <span>Thời gian: </span>
            <span>8h30 -12h ngày 20/10/2024</span>
          </div>
          <div>
            <span>Địa điểm: </span>
            <span>45 Đinh Tiên Hoàng, Phường Đakao, Quận 1, TPHCM</span>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-4 ">
        <ButtonPrimary
          children='Đăng ký'
          className='w-full px-4 py-2 text-sm font-semibold bg-white border rounded-lg'
          textColor="text-[#838383]"
        />
        <ButtonPrimary
          children='Điểm danh'
          className='w-full px-4 py-2 text-sm font-semibold bg-[#FD9B0F] rounded-lg'
        />
      </div>
    </div>
  );
};
export default ProductDetail;
