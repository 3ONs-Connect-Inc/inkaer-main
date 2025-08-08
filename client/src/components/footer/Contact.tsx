

import  Button  from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Label } from '../ui/label';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>
      
      <div className="relative z-10">
        
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="section-title mb-6">
                Get in Touch
              </h1>
              <p className="section-subtitle max-w-3xl mx-auto">
                Have questions about Inkaer? We'd love to hear from you.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/70 rounded-2xl p-2 sm:p-8">
                <h2 className="section-subtitle2 mb-6">Send us a message</h2>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label className="Label block text-left mb-2">
                        First Name
                      </Label>
                      <Input placeholder="Your first name" />
                    </div>
                    <div>
                      <Label className="Label block text-left mb-2">
                        Last Name
                      </Label>
                      <Input placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <Label className="Label block text-left mb-2">
                      Email
                    </Label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <Label className="Label block text-left mb-2">
                      Subject
                    </Label>
                    <Input placeholder="How can we help?" />
                  </div>
                  
                  <div>
                    <Label className="Label block text-left mb-2">
                      Message
                    </Label>
                    <Textarea 
                      placeholder="Tell us more about your inquiry..."
                      rows={5}
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-inkaer-blue hover:bg-inkaer-dark-blue text-white btn-responsive"
                  >
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white/70 rounded-2xl p-2 sm:p-8">
                  <h2 className="section-subtitle2 mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-4  h-4  xs:w-6  xs:h-6 text-inkaer-blue mt-1" />
                      <div>
                        <h3 className="font-sora font-semibold text-gray-900 sm:text-sm text-xs flex self-start">Email</h3>
                        <p className="section-p">hello@inkaer.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Phone className="w-4  h-4  xs:w-6  xs:h-6 text-inkaer-blue mt-1" />
                      <div>
                        <h3 className=" font-sora font-semibold text-gray-900 sm:text-sm text-xs flex self-start">Phone</h3>
                        <p className="section-p">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <MapPin className="w-4  h-4  xs:w-6  xs:h-6 text-inkaer-blue mt-1" />
                      <div>
                        <h3 className="font-sora font-semibold text-gray-900 sm:text-sm text-xs flex self-start">Address</h3>
                        <p className="section-p">
                          123 Innovation Drive<br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 rounded-2xl p-2 sm:p-8">
                  <h3 className="section-subtitle2 mb-4">Business Hours</h3>
                  <div className="space-y-2 section-p">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM PST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

 
      </div>
    </div>
  );
};

export default Contact;
