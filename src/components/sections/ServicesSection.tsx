
import { ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "Remote Patient Monitoring",
      description: "Comprehensive IoT solutions for continuous patient monitoring, early intervention, and improved care management.",
      icon: "🫀",
      link: "#remote-monitoring"
    },
    {
      title: "Clinical Workflow Optimization",
      description: "Smart IoT systems that streamline clinical processes, reduce administrative burden, and enhance staff efficiency.",
      icon: "⚕️",
      link: "#workflow"
    },
    {
      title: "Medical Asset Tracking",
      description: "Real-time location services and asset management solutions for critical medical equipment and supplies.",
      icon: "📊",
      link: "#asset-tracking"
    },
    {
      title: "Healthcare Data Analytics",
      description: "Advanced analytics platforms that transform IoT data into actionable insights for better clinical decision-making.",
      icon: "📈",
      link: "#analytics"
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-heramb-red">Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Advanced healthcare IoT solutions designed to enhance patient care, optimize clinical workflows, and transform healthcare delivery.
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
