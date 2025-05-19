
import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-heramb-red">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white max-w-2xl mx-auto">
          Ready to Transform Your Business with Heramb?
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
          Partner with us to unlock innovation, efficiency, and sustainable growth for your organization.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center bg-white text-heramb-red px-6 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
          >
            Get Started
            <ArrowRight size={16} className="ml-2" />
          </a>
          <a 
            href="#about" 
            className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded font-medium hover:bg-white/10 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
