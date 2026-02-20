import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import UpdateBanner from "@/components/UpdateBanner";
import { Link } from "react-router-dom";
import { GraduationCap, Users, Star } from "lucide-react";
import heroHome from "@/assets/one.jpg";
import teachingImg from "@/assets/two.jpg";
import teachinggImg from "@/assets/three.jpg";


const Home = () => (
  <div className="min-h-screen flex flex-col">

    <HeroBanner title="Home" image={heroHome} subtitle="Scroll Down" />

    {/* Why Choose Us */}
    <section className="container py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="section-teal-light rounded-lg p-6 md:p-8">
          <h3 className="text-xl font-heading font-bold mb-3">
            Why Choose Vismaya Education / Achievers Tuition Centre?
          </h3>
          <p className="text-sm leading-relaxed text-secondary-foreground">
            "At Vismaya Education / Achievers Tuition Centre, we go beyond teaching. With experienced faculty, personalized attention, and a proven record of student success, we create a supportive learning environment where students gain not just marks but also confidence for life."
          </p>
        </div>
        <div className="rounded-lg overflow-hidden shadow-md">
          <img src={teachingImg} alt="Teaching at Vismaya" className="w-full h-64 object-cover" />
        </div>
      </div>
    </section>

    {/* Placeholder announcement area */}
    <section className="container pb-8">
  <div className="bg-teal-light rounded-xl p-8 flex items-center justify-center">
    <UpdateBanner />
  </div>
</section>

    {/* Achievements */}
    <section className="container pb-12">
      <div className="bg-secondary rounded-lg p-4 text-center max-w-lg mx-auto">
        <h3 className="font-bold text-base">Achievements</h3>
        <p className="text-sm text-secondary-foreground">• 7+ years of proven success in academic coaching.</p>
      </div>
    </section>

    {/* Track Records */}
    <section className="container pb-12 text-center">
      <h2 className="text-2xl font-heading font-bold mb-8">Track Records</h2>
      <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
            <GraduationCap size={32} className="text-teal-dark" />
          </div>
          <p className="text-sm font-medium text-foreground">99% Achieved Top Scores in Final Exams</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
            <Users size={32} className="text-teal-dark" />
          </div>
          <p className="text-sm font-medium text-foreground">More Than 250+ Students</p>
        </div>
        <div className="flex flex-col items-center gap-3">
          <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center">
            <Star size={32} className="text-teal-dark" />
          </div>
          <p className="text-sm font-medium text-foreground">Rated 4.9/5 By Students and Parents</p>
        </div>
      </div>
    </section>

    {/* Teaching Methods */}
    <section className="container pb-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <img src={teachinggImg} alt="Our teaching" className="rounded-lg w-full h-56 object-cover shadow-md" />
        <div className="bg-secondary rounded-lg p-6">
          <h3 className="text-xl font-heading font-bold mb-3">Our Teaching Methods</h3>
          <p className="text-sm leading-relaxed text-secondary-foreground">
            "At Vismaya Education, we believe in concept clarity, continuous practice, and personalized mentoring. Our unique blend of interactive teaching, regular assessments, and student-friendly study materials ensures that every learner not only excels in exams but also builds a strong foundation for the future."
          </p>
        </div>
      </div>
    </section>

    <div className="mt-auto">
      <Footer />
    </div>
  </div>
);

export default Home;
