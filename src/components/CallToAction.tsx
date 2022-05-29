import Folder from "../icons/Folder";
import Upload from "../icons/Upload";
import Document from "../icons/Document";
import Logo from "../icons/Logo";

const CallToAction = () => {
  return (
    <div className="w-5/6 lg:w-3/6 lg:mr-10 bg-darkBlue p-10 rounded-2xl rounded-tr-[100px]">
      <div className="flex flex-col">
        <div className="my-10">
          <Logo />
        </div>
        <div className="flex flex-row gap-4 items-end">
          <div className="h-14 w-14 bg-veryDarkBlue rounded-xl flex items-center justify-center hover:cursor-pointer">
            <Document />
          </div>
          <div className="h-14 w-14 bg-veryDarkBlue rounded-xl flex items-center justify-center hover:cursor-pointer">
            <Folder />
          </div>
          <div className="h-14 w-14 bg-veryDarkBlue rounded-xl flex items-center justify-center hover:cursor-pointer">
            <Upload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
