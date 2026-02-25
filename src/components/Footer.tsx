import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-card border-t border-primary/20 pt-16 pb-8">
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Affiliate Warehouse" className="h-12 w-auto" />
            <span className="text-silver font-display font-semibold">Affiliate Warehouse</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Corporate-tier wholesaler access and automated price monitoring for Australian trade businesses.
          </p>
        </div>
        <div>
          <h4 className="text-silver font-display font-semibold mb-4">Services</h4>
          <div className="flex flex-col gap-2">
            <Link to="/how-it-works" className="text-muted-foreground text-sm hover:text-primary transition-colors">How It Works</Link>
            <Link to="/pricing" className="text-muted-foreground text-sm hover:text-primary transition-colors">Pricing</Link>
            <Link to="/price-tracking" className="text-muted-foreground text-sm hover:text-primary transition-colors">Price Tracking</Link>
            <Link to="/wholesalers" className="text-muted-foreground text-sm hover:text-primary transition-colors">Wholesalers</Link>
          </div>
        </div>
        <div>
          <h4 className="text-silver font-display font-semibold mb-4">Company</h4>
          <div className="flex flex-col gap-2">
            <Link to="/faq" className="text-muted-foreground text-sm hover:text-primary transition-colors">FAQ</Link>
            <Link to="/apply" className="text-muted-foreground text-sm hover:text-primary transition-colors">Apply</Link>
            <Link to="/contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="text-silver font-display font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-2 text-muted-foreground text-sm">
            <p>hello@affiliatewarehouse.com.au</p>
            <p>1300 AW TRADE</p>
            <p>Sydney, Australia</p>
          </div>
        </div>
      </div>
      <div className="border-t border-primary/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-xs">
          © {new Date().getFullYear()} Affiliate Warehouse Pty Ltd. All rights reserved. ABN 00 000 000 000.
        </p>
        <div className="flex gap-4 text-text-muted text-xs">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Disclaimer</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
