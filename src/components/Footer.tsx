
import { Separator } from "@/components/ui/separator";
const Footer = () => {
  return <footer className="bg-[#390c86] text-white py-10 mt-auto font-montserrat">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img 
              src="/images/logo-footer.png" 
              alt="CIFC Logo" 
              className="h-6 w-6"
            />
            <span className="text-xl font-gunterz font-bold tracking-tight">CIFC</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#about" className="text-white/80 hover:text-[#cef2e7] transition-colors">About</a>
            <a href="#features" className="text-white/80 hover:text-[#cef2e7] transition-colors">Challenge</a>
            <a href="#rules" className="text-white/80 hover:text-[#cef2e7] transition-colors">Rules</a>
            <a href="#actors" className="text-white/80 hover:text-[#cef2e7] transition-colors">Actors</a>
            <a href="#crew" className="text-white/80 hover:text-[#cef2e7] transition-colors">Crew</a>
            <a href="#apply" className="text-white/80 hover:text-[#cef2e7] transition-colors">Apply</a>
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
                <a href="mailto:contact@cairoindie.com" className="hover:text-white transition">
                  contact@cairoindie.com
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/cairo.indiefilmmakers" className="hover:text-white transition">
                  @cairo.indiefilmmakers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3 text-[#cef2e7] font-gunterz">Join Us</h3>
            <p className="text-white/80 text-sm">
              Screenings every sprint in Cairo.
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
