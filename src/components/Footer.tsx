
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-background py-6 mt-auto">
      <div className="container">
        <Separator className="mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-3">Blank</h3>
            <p className="text-muted-foreground text-sm">
              A clean starting point for your next project.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Blank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
