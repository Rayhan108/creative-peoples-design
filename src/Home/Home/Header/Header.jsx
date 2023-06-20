import img from "../../../assets/img/Hero Image (1).png"
import img2 from "../../../assets/img/Group 5439.png"
import Container from "../../../component/Container";
import "./Header.css";
import { FiArrowUpRight } from "react-icons/fi";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
const Header = () => {
  return (
    <div style={{backgroundImage:`url('https://i.ibb.co/M2M6mPX/BG-1.png')`}} className="">
     <Container>
     <div className="md:flex lg:flex   md:flex-row">
        <div className="" >
          <h1 className="text-5xl font-extrabold box">
            {" "}
            <span style={{ color: "#FD9C06" }} className="">
              Hire consultant{" "}
            </span>
            for boost your <span className=""></span>business
          </h1>
          <p className="header-pera">
            Consultancy firm established by professionals with the intention to
            identify and unlock potential avenues for innovative ideas
          </p>
      
          <button className="button flex items-center justify-center mt-10 text-white">Discover More<FiArrowUpRight></FiArrowUpRight></button>
       <div className="mt-12 flex flex-row">
        <div>
        <img src={img2} alt="" />
        </div>
        <div className="ml-5">
   <div className="flex">
   <p className=" text-3xl mb-2"> <span className="font-extrabold" style={{color:"#FD9C06"}}>4.9</span>  |  </p>
          <Rating className="ml-3"
      style={{ maxWidth: 110 }}
      value={5}
      readOnly
    />
   </div>
          <p className="font-medium ">325k Total Review</p>
        </div>
       </div>
        </div>
        <div >
        <img style={{width: "496px", height: "609px"}}
              className="w-full  max-w-lg mt-10 lg:mt-0"
              src={img}
              alt=""
            />
        </div>
      </div>
     </Container>
    </div>
  );
};

export default Header;
