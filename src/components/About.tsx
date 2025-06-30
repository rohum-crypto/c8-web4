
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Users, Globe, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Trophy, value: "50+", label: "Awards Won", color: "text-yellow-500" },
    { icon: Users, value: "10K+", label: "Active Users", color: "text-blue-500" },
    { icon: Globe, value: "100+", label: "Countries", color: "text-green-500" },
    { icon: Zap, value: "99.9%", label: "Uptime SLA", color: "text-purple-500" }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Leading the Web4 Revolution
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              We're pioneering the next generation of internet technology, combining artificial intelligence, 
              blockchain, and immersive 3D experiences to create unprecedented digital solutions.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Our team of experts has been at the forefront of Web3 and AI development for over a decade, 
              and now we're shaping the future with Web4 innovations that will transform how businesses 
              and individuals interact with the digital world.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-2`} />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <Card className="bg-gradient-to-br from-purple-900/50 to-cyan-900/50 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Innovation First</h4>
                      <p className="text-gray-400">Always at the cutting edge of technology with continuous R&D investment.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">Proven Track Record</h4>
                      <p className="text-gray-400">Successfully deployed solutions for Fortune 500 companies worldwide.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">24/7 Support</h4>
                      <p className="text-gray-400">Round-the-clock expert support to ensure your success.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
