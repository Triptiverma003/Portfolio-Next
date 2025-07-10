// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(GO/Nodejs APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },

  {
    title: "Web Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps (React Native/Flutter) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "Virtual Assistant",
        description:
          "(Created a virtual assistant integrated with AI for seamless communication.)",
      },
      {
        title: "Blog Application",
        description:
          "(Implemented CRUD operations with authentication using GO + React to understand full-stack synergy.)",
      },
    ],
  },

  {
    title: "Problem Solving & Open Source",
    description:
      "I actively solve algorithmic problems and contribute to the developer community through open source—enhancing my coding skills while collaborating with others.",
    items: [
      {
        title: "LeetCode Enthusiast",
        description:
          "(Solved 500+ DSA problems—focusing on patterns, efficiency, and real-world scenarios.)",
      },
      {
        title: "GSSoC Contributor",
        description:
          "(Contributed to open source during GirlScript Summer of Code—worked on real-world projects, submitted PRs, and collaborated with mentors and peers.)",
      },
      {
        title: "Open Source Contributions",
        description:
          "(Regularly contribute to GitHub repositories in areas like documentation, bug fixes, and new features across various tech stacks.)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Learning Management System",
    description:
      "A feature-rich LMS platform for course enrollment, learning progress tracking, and role-based access (admin/instructor/student).",
    href: "https://lms-vert-theta.vercel.app/",
    image: "/assets/projects/lms.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Uber App Clone",
    description:
      "A ride-booking app clone with real-time location updates, driver-passenger flow, and a responsive UI mimicking Uber.",
    href: "https://uber-app-clone-sigma.vercel.app/",
    image: "/assets/projects/uber-clone.jpg",
    bgImage: "/assets/backgrounds/uber-clone.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Socket.io" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Blog Application",
    description:
      "A full-stack blog app with authentication and CRUD operations built using GO for backend and React for frontend.",
    href: "https://blogi-zeta.vercel.app/",
    image: "/assets/projects/blog-app.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Golang" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 4,
    name: "Virtual Assistant",
    description:
      "A smart AI-powered voice assistant capable of performing tasks via speech recognition and synthesis—built with browser-based APIs and NLP.",
    href: "https://virtual-assistant-76zl.onrender.com/",
    image: "/assets/projects/virtual-assistant.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "SpeechRecognition API" },
      { id: 3, name: "Tailwind CSS" },
    ],
  },
  {
    id: 5,
    name: "E-commerce",
    description:
      "An online store for mobile accessories including cases, chargers, cables, and MagSafe products.",
    href: "",
    image: "/assets/projects/mobile-accessories-store.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
];

export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/tulipstripti/" },
  {
    name: "Leetcode",
    href: "https://leetcode.com/u/vermatripti547/",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/triptiverma310/" },
  { name: "GitHub", href: "https://github.com/Triptiverma003/" },
];
