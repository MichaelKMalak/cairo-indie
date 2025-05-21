
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  // Check font loading status
  useEffect(() => {
    document.fonts.ready.then(() => {
      const gunterz = document.fonts.check('1em Gunterz');
      console.log('Hero component - Gunterz font loaded:', gunterz);
      setFontsLoaded(true);
    });
  }, []);

  return <section className="py-20 md:py-28 container">
      <div className={`max-w-3xl mx-auto text-center animate-fade-in ${fontsLoaded ? 'fonts-loaded' : 'font-init'}`}>
        <div className="flex justify-center mb-6">
          <img src="/lovable-uploads/86650fe7-49b3-40d3-8506-2586b2de46ff.png" alt="Cairo Indie Filmmakers Club Logo" className="w-full max-w-44 mx-auto mb-5 object-contain" />
        </div>
        
        <h2 className="text-xl font-gunterz mb-6 text-[#390c86] md:text-2xl font-bold mobile-font-fix" style={{
          fontFamily: "'Gunterz', Georgia, 'Times New Roman', Times, serif",
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale"
        }}>
          Make One Film / Month Commitment Challenge
        </h2>
        <p className="text-xl mb-10 leading-relaxed text-slate-100 font-montserrat">
          We're the only club that will help you commit and finally make short indie films.
          Learn by doing, not by attending 100s of workshops.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" onClick={() => document.getElementById('apply')?.scrollIntoView({
          behavior: 'smooth'
        })} className="font-gunterz font-bold rounded-md text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 bg-[#390c86] mobile-font-fix" style={{
          fontFamily: "'Gunterz', Georgia, 'Times New Roman', Times, serif",
          fontWeight: 700
        }}>
            Join the Challenge
          </Button>
          <Button size="lg" variant="outline" className="border-[#390c86] text-[#390c86] font-gunterz font-bold rounded-md text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 mobile-font-fix" style={{
          fontFamily: "'Gunterz', Georgia, 'Times New Roman', Times, serif",
          fontWeight: 700
        }} onClick={() => document.getElementById('rules')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Learn More
          </Button>
        </div>
        
        <div className="mt-10 p-4 bg-[#cef2e7]/20 rounded-lg border border-[#cef2e7] italic">
          <p className="text-md font-montserrat">
            "Your first film will be shit, but your 5th might not. 
            If you think you're a filmmaker but can't prove it, this is for you."
          </p>
        </div>
      </div>
    </section>;
};
export default Hero;
