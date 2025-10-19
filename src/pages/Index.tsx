import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-primary/8 via-background to-accent/8" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,hsl(200_85%_45%/0.2),transparent_50%),radial-gradient(ellipse_at_bottom_left,hsl(170_75%_40%/0.2),transparent_50%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,hsl(200_85%_45%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(170_75%_40%/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;
