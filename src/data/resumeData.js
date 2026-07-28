// ============================================================================
// resumeData.js
// Single source of truth for all portfolio content.
// Every string here is pulled directly from Moneswar's resume — nothing is
// invented or exaggerated. Keeping it centralized means components stay
// purely presentational and content can be updated in one place.
// ============================================================================

export const personalInfo = {
  name: "Moneswar Sundareswaran",
  title: "Computer Science and Design Student",
  tagline: "UX/UI Design · Full-Stack Development · Hardware Systems",
  email: "moneswar51@gmail.com",
  phone: "+91 9345828801",
  location: "Udumalpet, Tamil Nadu",
  github: "https://github.com/Moneswar",
  githubHandle: "github.com/Moneswar",
  linkedin: "https://linkedin.com/in/moneswarba04133a2",
  linkedinHandle: "linkedin.com/in/moneswarba04133a2",
  resumeFile: "/resume/Moneswar_Sundareswaran_Resume.pdf",
};

export const careerObjective =
  "Aspiring technology professional with a strong interest in hardware system development, Full-Stack Development, and UI/UX Design. Passionate about designing innovative, user-focused, and efficient solutions by integrating hardware and software technologies. Seeking an opportunity to apply my technical skills, creativity, and problem-solving abilities while contributing to organizational success and continuously enhancing my professional expertise.";

export const areasOfInterest = [
  "UX/UI Design",
  "Full-Stack Development",
  "Hardware Project Development",
];

export const education = [
  {
    id: "edu-1",
    degree: "Bachelor of Engineering in Computer Science and Design",
    institution: "Kongu Engineering College",
    score: "CGPA: 7.00",
    duration: "2023 – 2027",
  },
  {
    id: "edu-2",
    degree: "HSC",
    institution: "Ponnu Matric Hr. Sec. School",
    score: "Percentage: 73%",
    duration: "2022 – 2023",
  },
  {
    id: "edu-3",
    degree: "SSLC",
    institution: "RKR Grks Matric Hr. Sec. School",
    score: "Percentage: 73%",
    duration: "2020 – 2021",
  },
];

export const skillGroups = [
  {
    id: "programming",
    title: "Programming Languages",
    skills: ["C", "Python", "SQL"],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["HTML", "CSS", "Figma", "Framer"],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    id: "database",
    title: "Database",
    skills: ["MySQL", "MongoDB", "Supabase"],
  },
  {
    id: "tools",
    title: "Tools & IDEs",
    skills: ["Visual Studio Code", "Git", "GitHub"],
  },
];

export const projects = [
  {
    id: "project-1",
    title: "Smart Healthcare Hardware System",
    category: "Hardware",
    description:
      "A smart healthcare hardware system with automatic and remote-controlled operation, built around real-time monitoring and emergency safety.",
    features: [
      "Automatic and remote-controlled operation",
      "Real-time monitoring and control to improve safety, reliability, and ease of use",
      "Integrated fire detection and response functionality for identifying fire hazards",
      "Practical hardware solution focused on efficient operation and user convenience",
    ],
    techStack: ["Embedded Systems", "Sensors", "IoT", "Hardware Design"],
    github: "https://github.com/Moneswar",
    demo: null,
  },
  {
    id: "project-2",
    title: "Direct Farmer To Customer Trading Platform",
    category: "Full Stack",
    description:
      "A full-stack marketplace connecting farmers directly with consumers, eliminating intermediaries and improving market accessibility.",
    features: [
      "Secure user authentication, online payment integration, product management, and order tracking",
      "Intelligent crop price prediction and demand forecasting to support informed decision-making",
      "Responsive, user-friendly interface for both farmers and customers",
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Moneswar",
    demo: null,
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
