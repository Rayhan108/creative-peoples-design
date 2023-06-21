import { FiArrowUpRight } from "react-icons/fi";
import client from "../../../assets/img/client.png";
import icon from "../../../assets/icon/Play Icon.png";
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
              <div >
                <img className="absolute cursor-pointer" src={client} alt="" />
             <button onClick={() => window.my_modal_5.showModal()}>
             <img 
                  className="relative top-[226px] right-[227px] bottom-[225px] left-[226px]"
                  src={icon}
                  alt=""
                />
             </button>
              </div>
              <div className="w-[550px] h-[459px] pt-[120px] pr-[98px] pb-[237px] relative left-[400px]">
                <p>
                  Will is one of the most knowledgeable and competent people I
                  have ever met in the IT field. The more difficult the IT
                  challenge, the more Will enjoys the work. He always delivers
                  the highest quality results and client satisfaction is his
                  major goal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle w-96 mx-auto">
                <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-ozOLVOS-R8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    <div className="modal-action">

                        
                    </div>
                </form>
            </dialog>
    </div>
  );
};

export default Clients;
