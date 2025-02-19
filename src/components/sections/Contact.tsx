import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone, BriefcaseIcon} from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-[#FFD700]">Get in Touch</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-[#FFD700]" />
                <a href="mailto:parthivshah33@gmail.com" className="hover:text-[#FFD700]">
                  parthivshah33@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-[#FFD700]" />
                <a href="tel:+917878765913" className="hover:text-[#FFD700]">
                  +91-7878765913
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-[#FFD700]" />
                <span>Ahmedabad, Gujarat, India</span>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/parthivshah33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-[#FFD700] hover:bg-[#FFD700]/10 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://github.com/parthivshah33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full border border-[#FFD700] hover:bg-[#FFD700]/10 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                href="https://www.upwork.com/freelancers/~012804d44bd4caa006?viewMode=1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-[#FFD700]/30 hover:border-[#FFD700] hover:bg-[#FFD700]/10 transition-all"
              >
                <BriefcaseIcon className="w-6 h-6 text-[#FFD700]" />
              </a>
              </div>
            </div>
            
            <form className="space-y-4">
              <input
                type="text"
                placeholder="This form is facing issue. Kindly contact via another source. Thank You!"
                className="w-full p-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-[#FFD700] outline-none"
              />
              <input
                type="email"
                placeholder="This form is facing issue. Kindly contact via another source. Thank You!"
                className="w-full p-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-[#FFD700] outline-none"
              />
              <textarea
                placeholder="This form is facing issue. Kindly contact via another source. Thank You!"
                rows={4}
                className="w-full p-3 bg-gray-900 rounded-lg focus:ring-2 focus:ring-[#FFD700] outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-[#FFD700] text-black py-3 rounded-lg hover:bg-[#FFD700]/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}