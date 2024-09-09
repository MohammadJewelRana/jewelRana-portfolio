/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { FaGithub, FaLink, FaServer } from "react-icons/fa";
import useAllProjects from "./hooks/useAllProjects";
import SectionWrapper from "../hoc/SectionWrapper";

// Loading Spinner Component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-500"></div>
  </div>
);

const ProjectCard = ({ project, index }) => {
  const {
    projectName,
    technology,
    image,
    liveClientLink,
    liveServerLink,
    githubClient,
    githubServer,
    category,
  } = project;

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
   
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
       
        <div className="mt-5 flex item-center justify-between">
          <h3 className="text-white font-bold text-[24px] text-center">
            {projectName}
          </h3>
          <p className="text-gray-400 text-[12px] mt-3">
            {" "}
            <span className=" ">{category}</span> Project
          </p>
        </div>

    
   <div className="mt-5 grid grid-cols-2 gap-4">
          {liveClientLink && (
            <a
              href={liveClientLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 text-[12px] py-1 rounded-full justify-center"
            >
              <FaLink className="text-white" /> Live Link
            </a>
          )}
          {liveServerLink  && (
            <a
              href={liveServerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 text-[12px] py-1 rounded-full justify-center"
            >
              <FaServer className="text-white" /> Server Link
            </a>
          )}
          {githubClient && (
            <a
              href={githubClient}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 text-[12px] py-1 rounded-full justify-center"
            >
              <FaGithub className="text-white" /> GitHub Client
            </a>
          )}
          {githubServer  && (
            <a
              href={githubServer}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white bg-orange-600 hover:bg-orange-700 text-[12px] py-1 rounded-full justify-center"
            >
              <FaGithub className="text-white" /> GitHub Server
            </a>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {technology?.map((tag) => (
            <p key={tag} className="text-[14px]">
              #{tag}
            </p>
          ))}
        </div>
 

      </Tilt>



    </motion.div>
  );
};

const Works = () => {
  const [allProjects, isLoading] = useAllProjects();
  console.log(allProjects);
  const projects = allProjects?.data;
  console.log(projects);

  return (
    <div className="mb-12">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        {/* <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-7xl text-justify leading-[30px]"
        > */}
        Following projects showcase my skills and experience through real-world
        examples of my work. Each project is briefly described with links to
        code repositories and live demos. It reflects my ability to solve
        complex problems, work with different technologies, and manage projects
        effectively.
        {/* </motion.p> */}
      </div>

      {/* Projects Display */}
      <div className="mt-10 flex flex-wrap gap-7">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          projects?.map((project, index) => (
            <ProjectCard key={project._id} project={project} index={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "work");
