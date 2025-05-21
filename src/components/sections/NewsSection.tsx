
import { Newspaper, Calendar, ArrowRight } from 'lucide-react';

const NewsSection = () => {
  const newsItems = [
    {
      date: "May 15, 2025",
      title: "Heramb Launches Next-Generation Patient Monitoring Platform",
      excerpt: "Heramb's new IoT platform enables real-time patient monitoring with AI-driven alerts for healthcare providers.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Product Launch"
    },
    {
      date: "April 22, 2025",
      title: "Healthcare IoT Security: Heramb's Approach to Data Protection",
      excerpt: "How Heramb is addressing the critical security challenges in healthcare IoT implementations with innovative solutions.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Security"
    },
    {
      date: "March 10, 2025",
      title: "Heramb Partners with Leading Hospital Network for IoT Implementation",
      excerpt: "Major hospital chain adopts Heramb's IoT solutions across 25 facilities to improve patient care and operational efficiency.",
      image: "https://images.unsplash.com/photo-1516549655669-d64673bc193b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      category: "Partnership"
    }
  ];

  return (
    <section id="news" className="py-20 bg-heramb-dark">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="text-heramb-red">News</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Stay updated on Heramb's latest innovations, partnerships, and insights in healthcare IoT.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-heramb-gray rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-400 mb-3">
                  <span className="bg-heramb-red/20 text-heramb-red text-xs px-2 py-1 rounded mr-3">
                    {item.category}
                  </span>
                  <Calendar size={14} className="mr-1" />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.excerpt}</p>
                <a href="#" className="inline-flex items-center text-heramb-red hover:underline">
                  Read more
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#" 
            className="inline-flex items-center justify-center border border-heramb-red text-heramb-red px-6 py-3 rounded font-medium hover:bg-heramb-red hover:text-white transition-colors"
          >
            View All News
            <Newspaper size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
