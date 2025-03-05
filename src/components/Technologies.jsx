import React from "react";
<<<<<<< HEAD
import { FaPython, FaNodeJs } from "react-icons/fa";
import { SiDjango, SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import powerbi from "../assets/powerbi.png"
=======
import { RiReactjsLine } from "react-icons/ri";
import { FaDatabase, FaJava } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiFirebase, SiBootstrap } from "react-icons/si";
import powerbi from "../assets/powerbi.png";
import { motion } from "framer-motion";
>>>>>>> master

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies Used
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center items-center gap-4"
      >
<<<<<<< HEAD
        {/* Python */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaPython className="text-7xl text-yellow-300" />
        </motion.div>
        {/* Power BI */}
=======
        

        {/* Java */}
>>>>>>> master
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
<<<<<<< HEAD
          <img src={powerbi} alt="Power BI" className="w-20 h-20" />
</motion.div>
        {/* Django */}
=======
          <FaJava className="text-7xl text-red-600" />
        </motion.div>

        {/* Spring Boot */}
>>>>>>> master
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
<<<<<<< HEAD
          <SiDjango className="text-7xl text-green-600" />
=======
          <SiSpringboot className="text-7xl text-green-500" />
>>>>>>> master
        </motion.div>

        {/* MySQL */}
        <motion.div
<<<<<<< HEAD
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiMysql className="text-7xl text-blue-500" />
        </motion.div>

        {/* Node.js */}
        <motion.div
=======
>>>>>>> master
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
<<<<<<< HEAD
          <FaNodeJs className="text-7xl text-green-500" />
=======
          <SiMysql className="text-7xl text-blue-600" />
        </motion.div>

        {/* Firebase Authentication */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiFirebase className="text-7xl text-yellow-500" />
        </motion.div>
        {/* React.js */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Bootstrap */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiBootstrap className="text-7xl text-purple-500" />
>>>>>>> master
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
