import { CandidateInfo, SkillCategory, ExperienceItem, EducationItem, PipelineStep, StatItem } from '../types';

export const candidateData: CandidateInfo = {
  name: "Md. Nurul Mashraque Maruf",
  title: "Junior Unity Game Developer",
  badge: "READY FOR HIRE // UNITY & GAMEPLAY PROGRAMMING",
  location: "Narayanganj, Bangladesh",
  phone: "+8801815680182",
  email: "nurul.mashraque@gmail.com",
  github: "https://github.com/Mashraque",
  linkedin: "https://linkedin.com/in/mashraque", // [Placeholder: update with actual LinkedIn URL]
  availability: "Open to Junior Unity Developer, Gameplay Programmer & Game Dev Roles",
  summary: "Software Engineering graduate with hands-on Unity game development experience and five years of end-to-end business operations management. Adept at translating creative concepts and technical constraints into polished, playable interactive experiences with robust C# architecture.",
  bioParagraphs: [
    "I am a Software Engineering graduate with a dedicated passion for Unity game development and gameplay programming. My journey combines technical software engineering rigor with creative game mechanic prototyping, dynamic camera systems, and responsive game feel.",
    "With a strong foundation in C#, object-oriented architecture, and 3D/2D gameplay systems, I have engineered full gameplay loops ranging from tower defense resource economies and enemy wave AI to narrative adventure quest systems driven by Cinemachine.",
    "Additionally, bringing 5+ years of end-to-end business operations and remote technical documentation experience, I offer proven cross-functional communication, rapid problem-solving, and disciplined execution—ready to deliver immediate impact on an agile game development team."
  ],
  quickStats: {
    currentRole: "Junior Unity Developer",
    primaryEngine: "Unity 3D / 2D (C#)",
    mainLanguage: "C# (.NET / OOP)",
    preferredPlatform: "PC & Mobile (Android/iOS)",
    location: "Narayanganj, Bangladesh",
    availability: "Immediate / Full-time / Remote"
  },
  languages: [
    { language: "Bengali", proficiency: "Native" },
    { language: "English", proficiency: "Fluent (Professional Working Proficiency)" }
  ],
  personalDetails: {
    dob: "October 20, 1993",
    bloodGroup: "O (+ve)"
  }
};

