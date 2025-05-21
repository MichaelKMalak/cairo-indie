
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 bg-[#390c86] text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-gunterz font-bold mb-4">Ready to Start Creating?</h2>
          <p className="mb-8 max-w-xl mx-auto opacity-90">
            Stop thinking about making films and actually make them. Join our community of indie filmmakers committed to creating one film per month.
          </p>
          <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg mb-8">
            <p className="italic text-lg mb-4">
              "You can get stuck in life but not in making films with CairoIndie FC"
            </p>
            <p className="text-sm opacity-75">The club for filmmakers who are ready to take action</p>
          </div>
          <Button size="lg" className="bg-[#f52e38] hover:bg-[#f52e38]/80 text-white animate-pulse-soft">
            Join the Challenge
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
