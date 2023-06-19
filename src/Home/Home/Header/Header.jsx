import img from "../../../assets/img/Hero Image (1).png"
import Container from "../../../component/Container";
import "./Header.css";
import { FiArrowUpRight } from "react-icons/fi";
const Header = () => {
  return (
    <div style={{backgroundImage:`url('https://i.ibb.co/M2M6mPX/BG-1.png')`}} className="">
     <Container>
     <div className="md:flex lg:flex xl:flex flex-row">
        <div className="" style={{width: "704px", height: "464px"}}>
          <h1 className="box">
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
        </div>
        <div style={{width: "743px", height: "675px"}}>
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