export const skillsCategories: SkillCategory[] = [
  {
    id: "game-dev",
    categoryName: "Unity & Gameplay Development",
    subtitle: "Core engine capabilities, physics, AI pathfinding, and interactive systems",
    skills: [
      { name: "Unity 3D & 2D Engine", level: "Core Skill", description: "Scene management, prefab workflows, lifecycle scripts, asset pipelines", highlight: true },
      { name: "Cinemachine & Cameras", level: "Core Skill", description: "Dynamic virtual cameras, blend lists, target tracking, cutscene transitions", highlight: true },
      { name: "AI & Pathfinding", level: "Core Skill", description: "NavMesh agents, state machines, enemy wave spawning, targeting logic", highlight: true },
      { name: "Combat & Gameplay Loops", level: "Core Skill", description: "Tower defense loops, health systems, damage calculation, cooldown timers", highlight: true },
      { name: "2D/3D Physics & Raycasting", level: "Core Skill", description: "Rigidbodies, custom collision triggers, ground detection, gravity simulation" },
      { name: "Quest & Puzzle Logic", level: "Core Skill", description: "Objective tracking, clue triggers, inventory interactions, sequential state" },
      { name: "Unity UI (uGUI)", level: "Working Knowledge", description: "Responsive HUDs, health bars, inventory panels, modal dialogues" },
      { name: "Mobile Game Optimization", level: "Working Knowledge", description: "Draw call reduction, texture compression, frame-rate profiling" }
    ]
  },
  {
    id: "programming",
    categoryName: "Programming & Software Engineering",
    subtitle: "Object-oriented design, clean code practices, and game architecture",
    skills: [
      { name: "C# Scripting", level: "Core Skill", description: "Interfaces, delegates, events, generics, LINQ, and clean OOP architecture", highlight: true },
      { name: "Object-Oriented Design (OOP)", level: "Core Skill", description: "Polymorphism, inheritance, encapsulation, modular script decoupling", highlight: true },
      { name: "Game Architecture & Patterns", level: "Core Skill", description: "Singleton managers, Observer pattern, State machines, Component-based design", highlight: true },
      { name: "Data Structures & Algorithms", level: "Working Knowledge", description: "Queues, lists, dictionaries, spatial sorting, pathfinding heuristics" },
      { name: "Debugging & Profiling", level: "Core Skill", description: "Unity Profiler, Visual Studio debugger, console logs, breakpoint tracing" },
      { name: "Version Control (Git/GitHub)", level: "Core Skill", description: "Branching strategies, conflict resolution, commit hygiene, repo management" }
    ]
  },
  {
    id: "tools-operations",
    categoryName: "Tools & Professional Strengths",
    subtitle: "Development environments, workflows, and cross-functional operations",
    skills: [
      { name: "Visual Studio / VS Code", level: "Core Skill", description: "C# IDE setup, IntelliSense, solution debugging, Unity integration" },
      { name: "Git & GitHub", level: "Core Skill", description: "Collaborative workflows, PRs, versioning, release tracking" },
      { name: "Technical Documentation", level: "Core Skill", description: "Game design documents (GDD), API notes, HIPAA-grade clinical protocols", highlight: true },
      { name: "Cross-Functional Operations", level: "Core Skill", description: "5+ years managing global vendor negotiations, logistics, and multi-team goals" },
      { name: "Blender & 3D Assets", level: "Working Knowledge", description: "Asset importing, material setup, collision mesh configuration" },
      { name: "Figma & UI Prototyping", level: "Working Knowledge", description: "HUD wireframing, layout styling, UX flow design" }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "maruf-enterprise",
    company: "Maruf Enterprise",
    role: "Co-Proprietor & Operations Manager",
    period: "12/2020 – Present",
    location: "Narayanganj, Bangladesh",
    type: "Business Operations & Technical Management",
    badge: "5+ YEARS LEADERSHIP",
    responsibilities: [
      "Directed end-to-end import logistics and distribution for the region's premier supplier of Optical Brightening Agents (OBA) and textile specialty chemicals.",
      "Managed global supply chain workflows including international vendor negotiations, bulk procurement contracts, and multi-agency customs documentation.",
      "Oversaw B2B client acquisition, account retention, inventory turnover forecasting, and debt recovery (dunning) systems across major regional industrial hubs.",
      "Coordinated high-capacity warehouse operations to ensure flawless, uninterrupted material pipelines for large-scale manufacturing clients."
    ],
    achievements: [
      "Maintained zero supply disruption across multi-year volatile global shipping cycles.",
      "Streamlined inventory tracking workflows, boosting operational turnover efficiency and cash-flow predictability."
    ],
    technologies: ["Supply Chain Architecture", "Process Optimization", "Vendor Negotiations", "Cross-Functional Leadership", "Technical Documentation"]
  },
  {
    id: "augmedix-bd",
    company: "AugmedixBD",
    role: "Remote Documentation Specialist",
    period: "01/2019 – 11/2020",
    location: "Dhaka, Bangladesh (Remote USA Support)",
    type: "Real-time Medical Informatics & High-Accuracy Documentation",
    badge: "100% SATISFACTION RATING",
    responsibilities: [
      "Delivered high-precision, real-time clinical documentation for healthcare providers in California, USA via live Google Glass audio/video streams.",
      "Maintained a continuous 100% client satisfaction rating while managing complex, high-velocity data entry with 70+ WPM typing speed.",
      "Ensured rigorous compliance with United States HIPAA regulatory standards, clinical terminology, and secure patient data confidentiality protocols."
    ],
    achievements: [
      "Recognized for zero-error clinical transcription under high-pressure real-time streaming environments.",
      "Demonstrated extreme attention to detail and reliable remote asynchronous collaboration with US-based medical teams."
    ],
    technologies: ["Google Glass Stream Interface", "Electronic Health Records (EHR)", "HIPAA Compliance", "Real-Time Data Processing", "70+ WPM Speed"]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "daffodil-se",
    degree: "B.Sc. in Software Engineering",
    institution: "Daffodil International University",
    period: "Graduated 2017",
    cgpa: "3.03 / 4.00",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Comprehensive curriculum spanning Object-Oriented Programming (OOP), Software Architecture, Algorithms, Database Systems, and System Analysis.",
      "Final coursework & practical lab projects focused on interactive software systems and clean application engineering."
    ],
    coursework: [
      "Object-Oriented Programming (C#/Java)",
      "Data Structures & Algorithms",
      "Software Design Patterns & Architecture",
      "Database Management Systems",
      "Computer Graphics & Interactive Systems",
      "Human-Computer Interaction (HCI)"
    ]
  }
];

