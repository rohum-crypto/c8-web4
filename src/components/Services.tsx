
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "AI Agent Development",
      description: "Custom AI agents tailored to your business needs",
      features: ["Custom AI Models", "Multi-Platform Integration", "Real-time Learning", "24/7 Autonomous Operation"],
      price: "Starting at $2,500/month",
      popular: false
    },
    {
      title: "Complete Web4 Suite",
      description: "Full-stack Web4 solution with all features included",
      features: ["All AI Features", "3D Avatar Creation", "NFT Marketplace", "Blockchain Integration", "Social Automation", "Priority Support"],
      price: "Starting at $5,000/month",
      popular: true
    },
    {
      title: "Enterprise Solution",
      description: "Scalable enterprise-grade Web4 infrastructure",
      features: ["Unlimited AI Agents", "Custom Blockchain", "White-label Solution", "Dedicated Support", "Custom Integration", "SLA Guarantee"],
      price: "Contact for pricing",
      popular: false
    }
  ];

  return (
    <section className="py-24 px-4 bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Choose Your Web4 Journey
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Select the perfect plan to transform your business with cutting-edge Web4 technology
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`relative bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 ${service.popular ? 'ring-2 ring-purple-500/50 shadow-2xl shadow-purple-500/25' : ''}`}>
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <div className="text-3xl font-bold text-white mb-8">{service.price}</div>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button className={`w-full ${service.popular ? 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700' : 'bg-slate-700 hover:bg-slate-600'} text-white py-3 rounded-full transition-all duration-300 hover:scale-105`}>
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
