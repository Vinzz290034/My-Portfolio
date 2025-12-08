import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatbotPlaceholder from './components/ChatbotPlaceholder';

function App() {
  return (
    <div className="bg-primary min-h-screen">
      <Header />
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />

      {/* AI Chatbot */}
      <Chatbot />
    </div>
  );
}

export default App;
