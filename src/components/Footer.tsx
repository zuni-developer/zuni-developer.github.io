
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "#",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
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
                className="text-foreground/60 hover:text-foreground transition-colors"
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
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
