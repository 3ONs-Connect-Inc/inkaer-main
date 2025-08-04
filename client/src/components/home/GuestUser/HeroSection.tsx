import { RainbowButton } from "@/components/ui/rainbow-button";
import { Play } from "lucide-react";
import { Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { heroImage } from "@/assets";
import BackgroundDecor from "@/components/auth/BackgroundDecor";
import FlickeringGridWrapper from "@/components/auth/FlickeringGridWrapper";
import { type Variants, motion } from "framer-motion";

const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};


const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
      <FlickeringGridWrapper />
      <BackgroundDecor />

      <div className="relative max-w-7xl mx-auto px-4 xs:px-6 lg:px-8 pt-12 pb-16 xs:pt-20 xs:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            
          >
            <motion.div
              className="space-y-6 text-center lg:text-left"
              variants={fadeInUp}
              custom={1}
            >
              <h1 className="text-3xl xs:text-5xl lg:text-6xl font-sora font-medium leading-tight text-gray-900">
                Get Hired Based on{" "}
                <span className="font-playfair font-extrabold italic text-inkaer-blue">
                  Real Skills
                </span>
                , Not Resumes
              </h1>

              <p className="text-base xs:text-xl text-gray-600 font-sora leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Upload your portfolio or tackle real-world engineering challenges
                that highlight your edge, and get you hired fast.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col xs:flex-row gap-4 pt-4 w-full xs:justify-center lg:justify-start"
              variants={fadeInUp}
              custom={2}
            >
              <Link to="/sign-up" className="w-full xs:w-auto">
                <RainbowButton className="btn-responsive w-full xs:w-auto h-12 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300">
                  Get Started
                </RainbowButton>
              </Link>

              <Button
                variant="outline"
                className="btn-outline w-full xs:w-auto h-12 border-2 border-inkaer-blue text-inkaer-blue hover:bg-inkaer-blue hover:text-white rounded-full group flex items-center justify-center transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2 group-hover:animate-bounce-gentle" />
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Professional woman working on engineering challenges"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-inkaer-blue/20 to-transparent"></div>
            </div>

            {/* Floating Skill Verified Badge */}
            <motion.div
              className="absolute -top-4 right-0 xs:-top-6 xs:-right-6 bg-white rounded-xl shadow-lg p-3 xs:p-4"
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs xs:text-sm font-sora font-semibold text-gray-700">
                  Skills Verified
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;