
import { motion, type Variants } from "framer-motion";
import Button from "@/components/ui/button";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
  }),
};

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Full Stack Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / New York",
      type: "Full-time",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-100/30"></div>

      <div className="relative z-10">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <motion.div
              className="text-center mb-16"
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              custom={0}
            >
              <h1 className="section-title mb-6">Join Our Team</h1>
              <p className="section-subtitle max-w-3xl mx-auto">
                Help us build the future of engineering talent evaluation and
                discovery.
              </p>
            </motion.div>

            {/* Why Work Section */}
            <motion.div
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white/70 rounded-2xl p-8"
                variants={fadeInUp}
                custom={0}
              >
                <h2 className="section-subtitle2 mb-4">Why Work at Inkaer?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Innovation-Driven",
                      text: "Work on cutting-edge technology that's reshaping how engineering talent is evaluated.",
                    },
                    {
                      title: "Remote-First",
                      text: "Flexible remote work with optional office spaces in major cities.",
                    },
                    {
                      title: "Growth Opportunities",
                      text: "Continuous learning and professional development support.",
                    },
                    {
                      title: "Impact-Focused",
                      text: "Make a real difference in how engineering careers are built and evaluated.",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeInUp}
                      custom={i + 1}
                      className="bg-transparent"
                    >
                      <h3 className="section-subtitle3 mb-2">{item.title}</h3>
                      <p className="section-p">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Open Positions */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                className="section-subtitle2 text-center mb-8"
                variants={fadeInUp}
                custom={0}
              >
                Open Positions
              </motion.h2>

              {openPositions.map((position, index) => (
                <motion.div
                  key={index}
                  className="bg-white/70 rounded-xl p-6 border border-gray-200"
                  variants={fadeInUp}
                  custom={index + 1}
                >
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center items-center mb-4 gap-4 text-center sm:text-left">
                    <div>
                      <h3 className="section-subtitle3 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-sm text-gray-600 font-sora">
                        <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                          {position.department}
                        </span>
                        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                          {position.location}
                        </span>
                        <span className="text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className="bg-inkaer-blue hover:bg-inkaer-dark-blue text-white btn-responsive"
                    >
                      Apply Now
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="text-center mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={0}
            >
              <p className="section-p mb-4">
                Don't see a role that fits? We're always looking for talented
                individuals.
              </p>
              <Button
                variant="outline"
                className="font-sora btn-responsive"
              >
                Send Us Your Resume
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
