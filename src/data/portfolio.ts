/**
 * Central portfolio data — Junaid Khan's developer portfolio.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Junaid Khan',
  displayName: 'Junaid Khan',
  firstName: 'JUNAID KHAN',
  seriesTag: 'JK SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A JK ORIGINAL',
  role: 'Software Engineering Student',
  tagline: ['Software Engineering Student', 'Java & Backend Development', 'Problem Solver'],
  intro:
    "Hi, I'm Junaid Khan, a Software Engineering student at COMSATS University Islamabad, Sahiwal Campus. I build practical software projects using Java, Spring Boot, databases, and modern development tools. My interests include backend development, REST APIs, software architecture, and AI-powered applications. I enjoy solving problems, learning new technologies, and writing clean, maintainable code.",
  aboutDetailed:
    "I am an aspiring software engineer studying Software Engineering at COMSATS University Islamabad, Sahiwal Campus (2024–Present), following my Intermediate in Computer Science (ICS) at ILM Group of Colleges, Qaboola Campus (2022–2024). My core focus lies in Java backend engineering, object-oriented design, databases (MySQL, JDBC, SQLite), and web systems (Spring Boot, Flask, REST APIs). I have served as team leader for university software projects and presented system architectures at technical project expos.",
  location: 'Arifwala, Pakistan',
  email: 'junaidkhan835645@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/junaid-khan-46b765319',
    github: 'https://github.com/junaidkhan051',
  },
  resumePdf: '/assets/Junaid_Khan_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w, /assets/portrait-2160.webp 2160w',
    alt: 'Portrait of Junaid Khan',
  },
  interests: [
    'Java backend development',
    'Spring Boot applications',
    'Database-driven applications',
    'REST API development',
    'Artificial Intelligence',
    'Information Security',
    'Software architecture and maintainable code',
  ],
};

export const education = [
  {
    school: 'COMSATS University Islamabad',
    place: 'Sahiwal Campus',
    degree: 'Bachelor of Science in Software Engineering',
    period: '2024 – Present',
    score: 'BS Software Engineering',
  },
  {
    school: 'ILM Group of Colleges',
    place: 'Qaboola Campus',
    degree: 'Intermediate in Computer Science (ICS)',
    period: '2022 – 2024',
    score: 'ICS',
  },
];

export const experience = [
  {
    company: 'COMSATS University Projects & Expos',
    role: 'Team Leader & Developer',
    place: 'Sahiwal, Pakistan',
    period: '2024 – Present',
    points: [
      'Served as team leader for university software projects, managing project scope and timelines in academic teams.',
      'Coordinated Git/GitHub version control, merge resolutions, and branch strategies across team repositories.',
      'Presented the AI Insider Threat Detection System architecture at a university Information Security Project Expo.',
      'Participated in university software project expos and peer-led technical demonstrations.',
      'Practiced Agile frameworks and Scrum basics during academic project development cycles.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const projects: Project[] = [
  {
    id: 'bug-tracking-system',
    title: 'Bug Tracking System',
    year: '2024',
    genre: 'Java • Desktop • MVC',
    logline: 'A Java-based desktop application for reporting, assigning, and managing software defects.',
    stack: ['Java', 'MySQL', 'JDBC', 'MVC Architecture', 'Git'],
    build: [
      'Developed a Java-based desktop application for reporting, assigning, and managing software defects with role-based access control.',
      'Implemented role-based access for Admin, Manager, Developer/Technical Person, and Customer personas using OOP and modular architecture.',
      'Integrated MySQL data persistence through JDBC with bug priority ranking, lifecycle status tracking, search filters, and analytical reports.',
    ],
    features: [
      'Role-based access for Admin, Manager, Developer/Technical Person, and Customer',
      'MySQL data persistence through JDBC',
      'Object-oriented and modular application design',
      'Bug priority and lifecycle status tracking',
      'Search filters and analytical reports',
    ],
    metrics: [
      { value: '4 Roles', label: 'Access Control' },
      { value: 'JDBC', label: 'MySQL Persistence' },
      { value: 'MVC', label: 'Modular Design' },
    ],
    github: 'https://github.com/junaidkhan051',
    palette: crimson,
    motif: 'shield',
  },
  {
    id: 'ai-insider-threat',
    title: 'AI Insider Threat Detection',
    year: '2025',
    genre: 'Python • Flask • AI • Security',
    logline: 'An AI-oriented web application designed to analyze user activity and identify potential insider threats.',
    stack: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    build: [
      'Built an AI-oriented web application to monitor user activity, analyze behavioral risk indicators, and compute risk scores for insider threat detection.',
      'Implemented an administrative dashboard, user activity monitoring, threat indicators, risk scoring, data logging, authentication, and audit reporting.',
      'Presented the functional system architecture at a university Information Security Project Expo.',
    ],
    features: [
      'Administrative dashboard',
      'User activity monitoring',
      'Threat indicators and risk scoring',
      'Data logging and authentication',
      'Audit reporting',
    ],
    metrics: [
      { value: 'Flask', label: 'Web Backend' },
      { value: 'SQLite', label: 'Audit Logging' },
      { value: 'Expo', label: 'InfoSec Expo' },
    ],
    github: 'https://github.com/junaidkhan051/AI-Powered-Insider-Threat-Detection',
    palette: ocean,
    motif: 'tenants',
  },
  {
    id: 'dsa-in-cpp',
    title: 'DSA in C++',
    year: '2024',
    genre: 'C++ • Data Structures • Algorithms',
    logline: 'Comprehensive implementation of fundamental data structures and algorithms in C++.',
    stack: ['C++', 'Data Structures', 'Algorithms', 'Git'],
    build: [
      'Implemented core linear and non-linear data structures including linked lists, stacks, queues, trees, and graph algorithms.',
      'Focused on object-oriented C++ principles, asymptotic time/space complexity, and algorithmic problem solving.',
    ],
    features: [
      'Linear data structures: Linked Lists, Stacks, Queues',
      'Tree and Graph traversals and algorithms',
      'Sorting and searching algorithm implementations',
      'Clean C++ OOP and algorithmic code structure',
    ],
    metrics: [
      { value: 'C++', label: 'Implementation' },
      { value: 'DSA', label: 'Core Algorithms' },
      { value: 'Git', label: 'Version Control' },
    ],
    github: 'https://github.com/junaidkhan051/DSA-in-Cpp',
    palette: jade,
    motif: 'flow',
  },
  {
    id: 'library-management-springboot',
    title: 'Library Management System',
    year: '2025',
    genre: 'Java • Spring Boot • REST API',
    logline: 'A Java Spring Boot backend application providing RESTful APIs for book and member management.',
    stack: ['Java', 'Spring Boot', 'REST APIs', 'MySQL', 'Git'],
    build: [
      'Engineered a RESTful backend service using Java and Spring Boot for library operations, book indexing, and member management.',
      'Structured using MVC controller-service-repository pattern with clean code practices and relational database persistence.',
    ],
    features: [
      'RESTful API endpoints for catalog & inventory',
      'Member registration and record management',
      'Layered MVC architecture',
      'Relational database integration',
    ],
    metrics: [
      { value: 'Spring Boot', label: 'Framework' },
      { value: 'REST API', label: 'Service Interface' },
      { value: 'Java', label: 'Language' },
    ],
    github: 'https://github.com/junaidkhan051/Library-Management--Java-SpringBoot',
    palette: violet,
    motif: 'shield',
  },
  {
    id: 'aether-ft-ai',
    title: 'AetherFT — LLM Fine-Tuning',
    year: '2025',
    genre: 'Python • FastAPI • AI • LLMs',
    logline: 'An AI dashboard for fine-tuning, monitoring, and testing language models locally.',
    stack: ['Python', 'FastAPI', 'JavaScript', 'Hugging Face'],
    build: [
      'Built a full-stack AI dashboard with FastAPI backend to run local language model fine-tuning pipelines and inference sandboxes.',
      'Integrated Hugging Face API tools, training loss tracking, and interactive testing interfaces.',
    ],
    features: [
      'Local LLM fine-tuning pipeline management',
      'Training progress and loss tracking',
      'Interactive testing sandbox for inference',
      'Hugging Face ecosystem integration',
    ],
    metrics: [
      { value: 'FastAPI', label: 'Web Framework' },
      { value: 'LLMs', label: 'Language Models' },
      { value: 'Python', label: 'Core Language' },
    ],
    github: 'https://github.com/junaidkhan051/Aether-FT-AI',
    palette: amber,
    motif: 'flow',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio Website',
    year: '2025',
    genre: 'HTML • CSS • JavaScript',
    logline: 'An interactive portfolio website created to present a developer profile and practical projects.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Git'],
    build: [
      'Designed and developed an interactive developer portfolio website to showcase project experience, backend technical skills, and academic profile.',
      'Implemented responsive layout structure, dark aesthetic mode, dynamic project views, and smooth interactive elements.',
    ],
    features: [
      'Responsive multi-device layout',
      'Interactive project cards and details',
      'Clean semantic web markup and custom styles',
      'Centralized portfolio showcase',
    ],
    metrics: [
      { value: 'HTML5', label: 'Semantic Structure' },
      { value: 'CSS3', label: 'Custom Styling' },
      { value: 'JS', label: 'Interactivity' },
    ],
    github: 'https://github.com/junaidkhan051',
    palette: ocean,
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'infosec-expo',
    title: 'Project Expo Presenter',
    org: 'University InfoSec Expo',
    detail: 'Presented the functional AI Insider Threat Detection System architecture at the university Information Security Project Expo.',
    laurel: 'University Expo',
  },
  {
    id: 'team-leader',
    title: 'Academic Team Leader',
    org: 'COMSATS University Projects',
    detail: 'Served as team leader for university software projects, managing project scope, timelines, and Git/GitHub version control workflows.',
    laurel: 'Academic Leadership',
  },
  {
    id: 'version-control',
    title: 'Git Version Control Lead',
    org: 'Academic Teams',
    detail: 'Coordinated Git/GitHub version control, merge conflict resolutions, and branch strategies across team project repositories.',
    laurel: 'Version Control',
  },
  {
    id: 'agile-scrum',
    title: 'Agile & Scrum Practitioner',
    org: 'Academic Projects',
    detail: 'Practiced Agile frameworks and Scrum basics during academic project development cycles.',
    laurel: 'Agile Workflow',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'COMSATS Sahiwal', name: 'BS Software Engineering — Academic Coursework', link: 'https://www.linkedin.com/in/junaid-khan-46b765319' },
  { issuer: 'Academic & Self-Study', name: 'Java & Object-Oriented Programming (OOP)', link: 'https://github.com/junaidkhan051' },
  { issuer: 'Academic & Self-Study', name: 'Data Structures and Algorithms (DSA in C++)', link: 'https://github.com/junaidkhan051/DSA-in-Cpp' },
  { issuer: 'Academic & Self-Study', name: 'Spring Boot & REST API Development', link: 'https://github.com/junaidkhan051/Library-Management--Java-SpringBoot' },
  { issuer: 'Academic & Self-Study', name: 'Python, Flask & Web Security Applications', link: 'https://github.com/junaidkhan051/AI-Powered-Insider-Threat-Detection' },
  { issuer: 'Academic & Self-Study', name: 'Git & GitHub Version Control Workflows', link: 'https://github.com/junaidkhan051' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Primary Languages',
    subtitle: 'Core programming languages',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'C++', mono: 'C+' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & Frameworks',
    subtitle: 'Server-side architecture & APIs',
    skills: [
      { name: 'Spring Boot', mono: 'Sb', note: 'Backend' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'MVC Architecture', mono: 'Mv' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Persistence',
    subtitle: 'Relational data design & storage',
    skills: [
      { name: 'MySQL', mono: 'My', note: 'Primary DB' },
      { name: 'JDBC', mono: 'Jd' },
      { name: 'SQLite', mono: 'Sq' },
      { name: 'Database Design', mono: 'Db' },
    ],
  },
  {
    id: 'frontend',
    title: 'Web Frontend',
    subtitle: 'User interfaces & standards',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Engineering',
    subtitle: 'Development lifecycle & practices',
    skills: [
      { name: 'Git & GitHub', mono: 'Gt' },
      { name: 'OOP', mono: 'Oo' },
      { name: 'DSA', mono: 'Ds' },
      { name: 'SDLC', mono: 'Sd' },
      { name: 'Clean Code Principles', mono: 'Cc' },
    ],
  },
  {
    id: 'interests',
    title: 'Professional Interests',
    subtitle: 'Areas of study & development',
    skills: [
      { name: 'Java Backend Dev', mono: 'Jb' },
      { name: 'REST API Dev', mono: 'Ra' },
      { name: 'Information Security', mono: 'Is' },
      { name: 'Software Architecture', mono: 'Sa' },
      { name: 'Artificial Intelligence', mono: 'Ai' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Bug Tracking System', 'Library Management — Spring Boot'],
  'Spring Boot': ['Library Management System'],
  MySQL: ['Bug Tracking System', 'Library Management'],
  JDBC: ['Bug Tracking System'],
  Python: ['AI Insider Threat Detection', 'AetherFT LLM Dashboard'],
  Flask: ['AI Insider Threat Detection'],
  SQLite: ['AI Insider Threat Detection'],
  'C++': ['DSA in C++ repository'],
  'REST APIs': ['Library Management System', 'AetherFT'],
  'MVC Architecture': ['Bug Tracking System'],
  'Git & GitHub': ['All repository projects — team lead & version control'],
  OOP: ['Bug Tracking System', 'Java & C++ Projects'],
  DSA: ['DSA in C++ repository'],
  'Clean Code Principles': ['Bug Tracking System', 'Spring Boot Project'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2022 – 2024',
    synopsis: 'Intermediate in Computer Science (ICS) at ILM Group of Colleges, Qaboola Campus — building core mathematical and computing logic.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'ICS Studies',
        description: 'Completed Intermediate in Computer Science (ICS) at ILM Group of Colleges, Qaboola Campus (2022–2024), laying the foundation in computer science and problem solving.',
        tags: ['ICS', 'ILM Group of Colleges', 'Computer Science'],
        runtime: '2022 – 2024',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Software Engineering Degree',
    period: '2024 – Present',
    synopsis: 'BS Software Engineering at COMSATS University Islamabad, Sahiwal Campus — developing expertise in Java, backend design, databases, and SDLC.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'COMSATS Sahiwal',
        description: 'Enrolled in Bachelor of Science in Software Engineering at COMSATS University Islamabad, Sahiwal Campus (2024–Present). Studying software architecture, database design, and object-oriented systems.',
        tags: ['BS Software Engineering', 'COMSATS', 'Sahiwal'],
        runtime: '2024 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Project Leadership',
        description: 'Served as team leader for university software projects, managing team scope, timelines, Git branching, and merge conflict resolutions.',
        tags: ['Team Leader', 'Git/GitHub', 'Agile', 'Scrum'],
        runtime: 'Academic Projects',
        palette: ocean,
      },
      {
        code: 'S02 E03',
        title: 'InfoSec Expo Presentation',
        description: 'Presented the functional architecture of the AI Insider Threat Detection System at the university Information Security Project Expo.',
        tags: ['InfoSec', 'Expo Presenter', 'AI', 'Architecture'],
        runtime: '2025',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Practical Software Projects',
    period: '2024 – 2025',
    synopsis: 'Building practical desktop and web applications with Java, MySQL, Python, Flask, and C++.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'Bug Tracking System (Java)',
        description: 'Built a Java desktop Bug Tracking System with role-based access for Admin, Manager, Developer, and Customer personas, using MVC architecture and JDBC/MySQL.',
        tags: ['Java', 'MySQL', 'JDBC', 'MVC Architecture'],
        runtime: '2024',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'AI Insider Threat Detection',
        description: 'Developed an AI-oriented web application in Python/Flask with SQLite backend to analyze user activity, monitor threat indicators, and compute risk scores.',
        tags: ['Python', 'Flask', 'SQLite', 'Security'],
        runtime: '2025',
        palette: ocean,
      },
      {
        code: 'S03 E03',
        title: 'Data Structures in C++',
        description: 'Created comprehensive implementations of core linear and non-linear data structures and algorithms in C++.',
        tags: ['C++', 'DSA', 'Algorithms', 'OOP'],
        runtime: '2024',
        palette: jade,
      },
      {
        code: 'S03 E04',
        title: 'Spring Boot Backend',
        description: 'Built a Java Spring Boot Library Management REST API application, exploring modern backend framework patterns and database integration.',
        tags: ['Spring Boot', 'Java', 'REST APIs'],
        runtime: '2025',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary Language', title: 'Java', detail: 'OOP · Spring Boot · JDBC · MVC', palette: amber },
  { label: 'Featured Project', title: 'Bug Tracking System', detail: 'Java Desktop · Role-Based · MySQL JDBC', palette: crimson },
  { label: 'AI Security Project', title: 'Insider Threat Detection', detail: 'Python · Flask · SQLite · InfoSec Expo', palette: ocean },
  { label: 'University', title: 'COMSATS Sahiwal', detail: 'BS Software Engineering · 2024–Present', palette: violet },
  { label: 'Backend Framework', title: 'Spring Boot', detail: 'Java · REST APIs · Layered MVC', palette: jade },
  { label: 'Algorithmic Foundation', title: 'DSA in C++', detail: 'Data Structures & Algorithms in C++', palette: amber },
  { label: 'Database & SQL', title: 'MySQL & JDBC', detail: 'Relational DB Design & Persistence', palette: ocean },
  { label: 'Academic Leadership', title: 'Team Leader', detail: 'University Projects · Git/GitHub Workflow', palette: crimson },
  { label: 'Previous Education', title: 'ICS (Computer Science)', detail: 'ILM Group of Colleges, Qaboola · 2022–2024', palette: jade },
  { label: 'Career Mission', title: 'Software Engineering', detail: 'Java Backend · Spring Boot · Clean Code', palette: violet },
];

/** Slides for the "Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'BS Software Eng.',
    lines: ['COMSATS University Islamabad, Sahiwal Campus', '2024 – Present | Software Engineering Student'],
    chips: ['Software Engineering'],
  },
  {
    kicker: 'Core Skills',
    title: 'Java & Backend.',
    lines: ['Java · Spring Boot · Python · Flask · C++', 'MySQL · JDBC · SQLite · REST APIs · MVC Architecture'],
    chips: ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'JDBC'],
  },
  {
    kicker: 'Featured Projects',
    title: 'Verified Originals',
    lines: [
      'Bug Tracking System — Java · MySQL · JDBC · MVC',
      'AI Insider Threat Detection — Python · Flask · InfoSec Expo',
      'DSA in C++ & Spring Boot REST API Applications',
    ],
  },
  {
    kicker: 'Leadership & Expos',
    title: 'Team Leadership',
    lines: [
      'Served as team leader for university software projects',
      'Coordinated Git/GitHub version control & branch strategies',
      'Presented system architecture at university InfoSec Expo',
    ],
  },
  {
    kicker: 'Professional Mission',
    title: 'Aspiring Software Engineer',
    lines: ['Building practical software projects with clean code', 'Specializing in Java backend & database-driven systems'],
  },
];

export type ProfileId = 'junaid' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'junaid',
    name: 'Junaid',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, education, and skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, technical stack, and GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The journey story arc and highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot · Education and background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons · ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals · Verified Work`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the portfolio', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements and Activities', meta: `${achievements.length} Moments`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume · View and download', palette: violet },
};
