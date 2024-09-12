import logo from '@/assets/img/home/logo.png';
export declare interface LogoProps {
  title?: string;
}
export default function Logo(props: LogoProps): JSX.Element {
  const { title } = props;

  return (
    <div className='flex items-center justify-between pr-4'>
      <img
        className="w-1/3 object-cover object-center"
        src={logo}
        alt="logo"
      />
      {title &&
        <span className='font-semibold'>{title}</span>
      }
    </div>
  );
}
