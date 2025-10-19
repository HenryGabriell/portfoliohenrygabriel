import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`text-center space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Vamos <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Conversar?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Estou sempre aberto a novos projetos e oportunidades
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:contato@henrygabriel.dev"
              className="group flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:shadow-[0_0_30px_hsl(250_95%_75%/0.4)] transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>

            <a
              href="https://github.com/HenryGabriell"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-medium border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/henry-gabriell"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-medium border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="pt-12 text-muted-foreground">
            <p>© 2025 Henry Gabriel. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
