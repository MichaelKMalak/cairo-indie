
import { Button } from "@/components/ui/button";

const Actors = () => {
  return (
    <section id="actors" className="py-20 md:py-24 bg-[#390c86] text-white">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-gunterz font-bold mb-5">Actors Database</h2>
          <div className="space-y-4 mb-8 font-montserrat leading-relaxed text-white/85">
            <p>
              A shared space where our filmmakers can find and connect with actors for indie projects — not an audition or casting call.
            </p>
            <p>
              You may be contacted when a project matches your interests. Projects may be unpaid, paid, or experimental.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-[#f52e38] hover:bg-[#f52e38]/90 text-white font-gunterz font-bold rounded-md transition-colors"
          >
            <a
              href="https://forms.gle/fFTMXbxYG65brXY88"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Actors Database
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Actors;
