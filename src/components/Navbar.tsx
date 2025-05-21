
import { Button } from "@/components/ui/button";
const Navbar = () => {
  return <nav className="border-b bg-[#f52e38] backdrop-blur supports-[backdrop-filter]:bg-[#f52e38]/95">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/lovable-uploads/47ebc0d4-7587-4841-9ca9-bc4bb47992fb.png" alt="Cairo Indie Filmmakers Club Logo" className="h-8 w-auto" />
          <span className="text-xl font-gunterz font-bold tracking-tight text-white">CIFC</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-[#f52e38]/80 font-gunterz" onClick={() => document.getElementById('about')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            About
          </Button>
          <Button variant="ghost" className="text-white hover:bg-[#f52e38]/80 font-gunterz" onClick={() => document.getElementById('features')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Challenge
          </Button>
          <Button variant="ghost" className="text-white hover:bg-[#f52e38]/80 font-gunterz" onClick={() => document.getElementById('rules')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Rules
          </Button>
          <Button className="bg-[#390c86] hover:bg-[#390c86]/90 text-white font-gunterz font-bold rounded-md shadow-lg hover:shadow-xl transition-all" onClick={() => document.getElementById('apply')?.scrollIntoView({
          behavior: 'smooth'
        })}>
            Join Club
          </Button>
        </div>
        <Button className="md:hidden bg-[#390c86] hover:bg-[#390c86]/90 text-white font-gunterz font-bold rounded-md shadow-lg hover:shadow-xl transition-all" onClick={() => document.getElementById('apply')?.scrollIntoView({
        behavior: 'smooth'
      })}>
          Join
        </Button>
      </div>
    </nav>;
};
export default Navbar;
