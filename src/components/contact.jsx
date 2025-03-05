import React from "react";
import { CONTACT } from "../constants/index";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-4 px-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Contact Information
      </motion.h1>
      <div className="flex flex-wrap justify-center items-center">
        <div className="mb-8 flex flex-wrap lg:justify-center w-full lg:w-3/4">
          <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
            <img
              src={CONTACT.image}
              width={150}
              height={150}
              alt={CONTACT.name}
              className="mb-6 rounded"
            />
          </div>
          <div className="w-full lg:w-3/4">
            <h6 className="mb-2 font-semibold text-center lg:text-left">
              {CONTACT.name}
            </h6>
            <p className="mb-4 text-neutral-400 text-center lg:text-left">
              {CONTACT.address}
            </p>
            <p className="mb-2 text-neutral-400 text-center lg:text-left">
              Phone: {CONTACT.phoneNo}
            </p>
            <p className="mb-2 text-neutral-400 text-center lg:text-left">
              Email: {CONTACT.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
