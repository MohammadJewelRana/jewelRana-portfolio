/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */

// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="max-w-7xl mx-auto mb-28 px-4 text-justify">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-7xl leading-[30px]"
      >
        Hello! I'm Md.Jewel Rana, from Dhaka, Bangladesh. I recently completed a
        Bachelor's degree in Computer Science and Engineering from Southeast
        University. I have acquired a solid comprehension of fundamental
        software development principles and practices. My educational
        background, coupled with practical experience in constructing
        applications using MongoDB, Express.js, React, and Node.js, equips me
        with the ability to create resilient and expandable solutions. I invest
        a significant amount of time in staying up-to-date with the latest
        trends and honing my skills. If you have an exciting project in mind,
        I'm all ears! Feel free to explore my resume below to gain a better
        understanding of my skills and experience. Let's connect and bring your
        project to life together!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 items-center justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default About;
// export default SectionWrapper(About, "about");
