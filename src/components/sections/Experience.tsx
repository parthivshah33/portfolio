import { motion } from 'framer-motion';
import { Brain, Briefcase, Code, Rocket } from 'lucide-react';

const experiences = [
  {
    title: "AI-ML Intern",
    company: "Proplegit Global PVT LTD",
    period: "2023-2024",
    description: "Worked with computer vision tasks, core deep learning, CNN fine-tuning, Natural Language Processing, and Generative AI solutions.",
    icon: Brain
  },
  {
    title: "Python Developer Intern",
    company: "ESMSYS PVT LTD",
    period: "2022-2024",
    description: "Hands-on experience in Python web and automation technologies like Flask, Django, Selenium, Beautiful Soup, etc.",
    icon: Code
  },
  {
    title: "Chief Executive",
    company: "Failed at Start-up",
    period: "2021-2022",
    description: "Gained experience in startup field and business understanding while pitching to potential customers.",
    icon: Rocket
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#FFD700] mb-4">
            <Briefcase className="inline-block w-8 h-8 mr-2 mb-1" />
            Experience
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-0 h-full w-px bg-[#FFD700]/20">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-[#FFD700] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#FFD700]" />
                  </div>
                </div>
                
                <div className="bg-gray-900/50 p-6 rounded-lg border border-[#FFD700]/10 hover:border-[#FFD700]/30 transition-all duration-300">
                  <h3 className="text-xl font-bold text-[#FFD700] mb-2">{exp.title}</h3>
                  <p className="text-gray-400 font-medium mb-1">{exp.company}</p>
                  <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}