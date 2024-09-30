import React, { useState, useRef } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { FaBlog } from "react-icons/fa6";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { RiServiceFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";
import { RiCustomerService2Fill } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { GiBrain } from "react-icons/gi";
import { SiSpringCreators } from "react-icons/si";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBookReader } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className=" flex  flex-col gap-2 z-50 ">
        <div className="navbar lg:max-h-16 lg:h-screen bg-white flex  z-50  flex-row justify-between items-center font-poppins italic px-8  fixed top-0  w-screen  max-h-16 shadow-lg">
          <div
            className="navbar_left  cursor-pointer
              "
          >
            <img className=" h-12 lg:h-14 p-1" src={logo} alt="" />
          </div>
          <div className="navbar_right hidden lg:flex">
            <ul className="option flex flex-row gap-x-8  font-semibold ">
              <Link spy={true} smooth={true} to="Home">
                <li
                  className="ng hover:underline underline-offset-4 hover:text-cyan-600 hover:text-shadow-lg cursor-pointer hover:font-Berkshire"
                  onClick={() => scrollToRef(homeRef)}
                >
                  CREATIVITY
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Section3">
                <li className="ng hover:underline underline-offset-4 hover:text-cyan-600 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                  PORTFOLIO
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Section4">
                <li className="ng hover:underline underline-offset-4 hover:text-cyan-600 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                  SERVICES
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Section5">
                <li className="ng hover:underline underline-offset-4 hover:text-cyan-600 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                  PRICING
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Section6">
                <li className="ng hover:underline underline-offset-4 hover:text-cyan-600 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                  WORK
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Section7">
                <li className="ng hover:underline underline-offset-4 hover:text-cyan-600 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                  REVIEW
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Section8">
                <li className="ng hover:underline underline-offset-4 hover:text-cyan-600 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                  BLOG
                </li>
              </Link>
            </ul>
          </div>
          <div
            className="menu text-4xl lg:hidden text-cyan-600 hover:text-black  cursor-pointer hover:rotate-180 ease-in-out duration-300 te  text-shadow-xl"
            onClick={toggleMenu}
          >
            {isOpen ? <MdOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </div>
        {isOpen && (
          <>
          <div  onClick={toggleMenu}  className=" h-screen w-screen fixed bg-cyan-400 opacity-20">

          </div>
          
            <div
            
             className="  lg:hidden  right-0 flex   bg-white border-spacing-1 border border-black shadow-md shadow-current  z-40  px-6 rounded-t-xl rounded-b-xl py-1   fixed ">
              <ul className="option flex flex-col  font-semibold  h-screen justify-between w-64">
                <Link spy={true} smooth={true} to="Home">
                  <li className="ng   border-cyan-600 flex gap-3 border-b-2  hover:text-cyan-600 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                    <SiSpringCreators />
                    </li>
                </Link>

                <Link spy={true} smooth={true} to="Home">
                  <li className="ng   border-cyan-600 flex gap-3 border-b-2  hover:text-cyan-600 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                    <SiSpringCreators /> Creativity
                  </li>
                </Link>

                <Link spy={true} smooth={true} to="Section3">
                  <li className="ng   border-cyan-600 flex gap-3 border-b-2  hover:text-cyan-600 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                    <FaBookReader /> Portfolio
                  </li>
                </Link>

                <Link spy={true} smooth={true} to="Section4">
                  <li className="ng   border-cyan-600 flex gap-3 border-b-2  hover:text-cyan-600 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                    <GrWorkshop /> Services
                  </li>
                </Link>

                <Link spy={true} smooth={true} to="Section5">
                  <li className="ng4 border-cyan-600 flex gap-3  border-b-2  hover:text-cyan-600 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                    <MdCastForEducation /> Pricing
                  </li>
                </Link>

                <Link spy={true} smooth={true} to="Section6">
                  <li className="ng   border-cyan-600 flex gap-3 border-b-2  hover:text-cyan-600 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                    <GoProjectSymlink />
                    Work
                  </li>
                </Link>
                <Link spy={true} smooth={true} to="Section7">
                  <li className="ng   border-cyan-600 flex gap-3 border-b-2  hover:text-cyan-600 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                    <GiBrain />
                    Review
                  </li>
                </Link>

                <Link spy={true} smooth={true} to="Section8">
                  <li className="ng   border-cyan-600 flex gap-3 border-b-2  hover:text-cyan-600 hover:text-shadow-lg cursor-pointer hover:font-Berkshire">
                    <FaBlog />
                    Blog
                  </li>
                </Link>
                <li className=" flex gap-3 ">
                  <IoCallOutline className="text-5xl" />
                  <div className=" flex flex-col">
                    <h1 className="text-[14px] ">CALL NOW</h1>
                    <a href="" className=" hover:text-cyan-600 cursor-pointer">
                      +919569732035{" "}
                    </a>
                  </div>
                </li>
                <li className=" flex gap-3 ">
                  <IoMailOutline className="text-5xl" />
                  <div className=" flex flex-col">
                    <h1 className="text-[14px] ">SEND EMAIL</h1>
                    <a href="" className=" hover:text-cyan-600 cursor-pointer">
                      ---- ----- ---{" "}
                    </a>
                  </div>
                </li>
                <li className=" flex justify-between">
                  <a
                    href=""
                    className=" border-2 border-black rounded-full p-2 hover:text-cyan-600 hover:border-cyan-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                  >
                    <FaXTwitter />
                  </a>
                  <a
                    href=""
                    className=" border-2 border-black rounded-full p-2 hover:text-cyan-600 hover:border-cyan-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href=""
                    className=" border-2 border-black rounded-full p-2 hover:text-cyan-600 hover:border-cyan-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                  >
                    <FaPinterestP />
                  </a>
                  <a
                    href=""
                    className=" border-2 border-black rounded-full p-2 hover:text-cyan-600 hover:border-cyan-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
                  >
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
