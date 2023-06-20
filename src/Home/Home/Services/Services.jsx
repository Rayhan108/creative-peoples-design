import icon from "../../../assets/icon/004-risk-management 1.png";
import icon1 from "../../../assets/icon/006-customer-support 1.png";
import icon2 from "../../../assets/icon/network.png";
import icon3 from "../../../assets/icon/Icon.png";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";

const Services = () => {
  return (
    <div>
      <div className="md:flex md:flex-row gap-[200px] ">
        <div className="md:mt-32 w-[500px] h-[460px] ">
          <div className="flex ">
            <hr className="w-[79px] hr mt-3 mr-2" />
            <p
              style={{ color: "#EB5757" }}
              className=" mb-2 text-xl font-semibold "
            >
              Our Services
            </p>
          </div>

          <div>
            <h1 className="font-bold text-5xl mt-2">
              {" "}
              Providing all Console Solution
            </h1>
            <p className="font-normal text-xl mt-5">
              Business consultants provide management consulting to help
              businesses organizations improve performance and efficienc
            </p>
          </div>
          <div>
            <div className="flex mt-16">
              <div>
                <p
                  style={{ color: "#FD9C06" }}
                  className=" text-5xl mb-2 font-bold"
                >
                  48%{" "}
                </p>
                <p className="font-bold text-xl">Satisfaction rate</p>
              </div>
              <hr className="hr2 w-[70px] mt-8" />
              <div>
                <p
                  style={{ color: "#FD9C06" }}
                  className=" text-5xl mb-2 font-bold"
                >
                  25M{" "}
                </p>
                <p className="font-bold text-xl">Registered users</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#F4F9FF] w-[991px] h-[804px] relative">
          <div className="grid md:grid-cols-2 gap-5  absolute top-[90px] right-[250px] w-[826px] h-[635px]">
            <div className="card-body bg-white ">
              <img
                style={{ width: "73px", height: "71px" }}
                className="mb-3"
                src={icon2}
                alt=""
              />
              <p className="font-semibold text-2xl mb-3">Business Analysis</p>
              <p className="font-normal text-xl mb-5">
                Business analysis is a professional discipline of identifying
                business needs determining
              </p>
              <Link
                style={{ color: " #495AF0" }}
                className="flex font-semibold text-xl"
              >
                Read More
                <BsArrowRightShort className="mt-1 ml-2 font-bold">
                  {" "}
                </BsArrowRightShort>
              </Link>
            </div>
            <div className="card-body  bg-[#FFFFFF]">
              <img
                style={{ width: "73px", height: "71px" }}
                className="mb-3"
                src={icon3}
                alt=""
              />
              <p className="font-semibold text-2xl mb-3">Financial Analysis</p>
              <p className="font-normal text-xl mb-5">
                Business analysis is a professional discipline of identifying
                business needs determining
              </p>
              <Link className="flex font-semibold text-xl">
                Read More
                <BsArrowRightShort className="mt-1 ml-2 font-bold">
                  {" "}
                </BsArrowRightShort>
              </Link>
            </div>
            <div className="card-body bg-white">
              <img
                style={{ width: "73px", height: "71px" }}
                className="mb-3"
                src={icon}
                alt=""
              />
              <p className="font-semibold text-2xl mb-3">Risk Management</p>
              <p className="font-normal text-xl mb-5">
                Business analysis is a professional discipline of identifying
                business needs determining
              </p>
              <Link className="flex font-semibold text-xl">
                Read More
                <BsArrowRightShort className="mt-1 ml-2 font-bold">
                  {" "}
                </BsArrowRightShort>
              </Link>
            </div>
            <div className="card-body bg-white">
              <img
                style={{ width: "73px", height: "71px" }}
                className="mb-3"
                src={icon1}
                alt=""
              />
              <p className="font-semibold text-2xl mb-3">
                Strategic Consulting
              </p>
              <p className="font-normal text-xl mb-5">
                Business analysis is a professional discipline of identifying
                business needs determining
              </p>
              <Link className="flex font-semibold text-xl">
                Read More
                <BsArrowRightShort className="mt-1 ml-2 font-bold">
                  {" "}
                </BsArrowRightShort>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
