import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import heroAbout from "@/assets/program.jpg";

const Programs = () => (
  <div className="min-h-screen flex flex-col">
    <HeroBanner title="Types of Programs" image={heroAbout} subtitle="Find Out More" />

    <div className="container py-12 space-y-12">
      {/* What to expect */}
      <div className="bg-secondary rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
        <h3 className="text-lg font-heading font-bold mb-3">What Can You Expect From Our Programs?</h3>
        <p className="text-sm text-secondary-foreground mb-4">
          "At Vismaya Education / Achievers Tuition Centre, our programs are designed to give students more than just marks. With concept clarity, regular practice, and personalized guidance, we ensure they gain confidence, skills, and discipline to succeed in exams and in life."
        </p>
        <ol className="list-decimal list-inside text-sm text-secondary-foreground space-y-1">
          <li>Strong Concept Clarity</li>
          <li>Easy-to-understand teaching that builds a solid foundation in every subject.</li>
          <li>Personalized Guidance</li>
          <li>Small batch sizes ensuring every student gets individual attention.</li>
          <li>Regular Practice & Assessments</li>
          <li>Weekly tests, mock exams, and performance tracking for consistent improvement.</li>
          <li>Curated Study Materials</li>
          <li>Confidence & Exam Readiness</li>
          <li>Focus on academics, communication skills, discipline, and balanced lifestyles.</li>
        </ol>
      </div>

      {/* Philosophy & Interactive */}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="font-bold text-sm mb-2">The philosophy behind our approach</h4>
          <p className="text-sm text-muted-foreground">
            "At Vismaya Education / Achievers Tuition Centre, we follow a simple philosophy: every child has the potential to succeed when guided with care, clarity, and consistency. Our approach builds on personalized learning, holistic development, and mentoring, helping students excel not just in exams, but in life."
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <h4 className="font-bold text-sm mb-2">Learning Through Fun and Interactive Activities</h4>
          <p className="text-sm text-muted-foreground">
            "At Vismaya Education / Achievers Tuition Centre, we believe learning should never be boring. That's why our classes are filled with fun activities, experiments, and interactive games. This approach not only makes subjects interesting but also helps students retain knowledge for life."
          </p>
        </div>
      </div>

      {/* Preschool Programs */}
      <div className="bg-teal-bg rounded-xl p-6 md:p-10">
        <h3 className="text-lg font-heading font-semibold mb-3">Explore Preschool Programs</h3>
        <p className="text-sm text-secondary-foreground">
          "At Vismaya Education / Achievers Tuition Centre, our Preschool Programs are carefully designed to provide children with a strong foundation in learning through fun, play, and exploration. With a perfect blend of academics, creativity, and life skills, we help little ones grow with confidence and joy."
        </p>
      </div>

      {/* Primary Programs */}
      <div className="bg-teal-bg rounded-xl p-6 md:p-10">
        <h3 className="text-lg font-heading font-semibold mb-3">Explore Primary School Programs</h3>
        <p className="text-sm text-secondary-foreground">
          Comprehensive primary school programs tailored to build strong academic foundations while nurturing curiosity and creativity.
        </p>
      </div>
    </div>

    <div className="mt-auto">
      <Footer />
    </div>
  </div>
);

export default Programs;
