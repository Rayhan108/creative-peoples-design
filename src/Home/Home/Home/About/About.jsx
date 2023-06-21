import { FiArrowUpRight } from "react-icons/fi";
import img from "../../../../assets/img/Image.png";

const About = () => {
  return (
    <div className="md:flex md:gap-[90px] p-5">
      <div className="bg-[#FFF5DA] ">
        <div className="md:ml-[200px] md:w-[688px] md:h-[595px] mb-12 ">
          <img className=" md:mt-[163px]" src={img} alt="" />
        </div>
      </div>

      <div>
      <div className="md:mt-32 w-[542px] h-[630px] mr-[200px]">
          <div className="flex ">
            <hr className="w-[79px] hr mt-3 mr-2" />
            <p
              style={{ color: "#EB5757" }}
              className=" mb-2 text-xl font-semibold uppercase"
            >
           About Us
            </p>
          </div>

          <div>
            <h1 className="font-bold text-5xl mt-2">
              {" "}
              We are aware for our quality to successful business
            </h1>
            <p className="font-normal text-xl mt-5">
            Learn how to start your business consulting firm. Effective strategies for business consultants and things to consider before becoming a consultant
            </p>
            
          <button className="button flex items-center justify-center mt-10 text-white">More About Us<FiArrowUpRight></FiArrowUpRight></button>
          </div>
          <div>
            <div className="flex mb-5">
           
              <div className="border-0 border-t-2 border-bg md:mt-[60px] md:mr-[46px] pt-8 w-[150px] h-[104px]">
                <p
                  style={{ color: "#FD9C06" }}
                  className=" text-5xl mb-2 font-bold text-left"
                >
                  2760+{" "}
                </p>
                <p className="font-bold text-left">Total Customer</p>
              </div>
              <div className="border-0 border-t-2 border-bg md:mt-[60px] mr-[46px] pt-8 w-[150px] h-[104px]">
                <p
                  style={{ color: "#FD9C06" }}
                  className=" text-5xl mb-2 font-bold text-left"
                >
                  25+{" "}
                </p>
                <p className="font-bold text-left">Years Experience</p>
              </div>
              <div className="border-0 border-t-2 border-bg md:mt-[60px] w-[150px] h-[104px] mr-[46px] pt-8 ">
                <p
                  style={{ color: "#FD9C06" }}
                  className=" text-5xl mb-2 font-bold text-left"
                >
                  328+{" "}
                </p>
                <p className="font-bold  text-left">Team Members</p>
              </div>
              
          
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
