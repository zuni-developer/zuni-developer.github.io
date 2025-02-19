import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Footer from "@/components/Footer";
import { Moon, Sun, Code, Github, Globe, Database, Layout, Figma, Award, Briefcase, Calendar } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Check system preference
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const skills = [
    { name: "Frontend Development", icon: Layout },
    { name: "Backend Development", icon: Database },
    { name: "Version Control", icon: Github },
    { name: "Web Development", icon: Globe },
    { name: "UI/UX Design", icon: Figma },
    { name: "Clean Code", icon: Code },
  ];

  const projects = [
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

  const certifications = [
    {
      title: "Introduction to C++",
      issuer: "SoloLearn",
      date: "February 2025",
      credential: "CC-18XYG554",
      description: "Comprehensive course covering C++ fundamentals, demonstrating theoretical and practical understanding of the language.",
      icon: Code,
    },
  ];

  const experiences = [
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

  return (
    <div className={`min-h-screen flex flex-col ${isDark ? "dark" : ""}`}>
      <button
        onClick={toggleTheme}
        className="fixed right-4 top-20 z-50 p-2 rounded-full bg-background/80 backdrop-blur border shadow-lg transition-colors hover:bg-secondary/80"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="h-6 w-6 text-yellow-500" />
        ) : (
          <Moon className="h-6 w-6 text-slate-700" />
        )}
      </button>

      <Navbar />
      
      {/* Hero Section */}
      <section
        id="home"
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center min-h-screen"
      >
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gradient animate-fadeIn">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 animate-fadeIn delay-200">
            I'm a passionate web developer focused on creating interactive and
            engaging digital experiences. Through continuous learning and
            innovation, I strive to build applications that make a difference.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center animate-fadeIn">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group flex flex-col items-center p-6 glass card-hover animate-fadeIn"
              >
                <skill.icon className="h-10 w-10 mb-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="glass p-8 card-hover animate-fadeIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-lg text-primary">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>
                    <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    {exp.status && (
                      <div className="mt-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary">
                          {exp.status}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.credential}
                className="glass p-6 card-hover animate-fadeIn"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground mb-2">
                      {cert.issuer} • {cert.date}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {cert.description}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Credential ID: {cert.credential}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-muted-foreground mb-6">
            As a web developer, I'm constantly exploring new technologies and
            pushing the boundaries of what's possible on the web. My journey in
            web development started with a simple curiosity about how websites
            work, and has evolved into a passion for creating intuitive,
            user-friendly applications.
          </p>
          <p className="text-lg text-muted-foreground">
            When I'm not coding, you can find me learning about new web
            technologies, contributing to open-source projects, or helping other
            developers in the community.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg text-muted-foreground mb-8">
            I'm always open to new opportunities and collaborations. Feel free to
            reach out if you'd like to work together or just want to say hello!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors animate-fadeIn"
          >
            Send me a message
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
