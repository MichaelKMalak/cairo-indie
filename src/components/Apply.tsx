
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Apply = () => {
  return (
    <section id="apply" className="py-16 container">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-[#390c86]">Who Can Apply</h2>
          <p className="text-muted-foreground">
            Do you have a camera? If not, do you have a smartphone? If not, maybe you shouldn't apply.
            If you can take your camera and shoot a story, then you're good.
          </p>
        </div>
        
        <form className="space-y-6 p-6 border rounded-lg shadow-sm bg-white">
          <div className="space-y-2">
            <label htmlFor="name" className="block font-medium">Full Name</label>
            <Input id="name" placeholder="Your name" />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="block font-medium">Email Address</label>
            <Input id="email" type="email" placeholder="your@email.com" />
          </div>
          
          <div className="space-y-2">
            <label className="block font-medium mb-2">Do you have equipment to shoot?</label>
            <RadioGroup defaultValue="smartphone">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="camera" id="camera" />
                <label htmlFor="camera">I have a camera</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="smartphone" id="smartphone" />
                <label htmlFor="smartphone">I will use my smartphone</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <label htmlFor="other">I have other equipment</label>
              </div>
            </RadioGroup>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="why" className="block font-medium">Why do you want to join?</label>
            <textarea 
              id="why" 
              className="w-full p-2 border rounded-md min-h-[100px]" 
              placeholder="Tell us why you want to join Cairo Indie FC...">
            </textarea>
          </div>
          
          <Button type="submit" className="w-full bg-[#f52e38] hover:bg-[#f52e38]/90">
            Submit Application
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Apply;
