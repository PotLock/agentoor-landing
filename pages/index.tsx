import type { NextPage } from "next";
import DropdownHeaderNavigation from "../components/dropdown-header-navigation";

const Waitlist: NextPage = () => {
  return (
    <div className="w-full relative bg-base-base-white overflow-hidden flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.125rem] box-border gap-[15.562rem] leading-[normal] tracking-[normal]">
      <DropdownHeaderNavigation />
      <img
        className="w-[42.725rem] h-[36.506rem] !m-[0] absolute top-[-4.062rem] right-[-26.537rem] object-contain"
        alt=""
        src="/agentblock@2x.png"
      />
      <img
        className="w-[40.081rem] h-[31.263rem] !m-[0] absolute top-[6.581rem] left-[-24.956rem] object-contain"
        loading="lazy"
        alt=""
        src="/functionality@2x.png"
      />
      <img
        className="w-[20.919rem] h-[27.244rem] absolute !m-[0] right-[-7.606rem] bottom-[-8.869rem] rounded-lg overflow-hidden shrink-0 object-contain"
        loading="lazy"
        alt=""
        src="/integrations@2x.png"
      />
      <section className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border relative max-w-full text-center text-[3.5rem] text-neutral-neutral-600 font-text-md-regular">
        <div className="w-[49.875rem] flex flex-col items-start justify-start gap-[19rem] max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[3rem] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[2.5rem] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit leading-[120%] font-bold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#6f6f6f,_#171717)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Build On-Chain AI Agents `}</h1>
              <div className="self-stretch flex flex-row items-start justify-start py-[0rem] px-[4.812rem] box-border max-w-full text-[1.25rem]">
                <div className="flex-1 relative leading-[150%] inline-block max-w-full">
                  <span>{`Discover `}</span>
                  <b>Agentoor</b>
                  <span>
                    the no-code framework for on-chain agent orchrestation.
                    Build automatic funding workflows leveraging your favorite
                    tools, LLMs, and your Web3 wallets.
                  </span>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border max-w-full text-[1.063rem] text-neutral-neutral-300">
              <div className="w-[38.375rem] shadow-[0px_0px_0px_1px_rgba(0,_0,_0,_0.04),_0px_1px_2px_-0.5px_rgba(103,_108,_115,_0.14),_0px_2px_2px_-1px_rgba(103,_108,_115,_0.12)] rounded-[32px] bg-base-base-white border-neutral-neutral-200 border-[1px] border-solid box-border overflow-hidden shrink-0 flex flex-row items-start justify-between py-[0.187rem] pl-[1.687rem] pr-[0.437rem] gap-[1.25rem] max-w-full">
                <div className="flex flex-col items-start justify-start pt-[0.625rem] px-[0rem] pb-[0rem]">
                  <div className="relative tracking-[-0.01em] leading-[1.625rem] inline-block min-w-[8rem]">{`Enter your email `}</div>
                </div>
                <Button className="h-[2.75rem] w-[10.813rem] rounded-[47.32px] bg-neutral-neutral-950 overflow-hidden shrink-0 flex flex-row items-start justify-start py-[0.625rem] px-[1.375rem] box-border gap-[0.625rem]">
                  <div className="h-[1.5rem] w-[6.063rem] relative text-[1.063rem] tracking-[-0.01em] leading-[143%] font-medium font-text-md-regular text-base-base-white text-left inline-block">
                    Join Waitlist
                  </div>
                  <div className="h-[1.375rem] w-[1.25rem] flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border">
                    <img
                      className="w-[1.25rem] h-[1.25rem] relative object-contain"
                      alt=""
                    />
                  </div>
                </Button>
              </div>
            </div>
          </div>
          <footer className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.312rem] pr-[1.25rem] text-left text-[1rem] text-neutral-neutral-600 font-text-md-regular">
            <div className="relative leading-[1.5rem]">
              © 2024 by <a href="https://potluck.software" target="_blank" rel="noopener noreferrer">Potluck Labs Inc.</a> Inc.. All rights reserved.
            </div>
          </footer>
        </div>
        <img
          className="self-stretch w-[25.856rem] !m-[0] absolute bottom-[-9.962rem] left-[-16.312rem] rounded-[10.29px] max-h-full overflow-hidden shrink-0 object-contain"
          loading="lazy"
          alt=""
          src="/types-of-wallet@2x.png"
        />
      </section>
    </div>
  );
};

export default Waitlist;
