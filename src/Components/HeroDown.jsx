import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Home() {
  // UseInView hook to detect when elements come into view
  const [beliefRef, beliefInView] = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger animation when 50% of the element is visible
  });

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [whySolvxRef, whySolvxInView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="px-10 pt-[15vh] font-poppins flex flex-col items-center justify-center gap-[10vh] bg-[#240750] pb-10">
      {/* Our Belief Section */}
      <motion.div
        ref={beliefRef}
        initial={{ x: "50%", opacity: 0 }}
        animate={beliefInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-5xl flex flex-col items-center gap-10 text-white"
      >
        <h1 className="text-4xl font-outfit font-bold flex sm:gap-5 gap-2 ">
          <u className="text-[#42ADF8]">Our Belief</u>
          <i className="fa-solid fa-hands-holding-child"></i>
        </h1>
        <p className="sm:text-3xl text-2xl">
          Founded on the belief that education empowers and technology
          accelerates learning, SolvX Technologies is poised to revolutionize
          the edtech landscape.
        </p>
      </motion.div>

      {/* Our Mission Section */}
      <motion.div
        ref={missionRef}
        initial={{ x: "50%", opacity: 0 }}
        animate={missionInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-5xl flex flex-col items-center gap-10 text-white"
      >
        <h1 className="text-4xl font-outfit font-bold flex sm:gap-5 gap-2">
          <u className="text-[#42ADF8]">Our Mission</u>
          <i className="fa-solid fa-handshake-angle"></i>
        </h1>
        <p className="sm:text-3xl text-2xl flex justify-center">
          To make high-quality education accessible to everyone, anywhere, by
          leveraging cutting-edge technology and innovative teaching methods.
        </p>
      </motion.div>

      {/* Why Solvx Section */}
      <motion.div
        ref={whySolvxRef}
        initial={{ x: "50%", opacity: 0 }}
        animate={whySolvxInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-5xl flex flex-col items-center gap-10 text-white"
      >
        <h1 className="text-4xl font-outfit font-bold flex sm:gap-5 gap-2">
          <u className="text-[#42ADF8]">Why Solvx</u>
          <i className="fa-solid fa-question"></i>
        </h1>
        <p className="sm:text-3xl text-2xl flex justify-center">
          Combining expertise in education with a passion for technological
          innovation, SolvX offers a unique platform that caters to learners,
          educators, and institutions alike.
        </p>
      </motion.div>
    </div>
  );
}

export default Home;
