import React, { useState } from "react";
import type { NextPage } from "next";

export type DropdownHeaderNavigationType = {
  className?: string;
};

const DropdownHeaderNavigation: NextPage<DropdownHeaderNavigationType> = ({
  className = "",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
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
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0.75rem] text-[1rem] font-text-md-regular">
            <div className="h-[2.75rem] w-[5.188rem] rounded-lg" />
            <div className="rounded-lg flex flex-row items-start justify-start">
              <button
                onClick={() => setIsModalOpen(true)}
                className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-neutral-neutral-950 border-neutral-neutral-950 border-[1px] border-solid overflow-hidden flex flex-row items-center justify-center py-[0.5rem] px-[1.062rem] whitespace-nowrap hover:opacity-80 transition-opacity duration-300"
              >
                <span className="relative leading-[1.5rem] font-semibold text-white inline-block min-w-[5.813rem]">
                  Join waitlist
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[99999]">
          <div className="bg-white p-4 rounded-lg w-[95%] h-[95%] max-w-[95vw] max-h-[95vh] overflow-y-auto relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
            >
              ✕
            </button>
            <iframe
              src="https://embeds.beehiiv.com/44d80fc6-7f5d-4bac-8a72-af2a4e38b643"
              data-test-id="beehiiv-embed"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              style={{
                borderRadius: '4px',
                border: '2px solid #e5e7eb',
                margin: '0',
                backgroundColor: 'transparent',
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default DropdownHeaderNavigation;
