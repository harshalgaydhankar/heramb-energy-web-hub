
const IndustriesSection = () => {
  const industries = [
    {
      name: "Hospitals & Clinics",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070",
      description: "End-to-end IoT solutions for inpatient and outpatient care"
    },
    {
      name: "Home Healthcare",
      image: "https://images.unsplash.com/photo-1576671414121-aa2d0967541c?q=80&w=2070",
      description: "Remote monitoring systems for telehealth and home care"
    },
    {
      name: "Medical Labs",
      image: "https://images.unsplash.com/photo-1579154341098-e4e158cc8082?q=80&w=2069",
      description: "IoT-enabled diagnostics and laboratory equipment"
    },
    {
      name: "Pharmaceutical",
      image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=2013",
      description: "Temperature-controlled supply chain and inventory management"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Healthcare <span className="text-heramb-red">Sectors We Serve</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our specialized IoT solutions cater to diverse healthcare environments, providing tailored technology for specific clinical needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg h-80 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                style={{ backgroundImage: `url(${industry.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
              
              <div className="absolute bottom-0 left-0 p-6 w-full transition-transform duration-300 transform translate-y-2 group-hover:translate-y-0">
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
