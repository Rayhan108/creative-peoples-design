import { FiArrowUpRight } from "react-icons/fi";
import client from "../../../assets/img/client.png";
import icon from "../../../assets/icon/Play Icon.png";
const Clients = () => {

  return (
    <div className=" mt-[130px] mb-[86px] p-8">
      <div className="bg-[#FFF5DA] md:w-[1920px] md:h-[568px]">
        <div className=" md:ml-[200px] md:mr-[600px] ">
          <div className="md:flex justify-between  items-center pt-[100px] md:absolute">
            <div className="md:w-[651px] md:h-[124px]">
              <h1 className="font-bold md:text-5xl text-xl mt-2">
                Our Client Says Their Satisfaction
              </h1>
            </div>
            <div className="md:ml-[250px]">
              <button className="button flex items-center justify-center mt-10 text-white">
                Discover More<FiArrowUpRight></FiArrowUpRight>
              </button>
            </div>
          </div>

          <div className="md:relative md:top-[284px] md:left-[22px] md:right-[299px]">
            <div className="md:flex md:gap-[94px]">
              <div >
                <img className=" md:absolute cursor-pointer " src={client} alt="" />
             <button onClick={() => window.my_modal_5.showModal()}>
             <img 
                  className=" md:relative top-[226px] right-[227px] bottom-[225px] left-[226px]"
                  src={icon}
                  alt=""
                />
             </button>
              </div>
              <div className="md:w-[550px] md:h-[459px] md:pt-[120px] md:pr-[98px] md:pb-[237px] md:relative md:left-[400px]">
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

                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-ozOLVOS-R8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <div className="modal-action">

                        
                    </div>
                </form>
            </dialog>
    </div>
  );
};
export default Clients;