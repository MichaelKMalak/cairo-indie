
import { Button } from "@/components/ui/button";

const Apply = () => {
  return (
    <section id="apply" className="py-20 md:py-24 container">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-gunterz font-bold mb-3 text-[#390c86]">Who Can Apply</h2>
          <p className="text-muted-foreground">
            Do you have a camera? If not, do you have a smartphone? If not, maybe you shouldn't apply.
            If you can take your camera and shoot a story, then you're good.
          </p>
        </div>

        <div className="text-center p-8 border border-black/10 rounded-xl bg-white">
          <p className="mb-6 text-foreground/80">
            Ready to join the Cairo Indie Filmmakers Club? Fill out our application form to get started.
          </p>

          <Button
            asChild
            size="lg"
            className="w-full bg-[#f52e38] hover:bg-[#f52e38]/90 font-gunterz font-bold rounded-md transition-colors"
          >
            <a
              href="https://forms.gle/CKv3xLR3ZjubuHdV6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Apply;
