
import { Camera, Video, MessageSquare, Film } from "lucide-react";

const features = [
  {
    title: "Sprint Creation",
    description: "Create one short film every sprint with feedback and support from fellow filmmakers.",
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
    <section id="features" className="py-20 md:py-24 container">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-gunterz font-bold mb-3 text-[#390c86]">Why Join Our Club</h2>
        <p className="text-muted-foreground">
          Break through your creative blocks and finally make the films you've been dreaming of.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="text-left">
            <feature.icon className="h-6 w-6 mb-4 text-[#f52e38]" strokeWidth={1.75} />
            <h3 className="text-[#390c86] font-gunterz font-bold mb-2">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
