'use client';

import { useState } from 'react';

interface LoginFormProps {
  portalType: 'student' | 'teacher' | 'parent';
  onSubmit: (data: any) => void;
}

export default function LoginForm({ portalType = 'student', onSubmit }: LoginFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Ensure portalType is valid
  const validPortalType = ['student', 'teacher', 'parent'].includes(portalType) 
    ? portalType 
    : 'student';

  const portalIcons = {
    student: '👨‍🎓',
    teacher: '👨‍🏫',
    parent: '👨‍👩‍👧‍👦'
  };

  const portalTitles = {
    student: 'Student Login',
    teacher: 'Teacher Login',
    parent: 'Parent Login'
  };

  const portalDescriptions = {
    student: 'Access your academic dashboard',
    teacher: 'Access your teaching dashboard',
    parent: 'Monitor your child\'s progress'
  };

  const portalLabel = validPortalType.charAt(0).toUpperCase() + validPortalType.slice(1);

  return (
    <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <span className="text-5xl mb-4 block">{portalIcons[validPortalType]}</span>
        <h1 className="text-3xl font-bold text-white mb-2">{portalTitles[validPortalType]}</h1>
        <p className="text-white/60">{portalDescriptions[validPortalType]}</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-white mb-2">{portalLabel} Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFC107] transition-colors"
            required
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-white mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFC107] transition-colors"
            required
            placeholder="••••••••"
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="h-4 w-4 rounded border-white/10 bg-white/5 text-[#FFC107] focus:ring-[#FFC107]"
            />
            <label htmlFor="rememberMe" className="ml-2 text-sm text-white">
              Remember me
            </label>
          </div>
          <a href={`/portals/${validPortalType}/forgot-password`} className="text-sm text-[#FFC107] hover:text-[#FFD54F] transition-colors">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full bg-[#FFC107] text-[#034D27] py-3 px-6 rounded-lg font-semibold hover:bg-[#FFD54F] transition-colors duration-300"
        >
          Sign In
        </button>
      </form>

      <div className="mt-6 text-center text-white/80">
        <p>New {validPortalType}? {' '}
          <a href={`/portals/${validPortalType}/signup`} className="text-[#FFC107] hover:text-[#FFD54F] transition-colors">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
} 