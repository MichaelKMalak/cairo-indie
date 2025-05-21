
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Video, MessageSquare, Film } from "lucide-react";

const features = [
  {
    title: "Monthly Creation",
    description: "Create one short film every month with feedback and support from fellow filmmakers.",
    icon: Camera,
  },
  {
    title: "Find Your Voice",
    description: "Experimenting with small videos/movies will help you discover your unique style.",
    icon: Video,
  },
  {
    title: "Community Support",
    description: "Meet others who are facing similar challenges in filmmaking, just like you.",
    icon: MessageSquare,
  },
  {
    title: "Creative Constraints",
    description: "Limited resources and time limits will force you to be more creative.",
    icon: Film,
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 container bg-gradient-to-b from-white to-[#cef2e7]/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-archivoblack font-bold mb-4 text-[#390c86]">Why Join Our Club</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Break through your creative blocks and finally make the films you've been dreaming of.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border border-[#cef2e7] transition-all hover:shadow-md bg-white">
            <CardHeader className="pb-2">
              <feature.icon className="h-8 w-8 mb-2 text-[#f52e38]" />
              <CardTitle className="text-[#390c86] font-archivoblack">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground/80">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
