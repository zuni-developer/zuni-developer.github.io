
import { Code, Github, Globe, Database, Layout, Figma } from "lucide-react";
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

export const skills: Skill[] = [
  { name: "Frontend Development", icon: Layout },
  { name: "Backend Development", icon: Database },
  { name: "Version Control", icon: Github },
  { name: "Web Development", icon: Globe },
  { name: "UI/UX Design", icon: Figma },
  { name: "Clean Code", icon: Code },
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
    title: "Introduction to C++",
    issuer: "SoloLearn",
    date: "February 2025",
    credential: "CC-18XYG554",
    description: "Comprehensive course covering C++ fundamentals, demonstrating theoretical and practical understanding of the language.",
    icon: Code,
  },
];

export const experiences: Experience[] = [
  {
    title: "Frontend Development Intern",
    company: "CodeAlpha",
    period: "March 1st, 2025 - March 30th, 2025",
    description: [
      "Selected for a month-long intensive frontend development internship program",
      "Focus on learning new skills and deeper understanding of frontend concepts",
      "Hands-on application of knowledge through practical projects",
      "Collaboration with team members on various development tasks",
    ],
    status: "Upcoming"
  }
];
