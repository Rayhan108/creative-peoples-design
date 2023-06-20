import logo1 from "../../../assets/icon/Dribbble.png"
import logo2 from "../../../assets/icon/Behance.png"
import logo3 from "../../../assets/icon/Instagram.png"
import logo4 from "../../../assets/icon/Github.png"
import logo5 from "../../../assets/icon/Stackoverflow.png"


const Sponser = () => {
    return (
        <div style={{width: "100%",
            height: "276px"}} className="bg-[#FFFFFF] ml-52 md:flex  md:mt-28">
       
          <div    className="md:mr-28  mt-5">
            
          <img style={{width: "137px",
            height: "33px"}}
           
              src={logo1}
              alt=""
            />
          </div>
          <div  className="md:mr-28 mt-5">
            
          <img style={{width: "137px",
            height: "33px"}}
             
              src={logo2}
              alt=""
            />
          </div>
          <div  className="md:mr-28 mt-5">
            
          <img style={{width: "137px",
            height: "33px"}}
             
              src={logo3}
              alt=""
            />
          </div>
          <div  className="md:mr-28 mt-5">
            
          <img style={{width: "137px",
            height: "33px"}}
             
              src={logo4}
              alt=""
            />
          </div>
          <div>
            
          <img style={{width: "137px",
            height: "33px"}}
              className="mt-5"
              src={logo5}
              alt=""
            />
          </div>
       
        </div>
    );
};

export default Sponser;