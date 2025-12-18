'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

export default function AdmissionForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    email: '',
    phone: '',
    address: '',
    
    // Academic Information
    lastSchool: '',
    grade: '',
    percentage: '',
    program: '',
    
    // Documents
    photo: null,
    academicRecords: null,
    idProof: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Application submitted successfully!', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#034D27',
          color: '#FFC107',
          border: '1px solid #FFC107',
        },
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        gender: '',
        email: '',
        phone: '',
        address: '',
        lastSchool: '',
        grade: '',
        percentage: '',
        program: '',
        photo: null,
        academicRecords: null,
        idProof: null
      });
      setStep(1);
      
    } catch (error) {
      toast.error('Failed to submit application. Please try again.', {
        duration: 4000,
        position: 'top-center',
        style: {
          background: '#034D27',
          color: '#FFC107',
          border: '1px solid #FFC107',
        },
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white/10 p-8 rounded-xl backdrop-blur-sm"
    >
      <h2 className="text-2xl font-bold text-[#FFC107] mb-6">
        Application Form
      </h2>

      <div className="flex justify-between mb-8">
        {[1, 2, 3].map((stepNumber) => (
          <div
            key={stepNumber}
            className={`flex items-center ${
              stepNumber < 3 ? 'flex-1' : ''
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= stepNumber
                  ? 'bg-[#FFC107] text-[#034D27]'
                  : 'bg-white/20 text-white'
              }`}
            >
              {stepNumber}
            </div>
            {stepNumber < 3 && (
              <div
                className={`flex-1 h-1 mx-2 ${
                  step > stepNumber
                    ? 'bg-[#FFC107]'
                    : 'bg-white/20'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#FFC107] mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-white/60"
                  required
                />
              </div>
              <div>
                <label className="block text-[#FFC107] mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-white/60"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#FFC107] mb-2">Date of Birth</label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-[#FFC107] mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[#FFC107] mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-white/60"
                required
              />
            </div>

            <div>
              <label className="block text-[#FFC107] mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-white/60"
                required
              />
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-[#FFC107] mb-2">Last School Attended</label>
              <input
                type="text"
                name="lastSchool"
                value={formData.lastSchool}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-white/60"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#FFC107] mb-2">Last Grade/Class</label>
                <input
                  type="text"
                  name="grade"
                  value={formData.grade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-white/60"
                  required
                />
              </div>
              <div>
                <label className="block text-[#FFC107] mb-2">Percentage/CGPA</label>
                <input
                  type="text"
                  name="percentage"
                  value={formData.percentage}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder:text-white/60"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-[#FFC107] mb-2">Program Applied For</label>
              <select
                name="program"
                value={formData.program}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white"
                required
              >
                <option value="">Select Program</option>
                <option value="science">Science</option>
                <option value="commerce">Commerce</option>
                <option value="arts">Arts</option>
              </select>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div>
              <label className="block text-[#FFC107] mb-2">Photo</label>
              <input
                type="file"
                name="photo"
                onChange={handleFileChange}
                accept="image/*"
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-[#FFC107] mb-2">Academic Records</label>
              <input
                type="file"
                name="academicRecords"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white"
                required
              />
            </div>

            <div>
              <label className="block text-[#FFC107] mb-2">ID Proof</label>
              <input
                type="file"
                name="idProof"
                onChange={handleFileChange}
                accept=".pdf,.jpg,.jpeg,.png"
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white"
                required
              />
            </div>
          </motion.div>
        )}

        <div className="flex justify-between pt-6">
          {step > 1 && (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={() => setStep(step - 1)}
              className="px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
            >
              Previous
            </motion.button>
          )}
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type={step === 3 ? 'submit' : 'button'}
            onClick={() => step < 3 && setStep(step + 1)}
            className="px-6 py-3 bg-[#FFC107] text-[#034D27] rounded-lg font-bold hover:bg-[#FFC107]/90 transition-colors"
          >
            {step === 3 ? 'Submit Application' : 'Next'}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
} 