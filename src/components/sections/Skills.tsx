
import { skills } from "@/data/portfolio-data";

const Skills = () => {
  return (
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
  );
};

export default Skills;
