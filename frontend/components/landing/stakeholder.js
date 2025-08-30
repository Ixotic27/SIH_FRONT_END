import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Users, 
  Building2, 
  Heart, 
  Shield,
  BookOpen
} from 'lucide-react';

export default function StakeholdersSection() {
  const stakeholders = [
    {
      icon: GraduationCap,
      title: "Students",
      subtitle: "K-12 & Higher Education",
      benefits: [
        "Life-saving knowledge and skills",
        "Confidence during emergencies",
        "Interactive, gamified learning",
        "Region-specific preparedness"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BookOpen,
      title: "Teachers & Staff",
      subtitle: "Educational Personnel",
      benefits: [
        "Structured curriculum integration",
        "Emergency coordination tools",
        "Professional development",
        "Student safety confidence"
      ],
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: Building2,
      title: "Institutions",
      subtitle: "Schools & Colleges",
      benefits: [
        "Enhanced safety reputation",
        "Compliance with guidelines",
        "Risk management tools",
        "Emergency preparedness metrics"
      ],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Heart,
      title: "Parents & Guardians",
      subtitle: "Families",
      benefits: [
        "Peace of mind",
        "Child safety assurance",
        "Emergency communication",
        "Home preparedness guidance"
      ],
      color: "from-rose-500 to-rose-600"
    },
    {
      icon: Shield,
      title: "Response Teams",
      subtitle: "Local Disaster Management",
      benefits: [
        "Coordinated institutional response",
        "Trained civilian support",
        "Reduced panic incidents",
        "Community preparedness"
      ],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Government",
      subtitle: "NDMA & Education Ministry",
      benefits: [
        "Policy implementation success",
        "National preparedness improvement",
        "Educational outcome metrics",
        "Disaster resilience building"
      ],
      color: "from-indigo-500 to-indigo-600"
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
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-50 border border-blue-200 rounded-full text-blue-800 text-sm font-medium mb-8">
            <Users className="w-4 h-4" />
            Impact Across All Stakeholders
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Benefits for Every
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600"> Member of the Education Ecosystem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our platform creates value for all stakeholders in the educational community, 
            fostering a comprehensive culture of safety and preparedness.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`w-16 h-16 bg-gradient-to-r ${stakeholder.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stakeholder.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {stakeholder.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {stakeholder.subtitle}
                  </p>
                </div>

                <ul className="space-y-3">
                  {stakeholder.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${stakeholder.color} rounded-full mt-2 flex-shrink-0`}></div>
                      <span className="text-gray-600 text-sm leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="p-8 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Creating a Disaster-Resilient Society
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              By empowering educational institutions with comprehensive disaster preparedness, 
              we're building a safer future for all of India's students and communities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}