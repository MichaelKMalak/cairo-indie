
import { Button } from "@/components/ui/button";

const Crew = () => {
  return (
    <section id="crew" className="py-20 md:py-24 bg-[#cef2e7] text-[#390c86]">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-gunterz font-bold mb-5">Crew Database</h2>
          <div className="space-y-4 mb-8 font-montserrat leading-relaxed text-[#390c86]/80">
            <p>
              A shared space where our filmmakers can find and connect with crew — DPs, editors, sound, gaffers, and more — for indie projects.
            </p>
            <p>
              You may be contacted when a project matches your skills. Projects may be unpaid, paid, or experimental.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-[#f52e38] hover:bg-[#f52e38]/90 text-white font-gunterz font-bold rounded-md transition-colors"
          >
            <a
              href="https://forms.gle/a7jBfNZzgkZdXi6Z9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Crew Database
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Crew;
