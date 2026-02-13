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
    <header className="w-full bg-header-bg">
      <div className="text-center py-3">
        <h1 className="text-lg font-bold tracking-wide text-foreground">Vismaya Education</h1>
        <p className="text-sm font-semibold text-foreground">Achievers Tuition Centre</p>
      </div>
      <nav className="flex items-center justify-center px-4 pb-3 relative">
        <div className="hidden md:flex items-center gap-1 bg-card rounded-full px-2 py-1 border border-border shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? "nav-link-active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden absolute right-4 top-0 p-2 text-foreground"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        {open && (
          <div className="absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg z-50 md:hidden">
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
