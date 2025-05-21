
import { Button } from "@/components/ui/button";
import { Film } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Film className="h-6 w-6 text-[#f52e38]" />
          <span className="text-xl font-bold tracking-tight">CairoIndie FC</span>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Challenge</Button>
          <Button variant="ghost">Rules</Button>
          <Button className="bg-[#f52e38] hover:bg-[#f52e38]/90">Join Club</Button>
        </div>
        <Button className="md:hidden bg-[#f52e38] hover:bg-[#f52e38]/90">Join</Button>
      </div>
    </nav>
  );
};

export default Navbar;
