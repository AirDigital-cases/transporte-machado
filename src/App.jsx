import { About } from "./components/About";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { CTA } from "./components/CTA";
import { Differentials } from "./components/Differentials";
import { Footer } from "./components/Footer";
import { GlobeSection } from "./components/GlobeSection";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Process } from "./components/Process";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";
import { Trust } from "./components/Trust";

function App() {
  return (
    <div className="relative isolate overflow-hidden">
      <Header />
      <main>
        <Hero />
        <About />
        <Stats />
        <GlobeSection />
        <Services />
        <Differentials />
        <Process />
        <Certifications />
        <Trust />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
