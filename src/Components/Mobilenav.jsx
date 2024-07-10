// Mobilenav.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/WhatsApp_Image_2024-07-07_at_11.05.45_e531af7c-ai-brush-removebg-ck07nl9t.png';
import { motion } from 'framer-motion';
import LoginModal from './LoginModal';
import { FaBars } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Mobilenav({ menu, onToggle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
    onToggle();
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="h-16 flex justify-between items-center px-6 font-poppins bg-gray-50">
      <a href="/">
        <img className="h-[6rem]" src={Logo} alt="" />
      </a>
      <motion.button onClick={toggleMenu} className="border border-primary" whileTap={{ scale: 0.9 }}>
        <FaBars className="w-7 h-7" />
      </motion.button>

      <motion.div
        initial={{ x: '100%', backgroundColor: '#C7D0D5' }}
        animate={{ x: isOpen ? 0 : '100%', width: '100%' }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-full h-full bg-primary z-50 flex justify-center items-center"
      >
        <div className="absolute top-20 right-20 flex justify-between w-[80%]">
          <img className="h-[6rem]" src={Logo} alt="" />
          <motion.button onClick={closeMenu} className="text-gray-600 hover:text-gray-800 focus:outline-none" whileTap={{ scale: 0.9 }}>
            <IoIosCloseCircleOutline className="w-10 h-10" />
          </motion.button>
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-center gap-[40px]">
          <ul className="flex flex-col gap-[30px] items-center">
            {menu.map((item, index) => (
              <li key={index}>
                <Link to={item} onClick={closeMenu} className="text-2xl capitalize">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-center">
            <li>
              <button onClick={openModal} className="text-secondary px-4 py-2 rounded border-secondary bg-[#42ADF8] text-white border-2 border-black">
                Log in
              </button>
            </li>
          </ul>
        </motion.div>
      </motion.div>
      {showModal && <LoginModal onClose={closeModal} />}
    </div>
  );
}

export default Mobilenav;
