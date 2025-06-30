
import { Bot, Zap, Users, Coins, Blocks, Share2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Bot,
      title: "AI Agents",
      description: "Deploy intelligent AI agents that learn, adapt, and execute complex tasks autonomously across multiple platforms.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "AI Automation",
      description: "Streamline your workflows with advanced AI automation that handles repetitive tasks and optimizes processes.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      title: "3D Avatars",
      description: "Create lifelike 3D avatars with advanced AI-driven animations and realistic human interactions.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Coins,
      title: "NFTs",
      description: "Mint, trade, and manage NFTs with our integrated blockchain platform and smart contract technology.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Blocks,
      title: "Blockchain",
      description: "Leverage cutting-edge blockchain technology for secure, transparent, and decentralized operations.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Share2,
      title: "Social Media Automation",
      description: "Automate your social media presence with AI-powered content creation and engagement strategies.",
      gradient: "from-rose-500 to-pink-500"
    }
  ];

  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Revolutionary Web4 Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the next evolution of the internet with our comprehensive suite of Web4 technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-slate-800 rounded-2xl flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
