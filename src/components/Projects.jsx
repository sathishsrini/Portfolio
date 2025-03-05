import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4 px-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>
      <div className="flex flex-wrap justify-center items-center">
        {PROJECTS.map((project, index) => (
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center w-full lg:w-3/4"
          >
            <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded"
              />
            </div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold text-center lg:text-left">
                {project.title}
              </h6>
              <p className="mb-4 text-neutral-400 text-center lg:text-left">
                {project.description}
              </p>
              <div className="flex justify-center lg:justify-start flex-wrap">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Add Buttons for E-Commerce Project */}
              {project.title === "E-Commerce Platform" && (
                <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-4">
                  <a
                    href="https://www.linkedin.com/posts/sathishspringbootdeveloper_springboot-thymeleaf-ecommerce-activity-7302982824205172736-rGAL?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEWfgNgBe993xEb82kpasVUAXs9zyOwJK9I"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition"
                  >
                    🔗 Coding Part
                  </a>
                  <a
                    href="https://www.linkedin.com/posts/sathishspringbootdeveloper_springboot-ecommerce-mysql-activity-7302984708508815360-FGVk?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEWfgNgBe993xEb82kpasVUAXs9zyOwJK9I"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition"
                  >
                    🔗 Output & UI Part
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
