
import { Button } from "@/components/ui/button";

const Apply = () => {
  return (
    <section id="apply" className="py-16 container">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-gunterz font-bold mb-4 text-[#390c86]">Who Can Apply</h2>
          <p className="text-muted-foreground">
            Do you have a camera? If not, do you have a smartphone? If not, maybe you shouldn't apply.
            If you can take your camera and shoot a story, then you're good.
          </p>
        </div>
        
        <div className="text-center p-6 border rounded-lg shadow-sm bg-white">
          <p className="mb-6 text-lg">
            Ready to join the Cairo Indie Filmmakers Club? Fill out our application form to get started.
          </p>
          
          <Button 
            asChild
            className="w-full bg-[#f52e38] hover:bg-[#f52e38]/90 font-gunterz text-lg py-6"
          >
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfxAaZcvsXKR8-wsrL2IUO27UWNGRxnF1MxWb88V4uRVxXBXg/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply Now - Fill Out Form
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Apply;
