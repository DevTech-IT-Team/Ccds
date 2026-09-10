import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MobileCTA from './components/layout/MobileCTA';
import PageWrapper from './components/layout/PageWrapper';
import ScrollToTop from './components/layout/ScrollToTop';
import BackToTop from './components/layout/BackToTop';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import Resources from './pages/Resources';
import NotFound from './pages/NotFound';
import Academy from './pages/Academy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ContraindicationsPage from './pages/ContraindicationsPage';
import BlogGlyphosate from './pages/BlogGlyphosate';
import BlogYana from './pages/BlogYana';
import BlogAlternativeDaily from './pages/BlogAlternativeDaily';
import BlogPooPoo from './pages/BlogPooPoo';
import BlogMelani from './pages/BlogMelani';
import BlogPuffyEyes from './pages/BlogPuffyEyes';
import BlogColonicIrrigation from './pages/BlogColonicIrrigation';
import BlogHistoricalControversy from './pages/BlogHistoricalControversy';
import BlogMortonWalker from './pages/BlogMortonWalker';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:category" element={<Services />} />
            <Route path="/contraindications/:service" element={<ContraindicationsPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/blog/glyphosate" element={<BlogGlyphosate />} />
            <Route path="/blog/ccdc-supports-yana" element={<BlogYana />} />
            <Route path="/blog/from-alternative-daily" element={<BlogAlternativeDaily />} />
            <Route path="/blog/on-the-town-with-ccdc-poo-poo-putt-putt" element={<BlogPooPoo />} />
            <Route path="/blog/melani-hagans-presentation-visit-to-ccdc" element={<BlogMelani />} />
            <Route path="/blog/how-to-get-rid-of-puffy-eyes" element={<BlogPuffyEyes />} />
            <Route path="/blog/the-influence-of-colonic-irrigation-on-human-intestinal-microbiota" element={<BlogColonicIrrigation />} />
            <Route path="/blog/colonic-irrigations-historical-controversy" element={<BlogHistoricalControversy />} />
            <Route path="/blog/value-of-colon-hydrotherapy" element={<BlogMortonWalker />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageWrapper>
        <Footer />
        <MobileCTA />
        <BackToTop />
      </div>
    </BrowserRouter>
  );
}

export default App;
