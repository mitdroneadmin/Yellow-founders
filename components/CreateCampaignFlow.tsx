'use client';

import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

export default function CreateCampaignFlow() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    founderName: '',
    founderEmail: '',
    startupName: '',
    fundingGoal: '',
    pitch: '',
  });

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
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-3xl font-bold text-secondary mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-small-label mb-2">Your Name</label>
                <input
                  type="text"
                  value={formData.founderName}
                  onChange={(e) => updateFormData('founderName', e.target.value)}
                  className="w-full rounded-md bg-background border-input px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-body-text placeholder-grey-deep"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-small-label mb-2">Your Email</label>
                <input
                  type="email"
                  value={formData.founderEmail}
                  onChange={(e) => updateFormData('founderEmail', e.target.value)}
                  className="w-full rounded-md bg-background border-input px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-body-text placeholder-grey-deep"
                  placeholder="founder@startup.com"
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-3xl font-bold text-secondary mb-6">Startup Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-small-label mb-2">Startup Name</label>
                <input
                  type="text"
                  value={formData.startupName}
                  onChange={(e) => updateFormData('startupName', e.target.value)}
                  className="w-full rounded-md bg-background border-input px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-body-text placeholder-grey-deep"
                  placeholder="Your amazing startup"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-small-label mb-2">Funding Goal (USD)</label>
                <input
                  type="number"
                  value={formData.fundingGoal}
                  onChange={(e) => updateFormData('fundingGoal', e.target.value)}
                  className="w-full rounded-md bg-background border-input px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-body-text placeholder-grey-deep"
                  placeholder="50000"
                  min="0"
                  step="1000"
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-3xl font-bold text-secondary mb-6">Your Pitch</h2>
            <div>
              <label className="block text-sm font-medium text-small-label mb-2">Short Pitch</label>
              <textarea
                value={formData.pitch}
                onChange={(e) => updateFormData('pitch', e.target.value)}
                rows={6}
                className="w-full rounded-md bg-background border-input px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-body-text placeholder-grey-deep"
                placeholder="Describe your startup, the problem you're solving, and why investors should believe in your vision..."
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6 animate-fade-up">
            <h2 className="text-3xl font-bold text-secondary mb-6">Campaign Preview & Submit</h2>
            <div className="bg-grey-light rounded-lg p-6 mb-8 border border-grey-medium">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-grey-medium rounded-xl flex items-center justify-center">
                  <span className="text-secondary font-bold text-lg">
                    {formData.startupName ? formData.startupName[0] : 'S'}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary">{formData.startupName || 'Your Startup'}</h3>
                  <span className="text-accent-foreground bg-accent px-2 py-1 rounded-full text-sm font-semibold">Tech Startup</span>
                </div>
              </div>
              <p className="text-body-text mb-4">{formData.pitch || 'Your pitch will appear here...'}</p>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-small-label">Goal: ${formData.fundingGoal || '0'}</span>
                  <span className="text-secondary font-medium">0% funded</span>
                </div>
                <div className="w-full bg-grey-medium rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-0"></div>
                </div>
              </div>
            </div>
            <form
              name="yfounders-startup-submission"
              method="POST"
              action="/thank-you"
              data-netlify="true"
              netlify-honeypot="tell-me-more"
            >
              <input type="hidden" name="form-name" value="yfounders-startup-submission" />
              <input type="hidden" name="founderName" value={formData.founderName} />
              <input type="hidden" name="founderEmail" value={formData.founderEmail} />
              <input type="hidden" name="startupName" value={formData.startupName} />
              <input type="hidden" name="fundingGoal" value={formData.fundingGoal} />
              <input type="hidden" name="pitch" value={formData.pitch} />
              <button
                type="submit"
                className="w-full rounded-lg bg-primary px-4 py-3 font-semibold text-primary-foreground hover:bg-primary-hover transition-transform duration-300 transform hover:-translate-y-1"
              >
                Submit Your Startup
              </button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-card border border-card-border rounded-lg shadow-soft p-8">
      <div className="mb-8">
        <div className="flex justify-between text-sm text-small-label mb-2">
          <span>Step {currentStep} of {totalSteps}</span>
          <span>{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-grey-medium rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      {renderStepContent()}

      <div className="flex justify-between mt-8">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center space-x-2 bg-background border border-primary text-primary px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Previous</span>
        </button>

        {currentStep < totalSteps && (
          <button
            onClick={nextStep}
            className="flex items-center space-x-2 bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-transform duration-300 transform hover:-translate-y-1"
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}
