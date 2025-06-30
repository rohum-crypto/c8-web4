
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-purple-900/50 via-slate-900/50 to-cyan-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
          Ready to Enter the Web4 Era?
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
          Join thousands of forward-thinking businesses already leveraging our Web4 platform to 
          revolutionize their digital presence and unlock unprecedented growth opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-purple-500/50 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105">
            <Mail className="mr-2 w-5 h-5" />
            Contact Sales
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">Free</div>
            <div className="text-gray-400">14-day trial</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-400">Expert support</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">30-day</div>
            <div className="text-gray-400">Money-back guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
