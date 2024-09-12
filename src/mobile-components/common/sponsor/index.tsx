import defaultImg2 from '@/assets/img/home/defaultImg2.png';





export declare interface SponsorProps {
  className?: string;
}
export default function Sponsor(props: SponsorProps): JSX.Element {
    const { className } = props;
  
  return (
    <div className="ml-[6px] mt-[8px] h-20 flex flex-col relative">
          <div className="flex flex-col overflow-hidden">
            {/* <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide"> */}
            <div className="flex overflow-x-auto scrollbar-hide">
              {/* {DATA.map((item: MenuItem) => ( */}
                <div
                  // key={item.id}
                  className="flex-shrink-0 flex flex-col items-center justify-center w-[4.4rem] h-max"
                  // onClick={() => handleItemClick(item.path!)}
                >
                  {/* {item.icon ? ( */}
                    <div className="text-[32px]">item.icon</div>
                  {/* ) : ( */}
                    <img src={defaultImg2} alt='' className="w-[45px] h-[45px]" />
                  {/* )} */}
                  <span className="mt-[4px] text-[12.5px] font-[400] text-center antialiased">{item.name}</span>
                </div>
              {/* ))} */}
            </div>
          </div>
          <div className="w-full flex justify-center absolute bottom-0">
            <div className="w-[38px] h-[4px] bg-[#D9D9D9] rounded-[10px] flex justify-start overflow-hidden">
              <div
                className="w-[10px] h-full bg-[#BD234F] rounded-[10px]"
                // style={{ width: scrollWidth, transform: `translateX(${scrollOffset}px)` }}
              ></div>
            </div>
          </div>
        </div>
  );
}
