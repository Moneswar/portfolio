// ============================================================================
// resumeData.js
// Single source of truth for all portfolio content.
// Accurately aligned with Moneswar Sundareswaran's background, education,
// projects, skills, and certifications.
// ============================================================================

export const personalInfo = {
  name: "Moneswar Sundareswaran",
  title: "BE Computer Science and Design Undergraduate",
  headline: "Hi, I'm Moneswar.\nBuilding practical software and hardware solutions.",
  supportingText:
    "Computer Science and Design undergraduate with hands-on experience in full-stack web development, embedded systems, and UI/UX design. Interested in building practical, user-focused solutions that combine software, hardware, and modern web technologies.",
  email: "moneswar51@gmail.com",
  phone: "+91 9345828801",
  location: "Udumalpet, Tamil Nadu",
  github: "https://github.com/Moneswar",
  githubHandle: "github.com/Moneswar",
  linkedin: "https://linkedin.com/in/moneswarba04133a2",
  linkedinHandle: "linkedin.com/in/moneswarba04133a2",
  resumeFile: "/resume.pdf",
};

export const aboutContent = {
  title: "About Me",
  description:
    "Computer Science and Design undergraduate with hands-on experience in software and hardware-oriented projects. My primary interests include Full-Stack Development, Embedded Systems, and UI/UX Design. I enjoy developing practical applications, solving real-world problems, and continuously improving my technical skills. I am currently seeking opportunities where I can learn, contribute, and grow as a developer.",
};

export const areasOfInterest = [
  "Full-Stack Development",
  "Embedded Systems / Hardware Development",
  "UI/UX Design",
];

export const skillGroups = [
  {
    id: "programming",
    title: "Programming Languages",
    skills: ["C", "Python", "Java", "SQL"],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    id: "backend",
    title: "Backend",
    skills: ["Node.js", "Express.js"],
  },
  {
    id: "database",
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Visual Studio Code"],
  },
  {
    id: "embedded",
    title: "Embedded / Hardware",
    skills: [
      "Embedded Systems",
      "Sensors",
      "IoT",
      "Hardware Design",
      "Real-time Monitoring",
    ],
  },
];

export const projects = [
  {
    id: "farmdirect",
    title: "Direct Farmer To Customer Trading Platform",
    category: "Full-Stack Development",
    shortCategory: "Full Stack",
    description:
      "A full-stack marketplace platform designed to connect farmers directly with customers, reducing unnecessary intermediaries and improving access to agricultural products.",
    detailedOverview:
      "Direct Farmer To Customer Trading Platform is an end-to-end e-commerce marketplace built to streamline the agricultural supply chain. By bridging the gap between local farmers and direct consumers, the platform improves market accessibility, eliminates middleman margins, and provides a transparent digital marketplace for fresh produce.",
    problemStatement:
      "Traditional agricultural distribution relies on multiple intermediaries, which lowers profit margins for farmers and increases retail costs for consumers while causing delays in fresh produce delivery.",
    solutionOverview:
      "FarmDirect provides a decentralized marketplace where farmers manage their inventory directly and consumers order fresh produce with transparent pricing, role-based dashboards, and real-time order tracking.",
    features: [
      "User authentication & role management",
      "Product listing & inventory management",
      "Direct farmer and customer interaction",
      "Order management and cart/checkout",
      "MongoDB database integration for persistent storage",
      "Responsive user interface",
    ],
    techStack: ["React", "Node.js", "Express.js", "MongoDB"],
    github: null, // Note: FarmDirect repository URL is left unconfigured to avoid inventing links
    demo: "https://farm-directly.onrender.com",
    detailsPath: "/projects/farmdirect",
    previewImage: "/images/projects/farmdirect-preview.png",
    imageAlt: "FarmDirect full-stack farmer to customer marketplace",
    howItWorks: [
      {
        step: "01",
        title: "Account Registration & Role Assignment",
        desc: "Farmers and customers register with role-specific dashboards to manage product listings or purchase produce.",
      },
      {
        step: "02",
        title: "Product Listing & Catalog Management",
        desc: "Farmers list agricultural produce, prices, and quantities directly stored in the MongoDB database.",
      },
      {
        step: "03",
        title: "Direct Interaction & Order Checkout",
        desc: "Customers browse local listings, add items to cart, and place orders directly with transparent tracking.",
      },
    ],
  },
  {
    id: "smart-healthcare",
    title: "Smart Healthcare Hardware System",
    category: "Hardware / Embedded Systems",
    shortCategory: "Hardware / Embedded",
    description:
      "A smart healthcare hardware system designed for real-time monitoring and emergency safety with automated and controlled operations.",
    detailedOverview:
      "The Smart Healthcare Hardware System is a functional hardware prototype designed for continuous environmental and patient safety monitoring. Featuring automated and remote-controlled operations, the prototype combines sensor data acquisition, real-time status monitoring, and integrated emergency fire detection response functionality to ensure safe and dependable operation.",
    features: [
      "Hardware & embedded system development",
      "Real-time monitoring and sensor integration",
      "Automated and remote-controlled operation",
      "Integrated fire detection and emergency response safety",
      "Practical hardware solution focused on safety and reliability",
    ],
    techStack: [
      "Embedded Systems",
      "Sensors",
      "IoT",
      "Hardware Design",
      "Real-time Monitoring",
    ],
    github: null, // Left unconfigured to avoid inventing links
    demo: null, // "Demo Coming Soon"
    detailsPath: "/projects/smart-healthcare",
    previewImage: "/images/projects/smart-healthcare.jpg",
    imageAlt: "Smart Healthcare Hardware System real prototype",
  },
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

export const certifications = [
  {
    id: "cert-1",
    title: "NPTEL Online Certification",
    course: "Database Management System",
    provider: "NPTEL / IIT Kharagpur",
    issuer: "NPTEL (National Programme on Technology Enhanced Learning)",
    year: "2024",
    credentialUrl: null,
  },
  {
    id: "cert-2",
    title: "Oracle Java Foundations Certification",
    course: "Java Foundations",
    provider: "Oracle",
    issuer: "Oracle",
    year: "2024",
    credentialUrl: null,
  },
];

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Education", href: "/#education" },
  { label: "Certifications", href: "/#certifications" },
  { label: "Contact", href: "/#contact" },
];
