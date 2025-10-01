import { Code, Github, Globe, Layout, Figma, Shield, Terminal, BookOpen, Command, StarIcon } from "lucide-react";
import { type LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  href: string;
  technologies: string[];
  features: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credential: string;
  description: string;
  icon: LucideIcon;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  status?: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skills: SkillCategory[] = [
  {
    title: "Technologies",
    skills: [
      { name: "GitHub", icon: Github },
      { name: "Figma", icon: Figma },
      { name: "Canva", icon: Layout },
      { name: "Web Development", icon: Globe },
      { name: "UI/UX Design", icon: Command },
      { name: "StarUML", icon: StarIcon },
    ],
  },
  {
    title: "Frameworks",
    skills: [
      { name: "Bootstrap", icon: Shield },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "HTML5", icon: Globe },
      { name: "CSS3", icon: Layout },
      { name: "JavaScript", icon: Command },
      { name: "Python", icon: Terminal },
      { name: "C", icon: Command },
      { name: "C++", icon: Code },
      { name: "PHP", icon: Shield },
      { name: "Java", icon: Code },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Rock Paper Scissors Game",
    description:
      "An interactive game built with modern web technologies, featuring smooth animations and engaging user interface.",
    image: "/assets/Rock_Paper_Scissors_Game.jpg",
    href: "https://github.com/zuni-developer/WD-mini-projects/tree/main/Rock%20Paper%20Scissors",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Two modes: Player vs Player and Player vs Computer",
      "Score tracking throughout the game",
      "Interactive and responsive UI",
      "Randomized computer choices",
    ],
  },
  {
    title: "Pretty Plates",
    description:
      "Designed prototypes and developed a web application where user food preferences were gathered through surveys. Applied probability principles to analyze responses and generate menu recommendations tailored to majority preferences.",
    image: "/assets/Pretty_Plates.jpg",
    href: "https://github.com/zuni-developer/Pretty_Plates",
    technologies: ["HTML", "CSS", "JavaScript", "Figma"],
    features: [
      "Figma prototypes for user flows and UI",
      "Fully functional web-based implementation",
      "Probability-based food choice analysis (documented)",
      "Survey-based preference collection",
    ],
  },
  {
    title: "Zodiac Finder",
    description:
      "Created a web app that calculates and displays users’ zodiac signs based on their date of birth with an interactive user-friendly interface.",
    image: "/assets/Zodiac_Finder.jpg",
    href: "https://github.com/zuni-developer/WD-mini-projects/tree/main/Zodiac%20Finder",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Takes user date of birth as input",
      "Displays the corresponding Zodiac sign",
      "Minimal and user-friendly interface",
      "Instant result display",
    ],
  },
  {
    title: "Temperature Converter",
    description:
      "A simple yet effective tool that converts temperatures between Celsius, Fahrenheit, and Kelvin with instant results.",
    image: "/assets/Temperature_Convertor.jpg",
    href: "https://github.com/zuni-developer/WD-mini-projects/tree/main/Temperature%20Convertor",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Converts Celsius, Fahrenheit, and Kelvin",
      "Instant real-time conversion",
      "Simple and clean UI",
      "Lightweight and responsive design",
    ],
  },
  {
    title: "Daily Whisper",
    description:
      "Designed high-fidelity mockups for a journaling mobile app that enables users to record daily thoughts, track moods, and reflect on personal growth.",
    image: "/assets/Daily_Whisper.jpeg",
    href: "https://github.com/zuni-developer/Daily_Whisper",
    technologies: ["Figma", "StarUML", "SRS Documentation"],
    features: [
      "Journaling module for daily entries",
      "Mood and habit tracking (prototype)",
      "Calendar-based entry system",
      "High-fidelity mobile app prototype with UML diagrams",
    ],
  },
  {
    title: "Game Galaxy",
    description:
      "Developed a terminal-based gaming platform in C++ offering multiple games.",
    image: "/assets/Game_Galaxy.jpeg",
    href: "https://github.com/zuni-developer/Game%20Galaxy",
    technologies: ["C++"],
    features: [
      "Menu-driven console application",
      "Includes Tic Tac Toe, Rock Paper Scissors, Number Guessing, and more",
      "Interactive text-based gameplay",
    ],
  },
  {
    title: "Whack-a-Mole",
    description:
      "Implemented a terminal-based interactive game using object-oriented programming, featuring dynamic mole appearances and score tracking.",
    image: "/assets/Wack-a-Mole.png",
    href: "https://github.com/zuni-developer/OOP-mini-projects/blob/main/Whack%20A%20Mole.cpp",
    technologies: ["C++"],
    features: [
      "Console-based interactive simulation",
      "Random mole appearances",
      "Score tracking system",
      "Object-oriented programming approach",
    ],
  },
  {
    title: "Age-based Recommender",
    description:
      "Developed a terminal-based interactive program in C++ recommending activities based on user age.",
    image: "/assets/Age-based_recommender.jpeg",
    href: "https://github.com/zuni-developer/Age-based%20recommender",
    technologies: ["C++"],
    features: [
      "Recommends activities, books, or games based on user age",
      "Multiple small console-based programs",
      "Includes mini-games and fun extras",
      "Condition-based recommendation logic",
    ],
  },
  {
    title: "Music Player",
    description:
      "Built a browser-based music player with playlist management, search, categorization, and core controls for a modern, interactive experience.",
    image: "/assets/Music_Player.png",
    href: "https://github.com/zuni-developer/CodeAlpha_tasks/tree/main/Task%2302_Music_Player",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Preloaded songs with playlist management",
      "Search functionality for tracks",
      "Shuffle and play/pause controls",
      "Interactive browser-based UI",
    ],
  },
  {
    title: "Fortune Teller",
    description:
      "Built a console-based program that takes user date of birth, determines their astrological sign, and generates personalized fortunes with input validation.",
    image: "/assets/Fortune_Teller.jpg",
    href: "https://github.com/zuni-developer/PF-mini-projects/blob/main/fortune%20teller.cpp",
    technologies: ["C++"],
    features: [
      "Takes birth date input with validation",
      "Determines user’s Zodiac sign",
      "Generates random fortune messages",
      "Console-based interactive program",
    ],
  },
];

