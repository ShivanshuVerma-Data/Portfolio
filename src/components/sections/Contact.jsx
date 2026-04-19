import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 bg-[#050505] text-white">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold">Let's Connect</h2>
        <p className="text-gray-400 mt-4">
          Feel free to reach out anytime
        </p>
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-center hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition"
      >

        {/* Icons Row */}
        <div className="flex justify-center gap-6 mb-6">

          {/* GitHub */}
          <a
            href="https://github.com/ShivanshuVerma-Data"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-110 transition"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
              alt="GitHub"
              className="w-6 h-6"
            />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/shivanshuverma-businessanalyst"
            target="_blank"
            rel="noreferrer"
            className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:scale-110 transition"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>

          {/* Email */}
          <a
            href="mailto:shivanshuverma210901@gmail.com"
            className="w-14 h-14 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 hover:border-green-500/40 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-110 transition"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/new-post.png"
              alt="Email"
              className="w-6 h-6"
            />
          </a>

        </div>

        {/* Email Text */}
        <p className="text-gray-300 mb-1">
          Drop me a message at
        </p>

        <p className="text-blue-400">
          shivanshuverma210901@gmail.com
        </p>

        {/* Footer */}
        <p className="text-gray-500 text-sm mt-6">
          © 2026 Tushar
        </p>

      </motion.div>

    </section>
  );
};

export default Contact;