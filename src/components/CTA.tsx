
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 md:py-24 bg-[#390c86] text-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-gunterz font-bold mb-4">Ready to Start Creating?</h2>
          <p className="mb-8 max-w-xl mx-auto text-white/85 font-montserrat">
            Stop thinking about making films and actually make them. Join our community of indie filmmakers committed to creating one film per sprint.
          </p>
          <p className="mb-10 mx-auto max-w-lg text-lg italic leading-relaxed text-white/90 font-montserrat">
            "You can get stuck in life but not in making films with CairoIndie Filmmakers Club"
          </p>
          <Button
            size="lg"
            className="bg-[#f52e38] hover:bg-[#f52e38]/90 text-white font-gunterz font-bold rounded-md transition-colors"
            onClick={() => document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join the Challenge
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
