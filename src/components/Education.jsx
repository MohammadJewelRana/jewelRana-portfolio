/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
 
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
  import { motion } from "framer-motion";
  
  import "react-vertical-timeline-component/style.min.css";
  
  import { styles } from "../styles";
//   import { educationalExperience } from "../constants";
 
  import { textVariant } from "../utils/motion";
import { educationalExperience } from "../constants";
  
  const ExperienceCard = ({ experience }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className='flex justify-center items-center w-full h-full'>
            <img
              src={experience.icon}
              alt={experience.company_name}
              className='w-[60%] h-[60%] object-contain'
            />
          </div>
        }
      >
        <div>
          <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
          <p
            className='text-secondary text-[16px] font-semibold'
            style={{ margin: 0 }}
          >
            {experience?.universityName}
          </p>
        </div>
        <div>
            <p>{experience?.cgpa}</p>
        </div>
  
        
      </VerticalTimelineElement>
    );
  };
  
  const Education = () => {
    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-center`}>
            My Educational Background
          </p>
          <h2 className={`${styles.sectionHeadText} text-center`}>
            Educational Qualification.
          </h2>
        </motion.div>
  
        <div className='mt-20 flex flex-col'>
      
        
         <VerticalTimeline>
            {educationalExperience.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
              />
            ))}
          </VerticalTimeline> 
        </div>
      </>
    );
  };
  
  export default  Education ;
  // export default SectionWrapper(Experience, "work");
  