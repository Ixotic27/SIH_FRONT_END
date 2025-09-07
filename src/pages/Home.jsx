import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import ProblemStatement from '../components/landing/ProblemStatement';
import SolutionFeatures from '../components/landing/SolutionFeatures';
import StakeholdersSection from '../components/landing/StakeholdersSection';
import ContactForm from '../components/landing/ContactForm';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemStatement />
      <SolutionFeatures />
      <StakeholdersSection />
      
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Disaster Preparedness Education System</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Transforming disaster preparedness from an afterthought into an integral part of education. 
                Building safer, more resilient educational institutions across India.
              </p>
              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">10M+</div>
                  <div className="text-gray-400 text-sm">Students Protected</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-400">1000+</div>
                  <div className="text-gray-400 text-sm">Institutions Ready</div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Solutions</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Interactive Education Modules</li>
                <li>Virtual Emergency Drills</li>
                <li>Real-time Alert System</li>
                <li>Administrator Dashboard</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-300">
                <li>info@disasterprep.edu</li>
                <li>+91 XXXXX XXXXX</li>
                <li>Support & Training</li>
                <li>Emergency Response</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Disaster Preparedness Education System. Building safer schools for a resilient India.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}