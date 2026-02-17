import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import heroAbout from "@/assets/contactus.jpg";
import { Phone, Mail, Clock } from "lucide-react";

const ContactUs = () => (
  <div className="min-h-screen flex flex-col">
    <HeroBanner title="Contact Us" image={heroAbout} subtitle="Scroll Down" />

    <div className="container py-12 space-y-12 text-center">
      {/* General Enquiries */}
      <div>
        <h2 className="text-2xl font-heading font-bold mb-6">General Enquiries</h2>
        <div className="space-y-1 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">Call Center Operating hours:</p>
          <p>Mon to Fri: 24/7</p>
          <p>Sat & Sun: 9am to 9pm</p>
        </div>
      </div>

      {/* Hotline */}
      <div className="space-y-2">
        <h3 className="font-bold text-base flex items-center justify-center gap-2">
          <Phone size={18} className="text-accent" /> Hotline
        </h3>
        <p className="text-accent font-medium">91+63825 98747</p>
        <h3 className="font-bold text-base flex items-center justify-center gap-2">
          <Clock size={18} className="text-accent" /> Opening hours:
        </h3>
        <p className="text-sm text-muted-foreground">Mon to Fri: 10am to 8pm</p>
        <p className="text-sm text-muted-foreground">Sat & Sun: 9am to 6pm</p>
        <p className="text-xs text-muted-foreground italic">(Closed on public holidays and observed public holidays.)</p>
      </div>

      {/* Email */}
      <div className="space-y-2">
        <h3 className="font-bold text-base flex items-center justify-center gap-2">
          <Mail size={18} className="text-accent" /> Email
        </h3>
        <p className="text-accent font-medium">achieverstuition.centre2018@gmail.com</p>
      </div>

      {/* Find Us */}
      <div>
        <h2 className="text-2xl font-heading font-bold mb-2">Find Us</h2>
        <div className="border-t border-border max-w-xs mx-auto mb-6" />
      </div>
    </div>

    <div className="mt-auto">
      <Footer />
    </div>
  </div>
);

export default ContactUs;
