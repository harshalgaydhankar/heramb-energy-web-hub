
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-heramb-dark">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-70" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070')" 
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
            Advancing <span className="text-heramb-red">Healthcare</span> <br />
            Through <span className="text-heramb-red">IoT Innovation</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 animate-fade-in animate-delay-200">
            Heramb delivers cutting-edge IoT solutions that transform healthcare delivery, enhance patient care, and optimize clinical workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-400">
            <a 
              href="#services" 
              className="inline-flex items-center bg-heramb-red text-white px-6 py-3 rounded hover:bg-red-700 transition-colors"
            >
              Our Solutions
              <ArrowRight size={16} className="ml-2" />
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center border border-white text-white px-6 py-3 rounded hover:bg-white hover:text-heramb-dark transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
