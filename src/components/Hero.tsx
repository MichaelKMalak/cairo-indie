import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  // Check font loading status with more reliable method
  useEffect(() => {
    // First check if fonts are already loaded from HTML
    if (document.documentElement.classList.contains('fonts-loaded')) {
      console.log('Hero: Fonts already loaded from HTML');
      setFontsLoaded(true);
      return;
    }
    
    // Otherwise check via font loading API
    const checkFontLoaded = () => {
      const gunterz = document.fonts.check('700 1em Gunterz');
      console.log('Hero component - Gunterz font loaded status:', gunterz);
      if (gunterz) {
        setFontsLoaded(true);
        document.documentElement.classList.add('fonts-loaded');
      } else {
        // Try again in a bit
        setTimeout(checkFontLoaded, 100);
      }
    };
    
    // Initial check after a small delay
    setTimeout(checkFontLoaded, 50);
    
    // Fallback in case font never loads
    const fallbackTimer = setTimeout(() => {
      if (!document.fonts.check('700 1em Gunterz')) {
        console.warn('Hero component - Gunterz font failed to load, using fallback');
        document.documentElement.classList.add('no-gunterz');
        setFontsLoaded(true);
      }
    }, 3000);
    
    return () => clearTimeout(fallbackTimer);
  }, []);

  return (
    <section className="py-20 md:py-28 container">
      <div className={`max-w-3xl mx-auto text-center animate-fade-in ${fontsLoaded ? 'fonts-loaded' : ''}`}>
        <div className="flex justify-center mb-6">
          <img src="/lovable-uploads/86650fe7-49b3-40d3-8506-2586b2de46ff.png" alt="Cairo Indie Filmmakers Club Logo" className="w-full max-w-44 mx-auto mb-5 object-contain" />
        </div>
        
        {/* Direct heading with inline styles for maximum specificity */}
        <h2 
          className="text-xl mb-6 text-[#390c86] md:text-2xl mobile-font-fix" 
          style={{
            fontFamily: "'Gunterz', Georgia, 'Times New Roman', Times, serif",
            fontWeight: 700,
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale",
            fontSynthesis: "none",
            letterSpacing: "-0.015em",
            fontDisplay: "swap"
          }}
        >
          Make One Film / Month Commitment Challenge
        </h2>
        
        <p className="text-xl mb-10 leading-relaxed text-slate-100 font-montserrat">
          We're the only club that will help you commit and finally make short indie films.
          Learn by doing, not by attending 100s of workshops.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Button 
            size="lg" 
            onClick={() => document.getElementById('apply')?.scrollIntoView({
              behavior: 'smooth'
            })} 
            className="font-bold rounded-md text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 bg-[#390c86] mobile-font-fix"
            style={{
              fontFamily: "'Gunterz', Georgia, 'Times New Roman', Times, serif",
              fontWeight: 700,
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale"
            }}
          >
            Join the Challenge
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-[#390c86] text-[#390c86] font-bold rounded-md text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 mobile-font-fix"
            style={{
              fontFamily: "'Gunterz', Georgia, 'Times New Roman', Times, serif",
              fontWeight: 700,
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale"
            }}
            onClick={() => document.getElementById('rules')?.scrollIntoView({
              behavior: 'smooth'
            })}
          >
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
    </section>
  );
};

export default Hero;