export const developmentPipeline: PipelineStep[] = [
  {
    stepNumber: 1,
    title: "Concept & GDD Planning",
    codeName: "PHASE_01 // BLUEPRINT",
    description: "Defining core gameplay loop, target player fantasy, mechanics scope, art direction, and technical architecture before writing the first line of code.",
    deliverables: ["Game Design Document", "Core Loop Wireframe", "Architecture Blueprint"],
    icon: "FileCode"
  },
  {
    stepNumber: 2,
    title: "Rapid Greybox Prototyping",
    codeName: "PHASE_02 // MECHANICS",
    description: "Building responsive player movement, physics interactions, and core mechanics using primitive 3D/2D shapes to validate 'Game Feel' and instant fun factor.",
    deliverables: ["Playable Prototype", "Controller Script", "Physics Feedback"],
    icon: "Gamepad2"
  },
  {
    stepNumber: 3,
    title: "System Architecture & AI",
    codeName: "PHASE_03 // SYSTEMS",
    description: "Designing modular, decoupled C# systems using Observer and State Machine patterns: wave spawning, enemy NavMesh AI, inventory, and health tracking.",
    deliverables: ["Enemy State Machines", "Spawn System", "Manager Singletons"],
    icon: "Cpu"
  },
  {
    stepNumber: 4,
    title: "Cinematics, UI & Game Feel",
    codeName: "PHASE_04 // POLISH",
    description: "Integrating Cinemachine dynamic camera blends, screen shake, audio triggers, particle VFX, and responsive uGUI HUD interfaces.",
    deliverables: ["Cinemachine Virtual Cams", "HUD Feedback", "VFX & Audio Mix"],
    icon: "Sparkles"
  },
  {
    stepNumber: 5,
    title: "Testing, Profiling & Debugging",
    codeName: "PHASE_05 // QA_AUDIT",
    description: "Identifying bottlenecks using the Unity Profiler, debugging edge cases, stress-testing enemy wave counts, and tuning difficulty balance.",
    deliverables: ["Profiler Logs", "Bug Fixes", "Gameplay Balancing"],
    icon: "ShieldAlert"
  },
  {
    stepNumber: 6,
    title: "Optimization & Build Release",
    codeName: "PHASE_06 // DEPLOY",
    description: "Optimizing draw calls, texture atlases, memory allocations, and creating standalone PC Windows & WebGL builds for playtesters and recruiters.",
    deliverables: ["Standalone Build (.exe)", "WebGL Playable Demo", "GitHub Repository"],
    icon: "Rocket"
  }
];

export const statisticsData: StatItem[] = [
  {
    id: "prototypes",
    label: "Unity Prototypes & Games",
    value: "6+",
    sublabel: "3D Tower Defense, Narrative & Arcade",
    icon: "Gamepad2"
  },
  {
    id: "systems",
    label: "Core Gameplay Systems",
    value: "18+",
    sublabel: "AI, Spawners, Cameras, Inventory",
    icon: "Cpu"
  },
  {
    id: "csharp-code",
    label: "C# Architecture Modules",
    value: "45+",
    sublabel: "Modular decoupled scripts",
    icon: "Code2"
  },
  {
    id: "operations",
    label: "Professional Operations Exp",
    value: "5+ Yrs",
    sublabel: "End-to-end execution & rigor",
    icon: "Briefcase"
  },
  {
    id: "learning-streak",
    label: "Daily Dev & Learning Streak",
    value: "Active",
    sublabel: "Unity 6, Cinemachine, Shaders",
    icon: "Flame"
  }
];
