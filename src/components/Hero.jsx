import React from "react";
import { HERO_CONTENT } from "../constants";
import portfolio_pic from "../assets/pp.png";
import { motion } from "framer-motion";


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (

    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap justify-center items-center ml-2">
        <div className="w-full lg:w-1/2">
          <div className=" flex flex-col items-center lg:items-start pl-8 justify-center lg:justify-start">

            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Komathi M
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent text-4xl tracking-tight"
            >
              Python Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-6">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 20, opacity: 1 }}  // Moves image slightly to the right
              transition={{ duration: 1, delay: 1.2 }}
              src={portfolio_pic}
              alt="Komathi M"
              className="w-3/4 max-w-[250px] h-auto object-contain lg:max-w-[350px] lg:ml-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;