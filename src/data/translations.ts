import { PROFILE, type ProfileData } from './profile';
import { PROJECTS, type ProjectItem } from './projects';
import type { Language } from '../components/layout/Header';

const PROFILE_EN: ProfileData = {
  ...PROFILE,
  role: 'JUNIOR SOFTWARE DEVELOPER',
  location: 'BARRANQUILLA / REMOTE',
  status: 'OPEN TO WORK',
  specialty: 'Web and backend development',
  focus: 'Databases and algorithms',
  degree: 'Systems Engineering (final stage)',
  statement: 'I build software with attention to how data is structured, how systems communicate, and how algorithms solve real problems. I am finishing my Systems Engineering degree and looking to start my career as a software developer.',
  nowDoing: [
    'Finishing my Systems Engineering degree and preparing to start my career.',
    'Building projects with React, Node.js, TypeScript, SQL, and databases.',
    'Learning more about backend development, software architecture, algorithms, and the web.',
  ],
  microSkills: [
    { number: '01', label: 'FOCUS', value: 'Software development' },
    { number: '02', label: 'INTERESTS', value: 'Backend · Web · Data' },
    { number: '03', label: 'APPROACH', value: 'Clear code · Tests · Git' },
  ],
  about: {
    paragraph1: 'I am a Systems Engineering student nearing graduation, focused on software development. Through personal and academic projects, I have worked with React, Node.js, TypeScript, Python, SQL, and databases to build web applications and REST APIs and to explore algorithms and data structures.',
    paragraph2: 'I want to understand what happens behind an application: how data is organized, how its components communicate, and how technical choices affect the result. I am looking for a Junior Software Developer role where I can contribute to real projects and keep growing as a developer.',
  },
  education: [
    { number: '01', title: 'Systems Engineering', subtitle: 'Universidad de la Costa', year: '2021 — Present · Final stage' },
    { number: '02', title: 'Data Analysis Bootcamp', subtitle: 'BeTek', year: '40 hours · 2026' },
    { number: '03', title: 'Data Analytics for Logistics Processes', subtitle: 'SENA', year: 'In progress' },
    { number: '04', title: 'Technical Diploma in Payroll and Benefits', subtitle: 'SENA', year: '2018 — 2019' },
    { number: '05', title: 'English', subtitle: 'Certified level', year: 'B1' },
  ],
};

