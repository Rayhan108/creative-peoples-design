import { AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn, FaPinterestP } from 'react-icons/fa'
import img1 from "../../../assets/img/Team Member-1.png"
import img2 from "../../../assets/img/Team Member-2.png"
import img3 from "../../../assets/img/team3.png"
import img4 from "../../../assets/img/Team Member-4.png"
import img5 from "../../../assets/img/Team Member-5.png"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
const OurTeam = () => {
  return (
    <div>
          <div className="mx-auto text-center mb-[60px]">
      <p
        style={{ color: "#EB5757" }}
        className=" mb-2 text-xl font-semibold uppercase"
      >
        our team
      </p>
      <h1 className="font-bold text-5xl mt-2"> Meet with Expert</h1>
      </div>
      <Swiper
    slidesPerView={4}
    spaceBetween={30}
    centeredSlides={true}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    className="mySwiper"
  >
    <SwiperSlide className="mb-16">
        <img className="w-[470px] h-[550px]"  src={img1} alt="" />
             
             </SwiperSlide>
    <SwiperSlide>
        <img className="w-[470px] h-[550px]"  src={img2} alt="" />
     
             </SwiperSlide>
    <SwiperSlide>
        <img className="w-[470px] h-[550px]"  src={img3} alt="" />
        <div className="translate-y-1 bg-white">
                    <div className="flex items-center justify-between p-3 md:w-[370px]  -mt-[80px]">
                        <div>
                            <h3 className="font-bold lg:text-xl">Jenny Wilson</h3>
                            <p className="lg:text-lg">St. Celina, Delaware</p>
                        </div>
                        <div className="flex gap-3">
                            <AiOutlineTwitter className="border rounded-full text-4xl lg:text-5xl p-2 bg-[#50D0F9] text-white cursor-pointer"></AiOutlineTwitter>
                            <FaLinkedinIn className="border rounded-full text-4xl lg:text-5xl p-2 bg-[#3F51F6] text-white cursor-pointer"></FaLinkedinIn>
                            <FaPinterestP className="border rounded-full text-4xl lg:text-5xl p-2 bg-[#EF2121] text-white cursor-pointer"></FaPinterestP>
                        </div>
                    </div>
                    </div>
             </SwiperSlide>
    <SwiperSlide>
        <img className="w-[470px] h-[550px]"  src={img4} alt="" />
        
             </SwiperSlide>
    <SwiperSlide>
        <img className="w-[470px] h-[550px]"  src={img5} alt="" />
       
             </SwiperSlide>
  
   
   
   
  </Swiper>
    </div>

  );
};

export default OurTeam;
