import RegisterResponCard from "@/mobile-components/common/register-respon-card";
import Sponsor from "@/mobile-components/common/sponsor";
import Logo from "@/mobile-components/elements/e-logo";
const RegisterRespon = () => {
  return (
    <div className='flex flex-col justify-between bg-[#f2f0f0] h-screen pb-12 px-4'>
      <div className='pt-4 pl-4'>
        <Logo title="BỨC PHÁ VƯƠN TẦM" />
      </div>
      <div className="mt-20">
        <RegisterResponCard status="registerFail"/>
      </div>
      <div className='text-2xl font-medium text-[#545353]'>
        <Sponsor />
      </div>
    </div>
  );
};
export default RegisterRespon;
