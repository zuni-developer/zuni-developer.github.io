
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/zuni-developer",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/zunaira-sabir-b1878331a",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:your.email@example.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="bg-background border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/60 hover:text-primary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          <p className="text-center text-base text-foreground/60">
            "Building digital experiences that inspire and innovate."
          </p>
          <p className="mt-4 text-center text-sm text-foreground/40">
            © {new Date().getFullYear()} Zunaira Sabir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
