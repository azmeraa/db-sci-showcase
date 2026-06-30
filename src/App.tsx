import { Navbar } from './components/portfolio/Navbar';
import { Hero } from './components/portfolio/Hero';
import { About } from './components/portfolio/About';
import { Services } from './components/portfolio/Services';
import { Experience } from './components/portfolio/Experience';
import { Skills } from './components/portfolio/Skills';
import { Projects } from './components/portfolio/Projects';
import { EducationCertifications } from './components/portfolio/EducationCertifications';
import { Contact } from './components/portfolio/Contact';
import { Footer } from './components/portfolio/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Projects />
      <EducationCertifications />
      <Contact />
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}
export default App;
