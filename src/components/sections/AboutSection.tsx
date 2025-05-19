
import { Check } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    "20+ years of industry experience",
    "Operations in 30+ countries worldwide",
    "500+ successful projects completed",
    "Industry-leading sustainability initiatives"
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
              Heramb is a global leader in providing innovative solutions across diverse industries. 
              With our extensive expertise and commitment to excellence, we help organizations 
              navigate complex challenges and achieve sustainable growth.
            </p>
            <p className="text-gray-300 mb-6">
              Our mission is to transform industries through innovative technologies and 
              sustainable practices, creating value for our clients, employees, and communities.
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
                src="https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=2070" 
                alt="Heramb Headquarters" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-heramb-red p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
