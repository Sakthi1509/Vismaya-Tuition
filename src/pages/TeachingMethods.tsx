import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import heroAbout from "@/assets/etu.jpg";
import teachingImg from "@/assets/nine.jpg";
import teachingImg1 from "@/assets/ten.jpg";
import teachingImg2 from "@/assets/eleven.jpg";
import teachingImg3 from "@/assets/nine.jpg";

import { i } from "node_modules/vite/dist/node/types.d-aGj9QkWt";


const TeachingMethods = () => (
  <div className="min-h-screen flex flex-col">
    
    <HeroBanner title="Our Teaching Methods" image={heroAbout} subtitle="Find Out More" />

    <div className="container py-12 space-y-12">
      {/* Intro */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-heading font-bold mb-4">Teaching Methods</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Our teaching methods are catered to every student's needs and capabilities at their respective academic levels. Providing them with the best holistic education. "At Vismaya Education, we believe in concept clarity, continuous practice, and personalized mentoring. Our unique blend of interactive teaching, regular assessments, and student-friendly study materials ensures that every learner not only excels in exams but also builds a strong foundation for the future, turning them into role models and future leaders."
        </p>
      </div>

      {/* 3 Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { num: "1", text: "We believe that every child have their own way of learning and that we should cater to their learning capabilities." ,image: teachingImg1},
          { num: "2", text: "We aim to provide to all standard holistic education to mould them into future leaders and achieve academic success." ,image: teachingImg2},
          { num: "3", text: "We aim to make the learning experience as fun and engaging as much as possible." ,image: teachingImg3},
        ].map((p) => (
          <div key={p.num} className="text-center">
            <div className="w-24 h-24 rounded-full bg-teal-light mx-auto mb-4 flex items-center justify-center overflow-hidden">
              <img src={p.image} alt={`Pillar ${p.num}`} className="w-full h-full object-cover" />
            </div>
            <p className="text-2xl font-heading font-bold text-teal-dark mb-2">{p.num}</p>
            <p className="text-xs text-muted-foreground">{p.text}</p>
          </div>
        ))}
      </div>

      {/* Beliefs */}
      <div className="bg-teal-bg rounded-xl p-6 md:p-10">
        <h3 className="text-center text-lg font-heading font-bold mb-6">⭐ "Balancing Knowledge, Skills & Growth for a Brighter Future"</h3>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <p className="text-sm text-secondary-foreground leading-relaxed">
            "At Vismaya Education, we believe in creating a healthy balance between academics, personal growth, and life skills. We set clear learning goals and provide effective study strategies that empower every student to reach their fullest potential. Our aim is to provide the best guidance, resources, and motivation to help your child succeed both in academics and in life."
          </p>
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full bg-accent/20 flex items-center justify-center text-xs text-center text-accent font-semibold p-4">
            <img src="twele.png"></img>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Activities */}
      <div className="bg-card border border-border rounded-lg p-6 md:p-8 max-w-3xl mx-auto">
        <h3 className="font-bold text-base mb-4 text-center">Learning Through Fun and Interactive Activities</h3>
        <div className="text-sm text-muted-foreground space-y-3">
          <div>
            <p className="font-semibold">1. Activity-Based Learning</p>
            <ul className="list-disc list-inside ml-2">
              <li>Subjects taught using games, puzzles, and quizzes.</li>
              <li>Encourages creativity and logical thinking.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">2. Group Discussions & Role Plays</p>
            <ul className="list-disc list-inside ml-2">
              <li>Improves communication & teamwork skills.</li>
              <li>Builds confidence to express ideas freely.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">3. Educational Games & Experiments</p>
            <ul className="list-disc list-inside ml-2">
              <li>Science experiments, math challenges, and interactive apps.</li>
              <li>Hands-on learning that makes concepts easier to remember.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">4. Creative Workshops</p>
            <ul className="list-disc list-inside ml-2">
              <li>Drawing, storytelling, and project-making sessions.</li>
              <li>Enhances imagination and out-of-the-box thinking.</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold">5. Technology in Learning</p>
            <ul className="list-disc list-inside ml-2">
              <li>Use of smart boards, videos, and animations for a lively classroom experience.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="mt-auto">
      <Footer />
    </div>
  </div>
);

export default TeachingMethods;
