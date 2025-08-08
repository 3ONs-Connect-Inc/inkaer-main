import { Crown, Star, Trophy, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Rank = () => {
  const rankLevels = [
    {
      name: "Novice",
      points: "Newly Joined",
      color: "text-gray-600",
      bgColor: "bg-gray-100",
      description: "Welcome! Complete any activity to advance to Beginner.",
    },
    {
      name: "Beginner",
      points: "1-500",
      color: "text-brown-600",
      bgColor: "bg-brown-100",
    },
    {
      name: "Intermediate",
      points: "501-1500",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      name: "Advanced",
      points: "1501-3000",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      name: "Expert",
      points: "3001-5000",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      name: "Elite",
      points: "5000+",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/30">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h1 className="section-title mb-6">Ranking System</h1>
            <p className="section-subtitle max-w-3xl mx-auto">
              Advance through our ranking system by submitting quality projects
              and receiving positive peer reviews
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {rankLevels.map((rank, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center">
                  <div
                    className={`inline-flex items-center justify-center w-10 h-10 sm:w-16 sm:h-16 rounded-full ${rank.bgColor} mb-4`}
                  >
                    <Crown className={`w-6 h-6 sm:w-8 sm:h-8 ${rank.color}`} />
                  </div>
                  <h3 className="section-subtitle2 mb-2">{rank.name}</h3>
                  <p className="section-comment mb-4">
                    {rank.points} {rank.name !== "Novice" ? "points" : ""}
                  </p>
                  {rank.description && (
                    <p className="section-p italic">{rank.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="section-title mb-6 text-center">
              How to Earn Points
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 mx-auto mb-4" />
                <h3 className="section-subtitle2 mb-2">Submit Projects</h3>
                <p className="section-subtitle">
                  Earn 50-200 points per project based on quality
                </p>
              </div>
              <div className="text-center">
                <Trophy className="w-6 h-6 sm:w-8 sm:h-8 text-green-500 mx-auto mb-4" />
                <h3 className="section-subtitle2 mb-2">Peer Reviews</h3>
                <p className="section-subtitle">
                  Get 10-50 points for each positive review
                </p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mx-auto mb-4" />
                <h3 className="section-subtitle2 mb-2">Community Engagement</h3>
                <p className="section-subtitle">
                  Earn bonus points for helping other engineers
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Rank;
