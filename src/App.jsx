import { Navbar }    from './components/Navbar';
import { BackToTop } from './components/BackToTop';
import { Footer }    from './components/Footer';
import { Hero }       from './sections/Hero';
import { About }      from './sections/About';
import { Skills }     from './sections/Skills';
import { Projects }   from './sections/Projects';
import { Experience } from './sections/Experience';
import { Resume }     from './sections/Resume';
import { Contact }    from './sections/Contact';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#050510', color: '#e2e8f0', position: 'relative' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
