import { VscBellDot } from "react-icons/vsc";
import profile from "../assets/profile.png";

function Overview() {
  return (
    <div className="ml-[280px] mt-5">
      {/* header */}
      <div className="flex items-center justify-between mr-5">
        <div className="">
          <h2 className="text-2xl font-semibold text-[#4163E9]">Overview</h2>
        </div>
        <div className="w-full flex items-center justify-end space-x-6">
          <input
            type="text"
            placeholder="Search....."
            className="input input-bordered w-full max-w-3xl bg-[#F7F7FF] rounded-full outline-none"
          />
          <div className="">
            <VscBellDot className="text-xl bg-blue-50 w-10 h-10 p-2 rounded-full text-[#4163E9]" />
          </div>
          <div className="flex items-center gap-2">
            <div className="">
              <img src={profile} alt="" />
            </div>
            <div className="">
              <h3 className="font-semibold text-lg ">Alexa Calen</h3>
              <p className="font-semibold text-gray-400">Student</p>
            </div>
          </div>
        </div>
          </div>
          
          hello
    </div>
  );
}

export default Overview;
