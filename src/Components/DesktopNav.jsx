// DesktopNav.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/WhatsApp_Image_2024-07-07_at_11.05.45_e531af7c-ai-brush-removebg-ck07nl9t.png';
import { motion } from 'framer-motion';
import LoginModal from './LoginModal';

function DesktopNav({ menu, showlogin }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className={`fixed left-0 right-0 z-20 transition-all duration-300 top-4 mx-20`}
    >
      <div className="h-16 rounded-md flex justify-between items-center lg:gap-2 p-4 py-6 text-center text-md lg:text-2xl font-poppins bg-gray-800 text-white border-[1px] border-black">
        <a href="/">
          <img className="h-[18vh]" src={Logo} alt="" style={{ filter: 'invert(100%)' }} />
        </a>
        <ul className="flex gap-[30px]">
          {menu.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{
                scale: 1.1,
                color: '#0A60AF',
                transition: { duration: 0.2, ease: 'easeIn' },
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
                <button
                  onClick={openModal}
                  className="px-4 py-2 rounded"
                  style={{
                    border: '1.5px solid black',
                    backgroundColor: '#42ADF8',
                  }}
                >
                  Log in
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
      {showModal && <LoginModal onClose={closeModal} />}
    </motion.nav>
  );
}

export default DesktopNav;
