import { Link, NavLink } from "react-router-dom";
import Container from "../component/Container";
import logo from "../assets/icon/Logo (1).png"
import { FiArrowUpRight,FiPhoneCall } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaGoogle, FaLinkedin, FaPinterest, FaTwitter} from "react-icons/fa";
const Navbar = () => {
    const navRoutes = (
        <>
          <li>
            <NavLink className=" font-bold" to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about"  className=" font-bold">About Us</NavLink>
          </li>
   
           <li> <NavLink to="/services" className=" font-bold">Services</NavLink>
          </li>
          <li>
            <NavLink to="/pricing" className=" font-bold">Pricing</NavLink>
          </li> 
        <li>    <NavLink to="/blog" className=" font-bold">Blog</NavLink></li>
      <li>      <NavLink to="/contact" className=" font-bold">Contact</NavLink></li>
          
        </>
      );
    return (
     <>
      <div className="bg-black">
        <Container>
          <div className="flex justify-between items-center">
            <div className="flex">
              <ul className="text-white flex items-center">
                <li className="mr-4">
                  <FaTwitter />
                </li>
                <li className="mr-4">
                  <FaLinkedin />
                </li>
                <li className="mr-4">
                  <FaGoogle />
                </li>
                <li>
                  <FaPinterest />
                </li>
              </ul>
            </div>

            <div className="flex items-center">
              <ul className="flex items-center text-white">
                <li className="mr-4 flex items-center">
                  <MdOutlineEmail />
                  <span className="ml-2">info.pix@gmail.com</span>
                </li>
                <li className="flex items-center">
                  <FiPhoneCall />
                  <span className="ml-2">(209) 555-0104</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* ------------------ */}
    
         <div className="navbar bg-base-100 ">
        
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="nav menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            
              
                <ul className="p-2">
                  {navRoutes}
            </ul>
            </ul>
          </div>
         
          <Link className=" normal-case text-xl " style={{marginLeft:"193px"}}>
         
            <img  style={{height:"32px",width:"200px"}}  src={logo} alt="" />
          </Link>
        </div>
        <div className="nav navbar-center hidden lg:flex ml-48" >
          <ul className="menu menu-horizontal px-1">
          {navRoutes}
          </ul>
        </div>
        
        <div className="navbar-end " style={{marginRight:"195px"}}>
          <Link className="btn btn-outline">Free Consultation<FiArrowUpRight></FiArrowUpRight></Link>
        </div>
       
      </div>
     </>
    );
};

export default Navbar;