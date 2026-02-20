export const personalInfo = {
  name: 'Venkateshwar Reddygari',
  title: 'Senior Software Engineer',
  email: 'venkateshwarreddyr@outlook.com',
  linkedin: 'https://linkedin.com/in/venkateshwarreddyr',
  github: 'https://github.com/venkateshwarreddyr',
  leetcode: 'https://leetcode.com/venkateshwarreddyr',
  location: 'Hyderabad, Telangana, India',
  roles: [
    'Senior Software Engineer',
    'AI / ML Integration Expert',
    'Full-Stack Developer',
    'Cloud Architecture Engineer',
    'LangGraph & RAG Specialist',
    'Algorithmic Problem Solver',
  ],
  summary:
    'Results-driven Senior Software Engineer with 8+ years of experience building scalable web applications and cutting-edge AI-powered solutions. Expert in full-stack development with React, Node.js, TypeScript, and Python. Specialized in AI/ML integration — architecting RAG systems, multi-agent solutions, and LLM-based platforms.',
  stats: [
    { label: 'Years Experience', value: '8+' },
    { label: 'LeetCode Solutions', value: '2000+' },
    { label: 'Contest Rating', value: '1800+' },
    { label: 'Open Source', value: 'npm' },
  ],
}

export const experiences = [
  {
    company: 'RealPage India Private Limited',
    role: 'Developer III',
    period: 'Apr 2024 – Present',
    location: 'Hyderabad, India',
    color: 'cyan',
    highlights: [
      'Built agentic browser-copilot with Chrome MV3 sidepanel & LangGraph-based Azure Functions backend using SSE + Redis Pub/Sub for real-time HITL web automation',
      'Voice Bot with Screenshare: AI assistant integrating OpenAI Realtime & HTML-to-Markdown screen analysis for proactive real-time UI guidance',
      'Multi-Agent Automation Platform: Architected "script factory" using multi-agent systems to autonomously analyze websites and generate custom automation scripts',
      'Enterprise Data Collection: Engineered scalable queue-based web scraper for real-time market data from thousands of real estate websites',
      'AI Document Generation: Built RAG-powered system for automated legal document creation, mapping placeholders to knowledge base entries',
      'CRM Automation Suite: Developed Salesforce AI toolkit leveraging Model Context Protocol (MCP) to automate support cases, contacts, and opportunities',
      'Contract Intelligence Platform: Full-stack solution extracting risk data from legal contracts and SOC reports using multi-cloud AI strategy',
    ],
    tech: ['TypeScript', 'Python', 'React', 'OpenAI GPT-5.2', 'OpenAI Realtime', 'LangChain', 'LangGraph', 'RAG', 'Azure Functions', 'PostgreSQL', 'MCP', 'Redis'],
  },
  {
    company: 'SyrenCloud Inc',
    role: 'Lead Software Engineer',
    period: 'Dec 2023 – Mar 2024',
    location: 'Hyderabad, India',
    color: 'purple',
    highlights: [
      'Built Supply Chain KPI dashboard with rich data visualizations using Recharts library',
      'Product demoed to enterprise clients including Coca-Cola',
    ],
    tech: ['React.js', 'Recharts', 'TypeScript'],
  },
  {
    company: 'BNMA.INC',
    role: 'Senior Software Engineer',
    period: 'Oct 2022 – Sep 2023',
    location: 'Hyderabad, India',
    color: 'cyan',
    highlights: [
      'Developed Juno Diagnostics — pharmaceutical product addressing prenatal healthcare challenges',
      'Built responsive frontend and admin applications with React.js + TypeScript',
      'Implemented secure AWS infrastructure with Cognito authentication and S3 storage',
      'Optimized application performance while ensuring data integrity',
    ],
    tech: ['React.ts', 'TypeScript', 'Tailwind CSS', 'AWS Cognito', 'Amazon S3'],
  },
  {
    company: 'iSpace Software Solutions India Pvt Ltd',
    role: 'Software Engineer',
    period: 'Mar 2021 – Sep 2022',
    location: 'Hyderabad, India',
    color: 'purple',
    highlights: [
      'Maintained KornFerry Advance — enterprise SaaS platform for professional development',
      'Optimized large dataset rendering, significantly improving page load speeds',
      'Developed custom logging system and super admin delegation features',
    ],
    tech: ['Node.js', 'React.js', 'Express.js', 'Redis', 'MySQL', 'Material UI', 'Jest'],
  },
  {
    company: 'CREATECOMM TECH PVT. LTD.',
    role: 'Software Engineer',
    period: 'Jun 2019 – Feb 2021',
    location: 'Hyderabad, India',
    color: 'cyan',
    highlights: [
      'Built intercity food delivery platform from inception — e-commerce + admin applications',
      'Architected microservices-based backend with RESTful APIs',
      'Collaborated directly with CXO team on product roadmap and implementation strategy',
    ],
    tech: ['React.js', 'Redux', 'Node.js', 'MongoDB', 'Microservices', 'Docker', 'Express.js'],
  },
  {
    company: 'Pixel-Brook Software Solutions',
    role: 'Software Engineer',
    period: 'May 2018 – Jun 2019',
    location: 'Hyderabad, India',
    color: 'purple',
    highlights: [
      '24SkinClinic: Built complete SaaS solution with Angular frontend & Python/Flask backend',
      'StatsNCharts: Designed hybrid database architecture for efficient time-series data management',
      'Developed Python ETL pipelines extracting data from international sources (IMF) via REST APIs',
    ],
    tech: ['Python', 'Angular 4/7', 'Flask', 'MongoDB', 'MySQL', 'GCP'],
  },
]

