import { About } from "./components/About";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { MediaCenter } from "./components/MediaCenter";
import { OperationalGallery } from "./components/OperationalGallery";
import { OperationsNetwork } from "./components/OperationsNetwork";
import { OperationsReal } from "./components/OperationsReal";
import { Services } from "./components/Services";
import { Stats } from "./components/Stats";

function App() {
  return (
    <div className="relative isolate overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Stats />
        <OperationsNetwork />
        <OperationsReal />
        <OperationalGallery />
        <Services />
        <About />
        <Certifications />
        <MediaCenter />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
