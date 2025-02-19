
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

const ProjectCard = ({ title, description, image, href }: ProjectCardProps) => {
  const projectPath = title.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="group glass card-hover p-4 relative overflow-hidden transform transition-all duration-500 hover:rotate-y-5">
      <div className="aspect-video rounded-lg overflow-hidden mb-4 relative">
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gradient">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <Link
        to={`/project/${projectPath}`}
        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group-hover:translate-x-2 duration-300"
      >
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

export default ProjectCard;
