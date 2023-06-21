import img1 from "../../../assets/img/Image (2).png";
import { FaArrowRight, FaCommentAlt, FaEye } from "react-icons/fa";

const RegularSection = () => {
  return (
    <div className="  md:mt-[300px] mb-16">
      <div className=" text-center">
        <h1 className=" text-[54px] font-bold  ">Regular Get Update </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-5 p-8">
        <div className=" space-y-5">
          <div className=" bg-white z-10 p-2 absolute mt-8 ml-4">
            <h1>02 Dec 2021</h1>
          </div>
          <div className=" relative">
            <img src={img1} alt="" />
          </div>

          <div className=" flex ml-0 justify-between text-[#858585] w-[418px]">
            <p>Consultant</p>

            <div className=" flex gap-4">
              <div className=" flex items-center gap-2">
                <FaCommentAlt></FaCommentAlt>
                <p> 25</p>
              </div>

              <div className=" flex items-center gap-2 ">
                <FaEye></FaEye>
                <p>32k</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="w-[418px]">
            <h1 className=" text-[#0F0F0F] text-2xl">
              What is a business consultant?
            </h1>
            <p>
              A business consultant is a professional with a wide array of
              skills who assists business owners{" "}
            </p>
          </div>
          <button className="  inline-flex items-center gap-3">
            {" "}
            Read more <FaArrowRight></FaArrowRight>
          </button>
        </div>

        {/*  */}

        <div className=" space-y-5">
          <div className=" bg-white z-10 p-2 absolute mt-8 ml-4">
            <h1>02 Dec 2021</h1>
          </div>
          <div className=" relative">
            <img src={img1} alt="" />
          </div>

          <div className=" flex ml-0 justify-between text-[#858585] w-[418px]">
            <p>Consultant</p>

            <div className=" flex gap-4">
              <div className=" flex items-center gap-2">
                <FaCommentAlt></FaCommentAlt>
                <p> 25</p>
              </div>

              <div className=" flex items-center gap-2 ">
                <FaEye></FaEye>
                <p>32k</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="w-[418px]">
            <h1 className=" text-[#0F0F0F] text-2xl">
              What is a business consultant?
            </h1>
            <p>
              A business consultant is a professional with a wide array of
              skills who assists business owners{" "}
            </p>
          </div>
          <button className=" text-[#495AF0] inline-flex items-center gap-3">
            {" "}
            Read more <FaArrowRight></FaArrowRight>
          </button>
        </div>

        {/*  */}

        <div className=" space-y-5">
          <div className=" bg-white z-10 p-2 absolute mt-8 ml-4">
            <h1>02 Dec 2021</h1>
          </div>
          <div className=" relative">
            <img src={img1} alt="" />
          </div>

          <div className=" flex ml-0 justify-between text-[#858585] w-[418px]">
            <p>Consultant</p>

            <div className=" flex gap-4">
              <div className=" flex items-center gap-2">
                <FaCommentAlt></FaCommentAlt>
                <p> 25</p>
              </div>

              <div className=" flex items-center gap-2 ">
                <FaEye></FaEye>
                <p>32k</p>
              </div>
            </div>
          </div>
          <hr />
          <div className="w-[418px]">
            <h1 className=" text-[#0F0F0F] text-2xl">
              What is a business consultant?
            </h1>
            <p>
              A business consultant is a professional with a wide array of
              skills who assists business owners{" "}
            </p>
          </div>
          <button className="  inline-flex items-center gap-3">
            {" "}
            Read more <FaArrowRight></FaArrowRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegularSection;