export const skillCategories = [
  {
    category: 'AI / ML',
    icon: '🤖',
    color: 'cyan',
    skills: ['OpenAI GPT-5.2', 'LangChain', 'LangGraph', 'RAG', 'MCP', 'Multi-Agent Systems', 'OpenAI Realtime', 'Gemini Live API', 'Vertex AI'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'purple',
    skills: ['React.js', 'TypeScript', 'Redux / Redux-Saga', 'Angular 4/7', 'Tailwind CSS', 'Material UI', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'cyan',
    skills: ['Node.js', 'Express.js', 'Python', 'Flask', 'RESTful APIs', 'Microservices', 'Server-Sent Events (SSE)'],
  },
  {
    category: 'Cloud & DevOps',
    icon: '☁️',
    color: 'purple',
    skills: ['AWS (EC2, Lambda, ECS, S3, DynamoDB, RDS)', 'Azure (Functions, Durable, Service Bus)', 'GCP / Vertex AI', 'Docker', 'CI/CD', 'Serverless'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    color: 'cyan',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite', 'Redis', 'Prisma ORM'],
  },
  {
    category: 'Languages',
    icon: '💻',
    color: 'purple',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'Rust', 'Go', 'C', 'C++'],
  },
  {
    category: 'Algorithms & DS',
    icon: '🧮',
    color: 'cyan',
    skills: ['Dynamic Programming (480+)', 'Graphs & Trees (100%)', 'Binary Search', 'BFS / DFS', 'Union-Find', 'Segment Trees', 'Backtracking'],
  },
  {
    category: 'Testing & Tools',
    icon: '🔧',
    color: 'purple',
    skills: ['Jest', 'Playwright', 'Zod', 'Git', 'Chrome Extensions (MV3)', 'JSForce / Salesforce API'],
  },
]

export const projects = [
  {
    title: 'x-skills-for-ai',
    description:
      'Open-source npm package enabling AI agents to execute skills (tools) reliably in production. Powers multi-agent automation with a clean SDK for both Node.js and React applications.',
    tags: ['TypeScript', 'npm', 'Open Source', 'AI Agents', 'React SDK'],
    color: 'cyan',
    icon: '🧠',
    links: [
      { label: 'GitHub', url: 'https://github.com/venkateshwarreddyr/x-skills-for-ai' },
      { label: 'npm core', url: 'https://www.npmjs.com/package/@x-skills-for-ai/core' },
      { label: 'npm react', url: 'https://www.npmjs.com/package/@x-skills-for-ai/react' },
      { label: 'Example App', url: 'https://github.com/venkateshwarreddyr/example-app-with-x-skills-for-ai' },
    ],
  },
  {
    title: 'Agentic Browser Copilot',
    description:
      'Chrome MV3 extension with a LangGraph-based Azure Functions backend. Uses SSE + Azure Redis Pub/Sub to orchestrate real-time and Human-in-the-Loop (HITL) web UI automation from AI agents.',
    tags: ['LangGraph', 'Chrome MV3', 'Azure Functions', 'SSE', 'Redis', 'TypeScript'],
    color: 'purple',
    icon: '🤖',
    links: [
      { label: 'GitHub', url: 'https://github.com/venkateshwarreddyr' },
    ],
  },
  {
    title: 'Voice Bot with Screenshare',
    description:
      'AI assistant integrating OpenAI Realtime API with HTML-to-Markdown screen analysis, delivering proactive and contextual real-time UI guidance to users based on what\'s on their screen.',
    tags: ['OpenAI Realtime', 'React', 'TypeScript', 'Screen Analysis'],
    color: 'cyan',
    icon: '🎙️',
    links: [
      { label: 'GitHub', url: 'https://github.com/venkateshwarreddyr' },
    ],
  },
  {
    title: 'Multi-Agent Automation Platform',
    description:
      '"Script Factory" — multi-agent system that autonomously analyzes websites and generates custom web automation scripts, eliminating manual coding requirements entirely.',
    tags: ['Multi-Agent', 'LangGraph', 'Python', 'TypeScript', 'Web Scraping'],
    color: 'purple',
    icon: '⚡',
    links: [
      { label: 'GitHub', url: 'https://github.com/venkateshwarreddyr' },
    ],
  },
  {
    title: 'AI Document Generation (RAG)',
    description:
      'RAG-powered system for automated legal document creation. Intelligently maps document placeholders to knowledge base entries, reducing manual document preparation time drastically.',
    tags: ['RAG', 'OpenAI', 'LangChain', 'PostgreSQL', 'Python'],
    color: 'cyan',
    icon: '📄',
    links: [
      { label: 'GitHub', url: 'https://github.com/venkateshwarreddyr' },
    ],
  },
  {
    title: 'CRM Automation Suite (MCP)',
    description:
      'Salesforce AI toolkit built on Model Context Protocol (MCP) to automate support cases, contacts, and opportunities management with natural language instructions.',
    tags: ['MCP', 'Salesforce', 'JSForce', 'TypeScript', 'OpenAI'],
    color: 'purple',
    icon: '🔗',
    links: [
      { label: 'GitHub', url: 'https://github.com/venkateshwarreddyr' },
    ],
  },
  {
    title: 'Contract Intelligence Platform',
    description:
      'Full-stack solution extracting risk data and key clauses from legal contracts and SOC reports using a multi-cloud AI strategy across OpenAI, Azure, and GCP.',
    tags: ['React', 'Python', 'OpenAI', 'Azure', 'GCP', 'Document AI'],
    color: 'cyan',
    icon: '⚖️',
    links: [
      { label: 'GitHub', url: 'https://github.com/venkateshwarreddyr' },
    ],
  },
]

export const achievements = [
  {
    title: 'LeetCode Elite',
    value: '2000+',
    subtitle: 'Problems Solved',
    detail: 'Peak contest rating 1800+',
    icon: '🏆',
  },
  {
    title: 'DP Specialist',
    value: '480+',
    subtitle: 'DP Problems',
    detail: 'Dynamic Programming mastery',
    icon: '🧩',
  },
  {
    title: 'Graph Expert',
    value: '100%',
    subtitle: 'Graph & DSU',
    detail: 'All Graph & Union-Find problems',
    icon: '🕸️',
  },
  {
    title: 'Contest Winner',
    value: '1st',
    subtitle: 'Tarang Fest',
    detail: 'Programming Contest, Vignan University',
    icon: '🥇',
  },
  {
    title: 'Multi-Cloud',
    value: 'AWS',
    subtitle: '+ Azure + GCP',
    detail: 'EC2, Lambda, ECS, S3, DynamoDB, Functions',
    icon: '☁️',
  },
  {
    title: 'Open Source',
    value: 'npm',
    subtitle: '@x-skills-for-ai',
    detail: 'Published core + React SDK packages',
    icon: '📦',
  },
]
