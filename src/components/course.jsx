import React from "react";
import { COURSES } from "../constants/index";
import { motion } from "framer-motion";

function Courses() {
  return (
    <div className="border-b border-neutral-900 pb-4 px-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Courses & Certifications
      </motion.h1>
      <div className="flex flex-wrap justify-center items-center">
        {COURSES.map((course, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center w-full lg:w-3/4"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4 flex justify-center lg:justify-start"
            >
              <img
                src={course.image}
                width={150}
                height={150}
                alt={course.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-center lg:text-left">
                {course.title}
              </h6>
              <p className="mb-4 text-neutral-400 text-center lg:text-left">
                {course.description}
              </p>
              <p className="mb-2 text-neutral-400 text-center lg:text-left">
                Issued by: {course.issuedBy}
              </p>
              <p className="mb-2 text-neutral-400 text-center lg:text-left">
                Date: {course.date}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
