import { Separator } from "@/components/ui/separator";
import { Film } from "lucide-react";
const Footer = () => {
  return <footer className="bg-[#390c86] text-white py-10 mt-auto font-montserrat">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Film className="h-6 w-6 text-[#f52e38]" />
            <span className="text-xl font-gunterz font-bold tracking-tight">CIFC</span>
          </div>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-[#cef2e7] transition">About</a>
            <a href="#features" className="hover:text-[#cef2e7] transition">Challenge</a>
            <a href="#rules" className="hover:text-[#cef2e7] transition">Rules</a>
            <a href="#apply" className="hover:text-[#cef2e7] transition">Apply</a>
          </div>
        </div>
        
        <Separator className="mb-6 bg-white/20" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-3 text-[#cef2e7] font-gunterz">About</h3>
            <p className="text-white/80 text-sm">
              A community for indie filmmakers in Cairo committed to creating films consistently.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3 text-[#cef2e7] font-gunterz">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="mailto:info@cairoindie.fc" className="hover:text-white transition">
                  info@cairoindie.fc
                </a>
              </li>
              <li>
                <a href="https://instagram.com/cairoindie.fc" className="hover:text-white transition">
                  @cairoindie.fc
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3 text-[#cef2e7] font-gunterz">Join Us</h3>
            <p className="text-white/80 text-sm">
              Monthly meetups in Cairo.
              <br />
              Weekly online check-ins.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Cairo Indie Filmmakers Club. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;