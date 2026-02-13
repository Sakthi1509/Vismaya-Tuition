import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import heroAbout from "@/assets/hero-about.jpg";
import teachingImg from "@/assets/teaching.jpg";

const sections = [
  {
    title: "Here to create a lasting impact on our future leaders",
    text1: "We aim to make learning enjoyable and fun, developing and nurturing our students holistically to the best version of themselves.",
    text2: "With the students as our utmost priority, we map out and achieve academic excellence while equipping them with necessary life skills.",
    cta: "Teaching Methods",
  },
  {
    title: "Eager Teachers waiting for a chance to create a positive spark",
    text1: "Our teachers are professionally trained and have a spark for teaching.",
    text2: "They aim to be stellar role models for our students and pass down the will of fire. Passionate and warm hearted teachers that aim to make the learning experience enjoyable and fun.",
    cta: "Our Team",
  },
  {
    title: "Programs catered to each and every student",
    text1: "Every student have their own way of learning that works best for them. Every student also have their own pace of learning.",
    text2: "Here at SmartTuition we recognise that. Our programs are specially tailored for each and every student's needs.",
    cta: "Programs",
  },
];

const AboutUs = () => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <HeroBanner title="About Us" image={heroAbout} subtitle="Scroll Down" />

    <div className="container py-12 space-y-16">
      {sections.map((s, i) => (
        <div key={i} className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-3 section-teal rounded-lg p-6 md:p-8">
            <h3 className="text-xl font-heading font-bold mb-3">{s.title}</h3>
            <p className="text-sm leading-relaxed opacity-90 mb-2">{s.text1}</p>
            <p className="text-sm leading-relaxed opacity-90 mb-4">{s.text2}</p>
            <span className="inline-block bg-accent/30 text-accent-foreground text-xs font-semibold px-4 py-2 rounded-md">
              {s.cta}
            </span>
          </div>
          <div className="md:col-span-2">
            <img src={teachingImg} alt={s.title} className="rounded-lg w-full h-48 object-cover shadow-md" />
          </div>
        </div>
      ))}
    </div>

    <div className="mt-auto">
      <Footer />
    </div>
  </div>
);

export default AboutUs;
