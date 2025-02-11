import { motion } from 'framer-motion';
import { Linkedin, Mail, MapPin, Phone, User } from 'lucide-react';
import InfoCard from '../ui/InfoCard';

const iconSize = 24;
const mobileIconSize = 34;

const info = [
  { label: "Name", value: "Parthiv Shah", icon: User, iconSize },
  { label: "Address", value: "SP Stadium Road, Naranpur, Ahmedabad (380013), Gujarat, India", icon: MapPin, iconSize: mobileIconSize },
  { label: "Email", value: "parthivshah33@gmail.com", icon: Mail, iconSize },
  { label: "Phone", value: "+91-7878765913", icon: Phone, iconSize },
  { label: "LinkedIn", value: "parthivshah33", link: "https://linkedin.com/in/parthivshah33", icon: Linkedin, iconSize }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#FFD700] mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I am a Generative AI Engineer dedicated to leveraging cutting-edge AI technologies to solve complex business challenges.
            My mission is to empower organizations through innovative AI solutions that drive efficiency and growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="w-full max-w-md mx-auto">
              <img
                src="/src/images/parthiv.png"
                alt="Parthiv Shah"
                className="w-full h-auto rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 border-2 border-[#FFD700]/20 rounded-lg -m-3"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {info.map((item, index) => (
              <InfoCard 
                key={index} 
                {...item} 
                iconSize={item.icon === MapPin ? mobileIconSize : item.iconSize}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}