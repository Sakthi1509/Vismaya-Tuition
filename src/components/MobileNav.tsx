import { NavLink } from "react-router-dom";
import { Home, Info, BookOpen, Phone, GraduationCap } from "lucide-react";

const links = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/about", icon: Info, label: "About" },
  { to: "/programs", icon: GraduationCap, label: "Programs" },
  { to: "/teaching-methods", icon: BookOpen, label: "Methods" },
  { to: "/contact", icon: Phone, label: "Contact" },
];

const MobileNav = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-card border-t border-border shadow-lg z-50">
      <div className="flex justify-around items-center py-2">
        {links.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex flex-col items-center text-xs transition-all duration-200 ${
                isActive ? "text-primary scale-110" : "text-muted-foreground"
              }`
            }
          >
            <Icon size={20} />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;