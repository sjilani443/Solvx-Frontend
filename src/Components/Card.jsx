import React from 'react';
import { motion } from 'framer-motion';

function BasicExample({ imgSrc, title, description, buttonText }) {
  return (
    <div className="max-w-[20rem] rounded overflow-hidden shadow-lg m-5 font-outfit bg-gray-50 border-4 border-black">
      <img
        className="w-full"
        src={imgSrc}
        alt="Card image cap"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
        <motion.button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
        </motion.button>
      </div>
    </div>
  );
}

export default BasicExample;
