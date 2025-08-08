import BackgroundDecor from '@/components/auth/BackgroundDecor';
import { steps } from '@/constants';
import {  Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);


const HowItWorks = () => {
 const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stepsRef.current) {
      const cards = gsap.utils.toArray('.step-card');

      gsap.from(cards, {
        opacity: 1,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: stepsRef.current,
          start: 'top 80%',
        },
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
      <BackgroundDecor />
      <div className="relative z-10">
        
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <h1 className="section-title mb-8">How It Works</h1>
              <p className="section-subtitle max-w-4xl mx-auto leading-relaxed">
                Join thousands of engineers showcasing their skills and connecting with opportunities
              </p>
            </motion.div>

            <div 
             ref={stepsRef}
            className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-8 mb-16">
              {steps.map((step, index) => (
                <div key={index} className="relative step-card">
                  {/* Connection Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-inkaer-blue/30 to-transparent z-0"></div>
                  )}
                  
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100/50 z-10">
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-1   xs:w-8 xs:h-8 w-6 h-6 bg-inkaer-blue text-white rounded-full flex items-center justify-center text-[10px] xs:text-sm font-bold font-sora">
                      {index + 1}
                    </div>
                    
                    <div className="text-center">
                      <div className="bg-inkaer-blue/10 rounded-2xl p-2 w-15 h-15  xs:p-4 xs:w-20 xs:h-20 flex items-center justify-center mx-auto mb-6">
                        {step.icon}
                      </div>
                      <h3 className="section-title2 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-inkaer uppercase tracking-wide mb-4">
                        {step.subtitle}
                      </p>
                      <p className="section-p leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

       {/* LinkedIn Badge Section */}
            <motion.div
              className="  bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-gray-100/50 text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="max-w-3xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
                  <Linkedin className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600 mr-4 mb-2" />
                  <h2 className="section-title2">Showcase Your Achievements</h2>
                </div>
                <p className="section-subtitle font-sora mb-8">
                  Add your Inkaer certifications and project achievements to your LinkedIn profile.
                  Stand out to recruiters and showcase your verified engineering skills.
                </p>
                <div className="flex flex-col xs:flex-row items-center justify-center space-x-0 xs:space-x-4">
                  <motion.div
                    className="bg-blue-50 px-6 py-3 rounded-full mb-3 xs:mb-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className="text-blue-600 text-xs xs:text-sm font-sora font-semibold">
                      ✓ Verified Skills
                    </span>
                  </motion.div>
                  <motion.div
                    className="bg-green-50 px-6 py-3 rounded-full mb-3 xs:mb-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className="text-green-600 text-xs xs:text-sm font-sora font-semibold">
                      ✓ Project Portfolio
                    </span>
                  </motion.div>
                  <motion.div
                    className="bg-purple-50 px-6 py-3 rounded-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <span className="text-purple-600 text-xs xs:text-sm font-sora font-semibold">
                      ✓ Industry Recognition
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
