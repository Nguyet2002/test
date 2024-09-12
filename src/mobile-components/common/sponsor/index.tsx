import defaultImg2 from '@/assets/img/home/defaultImg2.png';





export declare interface SponsorProps {
  className?: string;
}

const DATA = [
  {
    name: 'Sponsor 1',
    icon: defaultImg2,
  },
  {
    name: 'Sponsor 2',
    icon: defaultImg2,
  },
  {
    name: 'Sponsor 3',
    icon: defaultImg2,
  },
  {
    name: 'Sponsor 4',
    icon: defaultImg2,
  },
  {
    name: 'Sponsor 1',
    icon: defaultImg2,
  },
  {
    name: 'Sponsor 2',
    icon: defaultImg2,
  },
  {
    name: 'Sponsor 3',
    icon: defaultImg2,
  },
  {
    name: 'Sponsor 4',
    icon: defaultImg2,
  }
]
export default function Sponsor(props: SponsorProps): JSX.Element {
  const { className } = props;
  console.log(className);


  return (
    <div className="ml-[6px] mt-[8px] h-16 flex flex-col relative">
      <div className="flex h-full flex-col overflow-hidden">
        {/* <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide"> */}
        <div className="flex overflow-x-auto scrollbar-hide">
          {DATA.map((item) => (
            <div
              // key={item.id}
              className="flex-shrink-0 flex flex-col items-center justify-center w-[4.4rem] h-max"
            // onClick={() => handleItemClick(item.path!)}
            >
              <img src={item?.icon} alt='' className="w-[60px] h-[60px] rounded-xl bg-white" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
