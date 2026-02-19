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
          +91 91507 02931
        </p>
        <p className="flex items-center gap-2">
          <Mail size={16} className="shrink-0 text-accent" />
         achieverstuition.centre2018@gmail.com
        </p>
        <div className="pt-1">
          <p className="font-medium">Follow us on:</p>
          <p>Instagram: achievers_tuition_centre2018</p>
          <p>Facebook: Vismaya Education</p>
        </div>
      </div>
      <div className="bg-muted rounded-lg h-48 flex items-center justify-center text-muted-foreground text-sm">
        <iframe
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.3414780300277!2d77.99285487376211!3d9.821659976080637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00d35b26142e39%3A0xa48ea3e87b7e975d!2sVismaya%20education%20centre!5e0!3m2!1sen!2sus!4v1771054380926!5m2!1sen!2sus"
          className="w-full h-full rounded-lg border-0"
          loading="lazy"
        />
      </div>
    </div>
    {/* Bottom bar */}
    <div className="bg-teal-dark text-accent-foreground py-3">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-4">
          <div className="flex gap-4 text-2xl">
  <a
    href="https://www.instagram.com/achievers_tuition_centre2018?utm_source=qr&igsh=MXIyYnF1OWZxaGUy"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 hover:text-pink-600 transition-colors duration-300"
  >
    <i className="bi bi-instagram"></i>
  </a>

  <a
  href="https://youtube.com/@vismayaeducation?si=6-HpRpBWmL7uIlqg"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-700 hover:text-red-600 transition-colors duration-300"
>
  <i className="bi bi-youtube"></i>
</a>
</div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link to="/about" className="hover:underline">About Us</Link>
          <Link to="/programs" className="hover:underline">Programs</Link>
          <Link to="/register" className="hover:underline">Apply Now</Link>
          <Link to="/Admin" className="hover:underline">Admin</Link>
          <Link to="/contact" className="hover:underline">Terms and Conditions</Link>
        </div>
        <p>©2018 Vismaya Education / Achievers Tuition</p>
      </div>
    </div>
  </footer>
);

export default Footer;
