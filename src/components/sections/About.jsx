import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-28 px-6 bg-black text-white">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-12"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition"
      >
        <p className="text-gray-300">
        I’m a Business Analyst with hands-on experience working with real-world data to analyze performance, understand customer behavior, and support data-driven decision-making. I have built dashboards, worked with SQL and analytics tools, and delivered insights across business functions.
        <br /><br />
        Currently, I’m expanding into Data Science by building machine learning models, exploring predictive analysis, and applying data-driven approaches to solve practical problems. I’m particularly interested in turning raw data into meaningful insights and developing solutions that create real business impact.
        </p>
      </motion.div>

    </section>
  );
};

export default About;