const PROJECTS_EN: ProjectItem[] = [
  {
    ...PROJECTS[0],
    projectNumber: 'PROJECT 01',
    categoryTag: 'ALGORITHMS & DATA STRUCTURES · INDEPENDENT PROJECT',
    description: 'A decoupled algorithm engine implementing Dijkstra and A* with a custom binary min-heap. It finds optimal routes on weighted directed graphs and visualizes the search step by step.',
    role: 'Algorithms · Data structures · Visualization',
    tech: 'TypeScript · Graphs · Dijkstra · A* · Binary Min-Heap · Vitest',
    status: 'Completed / Open Source',
    caseStudy: {
      context: 'RouteOptimizer is a personal project for exploring route finding on weighted directed graphs and visualizing each step of the search.',
      problem: 'Dijkstra and A* can find optimal routes, but A* needs an admissible heuristic to preserve that guarantee. The calculation also needed to remain separate from the visualization.',
      technicalDecisions: [
        { title: 'Custom Binary Min-Heap', description: 'Built MinPriorityQueue on a dynamic array with O(log V) insertion and removal, without an external library for this structure.' },
        { title: 'Adjacency Lists with Map', description: 'Represented the graph with adjacency lists to access each node’s neighbors without a full matrix.' },
        { title: 'Admissible Heuristic', description: 'Computed a scale factor to keep the A* heuristic within the real edge cost for the graphs being modeled.' },
        { title: 'Step-by-Step Recording Engine', description: 'Records each action chronologically (visit_node, examine_edge, update_distance), separating computation from interactive rendering.' },
      ],
      tradeoffs: [
        'A* adds a heuristic calculation; when geometry helps guide the search, it can explore fewer nodes than Dijkstra.',
        'Adjacency lists suit graphs with relatively few connections per node better than a full matrix.',
      ],
      learnings: [
        'A* needs an admissible heuristic to preserve the optimal route.',
        'Separating the engine from the interface made the algorithms easier to test with Vitest.',
      ],
    },
  },
  {
    ...PROJECTS[1],
    projectNumber: 'PROJECT 02',
    categoryTag: 'BACKEND DEVELOPMENT · REST API',
    description: 'A REST API for a commercial CRM built with Node.js, Express, PostgreSQL, and Prisma. It includes JWT authentication, role-based access, data validation, HTTP security, rate limiting, structured logging, automated tests, and OpenAPI/Swagger documentation.',
    role: 'Backend · REST API · Layered architecture',
    tech: 'Node.js · Express · PostgreSQL · Prisma · JWT · Zod · Docker',
    status: 'Completed / Open source',
    caseStudy: {
      context: 'SalesFlow CRM API is a personal project for managing users, clients, leads, deals, and tasks through a REST API.',
      problem: 'Each request needs data and permission checks before reaching business logic. A layered structure keeps those responsibilities separate.',
      technicalDecisions: [
        { title: 'Domain Modules and Layers', description: 'Organized auth, users, clients, leads, deals, and tasks with separate routes, validation, and data access.' },
        { title: 'Validation with Zod', description: 'Middleware checks incoming data before controllers run.' },
        { title: 'Role-Based Access Control', description: 'JWT authentication and different permissions for admin, manager, and sales roles.' },
        { title: 'Documentation and Tests', description: 'OpenAPI documentation with Swagger UI and automated tests using Jest and Supertest.' },
      ],
      tradeoffs: [
        'JWT authenticates requests without storing server-side sessions; every protected request must verify the token.',
        'Prisma makes PostgreSQL access easier across modules, while permission rules still need to be explicit in the application.',
      ],
      learnings: [
        'Pino request logs and centralized error handling help identify problems during development.',
        'Role-based access needs checks in both routes and queries that read user data.',
      ],
    },
  },
  {
    ...PROJECTS[2],
    projectNumber: 'PROJECT 03',
    categoryTag: 'WEB APPLICATION · DATA MANAGEMENT',
    description: 'A web application for managing and searching electoral information, built with React and Firebase. It includes authentication, user roles, search, cursor-based pagination, data export, and a data access layer separate from the interface.',
    role: 'Web application · Data management · Performance',
    tech: 'React · Tailwind CSS · Firebase Auth · Realtime Database · XLSX',
    status: 'Live deployment',
    caseStudy: {
      context: 'Base Electoral is a web application for recording, searching, and organizing electoral information with different access levels for users.',
      problem: 'The first version downloaded every record on startup. As the dataset grew, that approach slowed loading and sent the browser data it did not need to display.',
      technicalDecisions: [
        { title: 'Cursor-Based Pagination', description: 'Queries using limitToFirst and startAt request the records needed for each page.' },
        { title: 'Separated Data Access', description: 'Firebase access lives in src/services, application logic in src/hooks, and presentation in src/views.' },
        { title: 'Normalized Search and Debouncing', description: 'Names are normalized for prefix searches, and input is delayed briefly to avoid a query on every keystroke.' },
        { title: 'Duplicate Handling', description: 'Repeated records are removed when two pages share the cursor node in Realtime Database.' },
      ],
      tradeoffs: [
        'Realtime Database supports synchronization, but its queries require preparing data for prefix searches.',
        'Cursor pagination avoids downloading the whole dataset; the client must handle repeated records at page boundaries.',
      ],
      learnings: [
        'An application that works with a small dataset may need a different query strategy as its data grows.',
        'Fetching only the visible page reduces the browser’s initial workload.',
        'Separating data access from the interface makes it easier to change queries without rebuilding the views.',
      ],
    },
  },
];

export function getProfile(language: Language): ProfileData {
  return language === 'en' ? PROFILE_EN : PROFILE;
}

export function getProjects(language: Language): ProjectItem[] {
  return language === 'en' ? PROJECTS_EN : PROJECTS;
}
