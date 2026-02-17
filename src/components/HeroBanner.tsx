interface HeroBannerProps {
  title: string;
  image: string;
  subtitle?: string;
}
import { Link } from "react-router-dom";

const HeroBanner = ({ title, image, subtitle }: HeroBannerProps) => (
  <section className="relative h-[250px] md:h-[350px] overflow-hidden">
    <div className="absolute inset-0">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-light/80 to-transparent" />
    </div>

   <div className="relative container h-full flex items-center justify-between">
      
      {/* Left Content */}
      <div>
        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="text-sm text-white mt-2 tracking-[0.3em] uppercase">
            {subtitle}
          </p>
        )}
      </div>

      {/* Right Button */}
      <Link
        to="/register"
      className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold px-7 py-3 rounded-full shadow-xl transition-all duration-300 hover:scale-105"      >
        Register Now →
      </Link>
    </div>
    
  </section>
);

export default HeroBanner;
