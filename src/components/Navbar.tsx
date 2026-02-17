import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/programs", label: "Programs" },
  { to: "/teaching-methods", label: "Teaching Methods" },
  { to: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
   <header className="fixed top-0 left-0 w-full bg-header-bg border-b border-border z-40 shadow-sm">
      {/* Branding */}
      <div className="text-center py-4">
        <h1 className="text-xl font-bold tracking-wide text-foreground">
          Vismaya Education
        </h1>
        <p className="text-sm font-semibold text-muted-foreground">
          Achievers Tuition Centre
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-center px-4 pb-4 relative">
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 bg-card rounded-full px-3 py-2 border border-border shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-colors duration-200 ${
                location.pathname === link.to
                  ? "bg-primary text-white"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        

        {/* Mobile Dropdown */}
        {open && (
          <div className="absolute top-full left-0 right-0 bg-card border-t border-border shadow-md md:hidden z-50">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;