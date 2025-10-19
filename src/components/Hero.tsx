import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { Code2, Sparkles } from "lucide-react";

const Hero = () => {
  const { ref, isVisible } = useScrollReveal();
  const { displayedText, isComplete } = useTypingAnimation("Henry Gabriel", 2500);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-12 pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(250_95%_75%/0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(280_85%_70%/0.15),transparent_50%)]" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div
        ref={ref}
        className={`relative z-10 max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/50 backdrop-blur-sm border border-border rounded-full text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Full Stack Developer</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block text-foreground mb-4">Olá, eu sou</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent min-h-[1.2em]">
              {displayedText}
              {!isComplete && <span className="animate-pulse">|</span>}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transformo ideias em <span className="text-primary font-semibold">experiências digitais</span> modernas e performáticas
          </p>

          <div className="flex flex-wrap gap-6 justify-center pt-8">
            <a
              href="#projects"
              className="group px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:shadow-[0_0_30px_hsl(142_76%_36%/0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <Code2 className="w-5 h-5" />
              Ver Projetos
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-card text-foreground rounded-xl font-medium border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105"
            >
              Entrar em Contato
            </a>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
