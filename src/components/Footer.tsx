import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="w-full">
    {/* Contact & Map */}
    <div className="container py-10 grid md:grid-cols-2 gap-8">
      <div className="space-y-2 text-sm text-foreground">
        <h3 className="font-semibold text-base">Contact Us</h3>
        <p className="font-medium">Vismaya Education</p>
        <p className="flex items-start gap-2">
          <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
          Karpaganagar, bus stop, Tirumangalam, Tamil Nadu 625706
        </p>
        <p className="flex items-center gap-2">
          <Phone size={16} className="shrink-0 text-accent" />
          +91 63825 98747
        </p>
        <p className="flex items-center gap-2">
          <Mail size={16} className="shrink-0 text-accent" />
          enquiry@vismayaeducation.com
        </p>
        <div className="pt-1">
          <p className="font-medium">Follow us on:</p>
          <p>Instagram: @vismaya_education</p>
          <p>Facebook: Vismaya Education</p>
        </div>
      </div>
      <div className="bg-muted rounded-lg h-48 flex items-center justify-center text-muted-foreground text-sm">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.5!2d77.98!3d9.82!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNDknMTIuMCJOIDc3wrA1OCc0OC4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
          className="w-full h-full rounded-lg border-0"
          loading="lazy"
        />
      </div>
    </div>
    {/* Bottom bar */}
    <div className="bg-teal-dark text-accent-foreground py-3">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-4">
          <span className="text-lg">📷</span>
          <span className="text-lg">📘</span>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/programs" className="hover:underline">Programs</Link>
          <Link to="/register" className="hover:underline">Apply Now</Link>
          <Link to="/contact" className="hover:underline">Privacy Policy</Link>
          <Link to="/contact" className="hover:underline">Terms and Conditions</Link>
        </div>
        <p>©2018 Vismaya Education / Achievers Tuition</p>
      </div>
    </div>
  </footer>
);

export default Footer;
