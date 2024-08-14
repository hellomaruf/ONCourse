import { VscBellDot } from "react-icons/vsc";
import profile from "../assets/profile.png";
import { RiGraduationCapFill } from "react-icons/ri";
import { BsFillMenuAppFill } from "react-icons/bs";
import BarChart from "./BarChart";

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

      {/* Main content */}
      <div className="grid grid-cols-8 gap-6 mt-6">
        <div className="col-span-3 space-y-6 ">
          <div className="flex items-end p-6 transition bg-[#F7F7FF] text-gray-900 hover:text-white hover:bg-gradient-to-r from-[#4163E9] to-[#BDC9F5]  rounded-2xl">
            <div className=" space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold ">
                  Foundations of User Experience (UX) Design
                </h3>
                <div className="flex items-center gap-3 ">
                  <h4>4 Assignment</h4>
                  <h4>20 Videos</h4>
                </div>
              </div>
              <button className="btn rounded-full bg-gradient-to-r from-[#4163E9] to-[#BDC9F5] w-[250px]">
                Continue Course
              </button>
            </div>
            <div className="">
              <div
                className="radial-progress text-[#061758]"
                style={{ "--value": 70 }}
                role="progressbar"
              >
                <div
                  className="w-10 h-10 
                bg-white rounded-full flex items-center justify-center text-gray-900 font-semibold"
                >
                  <div className="flex flex-col">
                    <span className="text-sm ">80%</span>
                    <span className="text-[6px]">Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end p-6 transition bg-[#F7F7FF] text-gray-900 hover:text-white hover:bg-gradient-to-r from-[#4163E9] to-[#BDC9F5]  rounded-2xl">
            <div className=" space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold ">
                  Foundations of User Experience (UX) Design
                </h3>
                <div className="flex items-center gap-3 ">
                  <h4>4 Assignment</h4>
                  <h4>20 Videos</h4>
                </div>
              </div>
              <button className="btn rounded-full bg-gradient-to-r from-[#4163E9] to-[#BDC9F5] w-[250px]">
                Continue Course
              </button>
            </div>
            <div className="">
              <div
                className="radial-progress text-[#061758]"
                style={{ "--value": 70 }}
                role="progressbar"
              >
                <div
                  className="w-10 h-10 
                bg-white rounded-full flex items-center justify-center text-gray-900 font-semibold"
                >
                  <div className="flex flex-col">
                    <span className="text-sm ">80%</span>
                    <span className="text-[6px]">Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end p-6 transition bg-[#F7F7FF] text-gray-900 hover:text-white hover:bg-gradient-to-r from-[#4163E9] to-[#BDC9F5]  rounded-2xl">
            <div className=" space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold ">
                  Foundations of User Experience (UX) Design
                </h3>
                <div className="flex items-center gap-3 ">
                  <h4>4 Assignment</h4>
                  <h4>20 Videos</h4>
                </div>
              </div>
              <button className="btn rounded-full bg-gradient-to-r from-[#4163E9] to-[#BDC9F5] w-[250px]">
                Continue Course
              </button>
            </div>
            <div className="">
              <div
                className="radial-progress text-[#061758]"
                style={{ "--value": 70 }}
                role="progressbar"
              >
                <div
                  className="w-10 h-10 
                bg-white rounded-full flex items-center justify-center text-gray-900 font-semibold"
                >
                  <div className="flex flex-col">
                    <span className="text-sm ">80%</span>
                    <span className="text-[6px]">Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end p-6 transition bg-[#F7F7FF] text-gray-900 hover:text-white hover:bg-gradient-to-r from-[#4163E9] to-[#BDC9F5]  rounded-2xl">
            <div className=" space-y-8">
              <div className="space-y-2">
                <h3 className="text-2xl font-semibold ">
                  Foundations of User Experience (UX) Design
                </h3>
                <div className="flex items-center gap-3 ">
                  <h4>4 Assignment</h4>
                  <h4>20 Videos</h4>
                </div>
              </div>
              <button className="btn rounded-full bg-gradient-to-r from-[#4163E9] to-[#BDC9F5] w-[250px]">
                Continue Course
              </button>
            </div>
            <div className="">
              <div
                className="radial-progress text-[#061758]"
                style={{ "--value": 70 }}
                role="progressbar"
              >
                <div
                  className="w-10 h-10 
                bg-white rounded-full flex items-center justify-center text-gray-900 font-semibold"
                >
                  <div className="flex flex-col">
                    <span className="text-sm ">80%</span>
                    <span className="text-[6px]">Complete</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5  mr-6">
          <div className="flex justify-between items-start">
            <div className=" flex bg-[#F7F7FF] p-8 rounded-2xl gap-12">
              <div className=" space-y-6">
                <h1 className="text-5xl font-bold">04</h1>
                <p className="text-xl font-semibold text-gray-400">
                  Completed Course
                </p>
              </div>
              <div className=" space-y-4 ">
                <div className=" w-16 h-16 bg-[#F7F7FF] flex items-center justify-center rounded-full">
                  <RiGraduationCapFill className="text-3xl text-[#4163E9]" />
                </div>
                <div className="">
                  <h4 className="text-xl">20% lncrease</h4>
                </div>
              </div>
            </div>
            <div className=" flex bg-[#F7F7FF] p-8 rounded-2xl gap-12">
              <div className=" space-y-6">
                <h1 className="text-5xl font-bold">12</h1>
                <p className="text-xl font-semibold text-gray-400">
                  Course in Progress
                </p>
              </div>
              <div className=" space-y-4 ">
                <div className=" w-16 h-16 bg-[#F7F7FF] flex items-center justify-center rounded-full">
                  <BsFillMenuAppFill className="text-3xl text-[#4163E9]" />
                </div>
                <div className="">
                  <h4 className="text-xl">1% Decrease</h4>
                </div>
              </div>
            </div>
                  </div>
                  
                  <div className="bg-[#F7F7FF] p-4 mt-6 rounded-2xl">
                      <div className="flex items-center justify-between">
                          <h2 className="text-2xl font-semibold">Course Activity</h2>
                          <h2 className="text-2xl font-semibold bg-white rounded-full px-4 py-1">Monthly</h2>
                      </div>
                      <BarChart/>
                  </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
