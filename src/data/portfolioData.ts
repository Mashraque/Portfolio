import { CandidateInfo, SkillCategory, ExperienceItem, EducationItem } from '../types';

export const candidateData: CandidateInfo = {
  name: "Md. Nurul Mashraque Maruf",
  title: "Junior Unity Developer & Gameplay Programmer",
  badge: "OPEN TO WORK • JUNIOR UNITY & GAMEPLAY ROLES",
  location: "Narayanganj, Bangladesh",
  phone: "+8801815680182",
  email: "nurul.mashraque@gmail.com",
  github: "https://github.com/Mashraque",
  linkedin: "https://linkedin.com/in/mashraque",
  itch: "https://its-mash-here.itch.io",
  availability: "Available for Junior Unity Developer, Gameplay Programmer & Technical Junior Roles",
  summary: "Software Engineering graduate with a focused passion for Unity 2D/3D development, responsive gameplay mechanics, and clean C# fundamentals. Combining computer science training with 5+ years of real-world business operations, problem-solving, and disciplined execution.",
  bioParagraphs: [
    "I am a Software Engineering graduate actively developing my career in Unity game development and gameplay programming. I focus on creating responsive player mechanics, tight physics controllers, and clean component interactions in C#.",
    "Through hands-on projects, I have built and published playable games like 'Pew Pew Orbit' on Itch.io—integrating orbital math, weapon heat systems, dynamic hazard spawners, and WebGL optimization—as well as 2D platformer mechanics with custom physics and parallax depth.",
    "Bringing 5+ years of operational leadership, clear communication, and high-precision technical documentation experience, I am grounded, eager to learn under senior mentorship, and ready to deliver reliable contributions to an agile game development team."
  ],
  quickStats: {
    currentRole: "Junior Unity Developer",
    primaryEngine: "Unity 3D / 2D (C#)",
    mainLanguage: "C# (.NET / OOP)",
    preferredPlatform: "PC & WebGL / Mobile",
    location: "Narayanganj, Bangladesh (Open to Remote)",
    availability: "Immediate / Full-time / Remote"
  },
  languages: [
    { language: "Bengali", proficiency: "Native" },
    { language: "English", proficiency: "Fluent (Professional Working Proficiency)" }
  ],
  personalDetails: {
    dob: "October 20, 1993",
    bloodGroup: "O (+ve) Regular Donor"
  }
};

