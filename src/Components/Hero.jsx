import React from "react";
import { motion } from "framer-motion";
import herologo from "../assets/WhatsApp_Image_2024-07-07_at_11.05.45_e531af7c-ai-brush-removebg-ck07nl9t.png";
import bgimage from "../assets/6057485.jpg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen relative"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a2351] pb-20"></div>
        <section className="pt-10 sm:pt-16 font-outfit relative z-10">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 px-10 pt-10 rounded-lg sm:mt-[10vh]">
            <motion.div
              initial={{ opacity: 0, y: 40, color: "white" }}
              animate={{ opacity: 1, y: 0, color: "#111827" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="px-6 text-xl text-white font-inter">
                Bridging the gap between academia and the corporate
              </h1>
              <p className="mt-5 text-3xl font-bold leading-tight text-white sm:leading-tight sm:text-5xl lg:leading-tight font-pj">
                Empowering Tomorrow's Innovators,
                <span className="relative inline-flex sm:inline">
                  <span className="bg-gradient-to-r filter opacity-30 w-full h-full absolute inset-0"></span>
                  <span className="relative"> Today </span>
                </span>
              </p>
              <div className="flex justify-center h-[20vh] items-center">
                <motion.img
                  src={herologo}
                  alt=""
                  className="h-[30vh] w-auto"
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: "0%" }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  style={{ filter: "invert(100%)" }} // Invert colors of the image
                />
              </div>
              <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/courses"
                    title=""
                    className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                    role="button"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      viewBox="0 0 18 18"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
                        strokeWidth="2"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Explore Courses
                  </Link>
                </motion.div>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mt-8 text-gray-500 font-inter text-xl"
              >
                <i className="fa-solid fa-graduation-cap"></i> Industry Standard
                Courses.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hero;
