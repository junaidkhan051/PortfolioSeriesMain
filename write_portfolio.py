import os

content = r'''/**
 * Central portfolio data — Junaid Khan's developer portfolio.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Junaid Khan',
  displayName: 'Junaid Khan',
  firstName: 'JUNAID',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A JUNAID ORIGINAL',
  role: 'Software Engineering Student',
  tagline: ['Java & Backend Development', 'Software Engineering', 'Problem Solver'],
  intro:
    'Software Engineering student at COMSATS University Islamabad, Sahiwal Campus. I build practical software projects using Java, Spring Boot, databases, and modern development tools. My interests include backend development, REST APIs, software architecture, and AI-powered applications.',
  location: 'Arifwala, Pakistan',
  email: 'junaidkhan835645@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/junaid-khan-46b765319',
    github: 'https://github.com/junaidkhan051',
  },
  resumePdf: '/assets/Junaid_Khan_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Junaid Khan',
  },
  interests: ['Java Backend Development', 'Spring Boot Applications', 'AI & Information Security'],
};

export const education = [
  {
    school: 'COMSATS University Islamabad',
    place: 'Sahiwal Campus',
    degree: 'Bachelor of Science — Software Engineering',
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
    company: 'Academic Projects',
    role: 'Team Leader & Developer',
    place: 'COMSATS University, Sahiwal',
    period: '2024 – Present',
    points: [
      'Served as team leader for multiple university software projects, managing project scope and timelines.',
      'Coordinated Git/GitHub version control, merge resolutions, and branch strategies across academic teams.',
      'Presented the AI Insider Threat Detection System architecture at a university Information Security Project Expo.',
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

export const projects: Project[] = [
  {
    id: 'bug-tracking-system',
    title: 'Bug Tracking System',
    year: '2024',
    genre: 'Java • Desktop • MVC',
    logline: 'A Java-based desktop application for reporting, assigning, and managing software defects with role-based access control.',
    stack: ['Java', 'MySQL', 'JDBC', 'MVC Architecture', 'Git'],
    build: [
      'Developed a Java-based desktop Bug Tracking System with role-based access for Admin, Manager, Developer, and Customer personas using OOP design principles.',
      'Integrated a MySQL database via JDBC for data persistence, implementing bug priority ranking, lifecycle status tracking, search filters, and analytical reports.',
    ],
    features: [
      'Role-based access: Admin, Manager, Developer, Customer',
      'MySQL data persistence through JDBC',
      'Bug priority and lifecycle status tracking',
      'Search filters and analytical reports',
      'Object-oriented and modular application design',
    ],
    metrics: [
      { value: '4', label: 'user roles' },
      { value: 'MVC', label: 'architecture pattern' },
      { value: 'MySQL', label: 'database backend' },
    ],
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'shield',
  },
  {
    id: 'ai-insider-threat',
    title: 'AI Insider Threat Detection',
    year: '2025',
    genre: 'Python • Flask • AI • Security',
    logline: 'An AI-oriented web application designed to analyze user activity and identify potential insider threats within an organization.',
    stack: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    build: [
      'Built an AI-powered web application with Python/Flask backend to monitor employee activities, analyze behavioral patterns, and generate risk scores for potential insider threats.',
      'Implemented secure login authentication, interactive admin dashboard, real-time threat alerts, audit reporting, and data logging using a SQLite backend.',
    ],
    features: [
      'Administrative dashboard with real-time metric alerts',
      'User activity monitoring and behavioral analysis',
      'Threat indicators and risk scoring',
      'Secure data logging and authentication',
      'Audit reporting and analytics',
    ],
    metrics: [
      { value: 'Flask', label: 'backend framework' },
      { value: 'SQLite', label: 'database' },
      { value: 'InfoSec Expo', label: 'presented at' },
    ],
    github: 'https://github.com/junaidkhan051/AI-Powered-Insider-Threat-Detection',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'aether-ft-ai',
    title: 'AetherFT — LLM Fine-Tuning',
    year: '2025',
    genre: 'Python • FastAPI • AI • LLMs',
    logline: 'An advanced FastAPI-powered dashboard for training, monitoring, and deploying Hugging Face language models locally.',
    stack: ['Python', 'FastAPI', 'JavaScript', 'HTML', 'CSS', 'Hugging Face'],
    build: [
      'Built a full-stack AI dashboard (AetherFT) with a FastAPI backend for managing local fine-tuning pipelines and inference sandboxes for Causal Language Models such as distilgpt2 and gpt2.',
      'Integrated Gemini API, Ollama, and Hugging Face Inference APIs with subprocess management for model fine-tuning, training loss tracking, and an interactive model testing sandbox.',
    ],
    features: [
      'Local LLM fine-tuning pipeline management',
      'Training loss tracking and monitoring',
      'Interactive model testing sandbox',
      'Gemini API and Hugging Face API integration',
      'Subprocess management for training jobs',
    ],
    metrics: [
      { value: 'FastAPI', label: 'backend framework' },
      { value: 'LLMs', label: 'model type' },
      { value: 'HF API', label: 'Hugging Face integration' },
    ],
    github: 'https://github.com/junaidkhan051/Aether-FT-AI',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
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
    org: 'University InfoSec Project Expo',
    detail: 'Presented the functional AI Insider Threat Detection System architecture at the university Information Security Project Expo.',
    laurel: 'University Expo',
  },
  {
    id: 'team-leader',
    title: 'Team Leader',
    org: 'University Software Projects',
    detail: 'Served as team leader for multiple university software projects, managing scope, timelines, and coordinating version control workflows.',
    laurel: 'Academic Leadership',
  },
  {
    id: 'agile-practitioner',
    title: 'Agile Practitioner',
    org: 'Academic Projects',
    detail: 'Practiced Agile frameworks and Scrum basics during academic team developments, running sprint cycles and managing backlogs.',
    laurel: 'Agile & Scrum',
  },
  {
    id: 'backend-builder',
    title: 'Backend Builder',
    org: 'Java & Spring Boot',
    detail: 'Built practical backend applications in Java with Spring Boot, JDBC, MySQL, and REST APIs as part of academic and personal projects.',
    laurel: 'Java Backend',
  },
  {
    id: 'ai-ml-enthusiast',
    title: 'AI & ML Enthusiast',
    org: 'Python & FastAPI & LLMs',
    detail: 'Exploring LLMs, deep learning, and intelligent automation through hands-on projects including a fine-tuning pipeline and threat detection system.',
    laurel: 'AI Projects',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'COMSATS', name: 'BS Software Engineering — Core Coursework', link: 'https://www.linkedin.com/in/junaid-khan-46b765319' },
  { issuer: 'Self-Study', name: 'Java OOP and Data Structures', link: 'https://github.com/junaidkhan051/DSA-in-Cpp' },
  { issuer: 'Self-Study', name: 'Spring Boot and REST APIs', link: 'https://github.com/junaidkhan051/Library-Management--Java-SpringBoot' },
  { issuer: 'Self-Study', name: 'Python and Flask Web Development', link: 'https://github.com/junaidkhan051/AI-Powered-Insider-Threat-Detection' },
  { issuer: 'Self-Study', name: 'AI and LLM Fine-Tuning (Hugging Face)', link: 'https://github.com/junaidkhan051/Aether-FT-AI' },
  { issuer: 'GitHub', name: 'Git and GitHub Version Control', link: 'https://github.com/junaidkhan051' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java is the primary language',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'C++', mono: 'C+' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Server-side & frameworks',
    skills: [
      { name: 'Spring Boot', mono: 'Sb' },
      { name: 'Flask', mono: 'Fl' },
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'MVC Architecture', mono: 'Mv' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Data storage & design',
    skills: [
      { name: 'MySQL', mono: 'My', note: 'Primary' },
      { name: 'JDBC', mono: 'Jd' },
      { name: 'SQLite', mono: 'Sq' },
      { name: 'Database Design', mono: 'Db' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Web interfaces',
    skills: [
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'JavaScript', mono: 'Js' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Practices',
    subtitle: 'Development workflow',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'SDLC', mono: 'Sd' },
      { name: 'Agile / Scrum', mono: 'Ag' },
      { name: 'Clean Code', mono: 'Cc' },
      { name: 'OOP', mono: 'Oo' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & ML',
    subtitle: 'Exploring intelligent systems',
    skills: [
      { name: 'Hugging Face', mono: 'Hf' },
      { name: 'LLM Fine-Tuning', mono: 'Ll' },
      { name: 'DSA', mono: 'Ds' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'The next arc of the story',
    skills: [
      { name: 'Software Architecture', mono: 'Sa' },
      { name: 'Information Security', mono: 'Is' },
      { name: 'AI Applications', mono: 'Ai' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Bug Tracking System', 'Library Management — Spring Boot'],
  Python: ['AI Insider Threat Detection', 'AetherFT LLM Dashboard', 'Weather Alert System'],
  'Spring Boot': ['Library Management App'],
  Flask: ['AI Insider Threat Detection'],
  FastAPI: ['AetherFT LLM Dashboard'],
  MySQL: ['Bug Tracking System'],
  JDBC: ['Bug Tracking System'],
  SQLite: ['AI Insider Threat Detection'],
  HTML: ['Personal Portfolio Website', 'Mini Social Network'],
  CSS: ['Personal Portfolio Website', 'Mini Social Network'],
  JavaScript: ['Music Player', 'Mini Social Network'],
  'Git / GitHub': ['All projects — version control'],
  OOP: ['Bug Tracking System', 'Java OOP Projects'],
  DSA: ['DSA-in-Cpp repository'],
  'LLM Fine-Tuning': ['AetherFT LLM Dashboard'],
  'Hugging Face': ['AetherFT LLM Dashboard'],
  'REST APIs': ['Library Management — Spring Boot', 'AetherFT'],
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

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2022 – 2024',
    synopsis: 'Intermediate studies in Computer Science at ILM Group of Colleges, Qaboola Campus — building the technical groundwork.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'ICS Beginnings',
        description: 'Intermediate in Computer Science (ICS) at ILM Group of Colleges, Qaboola Campus — developing a foundation in computing, mathematics, and logic.',
        tags: ['ICS', 'Computer Science', 'Mathematics'],
        runtime: '2022 – 2024',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: Software Engineering',
    period: '2024 – Present',
    synopsis: 'BS Software Engineering at COMSATS University Islamabad, Sahiwal Campus — diving deep into software design, backend systems, and AI.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Science in Software Engineering at COMSATS University Islamabad, Sahiwal Campus — studying software design, systems, and development methodologies.',
        tags: ['BS Software Engineering', 'COMSATS', 'Sahiwal'],
        runtime: '2024 – Present',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The Team Leader',
        description: 'Took on team leadership roles in university software projects — managing scope, timelines, and coordinating Git/GitHub workflows for academic teams.',
        tags: ['Team Leader', 'Git', 'Agile', 'Scrum'],
        runtime: 'Academic Projects',
        palette: ocean,
      },
      {
        code: 'S02 E03',
        title: 'The Presenter',
        description: 'Presented the AI Insider Threat Detection System functional architecture at the university Information Security Project Expo.',
        tags: ['InfoSec', 'Expo', 'AI', 'Presentation'],
        runtime: '2025',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Building Real Things',
    period: '2024 – 2025',
    synopsis: 'From desktop Java applications to AI-powered web systems — building practical software across multiple technology stacks.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Java Developer',
        description: 'Built the Bug Tracking System in Java with MVC architecture, MySQL, and JDBC — implementing role-based access, defect lifecycle tracking, and analytical reports.',
        tags: ['Java', 'MySQL', 'JDBC', 'MVC'],
        runtime: '2024',
        palette: amber,
      },
      {
        code: 'S03 E02',
        title: 'The AI Builder',
        description: 'Developed the AI Insider Threat Detection System in Python/Flask — admin dashboard, behavioral monitoring, threat scoring, and audit reporting.',
        tags: ['Python', 'Flask', 'SQLite', 'AI', 'Security'],
        runtime: '2025',
        palette: crimson,
      },
      {
        code: 'S03 E03',
        title: 'The LLM Explorer',
        description: 'Built AetherFT — a FastAPI dashboard for fine-tuning and deploying Hugging Face language models locally, integrating Gemini API and Ollama.',
        tags: ['FastAPI', 'Hugging Face', 'LLM', 'AI'],
        runtime: '2025',
        palette: jade,
      },
    ],
  },
  {
    number: 4,
    title: 'Spring Boot and Beyond',
    period: '2025',
    synopsis: 'Advancing into Spring Boot microservices, library management systems, and full-stack web applications.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Spring Developer',
        description: 'Built a Java Spring Boot Library Management Application — exploring backend architectures, RESTful API design, and production-grade Java development.',
        tags: ['Spring Boot', 'Java', 'REST APIs', 'Backend'],
        runtime: '2025',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The Web Developer',
        description: 'Built frontend web applications: a Mini Social Network, Music Player, and personal portfolio — practising HTML, CSS, JavaScript, and DOM manipulation.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Frontend'],
        runtime: '2025',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Deepening expertise in software architecture, information security, and AI-powered backend applications.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Exploring software architecture, Spring Boot microservices, AI applications, and information security to become a professional backend engineer.',
        tags: ['Software Architecture', 'AI', 'Spring Boot', 'InfoSec'],
        runtime: 'In production',
        palette: amber,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Java', detail: 'OOP · Spring Boot · JDBC · MVC', palette: amber },
  { label: 'Featured project', title: 'Bug Tracking System', detail: 'Role-based · MySQL · Java MVC', palette: crimson },
  { label: 'AI Project', title: 'Insider Threat Detection', detail: 'Python · Flask · SQLite · InfoSec Expo', palette: ocean },
  { label: 'LLM Project', title: 'AetherFT AI Dashboard', detail: 'FastAPI · Hugging Face · LLM fine-tuning', palette: amber },
  { label: 'Backend framework', title: 'Spring Boot', detail: 'Java · REST APIs · Library Management', palette: jade },
  { label: 'Database', title: 'MySQL + JDBC', detail: 'Database design · Data persistence', palette: violet },
  { label: 'Academic leadership', title: 'Team Leader', detail: 'University projects · Git/GitHub', palette: crimson },
  { label: 'University', title: 'COMSATS Sahiwal', detail: 'BS Software Engineering · 2024–Present', palette: ocean },
  { label: 'Algorithmic thinking', title: 'DSA in C++', detail: 'Arrays · Trees · Core data structures', palette: jade },
  { label: 'Current mission', title: 'Backend Engineering', detail: 'Spring Boot · Software Architecture · AI', palette: violet },
];

/** Slides for the "Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'BS Software Eng.',
    lines: ['COMSATS University Islamabad, Sahiwal Campus', '2024 – Present'],
    chips: ['Software Engineering'],
  },
  {
    kicker: 'Skills',
    title: 'Java first.',
    lines: ['Java · Spring Boot · Python · Flask · FastAPI', 'MySQL · JDBC · SQLite · REST APIs · MVC'],
    chips: ['Java', 'Spring Boot', 'Python', 'MySQL', 'REST APIs'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['Bug Tracking System — Java · MySQL · MVC · Role-based access', 'AI Insider Threat Detection — Python · Flask · InfoSec Expo', 'AetherFT AI Dashboard — FastAPI · Hugging Face · LLM fine-tuning'],
  },
  {
    kicker: 'Leadership',
    title: 'Team Leader',
    lines: ['Led university software project teams', 'Coordinated Git/GitHub workflows and sprint cycles', 'Presented AI project at university InfoSec Expo'],
  },
  {
    kicker: 'Interests',
    title: 'Next Episode',
    lines: ['Software Architecture · Spring Boot Microservices', 'Information Security · AI-powered backends'],
  },
  {
    kicker: 'Current mission',
    title: 'Now building',
    lines: ['Clean, maintainable Java backends', 'AI-driven applications · Open source contributions'],
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
    blurb: 'Resume, achievements and skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack and GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc and highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot · Education and background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons · ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals · 2024–2025`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the portfolio', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements and Activities', meta: `${achievements.length} Moments`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume · View and download', palette: violet },
};
'''

with open('src/data/portfolio.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print('portfolio.ts written, lines:', len(content.splitlines()))
