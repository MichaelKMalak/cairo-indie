
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Rules = () => {
  return (
    <section id="rules" className="py-16 bg-[#390c86]/5">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-gunterz font-bold mb-4 text-[#390c86]">Club Rules</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The first rule of Cairo Indie FC is... well, there are actually several rules.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          <Alert className="border-l-4 border-l-[#f52e38]">
            <AlertTitle className="text-[#390c86] font-gunterz">Rule #1</AlertTitle>
            <AlertDescription>
              You need to move your ass. You need to attend meetups and make shit happen.
            </AlertDescription>
          </Alert>
          
          <Alert className="border-l-4 border-l-[#f52e38]">
            <AlertTitle className="text-[#390c86] font-gunterz">Rule #2</AlertTitle>
            <AlertDescription>
              1 offline monthly meetup to judge people's hard work and let them judge you. 2 strikes and you're out.
            </AlertDescription>
          </Alert>
          
          <Alert className="border-l-4 border-l-[#f52e38]">
            <AlertTitle className="text-[#390c86] font-gunterz">Rule #3</AlertTitle>
            <AlertDescription>
              1 weekly online meetup. It'll just take a couple of minutes, no worries. You've to share your progress.
            </AlertDescription>
          </Alert>
          
          <Alert className="border-l-4 border-l-[#f52e38]">
            <AlertTitle className="text-[#390c86] font-gunterz">Rule #4</AlertTitle>
            <AlertDescription>
              You need to submit something! That's the whole purpose of all of this, you know?
              1 short film per month. If more than 10 minutes, the deadline could be extended.
            </AlertDescription>
          </Alert>
          
          <Alert className="border-l-4 border-l-[#f52e38]">
            <AlertTitle className="text-[#390c86] font-gunterz">Rule #5</AlertTitle>
            <AlertDescription>
              Collaborate at least once a year with someone else from the club.
              We believe in you and that you can be a one-man show, but not now.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
};

export default Rules;
