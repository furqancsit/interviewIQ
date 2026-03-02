import React from "react"; 
import { BarChart, FileText, History } from "lucide-react"; 

const Features = () => {
  const featuresList = [
     {
    icon: <BarChart size={32} />,
    title: "AI Answer Evaluation",
    desc: "Evaluates communication, technical accuracy, and confidence level."
  },
  {
    icon: <FileText size={32} />,
    title: "Resume-Based Interview",
    desc: "Generates project-specific interview questions from your uploaded resume."
  },
  {
    icon: <FileText size={32} />,
    title: "Downloadable PDF Report",
    desc: "Get detailed insights on strengths, weaknesses, and areas for improvement."
  },
  {
    icon: <History size={32} />,
    title: "Performance History & Analytics",
    desc: "Track your progress with performance graphs and topic-level analysis."
  }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-mono tracking-tight leading-tight text-zinc-900 outline-text italic">
            Advanced AI Capabilities
          </h1>
          <p className="mt-4 text-gray-600">
            Explore our suite of intelligent tools designed to optimize your performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {featuresList.map((feature, index) => (
            <div key={index} className="text-center p-6 border rounded-lg hover:shadow-lg transition">
              <div className="mb-4 flex justify-center  text-black">
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-mono mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;