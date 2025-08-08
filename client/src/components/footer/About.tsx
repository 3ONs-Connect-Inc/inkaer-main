
import { motion, type Variants } from "framer-motion";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};


const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>

      <div className="relative z-10">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h1 className="section-title mb-6">About Inkaer</h1>
              <p className="section-subtitle max-w-3xl mx-auto">
                Revolutionizing how engineering talent is discovered and
                evaluated through skill-based assessments.
              </p>
            </motion.div>

            {/* Cards */}
            <motion.div
              className="space-y-12"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white/70 rounded-2xl p-8 "
                variants={fadeInUp}
              >
                <h2 className="section-title mb-4">Our Mission</h2>
                <p className="section-subtitle leading-relaxed">
                  At Inkaer, we believe that engineering talent should be
                  evaluated based on real skills and practical problem-solving
                  abilities, not just resumes and credentials. We've created a
                  platform where engineers can showcase their expertise through
                  hands-on projects and challenges, while employers can
                  discover talent based on demonstrated capabilities.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/70 rounded-2xl p-8 "
                variants={fadeInUp}
              >
                <h2 className="section-title mb-4">What We Do</h2>
                <p className="section-subtitle leading-relaxed mb-4">
                  Inkaer connects skilled engineers with forward-thinking
                  employers through:
                </p>
                <ul className="space-y-2 section-subtitle">
                  {[
                    "Peer-reviewed engineering project submissions",
                    "Skills-based ranking and certification system",
                    "Real-world engineering challenges from top companies",
                    "Direct talent pipeline to employers seeking proven skills",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-inkaer-blue">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                className="bg-white/70 rounded-2xl p-8 "
                variants={fadeInUp}
              >
                <h2 className="section-title mb-4">Our Vision</h2>
                <p className="section-subtitle leading-relaxed">
                  We envision a world where engineering careers are built on
                  demonstrated expertise and continuous learning, where the
                  best opportunities go to those who can solve real problems,
                  regardless of their background or where they studied.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
