
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="py-20 md:py-28 container">
      <div className="max-w-3xl mx-auto text-center animate-fade-in">
        <div className="flex justify-center mb-6">
          <img src="/lovable-uploads/20cf390a-1ca8-420c-8bdc-d9106d86669f.png" alt="Cairo Indie Filmmakers Club Logo" className="w-full max-w-2xl mx-auto mb-6" />
        </div>
        
        <h2 className="text-xl md:text-2xl font-gunterz font-bold mb-6 text-[#390c86]">
          Make One Film / Month Commitment Challenge
        </h2>
        <p className="text-xl mb-10 leading-relaxed text-slate-100">
          We're the only club that will help you commit and finally make short indie films.
          Learn by doing, not by attending 100s of workshops.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-[#f52e38] hover:bg-[#f52e38]/90">
            Join the Challenge
          </Button>
          <Button size="lg" variant="outline" className="border-[#390c86] text-[#390c86]">
            Learn More
          </Button>
        </div>
        
        <div className="mt-10 p-4 bg-[#cef2e7]/20 rounded-lg border border-[#cef2e7] italic">
          <p className="text-md">
            "Your first film will be shit, but your 5th might not. 
            If you think you're a filmmaker but can't prove it, this is for you."
          </p>
        </div>
      </div>
    </section>;
};
export default Hero;
