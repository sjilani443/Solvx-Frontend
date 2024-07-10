import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/WhatsApp_Image_2024-07-07_at_11.05.45_e531af7c-ai-brush-removebg-ck07nl9t.png";
import { motion } from "framer-motion";

function DesktopNav({ menu, showlogin }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className={`fixed left-0 right-0 z-20 transition-all duration-300 ${
        scrolled ? "top-0 mx-0 rounded-none" : "top-4 mx-20"
      }`}
    >
      <div className="h-16 rounded-md flex justify-between items-center lg:gap-2 p-4 py-6 text-center text-md lg:text-2xl font-poppins bg-gray-800 text-white border-[1px] border-black">
        <a href="/">
          <img className="h-[18vh]" src={Logo} alt="" style={{ filter: "invert(100%)" }} />
        </a>
        <ul className="flex gap-[30px]">
          {menu.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{
                scale: 1.1,
                color: "#0A60AF",
                transition: { duration: 0.2, ease: "easeIn" },
              }}
              className="ml-4"
            >
              <Link to={item} className="font-medium capitalize">
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
        <ul className="flex items-center text-xl">
          {showlogin ? (
            <p>UserName</p>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <motion.button
                    initial={{
                      border: "1.5px solid black",
                      backgroundColor: "#42ADF8",
                    }}
                    whileHover={{
                      border: "2px solid rgba(0, 0, 0, 1)",
                      opacity: 1,
                      scale: 0.8,
                      backgroundColor: "#d3d3d3",
                    }}
                    transition={{ duration: 0.2, ease: [0.42, 0, 0.58, 1] }}
                    className="px-4 py-2 rounded"
                  >
                    Log in
                  </motion.button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </motion.nav>
  );
}

export default DesktopNav;
