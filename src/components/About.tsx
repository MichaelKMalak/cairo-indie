
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section 
      id="about" 
      className="py-16 relative"
      style={{
        backgroundImage: `url('/images/about-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      {/* Content with relative positioning to appear above overlay */}
      <div className="relative z-10 container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-gunterz font-bold mb-6 text-white">About Us</h2>
            <p className="mb-4 text-lg text-white/90">
              Cairo Indie FC is a club that will push you to finally make films consistently! 
              We will be your "big brother" watching you and trying to bully you into making your films.
            </p>
            <ul className="space-y-3 list-disc pl-5 mb-8 text-white/90">
              <li>Participants have to create ONE film per month*</li>
              <li>You will join a weekly standup online meeting to inform us of your progress</li>
              <li>You will join a monthly offline meeting to judge other submissions and let others judge you (constructively)</li>
              <li>The challenge is to create a film with whatever tools/resources you have</li>
            </ul>
            <p className="text-sm italic text-white/70">
              (*) Longer films that are over 15 minutes can take more than a month.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-gunterz font-bold mb-6 text-[#cef2e7]">Why & Who We Are</h2>
            <Card className="bg-black/30 border-white/20 backdrop-blur-sm">
              <CardContent className="pt-6">
                <p className="mb-4 text-white/90">
                  "Who are we" is a big philosophical question. We're trying to create movies but we are stuck. 
                  Maybe because we need some sort of accountability. Maybe creating this club is an escape.
                </p>
                <p className="mb-4 text-white/90">
                  Truthfully, we want to have a "community" for indie filmmakers that will:
                </p>
                <ol className="list-decimal pl-5 space-y-2 mb-4 text-white/90">
                  <li>Push themselves to create more</li>
                  <li>Share resources and network</li>
                  <li>Provide criticism and feedback in a safe place</li>
                </ol>
                <p className="font-medium text-white">
                  If this resonates with you, you can give it a try.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
