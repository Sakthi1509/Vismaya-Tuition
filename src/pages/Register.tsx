import { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "@/firebase";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import heroAbout from "@/assets/applynow.jpg";




const Register = () => {
  const [form, setForm] = useState({
    name: "",
    parentFirstName: "",
    parentLastName: "",
    email: "",
    phone: "",
    childFirstName: "",
    childLastName: "",
    educationLevel: "",
    program: "",
    location: "",
    agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agreed || !form.name || !form.email || !form.phone || !form.program || !form.location || !form.educationLevel) return;
    setLoading(true);
    try {
      await push(ref(db, "registrations"), {
        ...form,
        createdAt: Date.now(),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✅</span>
            </div>
            <h2 className="text-2xl font-heading font-bold mb-2">Registration Successful!</h2>
            <p className="text-muted-foreground">Thank you for registering with Vismaya Education. We will contact you shortly.</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <HeroBanner title="Apply Now" image={heroAbout} />

      <div className="container py-8">
        <h2 className="text-xl font-heading font-bold text-center mb-6">Register with Us Now</h2>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border space-y-5">
          <p className="text-sm font-medium text-foreground">Welcome to Vismaya Education</p>
           <label className="text-xs font-semibold uppercase text-muted-foreground mb-1 block">Student Name *</label>

          <input name="name" value={form.name} onChange={handleChange} placeholder="Enter Student name" required
            className="w-full rounded-full bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase text-muted-foreground mb-1 block">Parent's First Name *</label>
              <input name="parentFirstName" value={form.parentFirstName} onChange={handleChange} required placeholder="Enter Parent's First Name"
                className="w-full rounded-full bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-muted-foreground mb-1 block">Parent's Last Name</label>
              <input name="parentLastName" value={form.parentLastName} onChange={handleChange} placeholder="Enter Parent's First Name"
                className="w-full rounded-full bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase text-muted-foreground mb-1 block">Email *</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder=" Enter Email address" required
                className="w-full rounded-full bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-muted-foreground mb-1 block">Phone Number *</label>
              <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="10-digit phone number" required
                className="w-full rounded-full bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-semibold uppercase text-muted-foreground mb-1 block">Child's First Name</label>
              <input name="childFirstName" value={form.childFirstName} onChange={handleChange} placeholder="Enter Child FirstName"
                className="w-full rounded-full bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="text-xs font-semibold uppercase text-muted-foreground mb-1 block">Child's Last Name</label>
              <input name="childLastName" value={form.childLastName} onChange={handleChange} placeholder="Enter Child LastName"
                className="w-full rounded-full bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase text-muted-foreground mb-1 block">Child's Education Level *</label>
            <select name="educationLevel" value={form.educationLevel} onChange={handleChange} required
              className="w-full rounded-full bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary">
              <option value="">-Please Select-</option>
              <option value="preschool">Preschool</option>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="higher-secondary">Higher Secondary</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase text-muted-foreground mb-1 block">Subject to Be Enrolled In *</label>
            <select name="program" value={form.program} onChange={handleChange} required
              className="w-full rounded-full bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary">
              <option value="">-Please Select-</option>
              <option value="tamil">Tamil</option>
              <option value="english">English</option>
              <option value="mathematics">Mathematics</option>
              <option value="science">Science</option>
              <option value="social Science">Social Science</option>
              <option value="physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="Computer science">Computer Science</option>
              <option value="all-subjects">All Subjects</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-semibold uppercase text-muted-foreground mb-1 block">Location *</label>
            <select name="location" value={form.location} onChange={handleChange} required
              className="w-full rounded-full bg-muted px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary">
              <option value="">-Please Select-</option>
              <option value="tirumangalam">Tirumangalam</option>
              <option value="madurai">Madurai</option>
              <option value="other">Other</option>
            </select>
          </div>

          <label className="flex items-start gap-3 text-xs text-muted-foreground">
            <input type="checkbox" name="agreed" checked={form.agreed} onChange={handleChange} className="mt-0.5" />
            "I agree that Vismaya Education / Achievers Tuition Centre may collect, use, and disclose my personal data for the purpose of responding to my enquiry, providing updates, and sharing information about programs and services, in accordance with the Privacy Policy."
          </label>

          <div className="text-center pt-2">
            <button type="submit" disabled={loading || !form.agreed}
              className="bg-teal-dark text-accent-foreground font-bold text-sm uppercase tracking-wider px-10 py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50">
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>

      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Register;

