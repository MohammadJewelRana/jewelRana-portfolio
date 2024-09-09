import {
  mobile,
  backend,
  // creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  // docker,
  meta,
  starbucks,
  tesla,
  // shopify,
  carrent,
  jobit,
  tripguide,
  // threejs,
  
} from "../assets";
import express from '../assets/tech/expressjs.png'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
 
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Solutya Pvt. Ltd",
    icon: starbucks,
    iconBg: "#383E56",
    // date: "August 2024 - September 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "IT Department",
    company_name: "Adeffi Limited",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2023 - Aug 2023",
    points: [
      "Working with camlytics software research team",
      "Collaborating with cross-functional teams.",
      "Working with adMover operations team",
      "Working in onSign TV and digital billboard.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];


const educationalExperience = [
  {
    title: "Bachelor of Science in Computer Science and Engineering ",
    universityName: "Southeast University",
    icon: starbucks,
    // iconBg: "#383E56",
    date: " 2019 - 2024",
    cgpa:'3.93 (out of 4.00)'
   
  },
  {
    
    icon: tesla,
    title: "Higher Secondary School Certificate (Science) ",
    universityName: "Bangladesh Navy College Dhaka",
    
    // iconBg: "#383E56",
    date: " 2016 - 2018",
    cgpa:'5.00 (out of 5.00)'
  },
  {
    
    icon: meta,
    title: "  Secondary School Certificate (Science) ",
    universityName: "Bangladesh Navy College Dhaka",
    
    // iconBg: "#383E56",
    date: " 2006 - 2016",
    cgpa:'5.00 (out of 5.00)'
  },
]

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects =[
  {
    "name": "E-Shop",
    "description": "An e-commerce platform that allows users to browse, search, and purchase a wide range of products with a seamless checkout process.",
    "tags": ["react", "redux", "firebase"],
    "image":carrent,
    "source_code_link": "https://github.com/",
    "live_link": "https://eshop-live.com",
    "github_client_link": "https://github.com/eshop-client",
    "github_server_link": "https://github.com/eshop-server",
    "category": "backend"
  },
  {
    "name": "Fitness Tracker",
    "description": "A mobile-friendly web application that helps users track their workouts, set fitness goals, and monitor progress over time.",
    "tags": ["react", "nodejs", "mongodb", "express"],
    "image": jobit,
    "source_code_link": "https://github.com/",
    "live_link": "https://fitnesstracker-live.com",
    "github_client_link": "https://github.com/fitnesstracker-client",
    "github_server_link": "https://github.com/fitnesstracker-server",
    "category": "MERN"
  },
  {
    "name": "Recipe Finder",
    "description": "A web app that lets users search for recipes based on ingredients they have at home, offering cooking tips and nutritional information.",
    "tags": ["vue", "vuex", "tailwindcss"],
    "image": tripguide,
    "source_code_link": "https://github.com/",
    "live_link": "https://recipefinder-live.com",
    "github_client_link": "https://github.com/recipefinder-client",
    "github_server_link": "https://github.com/recipefinder-server",
    "category": "frontend"
  },
  {
    "name": "Event Manager",
    "description": "A platform for managing and organizing events, including ticket sales, guest lists, and event schedules.",
    "tags": ["angular", "firebase", "scss", "redux"],
    "image":tripguide,
    "source_code_link": "https://github.com/",
    "live_link": "https://eventmanager-live.com",
    "github_client_link": "https://github.com/eventmanager-client",
    "github_server_link": "https://github.com/eventmanager-server",
    "category": "frontend"
  },
  {
    "name": "Real-Time Chat",
    "description": "A real-time chat application allowing users to send and receive messages instantly, with support for chat rooms and private messaging.",
    "tags": ["react", "socket.io", "nodejs", "mongodb", "express"],
    "image":tripguide,
    "source_code_link": "https://github.com/",
    "live_link": "https://realtimechat-live.com",
    "github_client_link": "https://github.com/realtimechat-client",
    "github_server_link": "https://github.com/realtimechat-server",
    "category": "MERN"
  },
  {
    "name": "Travel Blog",
    "description": "A blogging platform where users can share their travel experiences, post photos, and interact with other travel enthusiasts.",
    "tags": ["nextjs", "graphql", "tailwindcss", "typescript"],
    "image": tripguide,
    "source_code_link": "https://github.com/",
    "live_link": "https://travelblog-live.com",
    "github_client_link": "https://github.com/travelblog-client",
    "github_server_link": "https://github.com/travelblog-server",
    "category": "MERN"
  },
  {
    "name": "Online Quiz",
    "description": "An interactive quiz application that allows users to take quizzes on various topics and track their scores and progress.",
    "tags": ["react", "redux", "typescript", "bootstrap"],
    "image": tripguide,
    "source_code_link": "https://github.com/",
    "live_link": "https://onlinequiz-live.com",
    "github_client_link": "https://github.com/onlinequiz-client",
    "github_server_link": "https://github.com/onlinequiz-server",
    "category": "frontend"
  },
  {
    "name": "Expense Tracker",
    "description": "A web application for tracking personal expenses, generating financial reports, and setting budget goals.",
    "tags": ["vue", "vuex", "firebase", "scss", "axios"],
    "image": tripguide,
    "source_code_link": "https://github.com/",
    "live_link": "https://expensetracker-live.com",
    "github_client_link": "https://github.com/expensetracker-client",
    "github_server_link": "https://github.com/expensetracker-server",
    "category": "frontend"
  },
  {
    "name": "Portfolio Showcase",
    "description": "A personal portfolio website showcasing projects, skills, and contact information in a visually appealing format.",
    "tags": ["html", "css", "javascript", "bootstrap", "jQuery"],
    "image":tripguide,
    "source_code_link": "https://github.com/",
    "live_link": "https://portfolioshowcase-live.com",
    "github_client_link": "https://github.com/portfolioshowcase-client",
    "github_server_link": "https://github.com/portfolioshowcase-server",
    "category": "frontend"
  }
]
  

export { services, technologies, experiences, testimonials, projects,educationalExperience };
