import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  ircs,
  bits,
  BLOOD,
  Real_img,
  quiz,
  React_shop,
  gallery,
  threejs,
  NCL,
  LitedIn,
  nextjs,
  Real_Estate,
  Codeup_img,
  Socially_img,
  Pingup_img,
  Csir_logo,
  Indus_logo,
  Hospital_img,
  sql,
  Car_img,
  Amity,
  Onehash,
  My_Bot,
  docker,
} from "../assets";
import { FaGithub, FaFileAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export const navLinks = [
  {
    id: "leetcode",
    title: "LeetCode",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/ri_123/",
    external: true,
  },
  {
    id: "github",
    title: "GitHub",
    icon: FaGithub,
    link: "https://github.com/ri123-ya",
    external: true,
  },
  {
    id: "resume",
    title: "Resume",
    icon: FaFileAlt,
    link: "https://drive.google.com/drive/folders/1I3MNd2OEsvyrvLydCyMRKy4IyeyZQsVM",
    external: true,
  },
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
    title: "Next JS Developer",
    icon: creator,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "Docker",
    icon: docker,
  },
];

const projects = [
   {
    name: "My Personal Bot",
    description:
     "A full-stack RAG AI chat assistant that answers from my resume. Multi-LLM calls via LangChain and QdrantDB for resume-specific semantic search.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node-cache",
        color: "green-text-gradient",
      },
      {
        name: "langchain",
        color: "pink-text-gradient",
      },
      {
        name: "qdrant",
        color: "blue-text-gradient",
      },
    ],
    image:My_Bot,
    source_code_link: "https://github.com/ri123-ya/My-BOT/tree/main",
  },
  {
    name: "CodeUp",
    description:
      "A web platform for real-time remote interviews with scheduling, rating, recording, and collaboration features. It's the perfect solution for seamless, modern, and efficient remote interviews.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "convex",
        color: "green-text-gradient",
      },
      {
        name: "stream",
        color: "pink-text-gradient",
      },
      {
        name: "clerk",
        color: "blue-text-gradient",
      },
    ],
    image: Codeup_img,
    source_code_link: "https://github.com/ri123-ya/CodeUp",
  },
  {
    name: "Socially",
    description:
      "A responsive social media web app where users can follow or unfollow others, like posts, comment, and update their profiles. The app is mobile-friendly and features a dynamic filter system for both small and large screens.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn-UI",
        color: "green-text-gradient",
      },
      {
        name: "neon",
        color: "pink-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
    ],
    image: Socially_img,
    source_code_link: "https://github.com/ri123-ya/Social_media",
  },
  {
      name: "REAL ESTATE WEBSITE",
      description:
        "A web-based platform that allows users to search, view, and manage real estate listings from various agencies, providing a convenient and efficient solution for buying, selling, or renting properties.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "cloudinary",
          color: "blue-text-gradient",
        },
      ],
      image: Real_Estate,
      source_code_link: "https://github.com/ri123-ya/Real-Estate",
  },
  {
    name: "PingUp",
    description:
      "A real-time chat web app that allows users to connect instantly through text and photo messages. Users can see who's online, update their profiles, and enjoy seamless, responsive communication across devices.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "Zustand",
        color: "green-text-gradient",
      },
      {
        name: "Daisy UI",
        color: "pink-text-gradient",
      },
    ],
    image: Pingup_img,
    source_code_link: "https://github.com/ri123-ya/PingUp",
  },
  {
    name: "Hospital Management ",
    description:
      "A web platform where users can find and book doctor appointments,while doctors can view their appointments and update statuses. A convenient improving healthcare access efficiently.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "mongoose",
        color: "pink-text-gradient",
      },
      {
        name: "DBMS",
        color: "green-text-gradient",
      },
    ],
    image: Hospital_img,
    source_code_link: "https://github.com/ri123-ya/Hospital",
  },
  {
    name: "Car Rental",
    description:
      "A Java-based terminal application to rent and return cars, manage customers, track rental history, and handle car details—offering a simple, interactive, and efficient car rental experience.",
    tags: [
      {
        name: "OOPs",
        color: "blue-text-gradient",
      },
      {
        name: "java",
        color: "green-text-gradient",
      },
      {
        name: "console-app",
        color: "pink-text-gradient",
      },
    ],
    image: Car_img,
    source_code_link:
      "https://github.com/ri123-ya/Car-Rental-System/tree/master",
  },
];

const experiences = [
  {
    title: "SDE Intern",
    company_name: "OneHash.ai",
    icon: Onehash,
    iconBg: "#ffffff",
    date: "JUN 2025 - NOV 2025",
    points: [
      "Re-architected the recurring event feature using RFC 5545 (iCalendar) RRule, significantly improving database scalability and reducing storage footprint by 75%.",
      "Integrated Pabbly Connect to create automated data transfer workflows, enabling real-time syncing and reducing manual effort by 15%.",
      "Integrated QR code booking links to simplify event distribution, boosting mobile conversion rates by 10%.",
      "Implemented a geo-aware user onboarding flow to enhance market scalability and reach, increasing profile verification rates by 20% in India.",
      "Debugged and resolved client-reported bugs to ensure system reliability and performance.",
    ],
  },
  {
    title: "Field Support Engineer-GET",
    company_name: "INDUS TOWERS",
    icon: Indus_logo,
    iconBg: "#ffffff",
    date: "SEPT 2024 - NOV 2024",
    points: [
      "Developed a strong foundation in system reliability and issue resolution by monitoring and maintaining telecom infrastructure.",
      "Worked with cross-functional teams to troubleshoot complex issues, enhancing problem-solving and collaboration skills.",
    ],
  },
  // {
  //   title: "Research Intern",
  //   company_name: "CSIR-CMERI,DURGAPUR",
  //   icon: Csir_logo,
  //   iconBg: "#ffffff",
  //   date: "JULY 2023 - AUGUST 2023",
  //   points: [
  //     "Implemented IoT sensors to monitor soil parameters and analyze the impact of NPK fertilizer.",
  //     "Used ThingSpeak platform for real-time visualization and analysis of sensor data.",
  //   ],
  // },
];

const testimonials = [];

export { services, technologies, projects, experiences, testimonials };
