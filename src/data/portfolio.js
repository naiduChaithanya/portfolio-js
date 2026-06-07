export const personalInfo = {
  name: 'Chaithanya Naidu Polimera',
  title: 'ReactJs Developer',
  tagline: 'Building scalable, high-performance web applications for enterprise banking.',
  location: 'Hyderabad, India',
  phone: '+91 95815 81409',
  email: 'chaitanyanaidu1311@gmail.com',
  linkedin: 'https://linkedin.com/in/chaithanyapolimera',
  github: 'https://github.com/naiduChaithanya',
  summary:
    'ReactJs Developer with 4 years of experience specialising in scalable, high-performance web applications for enterprise banking (Finacle). Proficient in React.js, JavaScript (ES6+), HTML5, CSS3, and Redux-based state management. Demonstrated ability to diagnose and eliminate UI performance bottlenecks — delivering a 15% faster page load. Adept at cross-functional collaboration, code reviews and shipping reliable features.',
};

export const skills = [
  { name: 'JavaScript (ES6+)',       level: 95, category: 'Languages' },
  { name: 'TypeScript',              level: 80, category: 'Languages' },
  { name: 'HTML5 / CSS3',            level: 92, category: 'Languages' },
  { name: 'React.js',                level: 95, category: 'Frameworks' },
  { name: 'Redux / Redux Thunk',     level: 90, category: 'State Management' },
  { name: 'Tailwind CSS',            level: 88, category: 'Frameworks' },
  { name: 'RESTful APIs / Axios',    level: 88, category: 'API & Auth' },
  { name: 'JWT Authentication',      level: 85, category: 'API & Auth' },
  { name: 'React Hooks',             level: 93, category: 'State Management' },
  { name: 'Git / GitHub',            level: 87, category: 'DevOps & Tools' },
  { name: 'Performance Optimization',level: 90, category: 'DevOps & Tools' },
  { name: 'MySQL',                   level: 78, category: 'Databases' },
];

export const skillCategories = [
  'All', 'Languages', 'Frameworks', 'State Management', 'API & Auth', 'DevOps & Tools', 'Databases',
];

export const experiences = [
  {
    id: 1,
    role: 'Senior Systems Engineer — ReactJs Developer',
    company: 'Edgeverve (Subsidiary of Infosys)',
    period: 'Nov 2023 – Present',
    duration: '2 yrs 8 mos',
    location: 'Hyderabad, India',
    highlights: [
      'Delivered responsive React.js UIs for core banking modules — Loans and CASA — using component-driven design, clean code principles, and thorough inline documentation.',
      'Identified and resolved critical UI performance bottlenecks using Chrome DevTools; implemented lazy loading, code splitting, memoization, and caching strategies — resulting in a 15% reduction in page load time.',
      'Designed enterprise-grade Redux state management with Thunk middleware, enabling predictable, testable flows across complex multi-step banking transactions.',
      'Integrated RESTful APIs via Axios with JWT-based authentication and compliant validation, maintaining regulatory compliance and secure data exchange.',
      'Owned code review cycles and mentored junior engineers on JavaScript patterns, React.js best practices, and performance optimisation techniques.',
      'Partnered with backend and QA teams to test and perform static code analysis gates, reducing production defects and compressing release cycles.',
    ],
    tech: ['React.js', 'TypeScript', 'Redux', 'Axios', 'JWT', 'Chrome DevTools'],
  },
  {
    id: 2,
    role: 'Systems Engineer — ReactJs Developer',
    company: 'Infosys',
    period: 'Apr 2022 – Oct 2023',
    duration: '1 yr 6 mos',
    location: 'Hyderabad, India',
    highlights: [
      'Developed reusable React functional components, custom Hooks and JavaScript, standardising UI patterns and cutting feature development time.',
      'Improved rendering performance for data-heavy views through strategic memoization and conditional rendering techniques.',
      'Contributed to code reviews, troubleshot and resolved production UI defects with documented root cause analyses.',
    ],
    tech: ['React.js', 'JavaScript', 'Redux', 'CSS3', 'REST APIs'],
  },
  {
    id: 3,
    role: 'Transaction Risk Investigator',
    company: 'Amazon',
    period: 'Jul 2021 – Apr 2022',
    duration: '9 mos',
    location: 'Hyderabad, India',
    highlights: [
      'Detected and mitigated transactional fraud using MySQL, JavaScript and internal dashboards, maintaining strict compliance and improving resolution accuracy at scale.',
    ],
    tech: ['MySQL', 'JavaScript', 'Data Analysis'],
  },
];

export const professionalProjects = [
  {
    id: 1,
    title: 'Finacle Banking UI — Loans Module',
    description:
      'Enterprise-grade React.js interface for the Loans banking module. Built multi-step transaction flows with Redux state management and JWT-secured API integration for regulatory-compliant data exchange.',
    tech: ['React.js', 'Redux Thunk', 'Axios', 'JWT', 'CSS3'],
    metrics: '15% load time reduction',
  },
  {
    id: 2,
    title: 'Finacle Banking UI — CASA Module',
    description:
      'Responsive Current Account and Savings Account UI built with component-driven architecture. Implemented lazy loading, code splitting, and memoization strategies to eliminate critical performance bottlenecks.',
    tech: ['React.js', 'TypeScript', 'Lazy Loading', 'Code Splitting'],
    metrics: 'Enterprise-scale performance',
  },
];

export const personalProjects = [
  {
    id: 1,
    title: 'QuickChat',
    description: 'Real-time chat platform using the MERN stack + Socket.io.',
    highlights: [
      'Bi-directional real-time messaging with Socket.io across multiple chat rooms with presence indicators and timestamps.',
      'JWT-based session authentication with protected API routes ensuring secure access control.',
      'Optimised Mongoose + MongoDB schema for fast read/write performance at scale.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'MongoDB', 'JWT'],
    github: 'https://github.com/naiduChaithanya/chat-app',
    category: 'Full-Stack',
  },
  {
    id: 2,
    title: 'ShopVault',
    description: 'Complete e-commerce SPA with React 18 and React Router v6.',
    highlights: [
      'JWT authentication end-to-end — login, register, protected routes, and persistent sessions via localStorage.',
      'Redux Toolkit with three independent slices (auth, products, cart) and async thunks for API calls.',
      'Fully responsive UI with Tailwind CSS, staggered entry animations, optimised rendering via useMemo and useCallback.',
    ],
    tech: ['React.js', 'Redux Toolkit', 'REST API', 'JWT', 'Axios', 'React Router v6', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/naiduChaithanya/shopVault',
    category: 'Frontend',
  },
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech.)",
    institution: "Vignan's Institute of Information Technology",
    year: '2019',
    score: '75.43%',
    location: 'Visakhapatnam, India',
  },
];

export const certifications = [
  { name: 'Microsoft Azure Fundamentals (AZ-900)', issuer: 'Microsoft',  icon: '☁️' },
  { name: 'Infosys Certified React Developer',     issuer: 'Infosys',    icon: '⚛️' },
];
