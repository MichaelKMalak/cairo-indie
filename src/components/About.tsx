
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-16 container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-archivoblack font-bold mb-6 text-[#390c86]">About Us</h2>
          <p className="mb-4 text-lg">
            Cairo Indie FC is a club that will push you to finally make films consistently! 
            We will be your "big brother" watching you and trying to bully you into making your films.
          </p>
          <ul className="space-y-3 list-disc pl-5 mb-8">
            <li>Participants have to create ONE film per month*</li>
            <li>You will join a weekly standup online meeting to inform us of your progress</li>
            <li>You will join a monthly offline meeting to judge other submissions and let others judge you (constructively)</li>
            <li>The challenge is to create a film with whatever tools/resources you have</li>
          </ul>
          <p className="text-sm italic text-muted-foreground">
            (*) Longer films that are over 15 minutes can take more than a month.
          </p>
        </div>
        
        <div>
          <h2 className="text-3xl font-archivoblack font-bold mb-6 text-[#f52e38]">Why & Who We Are</h2>
          <Card className="bg-[#cef2e7]/20 border-[#cef2e7]">
            <CardContent className="pt-6">
              <p className="mb-4">
                "Who are we" is a big philosophical question. We're trying to create movies but we are stuck. 
                Maybe because we need some sort of accountability. Maybe creating this club is an escape.
              </p>
              <p className="mb-4">
                Truthfully, we want to have a "community" for indie filmmakers that will:
              </p>
              <ol className="list-decimal pl-5 space-y-2 mb-4">
                <li>Push themselves to create more</li>
                <li>Share resources and network</li>
                <li>Provide criticism and feedback in a safe place</li>
              </ol>
              <p className="font-medium">
                If this resonates with you, you can give it a try.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
