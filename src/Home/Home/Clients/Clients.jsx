import { FiArrowUpRight } from "react-icons/fi";
import client from "../../../assets/img/client.png"
import icon from "../../../assets/icon/Play Icon.png"
const Clients = () => {
    return (
        <div className=" mt-[130px] mb-[86px]">
            <div className="bg-[#FFF5DA] w-[1920px] h-[568px]">

<div className=" ml-[200px] mr-[600px] ">
   <div className="md:flex justify-between  items-center pt-[100px] absolute">
   <div className="w-[651px] h-[124px]">
    <h1 className="font-bold md:text-5xl text-xl mt-2">
    Our Client Says Their Satisfaction
          </h1>
    </div>
    <div className="ml-[250px]">
    <button className="button flex items-center justify-center mt-10 text-white">
              Discover More<FiArrowUpRight></FiArrowUpRight>
            </button>
    </div>

   </div>

<div className="relative top-[284px] left-[22px] right-[299px]">
<div className="flex gap-[94px]">
               
                  <div>
                  <img  className="absolute cursor-pointer" src={client} alt="" />
                  <img className="relative top-[226px] right-[227px] bottom-[225px] left-[226px]" src={icon} alt="" />
                  </div>
            <div className="w-[550px] h-[459px] pt-[120px] pr-[98px] pb-[237px] relative left-[400px]">
<p>Will is one of the most knowledgeable and competent people I have ever met in the IT field. The more difficult the IT challenge, the more Will enjoys the work. He always delivers the highest quality results and client satisfaction is his major goal.</p>
            </div>
                </div>
</div>

</div>

            </div>
        </div>
    );
};

export default Clients;