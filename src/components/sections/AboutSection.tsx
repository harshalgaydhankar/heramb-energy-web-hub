
import { Check } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    "15+ years of healthcare technology expertise",
    "Implementation in 500+ medical facilities worldwide",
    "Over 2 million connected healthcare devices",
    "FDA-compliant and HIPAA-certified solutions"
  ];

  return (
    <section id="about" className="py-20 bg-heramb-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-heramb-red">Heramb</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Heramb is a global leader in healthcare IoT solutions, specializing in developing secure, 
              reliable, and intelligent connected devices and platforms for the medical industry.
            </p>
            <p className="text-gray-300 mb-6">
              Our mission is to transform healthcare delivery through innovative IoT technologies 
              that improve patient outcomes, increase operational efficiency, and reduce costs for healthcare providers.
            </p>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Our Achievements</h3>
              <ul className="space-y-2">
                {achievements.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-heramb-red mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-slide-up animate-delay-200">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070" 
                alt="Heramb Healthcare IoT Solutions" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-heramb-red p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm">Years of Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
