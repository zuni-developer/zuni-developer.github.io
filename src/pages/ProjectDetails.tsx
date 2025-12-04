
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/data/portfolio-data";
import { Button } from "@/components/ui/button";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.title.toLowerCase().replace(/\s+/g, '-') === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-gradient">{project.title}</h1>
            <p className="text-lg text-muted-foreground">{project.description}</p>
            
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Features</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/*<div className="pt-4">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90"
              >
                <a href={project.href} target="_blank" rel="noopener noreferrer">
                  View Source Code
                </a>
              </Button>
            </div>
          </div>*/}
          
          <div className="space-y-6">
            <div className="aspect-video rounded-lg overflow-hidden glass">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/*<div className="glass p-6 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Live Preview</h2>
              <p className="text-muted-foreground">
                Experience the project in action. This section would typically contain
                an interactive demo or screenshots of the project's key features.
              </p>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
