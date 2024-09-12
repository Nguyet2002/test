import logo from '@/assets/img/home/logo.png';
// export declare interface LogoProps {
// }
export default function Logo(): JSX.Element {

  return (
    <div>
      <img
        className="w-full object-cover object-center"
        src={logo}
        alt="logo"
      />
    </div>
  );
}