export const skillsCategories: SkillCategory[] = [
  {
    id: "gameplay-engine",
    categoryName: "Unity Engine & Gameplay Systems",
    subtitle: "Core engine workflows, 2D/3D physics, cameras, and player feedback",
    skills: [
      { name: "Unity 2D & 3D Engine", level: "Core Skill", description: "Scene hierarchy, prefab workflows, component lifecycle, asset pipelines", highlight: true },
      { name: "2D Character Controllers", level: "Core Skill", description: "Rigidbody2D physics, grounded velocity calculations, responsive jump arcs", highlight: true },
      { name: "Collision & Triggers", level: "Core Skill", description: "OnTriggerEnter2D/3D, layer masks, collectible pickups, interaction zones", highlight: true },
      { name: "Unity UI (uGUI & TextMeshPro)", level: "Core Skill", description: "Score counters, health/heat gauges, pause menus, responsive HUD canvas" },
      { name: "Cinemachine & Camera Systems", level: "Working Knowledge", description: "Target follow damping, deadzones, virtual camera transitions" },
      { name: "Audio & Particle VFX", level: "Working Knowledge", description: "Audio clip playback, volume triggers, particle effect instantiation" },
      { name: "WebGL Build & Deployment", level: "Core Skill", description: "Optimization, canvas scaling, Itch.io deployment pipeline", highlight: true }
    ]
  },
  {
    id: "programming",
    categoryName: "C# Scripting & Software Foundations",
    subtitle: "Object-oriented programming, clean code structure, and game logic",
    skills: [
      { name: "C# (.NET / Unity Scripting)", level: "Core Skill", description: "Variables, methods, conditionals, loops, coroutines, clean syntax", highlight: true },
      { name: "Object-Oriented Programming (OOP)", level: "Core Skill", description: "Classes, encapsulation, inheritance, modular component architecture", highlight: true },
      { name: "Component Communication", level: "Core Skill", description: "GetComponent, UnityEvents, C# delegates, decoupling UI from game logic", highlight: true },
      { name: "Game Loop & State Logic", level: "Core Skill", description: "GameManager state flow, score tracking, win/lose conditions, restart cycles" },
      { name: "Object Pooling Pattern", level: "Working Knowledge", description: "Recycling projectile and hazard GameObjects to reduce GC allocations" },
      { name: "Debugging & Console Tracing", level: "Core Skill", description: "Debug.Log, breakpoint tracing in Visual Studio, inspector validation" }
    ]
  },
  {
    id: "tools-workflow",
    categoryName: "Tools, Workflow & Professional Strengths",
    subtitle: "Development environments, version control, and professional maturity",
    skills: [
      { name: "Git & GitHub", level: "Core Skill", description: "Version control, commit history, repository organization, branch workflows", highlight: true },
      { name: "Visual Studio / VS Code", level: "Core Skill", description: "C# IDE configuration, solution debugging, Unity IntelliSense integration" },
      { name: "Itch.io Release Pipeline", level: "Core Skill", description: "WebGL package testing, compression settings, game page setup" },
      { name: "Operational Discipline & Leadership", level: "Core Skill", description: "5+ years managing business operations, logistics, and accountability", highlight: true },
      { name: "High-Precision Documentation", level: "Core Skill", description: "Clear technical logs, real-time documentation (AugmedixBD 100% rating)" },
      { name: "Coachability & Rapid Learning", level: "Core Skill", description: "Active learner, receptive to senior code review and design feedback" }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "family-business",
    company: "Family-Owned Textile Dyes & Chemicals Business",
    role: "Business Operations Manager",
    period: "11/2020 – Present",
    location: "Narayanganj, Bangladesh",
    type: "Business Operations & Management",
    badge: "OPERATIONAL LEADERSHIP",
    responsibilities: [
      "Directed end-to-end supply chain logistics, procurement, and commercial distribution across regional industrial manufacturing hubs.",
      "Developed and executed operational frameworks that increased client retention by 15% and reduced supply chain costs by 10%.",
      "Introduced computerized inventory control and tracking workflows, reducing stock discrepancies by 25%.",
      "Negotiated high-value supplier agreements and managed vendor relationships with consistency and financial rigor."
    ],
    achievements: [
      "15% increase in client retention through disciplined service delivery and proactive communication.",
      "Maintained zero supply disruption across multi-year global logistics fluctuations."
    ],
    technologies: ["Process Optimization", "Inventory Control", "Strategic Planning", "Financial Management", "Client Relations"]
  },
  {
    id: "augmedix-bd",
    company: "AugmedixBD",
    role: "Remote Documentation Specialist",
    period: "01/2019 – 11/2020",
    location: "Dhaka, Bangladesh (US Healthcare Support)",
    type: "Real-time Technical & Clinical Documentation",
    badge: "EMPLOYEE OF THE MONTH",
    responsibilities: [
      "Provided high-precision, real-time documentation for California-based physicians via live Google Glass audio/video streams.",
      "Consistently maintained a 100% client satisfaction rating through extreme accuracy, speed, and strict regulatory compliance.",
      "Trained and mentored 5 new documentation specialists, improving overall cohort productivity by 18%.",
      "Maintained high-speed typing (80 WPM, 95%+ accuracy) and attention to detail under fast-paced live streaming conditions."
    ],
    achievements: [
      "Awarded Employee of the Month for flawless quality scores and client satisfaction.",
      "Mentored and onboarded 5 new team members to full production readiness."
    ],
    technologies: ["Real-time Data Processing", "Technical Documentation", "Google Glass Interface", "80 WPM Typing", "Remote Teamwork"]
  }
];

export const educationData: EducationItem[] = [
  {
    id: "daffodil-se",
    degree: "B.Sc. in Software Engineering",
    institution: "Daffodil International University",
    period: "2017",
    cgpa: "3.03 / 4.00",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Rigorous core curriculum in Object-Oriented Programming (OOP), Data Structures & Algorithms, Software Architecture, and Database Systems.",
      "Strong foundational training in modular software engineering, version control, and computer science problem-solving."
    ],
    coursework: [
      "Object-Oriented Programming (C# / Java / C)",
      "Data Structures & Algorithms",
      "Software Design Patterns & Architecture",
      "Database Management Systems",
      "Human-Computer Interaction (HCI)",
      "Operating Systems & Linux"
    ]
  },
  {
    id: "tolaram-hsc",
    degree: "Higher Secondary Certificate (H.S.C.) — Science",
    institution: "Govt. Tolaram College",
    period: "2013",
    cgpa: "GPA 3.80 / 5.00",
    location: "Dhaka, Bangladesh",
    highlights: [
      "Focus on Mathematics, Physics, Chemistry, and Information Technology."
    ],
    coursework: ["Physics", "Mathematics", "Chemistry", "ICT"]
  }
];
