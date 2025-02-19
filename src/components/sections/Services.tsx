import { motion } from 'framer-motion';
import chatbotUiImage from '../../images/chatbot-ui_1.png';
import ServiceCard from '../ui/ServiceCard';

type Service = {
  type: 'card';
  title: string;
  description: string;
  image: string;
  features: string[];
  imageStyle?: {  // Add this property definition
    maxWidth: string;
    height: string;
    margin: string;
  };
} | {
  type: 'video';
  video: string;
};
const services: Service[] = [

  {
    type: 'video',
    video: "https://www.youtube.com/embed/-JHlOCp10Y8"
  },
  {
    type: 'card',
    title: "AI Agent Chatbot",
    description: "Custom AI Chatbot according to your business needs.",
    image: chatbotUiImage,
    imageStyle: {
      maxWidth: '200px',
      height: '100px',
      margin: '0 auto' // centers the image
    },
    features: ["Chat with documents like pdf,sheets,.docx,etc.", "Integrate various actionable tools into Chatbot"]
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#FFD700] mb-4">Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized AI solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={`h-full ${service.type === 'video' ? 'lg:col-span-2' : ''}`}
            >
              {service.type === 'video' ? (
                <div className="relative h-full bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
                  <div className="aspect-video">
                    <iframe
                      src={service.video}
                      title="Our Process Video"
                      className="w-full h-full md:rounded-xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      frameBorder="0"
                    />
                  </div>
                </div>
              ) : (
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  features={service.features}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}