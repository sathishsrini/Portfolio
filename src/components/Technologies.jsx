import React from "react";

import { RiReactjsLine } from "react-icons/ri";
import { FaDatabase, FaJava } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiFirebase, SiBootstrap } from "react-icons/si";
import powerbi from "../assets/powerbi.png";
import { motion } from "framer-motion";


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

        

        {/* Java */}

        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-slate-200"
        >

          <FaJava className="text-7xl text-red-600" />
        </motion.div>

        {/* Spring Boot */}

        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 bg-slate-100"
        >

          <SiSpringboot className="text-7xl text-green-500" />

        </motion.div>

        {/* MySQL */}
        <motion.div


          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4  bg-slate-200"
        >

          <SiMysql className="text-7xl text-blue-600" />
        </motion.div>

        {/* Firebase Authentication */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4  bg-slate-200"
        >
          <SiFirebase className="text-7xl text-yellow-500" />
        </motion.div>
        {/* React.js */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4  bg-slate-200"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Bootstrap */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4  bg-slate-200"
        >
          <SiBootstrap className="text-7xl text-purple-500" />

        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
