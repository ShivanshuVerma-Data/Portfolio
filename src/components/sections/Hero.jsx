import { motion } from "framer-motion";

const Hero = () => {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen pt-24 bg-gradient-to-br from-black via-[#0a0f1c] to-[#1a0b2e] text-white flex flex-col items-center justify-center text-center px-4 relative overflow-hidden"
    >
      {/* glow */}
      <div className="absolute top-32 w-40 h-40 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <motion.h1
          variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
        >
          Shivanshu Verma
        </motion.h1>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
          className="text-blue-400 mt-4 text-lg"
        >
          Business Analyst → Data Science
        </motion.p>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
          className="text-gray-400 mt-4 max-w-xl"
        >
Turning data into actionable insights and building machine learning solutions to solve real-world problems.        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
          className="mt-8 flex gap-4 flex-wrap justify-center"
        >
          <button
            onClick={scrollToProjects}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition"
          >
            View Projects
          </button>

          <a
            href="https://github.com/"
            target="_blank"
            className="px-6 py-2 rounded-full border border-gray-600 hover:bg-gray-800 hover:scale-105 transition"
          >
            GitHub
          </a>

          <a
            href="#"
            className="px-6 py-2 rounded-full border border-gray-600 hover:bg-gray-800 hover:scale-105 transition"
          >
            Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;