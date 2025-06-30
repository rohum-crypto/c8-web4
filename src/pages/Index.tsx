
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Services from '@/components/Services';
import About from '@/components/About';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <Features />
      <Services />
      <About />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
