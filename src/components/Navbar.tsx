
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Challenge", id: "features" },
  { label: "Rules", id: "rules" },
];

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="container flex h-16 items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center"
        >
          <span className="text-lg font-gunterz font-bold tracking-tight text-[#390c86]">
            CIFC
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Button
              key={link.id}
              variant="ghost"
              className="text-[#390c86]/80 hover:text-[#390c86] hover:bg-[#390c86]/5 font-gunterz"
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </Button>
          ))}
          <Button
            className="ml-2 bg-[#390c86] hover:bg-[#390c86]/90 text-white font-gunterz font-bold rounded-md"
            onClick={() => scrollTo("apply")}
          >
            Join Club
          </Button>
        </div>

        <Button
          className="md:hidden bg-[#390c86] hover:bg-[#390c86]/90 text-white font-gunterz font-bold rounded-md"
          onClick={() => scrollTo("apply")}
        >
          Join
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
