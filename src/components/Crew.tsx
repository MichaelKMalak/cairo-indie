
import { Button } from "@/components/ui/button";

const Crew = () => {
  return (
    <section id="crew" className="py-16 bg-[#cef2e7] text-[#390c86]">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-gunterz font-bold mb-6">Crew Database</h2>
          <div className="space-y-4 mb-8 font-montserrat text-lg leading-relaxed opacity-90">
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
            className="bg-[#f52e38] hover:bg-[#f52e38]/90 text-white font-gunterz font-bold rounded-md text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <a
              href="https://forms.gle/a7jBfNZzgkZdXi6Z9"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up for Our Crew Database
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Crew;
