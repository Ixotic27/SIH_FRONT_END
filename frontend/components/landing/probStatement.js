import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Users, MapPin, FileX, Clock } from 'lucide-react';

export default function ProblemStatement() {
  const problems = [
    {
      icon: FileX,
      title: "No Structured Education",
      description: "Emergency guidelines exist on paper but lack integration into regular curriculum"
    },
    {
      icon: MapPin,
      title: "No Localized Awareness",
      description: "Students unaware of region-specific disaster risks and response protocols"
    },
    {
      icon: Clock,
      title: "Infrequent Manual Drills",
      description: "Poorly coordinated drills fail to instill practical preparedness skills"
    },
    {
      icon: Users,
      title: "Panic & Chaos",
      description: "Lack of preparation leads to dangerous outcomes during actual emergencies"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-50 border border-red-200 rounded-full text-red-800 text-sm font-medium mb-8">
            <AlertTriangle className="w-4 h-4" />
            The Reality of School Disaster Preparedness in India
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            A Critical Gap in
            <span className="text-red-600"> Student Safety</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Despite India's high disaster vulnerability index, educational institutions 
            remain dangerously unprepared, putting millions of students and staff at risk.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                    <problem.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl border border-red-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Supporting Evidence</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>NDMA reports</strong> show critically low awareness levels in schools despite India's high disaster vulnerability
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>UNDRR recommendations</strong> emphasize integrating disaster risk reduction in education policies
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    <strong>Recent disasters</strong> revealed fatal gaps in institutional emergency response capabilities
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center p-6 bg-gray-900 rounded-2xl text-white">
              <div className="text-3xl font-bold text-red-400 mb-2">Critical Situation</div>
              <p className="text-gray-300">
                Every day of delay increases the risk for millions of students across India
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}