import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/pricing", label: "Pricing" },
  { to: "/price-tracking", label: "Price Tracking" },
  { to: "/wholesalers", label: "Wholesalers" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/20">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-14 md:h-16">
        <Link to="/" className="flex items-center gap-1.5 group">
          <img src={logo} alt="Affiliate Warehouse" className="h-7 md:h-8 w-auto" />
          <span className="text-silver font-display font-medium text-xs md:text-sm hidden sm:block">
            Affiliate Warehouse
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-5">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-[13px] font-medium transition-colors hover:text-primary ${
                location.pathname === l.to ? "text-primary" : "text-silver"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/apply"
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-purple text-primary-foreground font-semibold text-xs transition-all hover:shadow-[0_0_20px_rgba(6,255,165,0.3)] hover:scale-105"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-silver p-1.5"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-primary/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium py-1.5 transition-colors ${
                    location.pathname === l.to ? "text-primary" : "text-silver"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/apply"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-full bg-gradient-purple text-primary-foreground font-semibold text-xs mt-1"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
