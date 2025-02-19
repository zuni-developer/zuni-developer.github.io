
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
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
  );
};

export default Hero;
