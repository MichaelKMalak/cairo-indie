
import { Button } from "@/components/ui/button";

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative py-24 md:py-32"
      style={{
        backgroundImage: `url('/images/hero-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#f52e38]/80" />

      <div className="relative z-10 container">
        <div className="max-w-2xl mx-auto text-center animate-fade-in">
          <img
            src="/images/logo.png"
            alt="Cairo Indie Filmmakers Club Logo"
            className="w-full max-w-40 mx-auto mb-8 object-contain"
          />

          <h1 className="text-2xl md:text-3xl font-gunterz font-bold mb-6 text-[#390c86]">
            Make One Film / Sprint Challenge
          </h1>
          <p className="text-lg md:text-xl mb-10 leading-relaxed text-white font-montserrat">
            We're the only club that will help you commit and finally make short
            indie films. Learn by doing, not by attending 100s of workshops.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              onClick={() => scrollTo("apply")}
              className="font-gunterz font-bold rounded-md text-base bg-[#390c86] hover:bg-[#390c86]/90 transition-colors"
            >
              Join the Challenge
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/70 bg-transparent text-white hover:bg-white/10 hover:text-white font-gunterz font-bold rounded-md text-base transition-colors"
              onClick={() => scrollTo("rules")}
            >
              Learn More
            </Button>
          </div>

          <p className="mt-12 mx-auto max-w-lg text-[15px] italic leading-relaxed text-white/90 font-montserrat">
            "Your first film will be shit, but your 5th might not. If you think
            you're a filmmaker but can't prove it, this is for you."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
