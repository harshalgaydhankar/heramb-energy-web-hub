
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const columns = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '#about' },
        { name: 'Leadership', url: '#leadership' },
        { name: 'Careers', url: '#careers' },
        { name: 'Contact', url: '#contact' },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Technology Solutions', url: '#tech' },
        { name: 'Process Optimization', url: '#process' },
        { name: 'Consulting', url: '#consulting' },
        { name: 'Training', url: '#training' },
      ]
    },
    {
      title: 'Industries',
      links: [
        { name: 'Energy', url: '#energy' },
        { name: 'Manufacturing', url: '#manufacturing' },
        { name: 'Infrastructure', url: '#infrastructure' },
        { name: 'Transportation', url: '#transportation' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'News', url: '#news' },
        { name: 'Events', url: '#events' },
        { name: 'Publications', url: '#publications' },
        { name: 'Media Kit', url: '#media' },
      ]
    },
  ];

  return (
    <footer className="bg-heramb-gray text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <img 
              src="/lovable-uploads/0c41e17c-634f-478d-a813-ca6273bf535e.png" 
              alt="Heramb" 
              className="h-12 mb-6"
            />
            <p className="text-sm text-gray-300 mb-6">
              Heramb delivers innovative solutions to transform industries worldwide. We combine expertise, technology, and sustainability to drive progress.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-heramb-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-heramb-red transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-heramb-red transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-heramb-red transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.url} 
                      className="text-gray-300 hover:text-heramb-red transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Heramb. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-heramb-red transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-heramb-red transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-heramb-red transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
