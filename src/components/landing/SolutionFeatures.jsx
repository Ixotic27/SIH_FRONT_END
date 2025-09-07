import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Gamepad2, 
  Phone, 
  BarChart3, 
  MapPin, 
  Users, 
  Shield,
  Zap
} from 'lucide-react';

export default function SolutionFeatures() {
  const features = [
    {
      icon: Monitor,
      title: "Interactive Education Modules",
      description: "Comprehensive disaster education integrated seamlessly into existing curriculum with engaging multimedia content",
      color: "bg-blue-500"
    },
    {
      icon: Gamepad2,
      title: "Gamified Learning Experience",
      description: "Points, badges, and competitions make disaster preparedness education engaging and memorable for students",
      color: "bg-purple-500"
    },
    {
      icon: MapPin,
      title: "Region-Specific Alerts",
      description: "Localized disaster risk information and customized response protocols based on geographic location",
      color: "bg-emerald-500"
    },
    {
      icon: Shield,
      title: "Virtual Emergency Drills",
      description: "Safe simulation environments for practicing emergency procedures without real-world risks",
      color: "bg-orange-500"
    },
    {
      icon: Phone,
      title: "Emergency Communication",
      description: "Instant alerts, contact directories, and real-time coordination tools for crisis situations",
      color: "bg-red-500"
    },
    {
      icon: BarChart3,
      title: "Administrator Dashboard",
      description: "Track preparedness scores, drill participation, and institutional safety metrics in real-time",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-100 border border-emerald-200 rounded-full text-emerald-800 text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            Comprehensive Digital Solution
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transform Disaster Preparedness with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"> Smart Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our integrated platform addresses every aspect of disaster preparedness education, 
            from interactive learning to real-time emergency response.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-all duration-300"></div>
              <div className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform group-hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-emerald-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-6">Ready to Transform Your Institution?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join leading educational institutions in creating safer, more prepared learning environments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-300">
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Get Pricing
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}