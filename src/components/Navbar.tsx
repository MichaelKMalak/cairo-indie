
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="border-b bg-[#f52e38] backdrop-blur supports-[backdrop-filter]:bg-[#f52e38]/95">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl font-gunterz font-bold tracking-tight text-white">CairoIndie FC</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-[#f52e38]/80">About</Button>
          <Button variant="ghost" className="text-white hover:bg-[#f52e38]/80">Challenge</Button>
          <Button variant="ghost" className="text-white hover:bg-[#f52e38]/80">Rules</Button>
          <Button className="bg-[#390c86] hover:bg-[#390c86]/90 text-white">Join Club</Button>
        </div>
        <Button className="md:hidden bg-[#390c86] hover:bg-[#390c86]/90 text-white">Join</Button>
      </div>
    </nav>
  );
};

export default Navbar;
