import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";
import sorriaMaisImg from "@/assets/sorriamais.png";
import studioBittencourtImg from "@/assets/studiobittencourt.png";
import casaDasMaquinasImg from "@/assets/casadasmaquinas.png";
import projetoGitHubImg from "@/assets/projetogithub.png";

const projects = [
  {
    title: "Sorria Mais",
    description: "Plataforma web moderna para clínica odontológica com sistema completo de agendamento e gestão de pacientes",
    url: "https://sorriamais.lovable.app",
    image: sorriaMaisImg,
  },
  {
    title: "Studio Bittencourt",
    description: "Website profissional para estúdio de Nail Designer com design minimalista",
    url: "https://studiobittencourt.lovable.app",
    image: studioBittencourtImg,
  },
  {
    title: "Casa das Máquinas",
    description: "Website profissional para oficina que oferece serviço de manutenção de máquinas elétricas e manuais",
    url: "https://ws-casadasmaquinas.lovable.app",
    image: casaDasMaquinasImg,
  },
  {
    title: "Projeto GitHub",
    description: "Projeto pessoal que processa leituras de temperatura de dispositivos IoT e exibe os dados em um dashboard em tempo real",
    url: "https://i3d.me/C6ybuw",
    image: projetoGitHubImg,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
      >
        <div className="relative h-full bg-card border border-border rounded-xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_16px_48px_-12px_hsl(var(--primary)/0.35)]">
          {/* Image Container */}
          <div className="relative w-full h-52 overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-50" />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Content */}
          <div className="p-4 space-y-2.5">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 text-primary font-semibold pt-1 group-hover:gap-3 transition-all duration-300">
              <span className="text-sm">Ver projeto</span>
              <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>

          {/* Gradient Accent Line */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </a>
    </div>
  );
};

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 px-6" id="projects">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`text-center space-y-4 mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Meus <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Conheça alguns dos projetos que desenvolvi
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
