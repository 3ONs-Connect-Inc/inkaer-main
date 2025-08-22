import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BtnLoader } from '@/components/ui/Spinner';
import Modal from '@/components/Modal';
import type { ShortlistFormData } from '@/utils/api/shortlist';
import { useShortlistMutation } from '@/hooks/useShortlistMutation';

const initialForm: ShortlistFormData = {
  name: "",
  company: "",
  roleTitle: "",
  tools: "",
  industry: "",
  location: "",
  urgency: "",
  email: "",
};


const RequestShortlist: React.FC = () => {
const [formData, setFormData] = useState<ShortlistFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const mutation = useShortlistMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSelect = (field: keyof ShortlistFormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData, {
      onSuccess: () => {
        setSubmitted(true);
        setFormData(initialForm);
      },
      onError: () => {
        alert("Something went wrong. Please try again.");
      },
    });
  };

 
   const handleCloseModal = () => {
    setSubmitted(false);
    setFormData({
  name: "",
    company: "",
    roleTitle: "",
    tools: "",
    industry: "",
    location: "",
    urgency: "",
    email: "",
    });
  };

  return (
    <section id="request-shortlist" className="py-20 sm:py-32 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative mx-auto max-w-7xl padding">
        <div className="mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-bold-white font-bold tracking-tight text-white sm:text-6xl xl:text-7xl mb-12">
              Request Your Shortlist
            </h2>
            <p className="mt-6 desc-white max-w-2xl mx-auto">
              Tell us what you need and get your verified engineer shortlist in 48 hours.
            </p>
          </div>
  
          {/* Form Container */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-3 sm:p-12 relative">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-3xl"></div>
            
            <div className="relative">
              <form  onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Smith"
                      value={formData.name} onChange={handleChange} required
                      className="h-12 text-sm sm:text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-gray-700">
                      Company
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Acme Manufacturing"
                      value={formData.company} onChange={handleChange} required
                      className="h-12 text-sm sm:text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="roleTitle" className="text-sm font-medium text-gray-700">
                      Role Title
                    </Label>
                    <Input
                      id="roleTitle"
                      type="text"
                      placeholder="HVAC Design Engineer"
                    value={formData.roleTitle}  onChange={handleChange} required
                      className="h-12 text-sm sm:text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tools" className="text-sm font-medium text-gray-700">
                      Must-Have Tools
                    </Label>
                    <Input
                      id="tools"
                      type="text"
                      placeholder="SolidWorks, ANSYS"
                   value={formData.tools}    onChange={handleChange} required
                      className="h-12 text-sm sm:text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="industry" className="text-sm font-medium text-gray-700">
                      Industry
                    </Label>
                       <Select onValueChange={(val) => handleSelect("industry", val)}>
                  <SelectTrigger><SelectValue placeholder="Select industry" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="hvac">HVAC / Building Services</SelectItem>
                    <SelectItem value="automotive">Automotive</SelectItem>
                    <SelectItem value="aerospace">Aerospace</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="medical">Medical Devices</SelectItem>
                    <SelectItem value="energy">Energy</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                      Location
                    </Label>
                    <Input
                      id="location"
                      type="text"
                      placeholder="Toronto (ET) — hybrid"
                      value={formData.location} onChange={handleChange} required
                      className="h-12 text-sm sm:text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="urgency" className="text-sm font-medium text-gray-700">
                      Urgency
                    </Label>
                <Select onValueChange={(val) => handleSelect("urgency", val)}>
                  <SelectTrigger><SelectValue placeholder="Select urgency" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="this-week">This week</SelectItem>
                    <SelectItem value="next-week">Next week</SelectItem>
                    <SelectItem value="this-month">This month</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Contact Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email} onChange={handleChange} required 
                      className="h-12 text-sm sm:text-base border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="pt-4 flex flex-col items-center">
                  <Button 
                    type="submit"
                    size="lg" 
                    className="bg-blue-600 btn-responsive hover:bg-blue-700 text-white  h-auto rounded-xl shadow-lg hover:shadow-xl "
                  >
                     {mutation.isPending ? <BtnLoader/> : "Get My Shortlist"}
                  </Button>
                  <p className="text-small mt-3 text-center">
                    We'll reply within 24 hours.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
          <Modal
        isOpen={submitted}
        title="Thank you!"
        message="We’ve received your shortlist request. Check your email for confirmation."
           onClose={handleCloseModal}
      />
    </section>
  );
};

export default RequestShortlist;