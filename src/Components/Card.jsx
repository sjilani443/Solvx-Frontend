import React from 'react';
import { motion } from 'framer-motion';

function BasicCard({ imgSrc, title, description, buttonText }) {
  return (
    <div className="w-[17rem] h-[25rem] rounded overflow-hidden shadow-lg m-5 font-outfit bg-gray-50 border-4 border-black flex flex-col items-center gap-4">
      <img
        className="w-full object-contain"
        src={imgSrc}
        alt="Card image cap"
      />
      <div className="px-6 py-2 flex flex-col gap-5">
        <div className="font-bold text-xl">{title}</div>
        <p className="text-gray-700 text-base overflow-hidden">
          {description}
        </p>
        <motion.button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
        </motion.button>
      </div>
    </div>
  );
}

export default BasicCard;
