
import { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "Sustainability", href: "#sustainability" },
    { label: "Investors", href: "#investors" },
    { label: "Careers", href: "#careers" },
    { label: "News", href: "#news" },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-heramb-dark shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="relative">
              <img 
                src="/lovable-uploads/0c41e17c-634f-478d-a813-ca6273bf535e.png" 
                alt="Heramb" 
                className="h-10 md:h-12"
              />
            </a>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-white text-sm font-medium hover:text-heramb-red transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button className="ml-4 p-2 hover:bg-gray-800 rounded-full">
              <Search size={20} className="text-white" />
            </button>
          </div>
          
          <button className="lg:hidden p-2" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-heramb-dark border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className="text-white text-base font-medium hover:text-heramb-red transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="relative mt-4">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full bg-heramb-gray text-white px-4 py-2 rounded-md pr-10"
                />
                <Search size={18} className="absolute right-3 top-2.5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
