
const Contact = () => {
  return (
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
  );
};

export default Contact;
