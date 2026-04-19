import { motion } from "framer-motion";

const skills = [
  {
    title: "Machine Learning",
    items: [
      "Scikit-learn",
      "KNN",
      "Regression",
      "Boosting",
      "Stacking",
      "Random Forest",
      "Model Evaluation",
      "Feature Engineering",
      "Data Preprocessing",
    ],
    color: "blue",
  },
  {
    title: "Data Analysis",
    items: [
      "SQL",
      "Exploratory Data Analysis (EDA)",
      "Data Visualization",
      "Business Metrics",
      "Sales Funnel Analysis",
      "Revenue Analysis",
    ],
    color: "purple",
  },
  {
    title: "Programming",
    items: [
      "Python",
      "NumPy",
      "Pandas",
      "API Integration",
      "Basic JavaScript",
    ],
    color: "green",
  },
  {
    title: "Tools & Platforms",
    items: [
      "Google Sheets",
      "MS Excel",
      "Looker Studio",
      "Power BI",
      "Git & GitHub",
      "VS Code",
      "Google Colab",
      "Gen AI",
    ],
    color: "pink",
  },
  {
    title: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "Query Optimization",
      "Joins & Aggregations",
    ],
    color: "yellow",
  },
  {
    title: "Core Strengths",
    items: [
      "Model Evaluation",
      "Data Cleaning",
      "Sql Joins & Aggregations",
      "Analytical Thinking",
      "Feature Engineering",
      "Business Understanding",
    ],
    color: "red",
  },
];

const getBorder = (color) => {
  switch (color) {
    case "blue":
      return "hover:border-blue-500/40 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)]";
    case "purple":
      return "hover:border-purple-500/40 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]";
    case "green":
      return "hover:border-green-500/40 hover:shadow-[0_0_40px_rgba(34,197,94,0.25)]";
    case "pink":
      return "hover:border-pink-500/40 hover:shadow-[0_0_40px_rgba(236,72,153,0.25)]";
    case "yellow":
      return "hover:border-yellow-400/40 hover:shadow-[0_0_40px_rgba(234,179,8,0.25)]";
    case "red":
      return "hover:border-red-500/40 hover:shadow-[0_0_40px_rgba(239,68,68,0.25)]";
    default:
      return "";
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6 bg-[#050505] text-white">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold">Skills</h2>
        <p className="text-gray-400 mt-4">
          A mix of machine learning, business analysis, and tools I use to build solutions
        </p>
      </motion.div>

      {/* Grid */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 },
            }}
            className={`p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03] ${getBorder(skill.color)}`}
          >
            {/* Title */}
            <h3 className="text-lg font-semibold mb-4">
              {skill.title}
            </h3>

            {/* Items */}
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10 hover:bg-white/20 transition"
                >
                  {item}
                </span>
              ))}
            </div>

          </motion.div>
        ))}
      </motion.div>

    </section>
  );
};

export default Skills;