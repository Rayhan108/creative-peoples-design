import { FiArrowUpRight } from "react-icons/fi";

import img from "../../../assets/img/feature.png"
import cardImg from "../../../assets/card/Card 01.png"

const Feature = () => {
  return (
    <div className="md:ml-[200px] mb-[120px] mt-[140px] md:flex p-8">
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
        <div className="md:w-[721px] md:h-[124px]">
          <h1 className="font-bold md:text-5xl text-xl mt-2">
            Solve your business problems with our experts
          </h1>
        </div>

        <div className="grid gap-3 lg:gap-5 mt-5 lg:mt-10 w-[579px] h-[392px]">
                    <div tabIndex={0} className="collapse collapse-open collapse-plus border border-base-300 bg-base-200 rounded-md">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium bg-black text-white">
                            Investing In Digital Company
                        </div>
                        <div className="collapse-content p-3">
                            <p>Through Our Connected Contetn<sup>TM</sup> Approach, We Unite Communications, Digital EXperiences, And Performance Marketing tTo Help More Than 1600 Global Companies.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 rounded-md">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium [input:checked~&]:bg-black [input:checked~&]:text-white">
                            Building The Idea Of Future
                        </div>
                        <div className="collapse-content p-3">
                            <p>Through Our Connected Contetn<sup>TM</sup> Approach, We Unite Communications, Digital EXperiences, And Performance Marketing tTo Help More Than 1600 Global Companies.</p>
                        </div>
                    </div>
                    <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200 rounded-md">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title text-xl font-medium [input:checked~&]:bg-black [input:checked~&]:text-white">
                            Accurate And Fiendly Support
                        </div>
                        <div className="collapse-content p-3">
                            <p>Through Our Connected Contetn<sup>TM</sup> Approach, We Unite Communications, Digital EXperiences, And Performance Marketing tTo Help More Than 1600 Global Companies.</p>
                        </div>
                    </div>
                </div>
            <button className="button flex items-center justify-center mt-10 text-white">
              Discover More<FiArrowUpRight></FiArrowUpRight>
            </button>
      </div>
<div className="mb-48">
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
