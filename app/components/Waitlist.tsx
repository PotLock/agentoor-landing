"use clinet";

import { motion } from "framer-motion";

const Waitlist = () => {
  return (
    <motion.section
      className="container w-fit flex justify-center z-20 bg-white"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.4,
        ease: "linear",
      }}
    >
      <div className="w-full max-w-[49.875rem] ">
        <h1 className="text-4xl sm:text-[3.5rem] leading-[120%] font-bold text-center mb-[2.5rem] text-transparent !bg-clip-text [background:linear-gradient(180deg,_#6f6f6f,_#171717)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
          Build On-Chain AI Agents
        </h1>
        <div className=" flex flex-row items-start justify-start box-border max-w-full text-xl">
          <div className="flex-1 relative leading-[150%] inline-block max-w-full">
            <span>Discover</span>
            <b>Agentoor </b>
            <span>
              the no-code framework for on-chain agent orchrestation. Build
              automatic funding workflows leveraging your favorite tools, LLMs,
              and your Web3 wallets.
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
    </motion.section>
  );
};

export default Waitlist;
