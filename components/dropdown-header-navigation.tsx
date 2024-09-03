import type { NextPage } from "next";

export type DropdownHeaderNavigationType = {
  className?: string;
};

const DropdownHeaderNavigation: NextPage<DropdownHeaderNavigationType> = ({
  className = "",
}) => {
  return (
    <header
      className={`self-stretch bg-base-base-white border-whitesmoke border-b-[1px] border-solid box-border flex flex-row items-start justify-start pt-[0rem] px-[7.5rem] pb-[2rem] top-[0] z-[99] sticky max-w-full text-left text-[1.313rem] text-base-base-black font-sf-pro-text ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-between py-[1.125rem] px-[2rem] box-border max-w-full gap-[1.25rem]">
        <div className="h-[2.375rem] w-[38.438rem] flex flex-col items-start justify-start pt-[0.375rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[2.5rem] max-w-full">
            <div className="overflow-hidden flex flex-row items-end justify-start pt-[0.1rem] px-[0rem] pb-[0rem] gap-[0.506rem]">
              <img
                className="self-stretch w-[2.5rem] relative max-h-full overflow-hidden shrink-0 min-h-[1.875rem]"
                loading="lazy"
                alt=""
                src="/asset-1-2.svg"
              />
              <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.168rem]">
                <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[7.688rem] shrink-0 whitespace-nowrap">
                  AGENTOOR
                </a>
              </div>
            </div>
            <div className="self-stretch flex-1 flex flex-row items-center justify-between opacity-[0] max-w-full gap-[1.25rem] text-[1rem] text-neutral-neutral-800 font-text-md-regular">
              <div className="h-[1.5rem] w-[2.875rem] flex flex-row items-start justify-start">
                <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                  <a className="[text-decoration:none] self-stretch flex-1 relative leading-[1.5rem] font-semibold text-[inherit]">
                    Home
                  </a>
                </div>
              </div>
              <div className="self-stretch w-[6.125rem] flex flex-col items-center justify-start py-[0.25rem] px-[0rem] box-border">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[0.5rem]">
                    <a className="[text-decoration:none] self-stretch flex-1 relative leading-[1.5rem] font-semibold text-[inherit]">
                      Products
                    </a>
                    <img
                      className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch w-[6.875rem] flex flex-col items-center justify-start py-[0.25rem] px-[0rem] box-border">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-center gap-[0.5rem]">
                    <a className="[text-decoration:none] self-stretch flex-1 relative leading-[1.5rem] font-semibold text-[inherit]">
                      Resources
                    </a>
                    <img
                      className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="h-[1.5rem] w-[3.438rem] flex flex-row items-start justify-start">
                <div className="self-stretch flex-1 flex flex-row items-center justify-center">
                  <a className="[text-decoration:none] self-stretch flex-1 relative leading-[1.5rem] font-semibold text-[inherit]">
                    Pricing
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-[0.75rem] text-[1rem] text-base-base-white font-text-md-regular">
          <div className="h-[2.75rem] w-[5.188rem] rounded-lg" />
          <div className="rounded-lg flex flex-row items-start justify-start">
            <div className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-neutral-neutral-950 border-neutral-neutral-950 border-[1px] border-solid overflow-hidden flex flex-row items-center justify-center py-[0.5rem] px-[1.062rem] whitespace-nowrap">
              <a className="[text-decoration:none] relative leading-[1.5rem] font-semibold text-[inherit] inline-block min-w-[5.813rem]">
                Join waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DropdownHeaderNavigation;
