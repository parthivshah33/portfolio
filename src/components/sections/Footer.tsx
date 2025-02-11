import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#FFD700]/20">
      <div className="container mx-auto px-6 py-12 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 md:ml-16"
        >
          {/* About Section */}
          <div className="space-y-4 md:max-w-[90%]">
            <h3 className="text-xl font-bold text-[#FFD700] mb-4">Parthiv Shah</h3>
            <p className="text-gray-400 text-sm">
              Generative AI Engineer specializing in building intelligent solutions 
              with cutting-edge technologies. Focused on delivering impactful 
              AI-driven applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#FFD700] mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-[#FFD700] transition-colors text-sm whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#FFD700] mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#FFD700]" />
                <a href="mailto:parthivshah33@gmail.com" className="text-gray-400 hover:text-[#FFD700] transition-colors text-sm">
                  parthivshah33@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#FFD700]" />
                <a href="tel:+917878765913" className="text-gray-400 hover:text-[#FFD700] transition-colors text-sm">
                  +91-7878765913
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#FFD700]" />
                <span className="text-gray-400 text-sm">Ahmedabad, India</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#FFD700] mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/parthivshah33"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[#FFD700]/30 hover:border-[#FFD700] hover:bg-[#FFD700]/10 transition-all"
              >
                <Linkedin className="w-6 h-6 text-[#FFD700]" />
              </a>
              <a
                href="https://github.com/parthivshah33"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[#FFD700]/30 hover:border-[#FFD700] hover:bg-[#FFD700]/10 transition-all"
              >
                <Github className="w-6 h-6 text-[#FFD700]" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Copyright */}
        <div className="border-t border-[#FFD700]/10 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Parthiv Shah. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}