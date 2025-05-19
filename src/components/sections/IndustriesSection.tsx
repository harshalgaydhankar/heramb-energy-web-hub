
const IndustriesSection = () => {
  const industries = [
    {
      name: "Energy",
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070",
      description: "Innovative solutions for the evolving energy sector"
    },
    {
      name: "Manufacturing",
      image: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?q=80&w=2070",
      description: "Optimizing production processes for maximum efficiency"
    },
    {
      name: "Infrastructure",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070",
      description: "Building the foundation for tomorrow's development"
    },
    {
      name: "Transportation",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
      description: "Moving people and goods with sustainable solutions"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Industries <span className="text-heramb-red">We Serve</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our expertise spans across multiple industries, providing tailored solutions to address sector-specific challenges.
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
