interface HeroBannerProps {
  title: string;
  image: string;
  subtitle?: string;
}

const HeroBanner = ({ title, image, subtitle }: HeroBannerProps) => (
  <section className="hero-overlay h-48 md:h-64">
    <div className="absolute inset-0">
      <img src={image} alt={title} className="w-full h-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-teal-light/80 to-transparent" />
    </div>
    <div className="relative container h-full flex flex-col justify-center">
      <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground">{title}</h2>
      {subtitle && <p className="text-sm text-muted-foreground mt-1 tracking-[0.3em] uppercase">{subtitle}</p>}
    </div>
  </section>
);

export default HeroBanner;
