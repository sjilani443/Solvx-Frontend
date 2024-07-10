import React from 'react';
import BasicCard from '../Components/Card';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Courses() {
  return (
    <div className='bg-[#240750] h-full flex items-center justify-center font-outfit'>
      <div className='py-10 sm:py-20 sm:px-10 sm:my-4 max-w-8xl mx-auto'>
        <h1 className='text-3xl text-white sm:mb-8 pl-4 sm:pt-4 py-6'>All Courses:</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 bg-gray-200 px-10 rounded-md py-5'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BasicCard
              imgSrc="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN"
              title="React js for Beginners"
              description="This course teaches fundamental and advanced concepts of building user interfaces with React."
              buttonText="Learn Now"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <BasicCard
              imgSrc="https://exeqserve.com/wp-content/uploads/2023/05/Training-Page-Photos-60.png"
              title="Problem Solving & Decision Making"
              description="This course helps to analyze issues, and make effective decisions in diverse contexts."
              buttonText="Learn Now"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <BasicCard
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCl4zZrcB7kwwZWw7pPXlT2QoFj43IzPcXA&s"
            title="Java"
            description="This course teaches foundational and advanced concepts of OOPS for building efficient software applications."
            buttonText="Learn Now"
          />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BasicCard
              imgSrc="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN"
              title="React js for Beginners"
              description="This course teaches fundamental and advanced concepts of building user interfaces with React."
              buttonText="Learn Now"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <BasicCard
              imgSrc="https://exeqserve.com/wp-content/uploads/2023/05/Training-Page-Photos-60.png"
              title="Problem Solving & Decision Making"
              description="This course helps to analyze issues, and make effective decisions in diverse contexts."
              buttonText="Learn Now"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <BasicCard
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCl4zZrcB7kwwZWw7pPXlT2QoFj43IzPcXA&s"
            title="Java"
            description="This course teaches foundational and advanced concepts of OOPS for building efficient software applications."
            buttonText="Learn Now"
          />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BasicCard
              imgSrc="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN"
              title="React js for Beginners"
              description="This course teaches fundamental and advanced concepts of building user interfaces with React."
              buttonText="Learn Now"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <BasicCard
              imgSrc="https://exeqserve.com/wp-content/uploads/2023/05/Training-Page-Photos-60.png"
              title="Problem Solving & Decision Making"
              description="This course helps to analyze issues, and make effective decisions in diverse contexts."
              buttonText="Learn Now"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <BasicCard
            imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdCl4zZrcB7kwwZWw7pPXlT2QoFj43IzPcXA&s"
            title="Java"
            description="This course teaches foundational and advanced concepts of OOPS for building efficient software applications."
            buttonText="Learn Now"
          />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <BasicCard
              imgSrc="https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/fGWjtyQtG4JE7UXgaPAN"
              title="React js for Beginners"
              description="This course teaches fundamental and advanced concepts of building user interfaces with React."
              buttonText="Learn Now"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <BasicCard
              imgSrc="https://exeqserve.com/wp-content/uploads/2023/05/Training-Page-Photos-60.png"
              title="Problem Solving & Decision Making"
              description="This course helps to analyze issues, and make effective decisions in diverse contexts."
              buttonText="Learn Now"
            />
          </motion.div>
          {/* Repeat motion.div for each BasicCard */}
        </div>
      </div>
    </div>
  );
}

export default Courses;
