import ButtonPrimary from '@/mobile-components/shared/button-primary';
import React from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  fullName: string;
  phoneNumber: number;
  company: string;
  position: string
  referralCode: string;
  registerOA: boolean;
}

const RegisterPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  // const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log(data);
    // setSubmitted(true);
  };

  return (
    <div className='flex items-center justify-center w-screen h-screen'>
      <form className='w-full px-6' onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col justify-center items-center mb-10'>
          <span className='text-xl font-bold'>Đăng ký khóa học</span>
          <span className='text-sm text-[#545353]'>Vui lòng điền đúng thông tin để đăng ký khóa</span>
        </div>
        <div className='flex flex-col w-full h-auto '>
          {/* Họ và tên */}
          <div className='mb-6'>
            <input
              className='w-full h-10 pl-3 border-b-1 focus-visible:outline-none'
              type="text"
              {...register('fullName', { required: true })}
              placeholder="Họ và tên"
            />
            {errors.fullName && <span className='text-xs text-red-400'>Họ và tên là bắt buộc</span>}
          </div>

          {/* Số điện thoại */}
          <div className='mb-6'>
            <input
              className='w-full h-10 pl-3 border-b-1 focus-visible:outline-none'
              type="number"
              {...register('phoneNumber', { required: true })}
              placeholder="Số điện thoại"
            />
            {errors.phoneNumber && <span className='text-xs text-red-400'>Số điện thoại là bắt buộc</span>}
          </div>

          {/* Nhóm môn học */}
          {/* <select {...register('group', { required: true })}>
            <option value="">Chọn nhóm</option>
            <option value="nhom1">Nhóm 1</option>
            <option value="nhom2">Nhóm 2</option>
          </select> */}
          <div className='mb-6'>
            <input
              className='w-full h-10 pl-3 border-b-1 focus-visible:outline-none'
              type="string"
              {...register('company', { required: true })}
              placeholder="Công ty"
            />
            {errors.company && <span className='text-xs text-red-400'>Vui lòng nhập tên công ty</span>}
          </div>

          <div className='mb-6'>
            <input
              className='w-full h-10 pl-3 border-b-1 focus-visible:outline-none'
              type="string"
              {...register('position', { required: true })}
              placeholder="Chức vụ"
            />
            {errors.position && <span className='text-xs text-red-400'>Vui lòng nhập chức vụ</span>}
          </div>
          <div className='mb-6'>
            <input
              className='w-full h-10 pl-3 border-b-1 focus-visible:outline-none'
              type="string"
              {...register('referralCode', { required: true })}
              placeholder="Mã giới thiệu"
            />
            {errors.referralCode && <span className='text-xs text-red-400'>Vui lòng nhập mã giới thiệu</span>}
          </div>

          {/* Đăng ký OA */}
          <div className='flex items-center gap-2 w-full'>
            <input
              className='w-5 h-5'
              type="checkbox"
              {...register('registerOA')}
            />
            <span className='text-sm font-medium'>Follow OA của QTvKN để follow các thông báo của lớp học nhé.</span>
          </div>

          <div>
            <ButtonPrimary
              className='w-full mt-10 px-6 py-2 bg-[#FC9A0F] rounded-lg'
              textColor='text-white'
              children='Đăng ký ngay'
            />
          </div>
          {/* <button type="submit" disabled={submitted}>Điểm danh ngay</button> */}
          {/* {submitted && <p>Cảm ơn bạn đã điểm danh!</p>} */}
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
