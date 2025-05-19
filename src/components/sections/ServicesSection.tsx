
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Technology Solutions",
      description: "Advanced technological innovations designed to optimize your operations and drive digital transformation.",
      icon: "💻",
      link: "#tech"
    },
    {
      title: "Process Optimization",
      description: "Streamline your workflows and maximize efficiency with our industry-leading process optimization expertise.",
      icon: "⚙️",
      link: "#process"
    },
    {
      title: "Consulting Services",
      description: "Strategic guidance from industry experts to help navigate complex challenges and seize new opportunities.",
      icon: "📊",
      link: "#consulting"
    },
    {
      title: "Sustainability Initiatives",
      description: "Eco-friendly solutions that reduce environmental impact while enhancing operational efficiency.",
      icon: "🌱",
      link: "#sustainability"
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-heramb-red">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to meet your industry-specific challenges and drive sustainable growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-heramb-gray p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <a 
                href={service.link} 
                className="inline-flex items-center text-heramb-red hover:underline"
              >
                Learn More <ArrowRight size={14} className="ml-1" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
