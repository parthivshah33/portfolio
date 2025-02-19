import Navbar from './components/navigation/Navbar';
import ContactForm from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Footer from './components/sections/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Skills from './components/sections/Skills';
import WhatsAppIcon from './components/ui/WhatsAppIcon';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Skills />
        <Experience />
        <ContactForm />
        <Footer />
      </main>
      <WhatsAppIcon />
    </div>
  );
}

export default App;
