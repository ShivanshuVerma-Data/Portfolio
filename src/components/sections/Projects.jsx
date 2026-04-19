import { motion } from "framer-motion";

const projects = [
  {
    title: "Customer Churn Prediction",
    description:
      "Built a machine learning model using Random Forest to predict customer churn.",
    impact:
      "Achieved high accuracy and identified key churn drivers.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    color: "blue",
    github: "https://github.com/ShivanshuVerma-Data/customer-churn-prediction",
    live: "https://customer-churn-prediction-rnnmwgmy26qzsyzsgmtziu.streamlit.app/",
  },
  {
    title: "Placement Predictor",
    description:
      "KNN classification with performance tuning.",
    impact:
      "Improved accuracy through optimization.",
    tech: ["Python", "NumPy", "Scikit-learn", "Pandas"],
    color: "pink",
    github: "https://github.com/ShivanshuVerma-Data/Placement-AI",
    live: "https://placement-ai-jewd4yckezrnbxfhbfn3ep.streamlit.app/",
  },
  {
    title: "SoundSense AI",
    description:
      "Music recommendation system using similarity and APIs.",
    impact:
      "Enabled personalized recommendations.",
    tech: ["Python", "APIs", "Scikit-learn", "Pandas"],
    color: "green",
    github: "https://github.com/ShivanshuVerma-Data/SoundSense-AI",
    live: "https://soundsense-ai-4kbks7dxx5kzfgaaegp7gt.streamlit.app/",
  },
  {
    title: "Chinook Analysis",
    description: "SQL-based sales analysis.",
    impact: "Improved pricing strategies.",
    tech: ["SQL"],
    color: "purple",
    github: "https://github.com/ShivanshuVerma-Data/Chinook-Music-Store-Data-Analysis",
  },
  {
    title: "Zomato Analysis",
    description: "Market and location analysis.",
    impact: "Identified expansion opportunities.",
    tech: ["EDA"],
    color: "red",
    github: "https://github.com/ShivanshuVerma-Data/Zomato-Data-Analysis",
  },
  {
    title: "Walmart Analysis",
    description: "Customer & sales insights.",
    impact: "Improved inventory planning.",
    tech: ["Dashboard"],
    color: "yellow",
    github: "https://github.com/ShivanshuVerma-Data/Walmart-USA-Data-Analysis",
  },
];

const getGlow = (color) => {
  switch (color) {
    case "blue":
      return "hover:shadow-[0_0_50px_rgba(59,130,246,0.35)] hover:border-blue-500/40";
    case "purple":
      return "hover:shadow-[0_0_50px_rgba(168,85,247,0.35)] hover:border-purple-500/40";
    case "pink":
      return "hover:shadow-[0_0_50px_rgba(236,72,153,0.35)] hover:border-pink-500/40";
    case "green":
      return "hover:shadow-[0_0_50px_rgba(34,197,94,0.35)] hover:border-green-500/40";
    case "red":
      return "hover:shadow-[0_0_50px_rgba(239,68,68,0.35)] hover:border-red-500/40";
    case "yellow":
      return "hover:shadow-[0_0_50px_rgba(234,179,8,0.35)] hover:border-yellow-400/40";
    default:
      return "";
  }
};

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6 bg-black text-white">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold">Projects</h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            className={`p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] ${getGlow(project.color)}`}
          >
            <h3 className="text-xl font-semibold mb-3">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm mb-3">
              {project.description}
            </p>

            <p className="text-blue-400 text-sm mb-4">
              {project.impact}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 text-sm">
              <a href={project.github} target="_blank" className="text-blue-400 hover:underline">
                GitHub →
              </a>

              {project.live && (
                <a href={project.live} target="_blank" className="text-green-400 hover:underline">
                  Try it →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Projects;