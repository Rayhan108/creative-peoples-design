import img1 from "../../../assets/img/Team Member-1.png"
import img2 from "../../../assets/img/Team Member-2.png"
import img3 from "../../../assets/img/Image-3.png"
import img4 from "../../../assets/img/Team Member-4.png"
import img5 from "../../../assets/img/Team Member-5.png"
const OurTeam = () => {
  return (
    <div className="mt-[120px]">
      <div className="mx-auto text-center mb-[60px]">
      <p
        style={{ color: "#EB5757" }}
        className=" mb-2 text-xl font-semibold uppercase"
      >
        our team
      </p>
      <h1 className="font-bold text-5xl mt-2"> Meet with Expert</h1>
      </div>
<div className="flex gap-[30px]">
<div>
    <img className="w-[470px] h-[500px]" src={img1} alt="" />
</div>
<div>
    <img className="w-[470px] h-[500px]" src={img2} alt="" />
</div>
<div>
    <img className="w-[470px] h-[500px]" src={img3} alt="" />
</div>
<div>
    <img className="w-[470px] h-[500px]" src={img4} alt="" />
</div>
<div>
    <img className="w-[470px] h-[500px]" src={img5} alt="" />
</div>
</div>
    </div>
  );
};

export default OurTeam;
