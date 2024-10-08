import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import {  menu, close } from "../assets";
import newLogo from '../assets/logo/letter-uppercase-circle-j-svgrepo-com.svg'
import { FaDownload } from "react-icons/fa";


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDownload = () => {
    const resumeUrl = '/Md_Jewel_Rana.pdf';  

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'Md.Jewel Rana .pdf');  
    document.body.appendChild(link);

    link.click();
 
    document.body.removeChild(link);
  };


  return (
    <nav
      className={`border-b  border-b-blue-900  ${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={newLogo} alt="logo" className="w-9 h-9 object-contain bg-white rounded-full" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Jewel &nbsp;
            <span className="sm:block hidden"> | Portfolio</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div>
          <button
            className="flex items-center py-2 ml-6 text-[12px] px-2 md:px-4 bg-gradient-to-r from-gray-600 to-gray-900 text-white font-bold rounded-lg border shadow-lg hover:bg-gradient-to-l hover:from-red-500 hover:via-pink-500 hover:to-purple-400 hover:border-purple-500 transition duration-300 ease-in-out transform hover:scale-105 "
            title="Resume Download"  onClick={handleDownload}
          >
            <FaDownload className="mr-2" />
            Resume
          </button>
        </div>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
