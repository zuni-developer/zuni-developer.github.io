import { Code, Github, Globe, Layout, Figma, Shield, Terminal, BookOpen, Command } from "lucide-react";
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
      { name: "Python", icon: Terminal },
      { name: "C++", icon: Code },
      { name: "PHP", icon: Shield },
      { name: "JavaScript", icon: Command },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Rock Paper Scissors Game",
    description:
      "An interactive game built with modern web technologies, featuring smooth animations and engaging user interface.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    href: "https://github.com/zuni-developer",
  },
  {
    title: "Age Calculator",
    description:
      "A utility app that calculates precise age based on birthdate, displaying years, months, and days with a clean interface.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d",
    href: "https://github.com/zuni-developer",
  },
  {
    title: "Zodiac Finder",
    description:
      "An application that determines your zodiac sign based on birth date, providing insights about personality traits and compatibility.",
    image: "https://images.unsplash.com/photo-1515894274780-4a6d1fbd5079",
    href: "https://github.com/zuni-developer",
  },
  {
    title: "Temperature Converter",
    description:
      "A simple yet effective tool that converts temperatures between Celsius, Fahrenheit, and Kelvin with instant results.",
    image: "https://images.unsplash.com/photo-1581343109297-b0723170b907",
    href: "https://github.com/zuni-developer",
  },
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather application that provides real-time weather data with a clean, intuitive interface.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    href: "https://github.com/zuni-developer",
  },
  {
    title: "Task Manager",
    description:
      "A productivity tool built with React, featuring drag-and-drop functionality and local storage integration.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    href: "https://github.com/zuni-developer",
  },
];

export const certifications: Certification[] = [
  {
    title: "Google Project Management",
    issuer: "Google via Coursera",
    date: "January 28, 2025",
    credential: "DT054GH7YTN",
    description: "Professional certificate covering six courses, including project planning, execution, and Agile methodologies for both traditional and agile projects.",
    icon: BookOpen,
  },
  {
    title: "Introduction to C++",
    issuer: "SoloLearn",
    date: "February 15, 2025",
    credential: "CC-18XYG554",
    description: "Comprehensive course covering C++ fundamentals, demonstrating theoretical and practical understanding of the language.",
    icon: Code,
  },
  {
    title: "C++ Intermediate",
    issuer: "SoloLearn",
    date: "February 21, 2025",
    credential: "CC-ATCDZHI2",
    description: "Advanced C++ concepts including memory management, OOP principles, and STL implementation.",
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
    title: "Introduction to JavaScript",
    issuer: "Simplilearn",
    date: "March 7, 2025",
    credential: "8011181",
    description: "JavaScript foundations for beginners, covering syntax, variables, functions, and DOM manipulation.",
    icon: Terminal,
  },
  {
    title: "Web Development",
    issuer: "SoloLearn",
    date: "March 6, 2025",
    credential: "CC-2K4VGAAW",
    description: "Comprehensive web development course covering HTML, CSS, JavaScript and responsive design principles.",
    icon: Globe,
  }
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
