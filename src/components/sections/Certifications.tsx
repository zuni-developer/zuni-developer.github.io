
import { Award } from "lucide-react";
import { certifications } from "@/data/portfolio-data";

const Certifications = () => {
  return (
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
  );
};

export default Certifications;
