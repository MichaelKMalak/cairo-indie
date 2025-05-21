
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-20 md:py-28 container">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Welcome to <span className="text-primary">Blank</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
          A clean, modern starting point for your next amazing web application. Build something great.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg">Get Started</Button>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
