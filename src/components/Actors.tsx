
import { Button } from "@/components/ui/button";

const Actors = () => {
  return (
    <section id="actors" className="py-16 bg-[#390c86] text-white">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-gunterz font-bold mb-6">Actors Database</h2>
          <div className="space-y-4 mb-8 font-montserrat text-lg leading-relaxed opacity-90">
            <p>
              We're bringing actors and actresses together in one place, so members of the Cairo Indie Filmmakers Club can easily find you and connect with you for independent film projects.
            </p>
            <p className="font-bold">
              This is not an audition and not a casting call.
            </p>
            <p>
              It's a space for connection, collaboration, and discovery.
            </p>
            <p>
              You may be contacted when a project matches your interests and availability.
              Projects may be unpaid, paid, or purely experimental — depending on mutual agreement.
            </p>
          </div>
          <Button
            asChild
            size="lg"
            className="bg-[#f52e38] hover:bg-[#f52e38]/90 text-white font-gunterz font-bold rounded-md text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <a
              href="https://forms.gle/fFTMXbxYG65brXY88"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up for Our Actors Database
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Actors;
