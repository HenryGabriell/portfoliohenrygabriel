import { useScrollReveal } from "@/hooks/useScrollReveal";

const technologies = [
  "HTML", "CSS", "JavaScript", "Bootstrap", "React",
  "Python", "Node.js", "MySQL", "Supabase", "Figma",
  "Git", "Lovable"
];

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-40 px-6" id="about">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`space-y-16 transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Sobre <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mim</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Formado em Análise e Desenvolvimento de Sistemas, transformo ideias em soluções digitais completas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-3xl font-bold text-foreground">
                  Transformando <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ideias</span> em realidade digital
                </h3>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-primary">Desenvolvedor Full Stack</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Formado em <span className="text-foreground font-semibold">Análise e Desenvolvimento de Sistemas</span>, 
                  sou especializado em criar aplicações web completas e modernas.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Do design à implementação, trabalho com as tecnologias mais atuais do mercado para 
                  entregar soluções que combinam <span className="text-primary font-semibold">performance</span>, 
                  <span className="text-accent font-semibold"> usabilidade</span> e 
                  <span className="text-primary font-semibold"> código de qualidade</span>.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-semibold text-foreground">Stack Tecnológico</h3>
                <div className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {technologies.map((tech, index) => (
                  <div
                    key={tech}
                    className="group relative p-5 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(200_100%_60%/0.2)]"
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative text-center block font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
