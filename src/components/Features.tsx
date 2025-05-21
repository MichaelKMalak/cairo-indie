
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Fast Development",
    description: "Built with React, TypeScript, and Tailwind CSS for rapid development.",
  },
  {
    title: "Beautiful UI",
    description: "Clean, modern UI components that are easy to use and customize.",
  },
  {
    title: "Responsive",
    description: "Fully responsive design that works on all devices and screen sizes.",
  },
  {
    title: "Accessible",
    description: "Built with accessibility in mind for an inclusive user experience.",
  },
];

const Features = () => {
  return (
    <section className="py-16 container">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Features</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Everything you need to start building your next project, right out of the box.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="border transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Features;
