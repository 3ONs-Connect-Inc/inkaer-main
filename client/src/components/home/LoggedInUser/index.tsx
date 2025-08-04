import { Feature108 } from "@/components/ui/shadcnblocks-feature108";
import ProjectSection from "./ProjectSection";
import {
  featuredProjects,
  myProjects,
  newProjects,
  portfolioProjects,
  starredProjects,
} from "@/constants";
import FlickeringGridWrapper from "@/components/auth/FlickeringGridWrapper";
import BackgroundDecor from "@/components/auth/BackgroundDecor";
import { motion, type Variants } from "framer-motion";


const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const LoggedInUser = () => {
  return (
    <div className="mb-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      <FlickeringGridWrapper />
      <BackgroundDecor />

      <div className="relative z-10">
        {/* Welcome Message */}
        <motion.section
          className="py-12"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="text-center space-y-4"
              variants={fadeInUp}
            >
              <h1 className="section-title">
                Welcome back! 👋
              </h1>
              <p className="section-subtitle max-w-3xl mx-auto">
                Continue your engineering journey and showcase your skills with
                new challenges.
              </p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Feature Section */}
        <motion.div
          className="-mt-[15px]"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <Feature108 />
        </motion.div>

        {/* Project Sections */}
        <motion.div
          className="space-y-2"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp}>
            <ProjectSection
              title="Featured Portfolio Projects"
              projects={portfolioProjects}
            />
          </motion.div>
             <motion.div variants={fadeInUp}>
             <ProjectSection 
            title="Featured Challenges" 
            projects={featuredProjects}
          />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ProjectSection title="New Projects" 
            projects={newProjects} 
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ProjectSection 
            title="My Projects"
             projects={myProjects} 
             />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ProjectSection 
            title="Starred Projects"
             projects={starredProjects}
              />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoggedInUser;
