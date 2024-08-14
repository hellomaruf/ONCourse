import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { BsFillHouseAddFill, BsGraphUp } from "react-icons/bs";
import { NavLink } from "react-router-dom";
// import useAuth from '../../../hooks/useAuth'
import { Link } from "react-router-dom";
import { MdHomeWork } from "react-icons/md";
import logo from "../assets/logo.png";
import { LuGraduationCap } from "react-icons/lu";
import { GoBook } from "react-icons/go";
import { FiDollarSign } from "react-icons/fi";
import { GiProgression } from "react-icons/gi";
import { BiSolidDashboard } from "react-icons/bi";

const Sidebar = () => {
  //   const { logOut } = useAuth()
  const [isActive, setActive] = useState(false);

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <img
                // className='hidden md:block'
                src={logo}
                alt="logo"
                width="100"
                height="100"
              />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#F7F7FF] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className=" hidden md:flex px-4 py-2 rounded-lg justify-center items-center mx-auto">
              <Link to="/">
                <img
                  // className='hidden md:block'
                  src={logo}
                  alt="logo"
                  width="200"
                  height="100"
                />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* Statistics */}
              <NavLink
                to="/overview"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? " text-[#6C72FF] border-l-4 border-[#6C72FF] " : "text-gray-600"
                  }`
                }
              >
                <BiSolidDashboard className="w-5 h-5" />

                <span className="mx-4 font-medium">Overview</span>
              </NavLink>

              {/* Add Room */}
              <NavLink
                to="add-room"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <GoBook className="w-5 h-5" />

                <span className="mx-4 font-medium">My Course</span>
              </NavLink>
              {/* My Listing */}
              <NavLink
                to="my-listings"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <LuGraduationCap className="w-5 h-5" />

                <span className="mx-4 font-medium">Completed</span>
              </NavLink>
              <NavLink
                to="my-listings"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <MdHomeWork className="w-5 h-5" />

                <span className="mx-4 font-medium">Financial Aid</span>
              </NavLink>
              <NavLink
                to="my-listings"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <FiDollarSign className="w-5 h-5" />

                <span className="mx-4 font-medium">Transactions</span>
              </NavLink>
              <NavLink
                to="my-listings"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <GiProgression className="w-5 h-5" />

                <span className="mx-4 font-medium">Reports</span>
              </NavLink>
              <NavLink
                to="my-listings"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <BsGraphUp className="w-5 h-5" />

                <span className="mx-4 font-medium">Statistics</span>
              </NavLink>
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Support</span>
          </NavLink>
          <button
            // onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <FcSettings className="w-5 h-5" />

            <span className="mx-4 font-medium">Setting</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
