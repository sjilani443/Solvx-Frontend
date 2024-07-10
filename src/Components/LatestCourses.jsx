import React from 'react';
import BasicCard from './Card';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function LatestCourses() {
  return (
    <div className='font-poppins pt-10 px-5 bg-gray-200 pb-10'>
      <div className='flex justify-between px-10 items-center'>
        <h1 className='smLtext-3xl text-xl'>Latest Courses:</h1>
        <Link to="/courses">
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
            className="text-secondary px-4 py-2 sm:py-4 rounded"
          >
            Check More
          </motion.button>
        </Link>
      </div>
      <div className='flex flex-col justify-center items-center md:flex-row my-5 py-2 bg-[#240750] px-3 rounded-lg'>
        <BasicCard
          imgSrc="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN"
          title="React js for Beginners"
          description="This course teaches fundamental and advanced concepts of building user interfaces with React."
          buttonText="Learn Now"
        />
        <BasicCard
          imgSrc="https://exeqserve.com/wp-content/uploads/2023/05/Training-Page-Photos-60.png"
          title="Problem Solving & Decision Making"
          description="This course helps to analyze issues, and make effective decisions in diverse contexts."
          buttonText="Learn Now"
        />
        <BasicCard
          imgSrc="https://hackr.io/blog/cpp-course/og-image"
          title="C++"
          description="This course teaches foundational and advanced concepts of object-oriented programming for building efficient and powerful software applications."
          buttonText="Learn Now"
        />
        <BasicCard
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCl4zZrcB7kwwZWw7pPXlT2QoFj43IzPcXA&s"
          title="Java"
          description="This course teaches foundational and advanced concepts of OOPS for building efficient software applications."
          buttonText="Learn Now"
        />
      </div>
    </div>
  );
}

export default LatestCourses;
