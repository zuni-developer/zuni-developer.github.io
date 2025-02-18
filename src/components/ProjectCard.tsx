
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

const ProjectCard = ({ title, description, image, href }: ProjectCardProps) => {
  return (
    <div className="group glass card-hover p-4 relative overflow-hidden">
      <div className="aspect-video rounded-lg overflow-hidden mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <a
        href={href}
        className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
      >
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
};

export default ProjectCard;
