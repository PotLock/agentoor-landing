"use client";

import { useState } from "react";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen w-full relative bg-base-base-white overflow-hidden">
      <header className="bg-base-base-white border-whitesmoke border-b-[1px] border-solid box-border flex   justify-start pt-[0rem] container pb-[2rem] top-[0] z-[99] sticky max-w-full text-left text-[1.313rem] text-base-base-black font-sf-pro-text">
        <div className="flex-1 flex  justify-between py-5 box-border max-w-full gap-5">
          <div className="overflow-hidden flex flex-row items-end justify-start pt-[0.1rem] px-[0rem] pb-[0rem] gap-[0.506rem]">
            <img
              className="w-[2.5rem] relative max-h-full min-h-[1.875rem]"
              alt="logo"
              src="/asset-1-2.svg"
            />
            <div className="relative font-bold  min-w-[7.688rem] shrink-0">
              AGENTOOR
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0.75rem] text-[1rem] font-text-md-regular">
            <div className="rounded-lg flex flex-row items-start justify-start">
              <button
                onClick={() => setIsModalOpen(true)}
                className="shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] cursor-pointer min-w-[5.813rem] leading-[1.5rem] font-semibold text-white rounded-lg bg-neutral-neutral-950 border-neutral-neutral-950 border-[1px] border-solid  flex items-center justify-center py-[0.5rem] px-[1.062rem] hover:opacity-80 transition-opacity duration-300"
              >
                Join waitlist
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center relative">
        <img
          className="w-[42.725rem] h-[36.506rem] absolute top-[-4.062rem] right-[-26.537rem] object-contain z-10"
          alt=""
          src="/agentblock@2x.png"
        />
        <img
          className="w-[40.081rem] h-[31.263rem] absolute top-[6.581rem] left-[-24.956rem] object-contain z-10"
          loading="lazy"
          alt=""
          src="/functionality@2x.png"
        />
        <img
          className="w-[20.919rem] h-[27.244rem] absolute right-[-7.606rem] bottom-[-8.869rem] rounded-lg overflow-hidden shrink-0 object-contain z-10"
          loading="lazy"
          alt=""
          src="/integrations@2x.png"
        />
        <section className="container flex justify-center bg-white z-20">
          <div className="w-full max-w-[49.875rem]  ">
            <h1 className="text-4xl sm:text-[3.5rem] leading-[120%] font-bold text-center mb-[2.5rem] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#6f6f6f,_#171717)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
              Build On-Chain AI Agents
            </h1>
            <div className=" flex flex-row items-start justify-start box-border max-w-full text-xl">
              <div className="flex-1 relative leading-[150%] inline-block max-w-full">
                <span>{`Discover `}</span>
                <b>Agentoor </b>
                <span>
                  the no-code framework for on-chain agent orchrestation. Build
                  automatic funding workflows leveraging your favorite tools,
                  LLMs, and your Web3 wallets.
                </span>
              </div>
            </div>
            <div className="w-full max-w-[38.375rem] mx-auto mt-[3rem]">
              <iframe
                src="https://embeds.beehiiv.com/44d80fc6-7f5d-4bac-8a72-af2a4e38b643?slim=true"
                data-test-id="beehiiv-embed"
                height="52"
                frameBorder="0"
                scrolling="no"
                style={{
                  margin: 0,
                  backgroundColor: "transparent",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </section>

        <img
          className="w-[25.856rem] absolute bottom-[-9.962rem] left-[-16.312rem] rounded-[10.29px] max-h-full overflow-hidden shrink-0 object-contain z-10"
          loading="lazy"
          alt=""
          src="/types-of-wallet@2x.png"
        />
      </main>

      <footer className="w-full py-[1rem] px-[1.25rem] text-center text-[1rem] text-neutral-neutral-600 font-text-md-regular bg-white z-30">
        <div className="relative leading-[1.5rem]">
          © 2024 by{" "}
          <a
            href="https://potluck.software"
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline text-neutral-neutral-600 hover:text-neutral-neutral-600"
          >
            Potluck Labs Inc.
          </a>{" "}
          All rights reserved.
        </div>
      </footer>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[999999]">
          <div className="bg-white p-4 rounded-lg w-[95%] h-[95%] max-w-[95vw] max-h-[95vh] overflow-y-auto relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 text-2xl"
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
                borderRadius: "4px",
                border: "2px solid #e5e7eb",
                margin: "0",
                backgroundColor: "transparent",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
