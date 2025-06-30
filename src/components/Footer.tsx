
import { Bot, Mail, Phone, MapPin, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Product: ["AI Agents", "3D Avatars", "NFT Platform", "Blockchain", "Automation"],
    Company: ["About Us", "Careers", "Press", "Partners", "Contact"],
    Resources: ["Documentation", "Blog", "Community", "Support", "Status"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR", "Security"]
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Bot className="w-8 h-8 text-purple-500 mr-3" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Web4AI
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Pioneering the future of the internet with AI agents, blockchain technology, 
              and immersive digital experiences.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
              <Github className="w-6 h-6 text-gray-400 hover:text-purple-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Contact info */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-purple-400 mr-3" />
              <span className="text-gray-400">hello@web4ai.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-purple-400 mr-3" />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-purple-400 mr-3" />
              <span className="text-gray-400">San Francisco, CA</span>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Web4AI. All rights reserved. Built for the future of the internet.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
