import { openings } from "@/constants"
import { Clock, DollarSign, MapPin, Users } from "lucide-react"
import { motion, type Variants } from "framer-motion"
import Seo from "@/components/seo/Seo"

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
}

const Careers = () => {
  return (
  <div className="min-h-screen bg-white">
     <Seo
        title="Careers – Inkaer"
       description="Explore career opportunities at Inkaer. Join a passionate team shaping the future of hiring. See open roles and apply today."
        name="Inkaer"
        type="website"
      />
      <main className="py-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
          <div className="mx-auto max-w-7xl padding">
            <motion.div
              className="text-center"
              initial="hidden"
              animate="visible"
              variants={{}}
            >
              <motion.h1
                className="text-bold-5xl"
                variants={fadeInUp}
                custom={0}
              >
                Join Our Team
              </motion.h1>
              <motion.p
                className="mt-6 desc leading-8 max-w-3xl mx-auto"
                variants={fadeInUp}
                custom={1}
              >
                Help us revolutionize how companies hire engineering talent. 
                We're looking for passionate individuals who want to make a real impact.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Why Work Here Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl padding">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{}}
            >
              <motion.h2 className="text-bold-3xl" variants={fadeInUp}>Why Work at Inkaer?</motion.h2>
              <motion.p className="mt-4 desc" variants={fadeInUp} custom={1}>
                We offer more than just a job - we offer a chance to shape the future of hiring
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{
                icon: <Users className="w-8 h-8 text-blue-600" />, bg: "bg-blue-100", title: "Great Team", desc: "Work with brilliant, passionate people who care about making a difference."
              }, {
                icon: <Clock className="w-8 h-8 text-green-600" />, bg: "bg-green-100", title: "Work-Life Balance", desc: "Flexible hours, remote work options, and unlimited PTO."
              }, {
                icon: <DollarSign className="w-8 h-8 text-purple-600" />, bg: "bg-purple-100", title: "Competitive Pay", desc: "Competitive salaries, equity, and comprehensive benefits."
              }, {
                icon: <MapPin className="w-8 h-8 text-orange-600" />, bg: "bg-orange-100", title: "Global Impact", desc: "Make a difference in how companies worldwide find great talent."
              }].map((item, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={i}
                >
                  <div className={`mx-auto sm:w-16 sm:h-16 w-10 h-10 ${item.bg} rounded-lg flex items-center justify-center mb-4`}>{item.icon}</div>
                  <h3 className="desc-bold mb-2">{item.title}</h3>
                  <p className="text-small">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl padding">
            <motion.div
              className="text-center mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{}}
            >
              <motion.h2 className="text-bold-3xl" variants={fadeInUp}>Open Positions</motion.h2>
              <motion.p className="mt-4 desc" variants={fadeInUp} custom={1}>
                Find your next career opportunity with us
              </motion.p>
            </motion.div> 

            <div className="space-y-6">
              {openings.map((job, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  custom={index * 0.3}
                  whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(0,0,0,0.08)" }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <h3 className="desc-bold mb-2">{job.title}</h3>
                      <p className="text-small mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <DollarSign className="w-4 h-4 mr-1" />
                          {job.salary}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <button className="btn-responsive bg-blue-600 text-white rounded-lg hover:bg-blue-700 ">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Careers