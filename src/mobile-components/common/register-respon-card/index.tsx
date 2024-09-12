import ButtonPrimary from '@/mobile-components/shared/button-primary';
import successImage from '../../../assets/img/register/success.png';
import failImage from '../../../assets/img/register/fail.png';
import lateImage from '../../../assets/img/register/late.png';
import wrongLocationImage from '../../../assets/img/register/wrongLocation.png';
import notTimeImage from '../../../assets/img/register/notTime.png';

export declare interface RegisterResponCardProps {
  status?: "success" | "fail" | "late" | "wrongLocation" | "notTime";
}

const RegisterResponCard = (props: RegisterResponCardProps) => {
  const { status } = props;

  return (
    <div>
      <span className="text-center block font-semibold text-2xl pb-4">
        {status === "success" && 'Điểm danh thành công !'}
        {status === "late" && 'Điểm danh trễ'}
        {status === "wrongLocation" && 'Điểm danh sai vị trí'}
        {status === "fail" && 'Điểm danh không thành công !'}
        {status === "notTime" && 'Chưa tới giờ điểm danh'}
      </span>
      <div className='flex flex-col justify-between w-full h-[250px] p-4 bg-registerBanner bg-cover bg-bottom rounded-2xl' >
        <span className="text-[#FD9B0F] font-medium text-xl">
          {status === "success" && 'Chúc bạn có một buổi học vui vẻ của SCEO SG10 nhé'}
          {status === "late" && 'Bạn đã điểm danh trễ XX phút. Vui lòng liên hệ BTC để nộp phạt và tham gia buổi học nhé'}
          {status === "wrongLocation" && 'Vị trí điểm danh không chính xác, Bạn vui lòng đến đúng địa điểm học nhé'}
          {status === "fail" && 'SDT của bạn không nằm trong danh sách học viên. Bạn vui lòng liên hệ BTC để được hỗ trợ nhé'}
          {status === "notTime" && 'Hiện tại chưa tới giờ điểm danh. Bạn vui lòng đợi thêm ít phút nhé'}
        </span>
        <div className='flex items-end justify-between'>
          {status === "success" && <img className='w-24 h-24' src={successImage} alt="" />}
          {status === "late" && <img className='w-24 h-24' src={lateImage} alt="" />}
          {status === "wrongLocation" && <img className='w-24 h-24' src={wrongLocationImage} alt="" />}
          {status === "fail" && <img className='w-24 h-24' src={failImage} alt="" />}
          {status === "notTime" && <img className='w-24 h-24' src={notTimeImage} alt="" />}
          <ButtonPrimary
            children='Liên hệ ban quản trị'
            className='px-4 py-2 bg-[#FD9B0F] rounded-lg'
          />
        </div>
      </div>
    </div>
  );
};
export default RegisterResponCard;
