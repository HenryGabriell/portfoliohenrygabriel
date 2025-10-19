import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { Code2, Sparkles } from "lucide-react";

const Hero = () => {
  const { ref, isVisible } = useScrollReveal();
  const { displayedText, isComplete } = useTypingAnimation("Transformo ideias em experiências digitais modernas e performáticas", 2500);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-4 pb-20">
      
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

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block text-foreground mb-4">Olá, eu sou</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Henry Gabriel
            </span>
          </h1>
          
          <p className="text-base md:text-xl lg:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed min-h-[3em]">
            Transformo ideias em <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-semibold">experiências digitais</span> modernas e performáticas
            {!isComplete && <span className="animate-pulse">|</span>}
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
