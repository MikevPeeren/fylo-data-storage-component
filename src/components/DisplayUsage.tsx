import { Slider } from "@mantine/core";

const DisplayUsage = () => {
  return (
    <div className="w-5/6 bg-darkBlue p-10 rounded-xl mt-10">
      <div className="flex flex-col items-center">
        <h1 className="text-paleBlue font-normal">
          You’ve used <strong>815 GB</strong> of your storage
        </h1>
        <div className="w-11/12 mt-5 mb-2">
          <Slider defaultValue={815} min={0} max={1000} />
        </div>
        <div className="flex w-11/12 flex-row justify-between text-paleBlue text-uppercase font-bold text-sm">
          <span>0 GB</span>
          <span>1000 GB</span>
        </div>
      </div>
    </div>
  );
};

export default DisplayUsage;
