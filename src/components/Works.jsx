 /* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { FaGithub, FaLink, FaServer } from "react-icons/fa"; // Import required icons

const ProjectCard = ({
  index,
  name,
  tags,
  image,
  live_link,
  github_client_link,
  github_server_link,
}) => {
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

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] text-center">
            {name}
          </h3>
        </div>

        {/* Links Section */}
        <div className="mt-5 grid grid-cols-2 gap-4">
          {/* Live Link */}
          {live_link && (
            <a
              href={live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 text-[12px] py-1 rounded-full justify-center"
            >
              <FaLink className="text-white" /> Live Link
            </a>
          )}

          {/* GitHub Client Link */}
          {github_client_link && (
            <a
              href={github_client_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white bg-purple-600 hover:bg-purple-700 text-[12px] py-1 rounded-full justify-center"
            >
              <FaGithub className="text-white" /> GitHub Client
            </a>
          )}

          {/* GitHub Server Link */}
          {github_server_link && (
            <a
              href={github_server_link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white bg-orange-600 hover:bg-orange-700 text-[12px] py-1 rounded-full justify-center"
            >
              <FaGithub className="text-white" /> GitHub Server
            </a>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <p key={index} className="text-[14px]">#{tag}</p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [showProjects, setShowProjects] = useState([]);

  useEffect(() => {
    // Filter projects based on the active tab
    switch (activeTab) {
      case 'frontend':
        setShowProjects(projects.filter(project => project.category === 'Frontend'));
        break;
      case 'backend':
        setShowProjects(projects.filter(project => project.category === 'Backend'));
        break;
      case 'MERN':
        setShowProjects(projects.filter(project => project.category === 'MERN'));
        break;
      case 'all':
      default:
        setShowProjects(projects);
        break;
    }
  }, [activeTab]);

  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-7xl text-justify leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Tab Buttons */}
      <div className="mt-10">
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => setActiveTab("all")}
            className={`py-2 px-4 ${activeTab === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} rounded`}
          >
            All Projects
          </button>
          <button
            onClick={() => setActiveTab("frontend")}
            className={`py-2 px-4 ${activeTab === "frontend" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} rounded`}
          >
            Frontend Projects
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            className={`py-2 px-4 ${activeTab === "backend" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} rounded`}
          >
            Backend Projects
          </button>
          <button
            onClick={() => setActiveTab("MERN")}
            className={`py-2 px-4 ${activeTab === "MERN" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} rounded`}
          >
            Full Stack Projects
          </button>
        </div>

        {/* Projects Display */}
        <div className="mt-10 flex flex-wrap gap-7">
          {showProjects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < showProjects.length && (
          <div className="mt-10 text-center">
            <button
              onClick={loadMoreProjects}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");