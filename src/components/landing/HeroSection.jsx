import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, AlertTriangle, Users, BookOpen } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-200 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-amber-100 border border-amber-200 rounded-full text-amber-800 text-sm font-medium mb-8">
            <AlertTriangle className="w-4 h-4" />
            Critical Need for Disaster Preparedness in Indian Schools
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Empowering Schools with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">
              Life-Saving Education
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
            A comprehensive digital platform that transforms disaster preparedness 
            from an afterthought into an integral part of education, protecting millions 
            of students across India.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <Shield className="w-5 h-5 mr-2" />
            Get Started Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 text-lg font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Watch Demo
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">10M+</div>
            <div className="text-gray-600 text-sm lg:text-base">Students at Risk</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-emerald-600 mb-2">80%</div>
            <div className="text-gray-600 text-sm lg:text-base">Schools Unprepared</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-amber-600 mb-2">5</div>
            <div className="text-gray-600 text-sm lg:text-base">Major Disasters/Year</div>
          </div>
          <div className="text-center">
            <div className="text-3xl lg:text-4xl font-bold text-rose-600 mb-2">0</div>
            <div className="text-gray-600 text-sm lg:text-base">Comprehensive Solutions</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}