import { useState } from "react";

import { Slider } from "@mantine/core";

const DisplayUsage = () => {
  const [usageValue, setUsageValue] = useState(815);

  return (
    <div className="w-5/6 bg-darkBlue p-10 rounded-2xl mt-10">
      <div className="flex flex-col items-center">
        <h1 className="text-paleBlue font-normal">
          You’ve used <strong>{usageValue} GB</strong> of your storage
        </h1>
        <div className="w-11/12 mt-5 mb-2">
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
      <div className="absolute bg-white -translate-x-2/4 left-2/4 p-10 rounded-2xl uppercase border border-solid border-black">
        <strong className="text-4xl">{1000 - usageValue}</strong>
        <span className="text-grayBlue tracking-wider"> GB left</span>
      </div>
    </div>
  );
};

export default DisplayUsage;
