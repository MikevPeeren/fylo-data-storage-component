import { useState } from "react";

import { Slider } from "@mantine/core";

const DisplayUsage = () => {
  const [usageValue, setUsageValue] = useState(815);

  return (
    <div className="w-5/6 bg-darkBlue p-10 rounded-2xl mt-10 relative">
      <div className="hidden lg:flex absolute items-center bg-white -top-20 right-10 p-8 rounded-2xl rounded-br-none uppercase shadow-xl">
        <strong className="text-4xl mx-2">{1000 - usageValue}</strong>
        <span className="text-grayBlue tracking-wider"> GB left</span>
      </div>
      <div className="hidden lg:flex absolute right-10 top-2">
        <div className="w-11 overflow-hidden inline-block">
          <div className="h-16 bg-white -rotate-45 transform origin-top-left"></div>
        </div>
      </div>
      <div className="flex flex-col items-center lg:items-start mb-10 lg:mb-0">
        <h1 className="text-paleBlue font-normal">
          You’ve used <strong>{usageValue} GB</strong> of your storage
        </h1>
        <div className="w-11/12 lg:w-full mt-5 mb-2">
          <Slider
            value={usageValue}
            onChange={setUsageValue}
            defaultValue={usageValue}
            min={0}
            max={1000}
          />
        </div>
        <div className="flex w-11/12 flex-row justify-between text-paleBlue text-uppercase font-bold text-sm">
          <span>0 GB</span>
          <span>1000 GB</span>
        </div>
      </div>
      <div className="lg:hidden absolute flex items-center bg-white -translate-x-2/4 left-2/4 p-8 rounded-2xl uppercase shadow-xl">
        <strong className="text-4xl mx-2">{1000 - usageValue}</strong>
        <span className="text-grayBlue text-xs tracking-wider"> GB left</span>
      </div>
    </div>
  );
};

export default DisplayUsage;
