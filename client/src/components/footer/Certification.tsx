import Button from "@/components/ui/button";
import { Award, CheckCircle, Users, Linkedin } from "lucide-react";
import BackgroundDecor from "../auth/BackgroundDecor";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const stepsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (stepsRef.current) {
      const cards = gsap.utils.toArray(".step-card");

      gsap.from(cards, {
        opacity: 1,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: stepsRef.current,
          start: "top 80%",
        },
      });
    }
  }, []);

  const certificationProcess = [
    {
      step: 1,
      title: "Portfolio Review",
      description:
        "Submit at least 3 high-quality engineering projects for peer review",
      icon: <Award className="w-4 h-4 xs:w-6 xs:h-6 " />,
    },
    {
      step: 2,
      title: "Peer Assessment",
      description:
        "Receive positive feedback from verified engineers in your domain",
      icon: <Users className="w-4 h-4 xs:w-6 xs:h-6 " />,
    },
    {
      step: 3,
      title: "Skill Verification",
      description: "Complete proctored, domain-specific technical assessments",
      icon: <CheckCircle className="w-4 h-4 xs:w-6 xs:h-6 " />,
    },
    {
      step: 4,
      title: "Certification Badge",
      description:
        "Receive your verified engineer badge and enhanced profile visibility",
      icon: <Award className="w-4 h-4 xs:w-6 xs:h-6 " />,
    },
  ];

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
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h1 className="section-title mb-8">Engineer Certification</h1>
              <p className="section-subtitle max-w-4xl mx-auto leading-relaxed">
                Get verified as a certified engineer and unlock premium
                opportunities with top employers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-16 items-center mb-20"
            >
              <div>
                <h2 className="section-title mb-8">Why Get Certified?</h2>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start gap-2 sm:gap-4"
                  >
                    <CheckCircle className="w-4 h-4 xs:w-6 xs:h-6 flex self-start text-green-500  flex-shrink-0" />
                    <p className="text-xs sm:text-lg break-words text-gray-700 font-sora">
                      Enhanced visibility to premium employers
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start  gap-2 sm:gap-4"
                  >
                    <CheckCircle className="w-4 h-4 xs:w-6 xs:h-6  flex self-start text-green-500 flex-shrink-0" />
                    <p className="text-xs sm:text-lg break-words text-gray-700 font-sora">
                      Priority access to exclusive job opportunities
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start  gap-2 sm:gap-4"
                  >
                    <CheckCircle className="w-4 h-4 xs:w-6 xs:h-6  flex self-start text-green-500 flex-shrink-0" />
                    <p className="text-xs sm:text-lg break-words text-gray-700 font-sora">
                      Verified badge on your profile and projects
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-start  gap-2 sm:gap-4"
                  >
                    <CheckCircle className="w-4 h-4 xs:w-6 xs:h-6  flex self-start text-green-500  flex-shrink-0" />
                    <p className="text-xs sm:text-lg break-words text-gray-700 font-sora">
                      Higher ranking in search results
                    </p>
                  </motion.div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-3 sm:p-10 shadow-lg border border-gray-100/50">
                <div className="text-center mb-8">
                  <Award className="w-15 h-15 sm:w-20 sm:h-20 text-inkaer-blue mx-auto mb-6" />
                  <h3 className="section-subtitle2 mb-4">
                    Certified Engineer Badge
                  </h3>
                </div>
                <p className="section-subtitle text-center mb-8 ">
                  Join the elite group of verified engineers trusted by top
                  companies
                </p>
                <Button className=" whitespace-normal break-words  btn-responsive w-full bg-inkaer-blue hover:bg-inkaer-dark-blue text-white rounded-2xl ">
                  Start Certification Process
                </Button>
              </div>
            </motion.div>

            {/* LinkedIn Integration Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-3 sm:p-12 shadow-lg border border-gray-100/50 mb-16"
            >
              <div className="text-center">
                <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
                  <Linkedin className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600 mr-4 mb-2" />
                  <h2 className="section-title">Add to LinkedIn Profile</h2>
                </div>
                <p className="section-subtitle max-w-3xl mx-auto mb-8">
                  Once certified, easily add your Inkaer engineer certification
                  to your LinkedIn profile. Showcase your verified skills to
                  recruiters and stand out in the competitive engineering job
                  market.
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-blue-50 p-6 rounded-2xl"
                  >
                    <Award className="sm:w-8 sm:h-8 w-6 h-6 text-blue-600 mx-auto mb-3" />
                    <h3 className="section-subtitle3 mb-2">Verified Badge</h3>
                    <p className="text-xs xs:text-sm text-gray-600 font-sora">
                      Official certification badge on LinkedIn
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-green-50 p-6 rounded-2xl"
                  >
                    <CheckCircle className="sm:w-8 sm:h-8 w-6 h-6 text-green-600 mx-auto mb-3" />
                    <h3 className="section-subtitle3 mb-2">
                      Skill Verification
                    </h3>
                    <p className="text-xs xs:text-sm text-gray-600 font-sora">
                      Validated engineering competencies
                    </p>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-purple-50 p-6 rounded-2xl"
                  >
                    <Users className="sm:w-8 sm:h-8  w-6 h-6 text-purple-600 mx-auto mb-3" />
                    <h3 className="section-subtitle3 mb-2">
                      Professional Network
                    </h3>
                    <p className="text-xs xs:text-sm text-gray-600 font-sora">
                      Connect with certified engineers
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-3 sm:p-10 shadow-lg border border-gray-100/50">
              <h2 className="section-title2 mb-6 text-center">
                Certification Process
              </h2>
              <div
                ref={stepsRef}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-[50px]"
              >
                {certificationProcess.map((item, index) => (
                  <div key={index} className="text-center step-card relative">
                    {/* Connection Line */}
                    {index < certificationProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-inkaer-blue/30 to-transparent"></div>
                    )}

                    <div className="bg-inkaer-blue/10 rounded-full w-10 h-10 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-6 relative">
                      <div className="text-inkaer-blue">{item.icon}</div>
                      <div className="absolute -top-2 -right-2 bg-inkaer-blue text-white rounded-full w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-[10px] sm:text-sm font-semibold">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="section-subtitle3 mb-3 text-lg">
                      {item.title}
                    </h3>
                    <p className="section-p ">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Certifications;
