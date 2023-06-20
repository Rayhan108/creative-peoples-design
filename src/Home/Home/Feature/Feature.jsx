import { FiArrowUpRight } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import img from "../../../assets/img/feature.png"
import cardImg from "../../../assets/card/Card 01.png"

const Feature = () => {
  return (
    <div className="ml-[200px] mb-[120px] mt-[140px] flex">
      <div className="w-[721px] h-[708px]">
        <div className="flex ">
          <hr className="w-[79px] hr mt-3 mr-2" />
          <p
            style={{ color: "#EB5757" }}
            className=" mb-2 text-xl font-semibold uppercase"
          >
            features
          </p>
        </div>
        <div className="w-[721px] h-[124px]">
          <h1 className="font-bold text-5xl mt-2">
            Solve your business problems with our experts
          </h1>
        </div>
        <div className="w-[579px] h-[392px]">
          <div className="mt-[58px]">
            <div className="flex justify-between text-white bg-[#0F0F0F]">
              <p className="pt-[18px] pl-[30px] pb-[23px] pr-[218px]">
                Investing in Digital Company
              </p>
              <RxCross2 className="mt-6 mr-[12px]"></RxCross2>
            </div>
            <div className="p-[30px] feature-pera">
              <p className="text-xl font-normal">
                Through our Connected Content™ approach, we unite
                communications, digital experiences, and performance marketing
                to help more than 1600 global companies.
              </p>
            </div>

            <div className="flex justify-between feature-box mt-5">
              <p className="pt-[18px] pl-[30px] pb-[23px] pr-[218px]">
                Building the idea of future
              </p>
              <p className="mt-6 mr-[12px]">+</p>
            </div>
            <div className="flex justify-between feature-box mt-5">
              <p className="pt-[18px] pl-[30px] pb-[23px] pr-[218px]">
                Accurate and friendly support
              </p>
              <p className="mt-6 mr-[12px]">+</p>
            </div>

            <button className="button flex items-center justify-center mt-10 text-white">
              Discover More<FiArrowUpRight></FiArrowUpRight>
            </button>
          </div>
        </div>
      </div>
<div className="">
    <p className="mb-[45px]">Business consultants provide management consulting to help businesses and organizations improve performance and efficienc</p>
  <div className="">
  <img className="w-[517px] h-[615px] absolute " src={img} alt="" />
  <img className="relative top-[350px] right-[90px]" src={cardImg} alt="" />

  </div>
</div>


    </div>
  );
};

export default Feature;
