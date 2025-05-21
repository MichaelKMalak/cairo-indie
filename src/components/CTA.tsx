
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="bg-muted py-16">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Start building your next great idea with this clean, modern template.
          </p>
          <Button size="lg" className="animate-pulse-soft">Get Started Now</Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