export const certifications: Certification[] = [
  {
    title: "TechWeek workshop",
    issuer: "BUITEMS Deveopers Club (BDC)",
    date: "July 12, 2024",
    credential: "",
    description: "new trends in tech, practical web and programming skills, introductory concepts in ML and blockchain, and GitHub fundamentals",
    icon: Terminal,
  },
  {
    title: "Cybersecurity Traning  Workshop",
    issuer: "Ignite",
    date: "August 25, 2024",
    credential: "",
    description: "Participated in a practical cybersecurity workshop focused on core security concepts, threat awareness, and hands-on techniques for strengthening digital safety.",
    icon: Shield,
  },
  {
    title: "GREAT FUTURE TALENT OLYMPIAD 2024",
    issuer: "Great Future Pakistan",
    date: "September 24, 2024",
    credential: "",
    description: "Participated in the Great Future Talent Olympiad Batch-V 2024, demonstrating problem-solving, analytical, and technical skills at a national level competition.",
    icon: BookOpen,
  },
  {
    title: "Cybersecurity Career Week 2024 – Interactive Session",
    issuer: "Hack With Her",
    date: "October 16, 2024",
    credential: "",
    description: "Actively participated in ‘The Hackers Among Us: The Gen-Z Guide to Careers in Cybersecurity and Surviving Online’, gaining practical exposure to cybersecurity fundamentals, log analysis, ethical hacking, and digital safety practices.",
    icon: Code,
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "January 26, 2025",
    credential: "Verified Badge",
    description: "Fundamentals of cybersecurity including online safety, common threats, attacks, vulnerabilities and protection methods.",
    icon: Shield,
  },
  {
    title: "Pentest Cyber Specialist Program",
    issuer: "NITSEP",
    date: "January 27, 2025",
    credential: "1cabea48c6",
    description: "Comprehensive cybersecurity certification covering Cisco CCNA, CEH, Cybersecurity Monitoring, WiFi Hacking, Penetration Testing, and Bug Bounty.",
    icon: Shield,
  },
  {
    title: "Google Project Management",
    issuer: "Google via Coursera",
    date: "January 28, 2025",
    credential: "DT054GH7YTN",
    description: "Professional certificate covering six courses, including project planning, execution, and Agile methodologies for both traditional and agile projects.",
    icon: BookOpen,
  },
  {
    title: "Introduction to Dark Web, Aunonymity and Cryptocurrency",
    issuer: "EC - Council",
    date: "Febuary 1, 2025",
    credential: "386637",
    description: "Explored Dark Web fundamentals, online anonymity techniques, and the role of cryptocurrencies in cybersecurity and digital ecosystems through EC-Council’s training.",
    icon: Globe,
  },
  {
    title: "Web Development",
    issuer: "SoloLearn",
    date: "March 6, 2025",
    credential: "CC-2K4VGAAW",
    description: "Comprehensive web development course covering HTML, CSS, JavaScript and responsive design principles.",
    icon: Globe,
  },
  {
    title: "Linux Security Basics for Beginners",
    issuer: "Udemy",
    date: "August 15, 2025",
    credential: "UC-8def2169-fa20-4213-9113-01810fdd62ea",
    description: "Foundational course introducing core Linux security concepts, covering user management, permissions, file system security, and basic hardening practices to build a strong understanding of securing Linux systems.",
    icon: Code,
  },
];

export const experiences: Experience[] = [
  {
    title: "Web Development Intern",
    company: "CodeAlpha",
    period: "February 25th, 2025 - May 25th, 2025",
    description: [
      "Selected for a 3-month intensive web development internship program",
      "Learning new skills with deeper understanding of concepts through hands-on application",
      "Working on real-world projects under the guidance of experienced mentors",
      "Collaborating with team members using industry standard development workflows",
    ],
    status: "Completed"
  },
  {
    title: "Front-End Development Intern",
    company: "DevelopersHub Corporation",
    period: "March 1st, 2025 - April 15th, 2025",
    description: [
      "Part of a dynamic community dedicated to innovation and excellence in the tech industry",
      "Access to exclusive training materials, collaborative tools, and mentorship from experienced professionals",
      "Contributing to meaningful projects with potential impact on the tech landscape",
      "Assigned DHC-209 ID for accessing organization resources and development platforms",
    ],
    status: "Completed"
  },
  {
    title: "Time Stamping Intern",
    company: "Bayyinah | Nouman Ali Khan",
    period: "July 1st, 2025 - August 31st, 2025",
    description: [
      "Selected for Bayyinah’s Summer Internship Program focused on Qur’anic studies",
      "Time-stamped verses by noting start and end points with accuracy and consistency",
      "Tagged ayahs with appropriate themes and subthemes to maintain high-quality categorization",
      "Collaborated with the team leader by submitting finalized work and incorporating feedback",
    ],
    status: "Completed"
  }
];
