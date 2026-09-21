import { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);
  const handleFinished = useCallback(() => setLoading(false), []);

  return (
    <>
      {loading && <LoadingScreen onFinished={handleFinished} />}
      <div className="bg-bg min-h-screen">
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Contact />
        <Footer />
        <Chatbot />
      </div>
    </>
  );
}

export default App;
