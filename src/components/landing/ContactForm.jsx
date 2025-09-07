import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Institution } from '@/entities/Institution';
import { Send, CheckCircle, Building2, Users } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    location: '',
    contact_person: '',
    email: '',
    phone: '',
    student_count: '',
    staff_count: '',
    risk_profile: [],
    current_preparedness_level: 'basic',
    additional_info: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRiskProfileChange = (risk, checked) => {
    setFormData(prev => ({
      ...prev,
      risk_profile: checked 
        ? [...prev.risk_profile, risk]
        : prev.risk_profile.filter(r => r !== risk)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await Institution.create({
        ...formData,
        student_count: parseInt(formData.student_count) || 0,
        staff_count: parseInt(formData.staff_count) || 0,
        status: 'inquiry'
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    }

    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center p-12 bg-emerald-50 rounded-3xl border border-emerald-200"
      >
        <div className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
        <p className="text-gray-600 text-lg mb-6">
          Your inquiry has been received. Our team will contact you within 24 hours to discuss how we can help make your institution safer.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="bg-white"
        >
          Submit Another Inquiry
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-3xl shadow-xl border border-gray-100"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Started Today</h3>
        <p className="text-gray-600">Tell us about your institution and we'll schedule a personalized demo</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Institution Name*</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            placeholder="ABC School / XYZ College"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="type">Institution Type*</Label>
          <Select value={formData.type} onValueChange={(value) => handleInputChange('type', value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="school">School</SelectItem>
              <SelectItem value="college">College</SelectItem>
              <SelectItem value="university">University</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="location">Location*</Label>
          <Input
            id="location"
            value={formData.location}
            onChange={(e) => handleInputChange('location', e.target.value)}
            placeholder="City, State"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="contact_person">Contact Person*</Label>
          <Input
            id="contact_person"
            value={formData.contact_person}
            onChange={(e) => handleInputChange('contact_person', e.target.value)}
            placeholder="Principal / Director name"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="email">Email*</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="contact@institution.edu"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            placeholder="+91 XXXXX XXXXX"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="student_count">Number of Students</Label>
          <Input
            id="student_count"
            type="number"
            value={formData.student_count}
            onChange={(e) => handleInputChange('student_count', e.target.value)}
            placeholder="500"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="staff_count">Number of Staff</Label>
          <Input
            id="staff_count"
            type="number"
            value={formData.staff_count}
            onChange={(e) => handleInputChange('staff_count', e.target.value)}
            placeholder="50"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label>Regional Disaster Risks</Label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['earthquake', 'flood', 'fire', 'cyclone', 'landslide', 'other'].map((risk) => (
            <div key={risk} className="flex items-center space-x-2">
              <Checkbox
                id={risk}
                checked={formData.risk_profile.includes(risk)}
                onCheckedChange={(checked) => handleRiskProfileChange(risk, checked)}
              />
              <Label htmlFor={risk} className="text-sm capitalize">{risk}</Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="preparedness_level">Current Preparedness Level</Label>
        <Select value={formData.current_preparedness_level} onValueChange={(value) => handleInputChange('current_preparedness_level', value)}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="basic">Basic (Minimal procedures)</SelectItem>
            <SelectItem value="moderate">Moderate (Some training)</SelectItem>
            <SelectItem value="advanced">Advanced (Regular drills)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="additional_info">Additional Information</Label>
        <Textarea
          id="additional_info"
          value={formData.additional_info}
          onChange={(e) => handleInputChange('additional_info', e.target.value)}
          placeholder="Tell us about your specific needs, challenges, or questions..."
          className="h-24"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Schedule Demo & Get Pricing
          </>
        )}
      </Button>
    </motion.form>
  );
}