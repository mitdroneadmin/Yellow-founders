'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function CreateCampaignFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    founderName: '',
    founderEmail: '',
    startupName: '',
    fundingGoal: '',
    pitch: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const totalSteps = 4;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    const formDataObj = new FormData(e.currentTarget);
    const data = {
      founder_name: formDataObj.get('founderName') as string,
      founder_email: formDataObj.get('founderEmail') as string,
      startup_name: formDataObj.get('startupName') as string,
      funding_goal: parseInt(formDataObj.get('fundingGoal') as string) || 0,
      pitch: formDataObj.get('pitch') as string,
    };

    try {
      const { error } = await supabase
        .from('startup_submissions')
        .insert([data]);

      if (error) throw error;

      setMessage('Successfully submitted your startup!');
      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 2000);
    } catch (error: any) {
      console.error('Error submitting startup:', error);
      setMessage(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-gray-500 mb-2">
          <span>Step {currentStep} of {totalSteps}</span>
          <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step Content */}
      {currentStep === 1 && (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Personal Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                value={formData.founderName}
                onChange={(e) => updateFormData('founderName', e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                value={formData.founderEmail}
                onChange={(e) => updateFormData('founderEmail', e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="founder@startup.com"
              />
            </div>
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Startup Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Startup Name</label>
              <input
                type="text"
                value={formData.startupName}
                onChange={(e) => updateFormData('startupName', e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your amazing startup"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Funding Goal (USD)</label>
              <input
                type="number"
                value={formData.fundingGoal}
                onChange={(e) => updateFormData('fundingGoal', e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="50000"
                min="0"
                step="1000"
              />
            </div>
          </div>
        </div>
      )}

      {currentStep === 3 && (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Pitch</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Short Pitch</label>
            <textarea
              value={formData.pitch}
              onChange={(e) => updateFormData('pitch', e.target.value)}
              rows={6}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Describe your startup, the problem you're solving, and why investors should believe in your vision..."
            />
          </div>
        </div>
      )}

      {currentStep === 4 && (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Campaign Preview</h2>
          
          {/* Preview Card */}
          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-black font-bold text-lg">
                  {formData.startupName ? formData.startupName[0] : 'S'}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{formData.startupName || 'Your Startup'}</h3>
                <span className="text-sm text-primary font-medium">Tech Startup</span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{formData.pitch || 'Your pitch will appear here...'}</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Goal: ${formData.fundingGoal || '0'}</span>
                <span className="text-gray-900 font-medium">0% funded</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full w-0"></div>
              </div>
            </div>
          </div>

          {/* Submission Form */}
          {message && (
            <div className={`p-3 rounded-lg mb-4 ${message.includes('Successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} name="yfounders-startup-submission" method="POST" action="/thank-you" data-netlify="true" netlify-honeypot="tell-me-more" className="space-y-4">
            <input type="hidden" name="form-name" value="yfounders-startup-submission" />
            <input type="text" name="tell-me-more" className="hidden" tabIndex={-1} autoComplete="off" />
            <input type="hidden" name="previewCard" value={`${formData.startupName} - ${formData.pitch} - Goal: $${formData.fundingGoal}`} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input 
                  name="founderName" 
                  defaultValue={formData.founderName}
                  required 
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Email</label>
                <input 
                  name="founderEmail" 
                  type="email" 
                  defaultValue={formData.founderEmail}
                  required 
                  className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Startup Name</label>
              <input 
                name="startupName" 
                defaultValue={formData.startupName}
                required 
                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Funding Goal (USD)</label>
              <input 
                name="fundingGoal" 
                type="number" 
                min="0" 
                step="1000"
                defaultValue={formData.fundingGoal}
                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Short Pitch</label>
              <textarea 
                name="pitch" 
                rows={4}
                defaultValue={formData.pitch}
                className="w-full rounded-xl border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
              />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full rounded-2xl bg-primary px-4 py-3 font-semibold text-black hover:bg-primary-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Your Startup'}
            </button>
          </form>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-colors ${
            currentStep === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>

        {currentStep < totalSteps && (
          <button
            onClick={nextStep}
            className="flex items-center space-x-2 bg-primary hover:bg-primary-500 text-black px-6 py-3 rounded-xl font-medium transition-colors"
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}